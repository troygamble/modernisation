<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';

	let step = 0;
	const maxStep = 8; // 0..8

	function next() {
		if (step < maxStep) step += 1;
	}

	function prev() {
		if (step > 0) step -= 1;
	}

	function handleKey(event: KeyboardEvent) {
		if (event.key === 'ArrowRight' || event.key === ' ' || event.key === 'PageDown') {
			next();
		}
		if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
			prev();
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKey);
		return () => window.removeEventListener('keydown', handleKey);
	});

	$: progress = step / maxStep;
</script>

<div class="deck-root">
	<div class="deck-shell">
		<header class="deck-header">
			<div class="deck-badge">90-Day Modernisation Plan</div>
			<div>Automation · Delivery Uplift · Governance</div>
		</header>

		<main class="deck-main">
			{#if step === 0}
				<section
					in:fade={{ duration: 500 }}
					out:fade={{ duration: 200 }}
					style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;"
				>
					<div
						style="
							display:flex;
							flex-direction:column;
							height:100%;
							justify-content:center;
							max-width:900px;
							margin:0 auto;
							width:100%;
						"
					>
						<div style="font-size:0.9rem;color:var(--muted);margin-bottom:10px;">
							Opening frame
						</div>
						<div style="font-size:3.2rem;font-weight:500;letter-spacing:0.02em;margin-bottom:18px;">
							Stabilise. Modernise. <span style="color:var(--accent);">Monetise.</span>
						</div>
						<div style="font-size:1.05rem;line-height:1.6;color:var(--muted);max-width:640px;">
							The purpose of this 90-day plan is to stabilise delivery, remove internal friction, uplift
							our capability, and build the foundations of a modern, scalable technology company. These
							outcomes cannot be achieved through normal processes, because the problems we are solving
							are the result of those processes.
						</div>
					</div>
				</section>
			{/if}

			{#if step === 1}
				<section
					in:fly={{ y: 30, duration: 420 }}
					out:fade={{ duration: 220 }}
					style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;"
				>
					<div style="max-width:1040px;margin:0 auto;width:100%;">
						<div style="display:flex;gap:36px;">
						<div style="flex:1.2;">
							<div style="font-size:0.85rem;color:var(--muted);margin-bottom:10px;">System state</div>
							<div style="font-size:2.2rem;font-weight:500;margin-bottom:14px;">
								Why the system cannot self-correct
							</div>
							<p style="color:var(--muted);line-height:1.6;margin-top:0;">
								Delivery, systems, projects, and sales operate as separate lanes. Ownership is
								fragmented. Handoffs are slow, and governance is reactive. The current structure is
								optimised for BAU, not transformation.
							</p>
							<ul style="margin-top:12px;color:var(--muted);line-height:1.7;">
								<li>Fragmented ownership across functions and tools</li>
								<li>No single point of accountability for cross-functional change</li>
								<li>Normal processes introduce delays and context switching</li>
								<li>Systems governance and delivery governance are misaligned</li>
							</ul>
						</div>
						<div
							style="
								flex:1;
								border-radius:var(--radius-xl);
								background:radial-gradient(circle at top left,#26263d,#0b0b13);
								padding:24px;
								box-shadow:var(--shadow-soft);
								position:relative;
							"
						>
							<div
								style="
									position:absolute;
									inset:0;
									border-radius:inherit;
									border:1px solid rgba(255,255,255,0.06);
									pointer-events:none;
								"
							></div>
							<div style="font-size:0.8rem;color:var(--muted);margin-bottom:12px;">Current flow</div>
							<div
								style="
									display:grid;
									grid-template-columns:repeat(4,1fr);
									gap:12px;
									font-size:0.75rem;
								"
							>
								<div style="padding:10px;border-radius:12px;background:#141422;">
									Service Desk
									<div style="color:var(--muted);margin-top:6px;">Tickets · noise · urgency</div>
								</div>
								<div style="padding:10px;border-radius:12px;background:#141422;">
									Projects
									<div style="color:var(--muted);margin-top:6px;">Scope · change · slippage</div>
								</div>
								<div style="padding:10px;border-radius:12px;background:#141422;">
									Systems
									<div style="color:var(--muted);margin-top:6px;">Releases · risk · maintenance</div>
								</div>
								<div style="padding:10px;border-radius:12px;background:#141422;">
									Sales
									<div style="color:var(--muted);margin-top:6px;">Promises · demand · pressure</div>
								</div>
							</div>
							<div style="margin-top:14px;font-size:0.78rem;color:var(--muted);">
								Between these boxes sit manual handoffs, unclear ownership, and invisible rework. This
								is where modernisation lives.
							</div>
						</div>
					</div>
					</div>
				</section>
			{/if}

			{#if step === 2}
				<section
					in:slide={{ duration: 420 }}
					out:fade={{ duration: 220 }}
					style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;"
				>
					<div style="max-width:1040px;margin:0 auto;width:100%;">
						<div style="font-size:0.85rem;color:var(--muted);margin-bottom:10px;">
							Structural answer
						</div>
						<div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:22px;">
							<div style="font-size:2.3rem;font-weight:500;">Three pillars, one mandate</div>
							<div style="font-size:0.85rem;color:var(--muted);">
								Everything in the 90-day plan rolls into one of these.
							</div>
						</div>

						<div
							style="
								display:grid;
								grid-template-columns:repeat(3,minmax(0,1fr));
								gap:18px;
							"
						>
							<div
								style="
									border-radius:var(--radius-lg);
									background:linear-gradient(145deg,#10101a,#0a0a11);
									border:1px solid var(--border-subtle);
									padding:var(--pad-card);
									box-shadow:var(--shadow-soft);
								"
							>
								<div style="font-size:0.8rem;color:var(--muted);text-transform:uppercase;letter-spacing:0.16em;">
									Pillar 1
								</div>
								<div style="font-size:1.4rem;font-weight:500;margin:8px 0 6px;">
									Delivery governance &amp; PMO uplift
								</div>
								<div style="font-size:0.96rem;color:var(--muted);margin-bottom:10px;">
									Stabilise the engine room.
								</div>
								<ul style="font-size:0.86rem;color:var(--muted);line-height:1.7;padding-left:18px;">
									<li>Standardised PMO templates and cadence</li>
									<li>Clear ownership and RACI across functions</li>
									<li>Executive-level priority framework</li>
								</ul>
							</div>

							<div
								style="
									border-radius:var(--radius-lg);
									background:linear-gradient(145deg,#0f141b,#081016);
									border:1px solid var(--accent-soft);
									padding:var(--pad-card);
									box-shadow:var(--shadow-soft);
								"
							>
								<div style="font-size:0.8rem;color:var(--muted);text-transform:uppercase;letter-spacing:0.16em;">
									Pillar 2
								</div>
								<div style="font-size:1.4rem;font-weight:500;margin:8px 0 6px;">
									Automation &amp; workflow modernisation
								</div>
								<div style="font-size:0.96rem;color:var(--muted);margin-bottom:10px;">
									Increase organisational capacity without increasing headcount.
								</div>
								<ul style="font-size:0.86rem;color:var(--muted);line-height:1.7;padding-left:18px;">
									<li>Halo triage, comms templates, reporting</li>
									<li>Cross-functional workflow redesign</li>
									<li>Measurable reductions in cycle time and MTTR</li>
								</ul>
							</div>

							<div
								style="
									border-radius:var(--radius-lg);
									background:linear-gradient(145deg,#101018,#120d16);
									border:1px solid var(--border-subtle);
									padding:var(--pad-card);
									box-shadow:var(--shadow-soft);
								"
							>
								<div style="font-size:0.8rem;color:var(--muted);text-transform:uppercase;letter-spacing:0.16em;">
									Pillar 3
								</div>
								<div style="font-size:1.4rem;font-weight:500;margin:8px 0 6px;">
									Commercialisation of automation &amp; AI
								</div>
								<div style="font-size:0.96rem;color:var(--muted);margin-bottom:10px;">
									Create new high-margin revenue streams once internal capability exists.
								</div>
								<ul style="font-size:0.86rem;color:var(--muted);line-height:1.7;padding-left:18px;">
									<li>SMB automation offering ready for market</li>
									<li>Co-Pilot Studio integration patterns</li>
									<li>1–2 pilot customers in-flight</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			{/if}

			{#if step === 3}
				<section
					in:fade={{ duration: 420 }}
					out:fade={{ duration: 220 }}
					style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;"
				>
					<div style="max-width:1040px;margin:0 auto;width:100%;">
						<div style="font-size:0.85rem;color:var(--muted);margin-bottom:10px;">Phase 1 · 0–30 days</div>
						<div style="display:flex;gap:40px;">
							<div style="flex:1.1;">
								<div style="font-size:2rem;font-weight:500;margin-bottom:12px;">
									Rapid discovery &amp; baseline overhaul
								</div>
								<p style="color:var(--muted);line-height:1.6;">
									This phase gives us visibility and control. Right now, we lack both.
								</p>
								<ul style="margin-top:10px;color:var(--muted);line-height:1.7;">
									<li>Map processes across Service Desk, Projects, Systems, Sales</li>
									<li>Identify SPOF, delays, handoff failures, and hidden workload</li>
									<li>Define executive-level priority framework</li>
									<li>Establish PMO standards and weekly delivery cadence</li>
									<li>Begin automation quick-wins (Halo triage, comms, reports)</li>
								</ul>
							</div>
							<div
								style="
									flex:0.9;
									border-radius:var(--radius-xl);
									background:linear-gradient(145deg,#10101a,#050509);
									border:1px solid var(--border-subtle);
									padding:22px;
									box-shadow:var(--shadow-soft);
									display:flex;
									flex-direction:column;
									justify-content:space-between;
								"
							>
								<div>
									<div style="font-size:0.78rem;color:var(--muted);text-transform:uppercase;letter-spacing:0.16em;">
										Deliverables
									</div>
									<ul style="margin-top:10px;font-size:0.86rem;color:var(--muted);line-height:1.8;">
										<li>Lean “as-is” process maps</li>
										<li>Prioritised improvement backlog</li>
										<li>Standardised PMO templates and governance layer</li>
										<li>First automation deployed as symbolic win</li>
									</ul>
								</div>
								<div
									style="
										margin-top:18px;
										font-size:0.78rem;
										color:var(--muted);
										border-top:1px solid rgba(255,255,255,0.06);
										padding-top:10px;
									"
								>
									Signal to leadership: discovery and delivery discipline are now one motion, not two
									separate conversations.
								</div>
							</div>
						</div>
					</div>
				</section>
			{/if}

			{#if step === 4}
				<section
					in:fade={{ duration: 420 }}
					out:fade={{ duration: 220 }}
					style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;"
				>
					<div style="max-width:1040px;margin:0 auto;width:100%;">
						<div style="font-size:0.85rem;color:var(--muted);margin-bottom:10px;">Phase 2 · 30–60 days</div>
						<div style="display:flex;gap:40px;">
							<div
								style="
									flex:1;
									border-radius:var(--radius-xl);
									background:linear-gradient(145deg,#0d141e,#050509);
									border:1px solid var(--border-subtle);
									padding:22px;
									box-shadow:var(--shadow-soft);
								"
							>
								<div style="font-size:2rem;font-weight:500;margin-bottom:10px;">
									Execution layer
								</div>
								<p style="color:var(--muted);line-height:1.6;">
									Optimisation is not theoretical. It must be operationalised.
								</p>
								<ul style="margin-top:12px;color:var(--muted);line-height:1.8;font-size:0.92rem;">
									<li>Fix handoff flows between SD, projects, systems, and sales</li>
									<li>Address highest-value automation targets</li>
									<li>Remove bottlenecks: approvals, release cycles, unclear ownership</li>
									<li>
										Stand up cross-functional visibility board and start measuring cycle time, MTTR,
										delivery lag, SLA alignment
									</li>
									<li>Set reporting rhythm to Kevin &amp; James</li>
								</ul>
							</div>
							<div style="flex:0.9;display:flex;flex-direction:column;gap:14px;">
								<div
									style="
										border-radius:18px;
										background:rgba(7,18,20,0.95);
										border:1px solid var(--accent-soft);
										padding:16px 18px;
									"
								>
									<div style="font-size:0.8rem;color:var(--accent-strong);margin-bottom:6px;">
										Automation wave
									</div>
									<div style="font-size:0.9rem;color:var(--muted);line-height:1.6;">
										4–8 automations live in Halo and adjacent systems, removing recurring manual
										work from overloaded staff.
									</div>
								</div>
								<div
									style="
										border-radius:18px;
										background:#0a0a12;
										border:1px solid var(--border-subtle);
										padding:16px 18px;
									"
								>
									<div style="font-size:0.8rem;color:var(--muted);margin-bottom:6px;">
										Executive view
									</div>
									<div style="font-size:0.9rem;color:var(--muted);line-height:1.6;">
										Executive delivery dashboard online, showing lag, risk, and efficiency gains
										at-a-glance.
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			{/if}

			{#if step === 5}
				<section
					in:fade={{ duration: 420 }}
					out:fade={{ duration: 220 }}
					style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;"
				>
					<div style="max-width:1040px;margin:0 auto;width:100%;">
						<div style="font-size:0.85rem;color:var(--muted);margin-bottom:10px;">Phase 3 · 60–90 days</div>
						<div style="display:flex;gap:40px;">
							<div style="flex:1.1;">
								<div style="font-size:2rem;font-weight:500;margin-bottom:10px;">
									Capability &amp; commercialisation
								</div>
								<p style="color:var(--muted);line-height:1.6;">
									Internal capability becomes external value.
								</p>
								<ul style="margin-top:12px;color:var(--muted);line-height:1.8;font-size:0.92rem;">
									<li>Internal automation and modernisation function fully operational</li>
									<li>Market-ready SMB automation offering defined and packaged</li>
									<li>
										Discovery → workflow mapping → Co-Pilot Studio integration → custom automation
										→ support
									</li>
									<li>1–2 pilot customers undergoing scoping</li>
									<li>
										Full report to MD + HCE on delivery, efficiency gains, and commercial roadmap
									</li>
								</ul>
							</div>
							<div
								style="
									flex:0.9;
									border-radius:var(--radius-xl);
									background:radial-gradient(circle at top,#242437,#090912);
									border:1px solid var(--border-subtle);
									padding:22px;
									box-shadow:var(--shadow-soft);
								"
							>
								<div style="font-size:0.78rem;color:var(--muted);text-transform:uppercase;letter-spacing:0.16em;">
									Customer journey snapshot
								</div>
								<ol style="margin-top:12px;color:var(--muted);font-size:0.88rem;line-height:1.8;">
									<li>Bendigo-style customer → friction around delivery and visibility</li>
									<li>Structured discovery and workflow mapping</li>
									<li>Automation + Co-Pilot deployment</li>
									<li>Measured reduction in noise and cycle time</li>
									<li>Reference case that positions us as modern partner</li>
								</ol>
							</div>
						</div>
					</div>
				</section>
			{/if}

			{#if step === 6}
				<section
					in:slide={{ duration: 420 }}
					out:fade={{ duration: 220 }}
					style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;"
				>
					<div style="max-width:1040px;margin:0 auto;width:100%;">
						<div style="font-size:0.85rem;color:var(--muted);margin-bottom:10px;">
							Why normal processes cannot do this
						</div>
						<div style="display:grid;grid-template-columns:2fr 1.3fr;gap:32px;">
							<div>
								<div style="font-size:2rem;font-weight:500;margin-bottom:10px;">
									BAU protects the current pattern
								</div>
								<ul style="margin-top:12px;color:var(--muted);line-height:1.9;font-size:0.94rem;">
									<li>Normal processes are optimised for BAU, not transformation.</li>
									<li>
										Ownership is fragmented across roles with conflicting priorities and incentives.
									</li>
									<li>No single point of accountability for cross-functional change.</li>
									<li>Systems management and delivery governance are misaligned.</li>
									<li>
										Process mapping and automation require authority over workflows, not just
										ownership of systems.
									</li>
									<li>
										Internal modernisation requires someone whose full remit is uplift, not
										maintenance.
									</li>
								</ul>
							</div>
							<div
								style="
									border-radius:var(--radius-lg);
									background:#0a0a12;
									border:1px solid var(--border-subtle);
									padding:20px;
									box-shadow:var(--shadow-soft);
									font-size:0.9rem;
									color:var(--muted);
									display:flex;
									flex-direction:column;
									justify-content:space-between;
								"
							>
								<div>
									<div style="font-size:0.78rem;text-transform:uppercase;letter-spacing:0.16em;margin-bottom:6px;">
										Mandate logic
									</div>
									<div>
										The mandate you are asking for is a safeguard, not a power grab. It exists to
										resolve cross-functional problems that no single BAU owner is structurally able
										to solve.
									</div>
								</div>
								<div
									style="
										margin-top:16px;
										padding-top:10px;
										border-top:1px solid rgba(255,255,255,0.06);
									"
								>
									<div style="font-size:0.78rem;color:var(--muted);">
										This is how you justify the mandate without insulting anyone.
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			{/if}

			{#if step === 7}
				<section
					in:fade={{ duration: 420 }}
					out:fade={{ duration: 220 }}
					style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;"
				>
					<div style="max-width:900px;margin:0 auto;width:100%;">
						<div style="font-size:0.85rem;color:var(--muted);margin-bottom:10px;">
							Resource request – simple and non-negotiable
						</div>
						<div style="font-size:2rem;font-weight:500;margin-bottom:16px;">
							What we need to execute
						</div>
						<div
							style="
								display:grid;
								grid-template-columns:repeat(2,minmax(0,1fr));
								gap:26px;
								font-size:0.94rem;
								color:var(--muted);
							"
						>
							<div>
								<div style="font-size:0.8rem;text-transform:uppercase;letter-spacing:0.16em;margin-bottom:6px;">
									Request
								</div>
								<ul style="line-height:1.9;">
									<li>Admin access to Halo, MSPbots, and relevant systems</li>
									<li>Dylan for a defined number of hours per week</li>
									<li>Sponsorship from Kevin &amp; James</li>
									<li>
										Authority to run cross-functional discovery and set workflow standards
									</li>
									<li>Direct reporting line to MD for automation &amp; governance decisions</li>
								</ul>
							</div>
							<div>
								<div style="font-size:0.8rem;text-transform:uppercase;letter-spacing:0.16em;margin-bottom:6px;">
									You are not asking for
								</div>
								<ul style="line-height:1.9;">
									<li>No additional headcount</li>
									<li>No extra budget line today</li>
									<li>No title change today</li>
									<li>No permanent carve-out beyond the 90-day mandate</li>
								</ul>
								<div style="margin-top:12px;font-size:0.84rem;color:var(--muted);">
									This frames the plan as low-risk and high-leverage.
								</div>
							</div>
						</div>
					</div>
				</section>
			{/if}

			{#if step === 8}
				<section
					in:fade={{ duration: 500 }}
					out:fade={{ duration: 220 }}
					style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;"
				>
					<div
						style="
							display:flex;
							flex-direction:column;
							align-items:flex-start;
							justify-content:center;
							height:100%;
							max-width:900px;
							margin:0 auto;
							width:100%;
						"
					>
						<div style="font-size:0.9rem;color:var(--muted);margin-bottom:10px;">Close</div>
						<div style="font-size:2.4rem;font-weight:500;margin-bottom:20px;">
							Two paths.
						</div>
						<div style="display:flex;flex-direction:column;gap:14px;font-size:1.02rem;">
							<div>
								<span style="opacity:0.6;">1.</span> Continue operating in the current pattern and keep
								absorbing inefficiencies.
							</div>
							<div>
								<span style="opacity:0.6;">2.</span> Lead the region by becoming the modern technology
								partner customers assume we already are.
							</div>
						</div>
						<div style="margin-top:26px;font-size:1.05rem;color:var(--muted);max-width:620px;">
							The Bendigo Stadium meeting showed the gap clearly, and also showed the opportunity. This
							90-day plan closes that gap.
						</div>
						<div
							style="
								margin-top:32px;
								padding:12px 18px;
								border-radius:var(--radius-pill);
								border:1px solid var(--accent-soft);
								background:rgba(8,24,20,0.85);
								color:var(--accent-strong);
								font-size:0.9rem;
							"
						>
							You hired me for exactly this moment. Let me do what you hired me for.
						</div>
					</div>
				</section>
			{/if}
		</main>

		<footer class="deck-footer">
			<div>Step {step} / {maxStep}</div>
			<div class="deck-actions">
				<button class="deck-btn" on:click={prev} disabled={step === 0}>
					<span>Back</span>
				</button>
				<button class="deck-btn primary" on:click={next} disabled={step === maxStep}>
					<span>{step === maxStep ? 'End' : 'Next'}</span>
				</button>
			</div>
		</footer>

		<div class="deck-progress">
			<div class="deck-progress-inner" style={`transform:scaleX(${progress});`}></div>
		</div>
	</div>
</div>
