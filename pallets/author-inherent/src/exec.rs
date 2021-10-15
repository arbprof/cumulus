// Copyright 2021 Parity Technologies (UK) Ltd.
// This file is part of Cumulus.

// Cumulus is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Cumulus is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Cumulus.  If not, see <http://www.gnu.org/licenses/>.

//! Block executive to be used by relay chain validators when validating parachain blocks built
//! with the nimubs consensus family.

use frame_support::traits::ExecuteBlock;
use sp_api::{BlockT, HeaderT};
// For some reason I can't get these logs to actually print
use log::debug;
use nimbus_primitives::{NimbusId, NimbusSignature, NIMBUS_ENGINE_ID};
use sp_application_crypto::{Public as _, TryFrom};
use sp_runtime::{generic::DigestItem, RuntimeAppPublic};

/// Block executive to be used by relay chain validators when validating parachain blocks built
/// with the nimubs consensus family.
///
/// This will strip the seal digest, and confirm that it contains a valid signature
/// By the block author reported in the author inherent.
///
/// Essentially this contains the logic of the verifier plus the inner executive.
/// TODO Degisn improvement:
/// Can we share code with the verifier?
/// Can this struct take a verifier as an associated type?
/// Or maybe this will just get simpler in general when https://github.com/paritytech/polkadot/issues/2888 lands
pub struct BlockExecutor<T, I>(sp_std::marker::PhantomData<(T, I)>);

impl<Block, T, I> ExecuteBlock<Block> for BlockExecutor<T, I>
where
	Block: BlockT,
	I: ExecuteBlock<Block>,
{
	fn execute_block(block: Block) {
		let (mut header, extrinsics) = block.deconstruct();

		debug!(target: "executive", "In hacked Executive. Initial digests are {:?}", header.digest());

		// Set the seal aside for checking.
		let seal = header
			.digest_mut()
			.logs
			.pop()
			.expect("Seal digest is present and is last item");

		debug!(target: "executive", "In hacked Executive. digests after stripping {:?}", header.digest());
		debug!(target: "executive", "The seal we got {:?}", seal);

		let sig = match seal {
			DigestItem::Seal(id, ref sig) if id == NIMBUS_ENGINE_ID => sig.clone(),
			_ => panic!("HeaderUnsealed"),
		};

		debug!(target: "executive", "🪲 Header hash after popping digest {:?}", header.hash());

		debug!(target: "executive", "🪲 Signature according to executive is {:?}", sig);

		// Grab the digest from the runtime
		//TODO use the CompatibleDigest trait. Maybe this code should move to the trait.
		let consensus_digest = header
			.digest()
			.logs
			.iter()
			.find(|digest| {
				match *digest {
					DigestItem::Consensus(id, _) if id == &NIMBUS_ENGINE_ID => true,
					_ => false,
				}
			})
			.expect("A single consensus digest should be added by the runtime when executing the author inherent.");

		let claimed_author = match *consensus_digest {
			DigestItem::Consensus(id, ref author_id) if id == NIMBUS_ENGINE_ID => author_id.clone(),
			_ => panic!("Expected consensus digest to contains author id bytes"),
		};

		debug!(target: "executive", "🪲 Claimed Author according to executive is {:?}", claimed_author);

		// Verify the signature
		let valid_signature = NimbusId::from_slice(&claimed_author).verify(
			&header.hash(),
			&NimbusSignature::try_from(sig).expect("Bytes should convert to signature correctly"),
		);

		debug!(target: "executive", "🪲 Valid signature? {:?}", valid_signature);

		if !valid_signature {
			panic!("Block signature invalid");
		}

		// Now that we've verified the signature, hand execution off to the inner executor
		// which is probably the normal frame executive.
		I::execute_block(Block::new(header, extrinsics));
	}
}
