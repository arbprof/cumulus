(function() {var implementors = {};
implementors["cumulus_client_consensus_aura"] = [{"text":"impl&lt;B, RClient, RBackend, CIDP&gt; <a class=\"trait\" href=\"cumulus_client_consensus_common/trait.ParachainConsensus.html\" title=\"trait cumulus_client_consensus_common::ParachainConsensus\">ParachainConsensus</a>&lt;B&gt; for <a class=\"struct\" href=\"cumulus_client_consensus_aura/struct.AuraConsensus.html\" title=\"struct cumulus_client_consensus_aura::AuraConsensus\">AuraConsensus</a>&lt;B, RClient, RBackend, CIDP&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: BlockT,<br>&nbsp;&nbsp;&nbsp;&nbsp;RClient: ProvideRuntimeApi&lt;PBlock&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;RClient::Api: ParachainHost&lt;PBlock&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;RBackend: Backend&lt;PBlock&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;CIDP: CreateInherentDataProviders&lt;B, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.tuple.html\">(</a>PHash, PersistedValidationData<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.tuple.html\">)</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;CIDP::InherentDataProviders: <a class=\"trait\" href=\"cumulus_client_consensus_aura/trait.InherentDataProviderExt.html\" title=\"trait cumulus_client_consensus_aura::InherentDataProviderExt\">InherentDataProviderExt</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":false,"types":["cumulus_client_consensus_aura::AuraConsensus"]}];
implementors["cumulus_client_consensus_common"] = [];
implementors["cumulus_client_consensus_relay_chain"] = [{"text":"impl&lt;B, PF, BI, RClient, RBackend, CIDP&gt; <a class=\"trait\" href=\"cumulus_client_consensus_common/trait.ParachainConsensus.html\" title=\"trait cumulus_client_consensus_common::ParachainConsensus\">ParachainConsensus</a>&lt;B&gt; for <a class=\"struct\" href=\"cumulus_client_consensus_relay_chain/struct.RelayChainConsensus.html\" title=\"struct cumulus_client_consensus_relay_chain::RelayChainConsensus\">RelayChainConsensus</a>&lt;B, PF, BI, RClient, RBackend, CIDP&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: BlockT,<br>&nbsp;&nbsp;&nbsp;&nbsp;RClient: ProvideRuntimeApi&lt;PBlock&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;RClient::Api: ParachainHost&lt;PBlock&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;RBackend: Backend&lt;PBlock&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;BI: BlockImport&lt;B&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;PF: Environment&lt;B&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;PF::Proposer: Proposer&lt;B, Transaction = BI::Transaction, ProofRecording = EnableProofRecording, Proof = &lt;EnableProofRecording as ProofRecording&gt;::Proof&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;CIDP: CreateInherentDataProviders&lt;B, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.tuple.html\">(</a>PHash, PersistedValidationData<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.tuple.html\">)</a>&gt;,&nbsp;</span>","synthetic":false,"types":["cumulus_client_consensus_relay_chain::RelayChainConsensus"]}];
implementors["polkadot_collator"] = [{"text":"impl&lt;Client&gt; <a class=\"trait\" href=\"cumulus_client_consensus_common/trait.ParachainConsensus.html\" title=\"trait cumulus_client_consensus_common::ParachainConsensus\">ParachainConsensus</a>&lt;Block&lt;Header&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.u32.html\">u32</a>, BlakeTwo256&gt;, OpaqueExtrinsic&gt;&gt; for <a class=\"struct\" href=\"polkadot_collator/service/struct.WaitForAuraConsensus.html\" title=\"struct polkadot_collator::service::WaitForAuraConsensus\">WaitForAuraConsensus</a>&lt;Client&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Client: ProvideRuntimeApi&lt;<a class=\"type\" href=\"polkadot_collator/service/type.Block.html\" title=\"type polkadot_collator::service::Block\">Block</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Client::Api: AuraApi&lt;<a class=\"type\" href=\"polkadot_collator/service/type.Block.html\" title=\"type polkadot_collator::service::Block\">Block</a>, AuraId&gt;,&nbsp;</span>","synthetic":false,"types":["polkadot_collator::service::WaitForAuraConsensus"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()