<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import type { TransitionConfig } from 'svelte/transition';

let step = 0;
const maxStep = 13; // 0..13

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

	function grow(node: Element, { duration }: { duration: number }): TransitionConfig {
		return {
			duration,
			css: (t: number) => {
				const eased = t;
				return `
				transform-origin: left;
				transform: scaleX(${eased});
				opacity: ${eased};
			`;
			}
		};
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
			<!-- Use a key block to re-trigger the transition on step change -->
			{#key step}
				<div class="deck-shell-inner" in:fade={{ duration: 300, delay: 200 }} out:fade={{ duration: 200 }}>
					{#if step === 0}
						<section class="deck-fade deck-rise">
							<div class="deck-block">
								<div class="hero-shell">
									<div class="deck-subtle">The Mandate for Change</div>
									<div class="deck-title-xl hero-title">
										Stabilise. Modernise. <span class="accent-text">Monetise.</span>
									</div>
									<div class="deck-body-md hero-body">
										This 90-day plan stabilises delivery, removes friction, and builds the
										foundations of a modern operating model. The problems it addresses cannot be
										solved through normal processes, because they are the result of those processes.
									</div>
								</div>
							</div>
						</section>
					{/if}

{#if step === 1}
	<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
		<div class="deck-wide">
			<div class="deck-subtle">The Strategic Arc</div>
			<div class="deck-title-lg">From Legacy Provider to Modern Partner</div>
			<div class="deck-body-sm deck-mute deck-hint mb-lg">
				This 90-day plan initiates a three-phase transformation, directly aligned to our core pillars.
			</div>

			<div class="journey-flow">
				<div class="journey-node">
					<div class="journey-tag">Phase 1</div>
					<div class="journey-title">Stabilise Operations</div>
					<div class="journey-text">
						Predictable delivery, clear governance, and reduced executive noise.
					</div>
					<div class="journey-pillar-link">→ Pillar 1: Governance &amp; PMO</div>
				</div>
				<div class="journey-arrow">→</div>
				<div class="journey-node">
					<div class="journey-tag">Phase 2</div>
					<div class="journey-title">Modernise Capability</div>
					<div class="journey-text">
						Automate internal workflows to increase capacity and efficiency.
					</div>
					<div class="journey-pillar-link">→ Pillar 2: Automation</div>
				</div>
				<div class="journey-arrow">→</div>
				<div class="journey-node accent">
					<div class="journey-tag">Phase 3</div>
					<div class="journey-title">Monetise Innovation</div>
					<div class="journey-text">
						Convert internal capability into a new, high-margin revenue stream.
					</div>
					<div class="journey-pillar-link">→ Pillar 3: Commercialisation</div>
				</div>
			</div>
		</div>
	</section>
{/if}

{#if step === 2}
						<section
							in:fly={{ y: 30, duration: 420 }}
							out:fade={{ duration: 220 }}
							class="deck-abs-center"
						>
							<div class="deck-block">
								<div class="deck-wide">
									<div class="deck-subtle">System state</div>
									<div class="deck-title-lg">Why the system cannot self-correct</div>
									<p class="deck-body-lg">
										Service Delivery, Projects, Systems, and Sales operate in parallel lanes.
										Ownership is fragmented, handoffs are slow, and governance is reactive. The
										current structure is optimised for BAU, not transformation.
									</p>
									<div class="lane-grid fractured">
										<div class="lane-col">
											<div class="lane-head">Service Desk</div>
											<div class="lane-sub">Noise · urgency · manual load</div>
										</div>
										<div class="lane-col">
											<div class="lane-head">Projects</div>
											<div class="lane-sub">Scope · change · slippage</div>
										</div>
										<div class="lane-col">
											<div class="lane-head">Systems</div>
											<div class="lane-sub">Releases · risk · stability</div>
										</div>
										<div class="lane-col">
											<div class="lane-head">Commercial &amp; Quoting</div>
											<div class="lane-sub">Complex quotes · handoffs · solution design</div>
										</div>
									</div>
									<div class="lane-conclusion">
										<div class="conclusion-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
												<line x1="12" y1="9" x2="12" y2="13"></line>
												<line x1="12" y1="17" x2="12.01" y2="17"></line>
											</svg>
										</div>
										<div>
											The gaps <span class="accent-text">between</span> these lanes are where
											modernisation lives. They are currently unmanaged.
										</div>
									</div>
								</div>
							</div>
						</section>
					{/if}

{#if step === 3}
						<section
							in:slide={{ duration: 420 }}
							out:fade={{ duration: 220 }}
							class="deck-abs-center"
						>
							<div class="deck-block">
								<div class="deck-wide">
									<div class="deck-subtle">Structural answer</div>
									<div class="deck-title-lg">Three pillars, one operating model</div>
									<div class="deck-body-sm deck-mute deck-hint mb-lg">
										Every component of the 90-day plan rolls into one of these three pillars.
									</div>
									<div class="pillar-grid">
										<!-- Pillar 1 -->
										<div class="pillar-card">
											<div class="pillar-icon">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
													><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg
												>
											</div>
											<div class="pillar-tag">Pillar 1</div>
											<div class="pillar-title">Delivery governance & PMO uplift</div>
											<div class="pillar-sub">Stabilise the engine room.</div>
											<ul class="pillar-list">
												<li class="pill">Standard PMO templates and language</li>
												<li class="pill">Clear RACI and escalation paths</li>
												<li class="pill">Delivery cadence aligned to executives</li>
											</ul>
										</div>

										<!-- Pillar 2 -->
										<div class="pillar-card accent">
											<div class="pillar-icon">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
													><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg
												>
											</div>
											<div class="pillar-tag">Pillar 2</div>
											<div class="pillar-title">Automation & workflow modernisation</div>
											<div class="pillar-sub">Increase capacity without adding headcount.</div>
											<ul class="pillar-list">
												<li class="pill">Process mapping and SPOF removal</li>
												<li class="pill">Halo and adjacent system automation</li>
												<li class="pill">Measured cycle-time and noise reduction</li>
											</ul>
										</div>

										<!-- Pillar 3 -->
										<div class="pillar-card">
											<div class="pillar-icon">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
													><path d="M14 9.5a4 4 0 1 1 0 5.2" /><path d="M2 12h12" /><path
														d="m18 12 4-4"
													/><path d="m18 12 4 4" /></svg
												>
											</div>
											<div class="pillar-tag">Pillar 3</div>
											<div class="pillar-title">Commercialisation of automation & AI</div>
											<div class="pillar-sub">Convert capability into revenue.</div>
											<ul class="pillar-list">
												<li class="pill">SMB automation packages</li>
												<li class="pill">Co-pilot integration patterns</li>
												<li class="pill">Pilot customers and reference cases</li>
											</ul>
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
							class="deck-abs-center deck-fade deck-rise deck-flow-in"
						>
							<div class="deck-block">
								<div class="deck-wide">
									<div class="deck-subtle">Workflow capture</div>
									<div class="deck-title-lg">Creating a Single Source of Truth</div>
									<div class="deck-body-sm deck-mute deck-hint mb-lg">
										First, we map the territory. We can't optimise what we can't see.
									</div>

									<div class="two-col">
										<div class="col">
											<div class="mini-label">From chaos to clarity</div>
											<div class="before-after-grid">
												<!-- BEFORE STATE -->
												<div class="state-card before-state">
													<div class="state-title">Before: Ad-Hoc Delivery</div>
													<div class="flow-node-sm">Idea</div>
													<div class="flow-arrow-chaos">... ? ...</div>
													<div class="flow-node-sm">"Project"</div>
													<div class="flow-arrow-chaos">... ? ...</div>
													<div class="flow-node-sm danger">MD &amp; Execs Pulled In</div>
													<div class="flow-arrow-chaos">... ? ...</div>
													<div class="flow-node-sm">Outcome</div>
												</div>

												<!-- AFTER STATE -->
												<div class="state-card after-state">
													<div class="state-title">After: Governed Delivery</div>
													<div class="flow-node-sm">Discover</div>
													<div class="flow-arrow-clean">→</div>
													<div class="flow-node-sm">Plan</div>
													<div class="flow-arrow-clean">→</div>
													<div class="flow-node-sm accent">Program Director (You)</div>
													<div class="flow-arrow-clean">→</div>
													<div class="flow-node-sm">Execute &amp; Report</div>
												</div>
											</div>
										</div>
										<div class="col">
											<div class="mini-label">The insights we unlock</div>
											<ul class="pill-list">
												<li class="pill">Automation heatmap: Where is our time really going?</li>
												<li class="pill">Friction log: Quantify the cost of delays and rework.</li>
												<li class="pill">SPOF identification: Where is our operational risk?</li>
												<li class="pill">Tool sprawl analysis: Opportunities for consolidation and savings.</li>
											</ul>
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
				class="deck-abs-center deck-fade deck-rise deck-flow-in"
			>
				<div class="deck-block">
					<div class="deck-wide">
						<div class="deck-subtle">Pillar 1</div>
						<div class="deck-title-md">Delivery governance and PMO uplift</div>
						<div class="deck-body-sm deck-mute deck-hint mb-md">
							Giving executives strategic oversight, not operational headaches.
						</div>

					<div class="two-col">
						<div class="col">
							<div class="mini-label">Operating loop</div>
							<div class="loop-row">
								<div class="loop-node">Discover</div>
								<div class="loop-arrow">→</div>
								<div class="loop-node">Plan</div>
								<div class="loop-arrow">→</div>
								<div class="loop-node">Execute</div>
								<div class="loop-arrow">→</div>
								<div class="loop-node">Monitor</div>
								<div class="loop-arrow">→</div>
								<div class="loop-node">Close</div>
								<div class="loop-arrow">→</div>
								<div class="loop-node">Improve</div>
							</div>

							<div class="loop-grid">
								<div class="loop-item">
									<div class="loop-head">Discover</div>
									<div class="loop-text">
										Business and functional requirements. Assumptions, dependencies, constraints.
									</div>
								</div>
								<div class="loop-item">
									<div class="loop-head">Plan</div>
									<div class="loop-text">
										Scope table, RACI, RAID, schedule, communication plan.
									</div>
								</div>
								<div class="loop-item">
									<div class="loop-head">Execute</div>
									<div class="loop-text">
										Standups, risk reviews, controlled change.
									</div>
								</div>
								<div class="loop-item">
									<div class="loop-head">Monitor</div>
									<div class="loop-text">
										Scope, cost, quality, schedule tracked and visible.
									</div>
								</div>
								<div class="loop-item">
									<div class="loop-head">Close</div>
									<div class="loop-text">
										Acceptance, lessons learned, clean handover.
									</div>
								</div>
								<div class="loop-item">
									<div class="loop-head">Improve</div>
									<div class="loop-text">
										Continuous uplift backlog for methods and templates.
									</div>
								</div>
							</div>
						</div>

						<div class="col">
							<div class="mini-label">PMO assets stood up in 90 days</div>
							<ul class="pill-list">
								<li class="pill">Standard project brief and scope table for all work</li>
								<li class="pill">RACI model across Service Delivery, Systems, Projects, Sales</li>
								<li class="pill">Weekly delivery cadence and reporting format</li>
								<li class="pill">RAID log with clear ownership per risk and issue</li>
								<li class="pill">Escalation tree for scope, risk, delay and cost variance</li>
								<li class="pill">Clear reporting separating “On Track” from “Needs Executive Action”</li>
							</ul>
							<div class="deck-body-sm deck-mute deck-hint mt-md">
								The outcome is simple. Every initiative runs on the same rails. No custom one offs. No confusion about who owns what.
							</div>
						</div>
					</div>
					</div>
				</div>
			</section>
		{/if}

{#if step === 6}
			<section
				in:fade={{ duration: 420 }}
				out:fade={{ duration: 220 }}
				class="deck-abs-center deck-fade deck-rise deck-flow-in"
			>
				<div class="deck-block">
					<div class="deck-wide">
						<div class="deck-subtle">Pillar 1</div>
						<div class="deck-title-md">Governance cadence and escalation</div>

						<div class="two-col">
							<div class="col">
								<div class="mini-label">Cadence</div>
								<div class="cadence-card">
									<div class="cadence-section">
										<div class="cadence-label">Weekly</div>
										<ul class="pill-list">
											<li class="pill">Delivery standup for projects, systems, and service delivery</li>
											<li class="pill">Risk and blocker review</li>
										</ul>
									</div>
									<div class="cadence-section">
										<div class="cadence-label">Fortnightly</div>
										<ul class="pill-list">
											<li class="pill">PMO governance board</li>
											<li class="pill">Cross functional workflow review</li>
										</ul>
									</div>
									<div class="cadence-section">
										<div class="cadence-label">Monthly</div>
										<ul class="pill-list">
											<li class="pill">Portfolio health and resource forecast</li>
											<li class="pill">Automation and efficiency report to MD and HCE</li>
										</ul>
									</div>
								</div>
							</div>

							<div class="col">
								<div class="esc-card">
									<div class="esc-card-head">Escalation hierarchy</div>
									<div class="esc-card-body">
										<div class="esc-stack">
											<div class="esc-node">Service and project teams</div>
											<div class="esc-arrow">↑</div>
											<div class="esc-node">Project Manager</div>
											<div class="esc-arrow">↑</div>
											<div class="esc-node accent">Program Director – Automation and Modernisation</div>
											<div class="esc-arrow">↑</div>
											<div class="esc-node">Head of Customer Experience</div>
											<div class="esc-arrow">↑</div>
											<div class="esc-node">Managing Director</div>
										</div>
									</div>
								</div>
								<div class="deck-body-sm deck-mute deck-hint mt-sm">
									Escalation triggers only on scope deviation, timeline breach, material risk, or significant cost variance. Everything else is handled inside the operating model.
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
				class="deck-abs-center deck-fade deck-rise deck-flow-in"
			>
				<div class="deck-block">
					<div class="deck-wide">
						<div class="deck-subtle">Portfolio control</div>
						<div class="deck-title-md">Aligning all in-flight work</div>
						<div class="deck-body-sm deck-mute deck-hint mb-md">
							From siloed efforts to a strategic portfolio.
						</div>

						<div class="kanban-board">
							{#each [
								{
									title: 'Backlog',
									cards: ['Halo categorisation', 'Service workflow diagnostics']
								},
								{
									title: 'Prioritised (Exec Review)',
									cards: ['CTApps decommission', 'New reporting dashboard']
								},
								{
									title: 'In Progress',
									cards: ['Internal AI bot pilot', 'Automation quick wins']
								},
								{
									title: 'Done',
									cards: ['Ticket noise analysis']
								}
							] as column}
								<div class="kanban-column">
									<div class="kanban-head">{column.title}</div>
									<ul class="pill-list">
										{#each column.cards as card}
											<li class="pill">{card}</li>
										{/each}
									</ul>
								</div>
							{/each}
						</div>

						<div class="deck-body-sm deck-mute deck-hint mt-md max-width-md">
							A single, visible board for every internal initiative. We focus resources on
							executive priorities and stop duplicated work before it starts.
						</div>
					</div>
				</div>
			</section>
		{/if}

{#if step === 8}
			<section
				in:fade={{ duration: 420 }}
				out:fade={{ duration: 220 }}
				class="deck-abs-center deck-fade deck-rise deck-flow-in"
			>
				<div class="deck-block">
					<div class="deck-wide">
						<div class="deck-subtle">Pillar 3</div>
						<div class="deck-title-md">Commercialisation of automation and AI</div>
						<div class="deck-body-sm deck-mute deck-hint mb-lg">
							We monetise our own modernisation. We sell what we've mastered.
						</div>

						<div class="commercial-flow">
							<!-- Step 1 -->
							<div class="flow-card">
								<div class="flow-card-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path
											d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"
										></path>
										<line x1="8" y1="12" x2="16" y2="12"></line>
									</svg>
								</div>
								<div class="flow-card-title">1. Build Internally</div>
								<div class="flow-card-text">
									Use our own operations as the lab. Create repeatable automation patterns and
									document measurable gains.
								</div>
							</div>

							<div class="flow-arrow-large">→</div>

							<!-- Step 2 -->
							<div class="flow-card">
								<div class="flow-card-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path
											d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
										></path>
										<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
										<line x1="12" y1="22.08" x2="12" y2="12"></line>
									</svg>
								</div>
								<div class="flow-card-title">2. Package the Offering</div>
								<div class="flow-card-text">
									Create a high-margin Professional Services product for SMBs. Target pilot customers
									from our existing base.
								</div>
							</div>

							<div class="flow-arrow-large">→</div>

							<!-- Step 3 -->
							<div class="flow-card accent">
								<div class="flow-card-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<line x1="12" y1="1" x2="12" y2="23"></line>
										<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
									</svg>
								</div>
								<div class="flow-card-title">3. Generate New Revenue</div>
								<div class="flow-card-text">
									Unlock a ~$700k revenue stream and elevate the company's brand to a modern technology
									leader.
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		{/if}

{#if step === 9}
			<section
				in:fade={{ duration: 420 }}
				out:fade={{ duration: 220 }}
				class="deck-abs-center deck-fade deck-rise deck-flow-in"
			>
				<div class="deck-block">
					<div class="deck-wide">
						<div class="deck-subtle">Pillar 2</div>
						<div class="deck-title-md">Where we start and how we align work</div>

						<div class="two-col">
							<div class="col">
								<div class="mini-label">Automation opportunity heatmap</div>
								<div class="heatmap">
									<div class="heat-header">
										<div></div>
										<div>Manual hours</div>
										<div>Errors</div>
										<div>Delays</div>
										<div>Complaints</div>
									</div>
									<div class="heat-row">
										<div class="heat-label">Service Delivery</div>
										<div class="heat-cell heat-high"></div>
										<div class="heat-cell heat-med"></div>
										<div class="heat-cell heat-high"></div>
										<div class="heat-cell heat-high"></div>
									</div>
									<div class="heat-row">
										<div class="heat-label">Systems</div>
										<div class="heat-cell heat-med"></div>
										<div class="heat-cell heat-med"></div>
										<div class="heat-cell heat-med"></div>
										<div class="heat-cell heat-low"></div>
									</div>
									<div class="heat-row">
										<div class="heat-label">Projects</div>
										<div class="heat-cell heat-med"></div>
										<div class="heat-cell heat-low"></div>
										<div class="heat-cell heat-med"></div>
										<div class="heat-cell heat-med"></div>
									</div>
									<div class="heat-row">
										<div class="heat-label">Commercial &amp; Quoting</div>
										<div class="heat-cell heat-low"></div>
										<div class="heat-cell heat-low"></div>
										<div class="heat-cell heat-med"></div>
										<div class="heat-cell heat-med"></div>
									</div>
								</div>
								<div class="deck-body-sm deck-mute deck-hint mt-sm">
									We start where pain and impact are highest, not where it is easiest.
								</div>
							</div>

							<div class="col">
								<div class="mini-label">Champions and in flight initiatives</div>
								<ul class="pill-list">
									<li class="pill">Nominate champions per function to own process maps and improvements.</li>
									<li class="pill">Create a single in flight initiative board across internal and customer work.</li>
									<li class="pill">Align initiatives to executive strategy and actual resource capacity.</li>
									<li class="pill">Ensure cross functional input on all work that cuts across teams.</li>
								</ul>
								<div class="deck-body-sm deck-mute deck-hint mt-sm">
									This is how we stop changes in Halo and other systems being run in isolation.
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		{/if}

{#if step === 10}
			<section
				in:fade={{ duration: 420 }}
				out:fade={{ duration: 220 }}
				class="deck-abs-center deck-fade deck-rise deck-flow-in"
			>
				<div class="deck-block">
					<div class="deck-wide">
						<div class="deck-subtle">Pillar 3</div>
						<div class="deck-title-md">Commercialisation of automation and AI</div>

						<div class="two-col">
							<div class="col">
								<div class="mini-label">Internal first</div>
								<ul class="pill-list">
									<li class="pill">Establish repeatable patterns from our own internal workflows.</li>
									<li class="pill">Document the engagement model. Discovery, mapping, build, support.</li>
									<li class="pill">Produce one or two internal case studies with measurable gains.</li>
								</ul>
							</div>
							<div class="col">
								<div class="mini-label">Then external</div>
								<ul class="pill-list">
									<li class="pill">Package an SMB automation offering for existing business customers.</li>
									<li class="pill">Use co pilot, integrations, and workflow automation as premium services.</li>
									<li class="pill">Target one or two pilot customers by the end of the 90 days.</li>
								</ul>
								<div class="deck-body-sm deck-mute deck-hint mt-sm">
									We do not try to sell what we have not done ourselves. This plan ensures we build the capability and the story before we scale it.
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		{/if}

{#if step === 11}
						<section
							in:fade={{ duration: 420 }}
							out:fade={{ duration: 220 }}
							class="deck-abs-center"
						>
							<div class="deck-block">
								<div class="deck-wide">
									<div class="deck-subtle">Mandate logic</div>
									<div class="deck-title-md">Why this requires a dedicated mandate</div>

									<div class="two-col-uneven">
										<div class="col">
											<ul class="pill-list">
												<li class="pill">
													Normal processes are optimised for BAU, not cross-functional change.
												</li>
												<li class="pill">
													Ownership is fragmented across roles with competing priorities.
												</li>
												<li class="pill">
													No single point of accountability for end-to-end workflows.
												</li>
												<li class="pill">
													System owners focus on stability, not organisational design.
												</li>
												<li class="pill">
													Automation and modernisation need authority that spans functions.
												</li>
											</ul>
										</div>
										<div class="col">
											<div class="mandate-quote-card">
												This mandate isn't about control. It's about having the authority to
												resolve systemic problems that no single department is structured to fix.
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					{/if}

{#if step === 12}
	<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
		<div class="deck-wide">
			<div class="deck-subtle">The Decision Point</div>
			<div class="deck-title-lg">The Crossroads: Two Paths Forward</div>

			<div class="two-paths">
				<div class="path-card old-path">
					<div class="path-title">Continue the Current Path</div>
					<ul class="pill-list">
						<li class="pill danger">Absorb ongoing inefficiencies</li>
						<li class="pill danger">Reinforce legacy perception</li>
						<li class="pill danger">React to the market</li>
						<li class="pill danger">Suffer margin erosion</li>
					</ul>
				</div>
				<div class="path-card new-path">
					<div class="path-title">Take the Modern Path</div>
					<ul class="pill-list">
						<li class="pill">Build new capacity</li>
						<li class="pill">Become a technology leader</li>
						<li class="pill">Define the market for our customers</li>
						<li class="pill">Create new revenue streams</li>
					</ul>
				</div>
			</div>
			<div
				class="mandate-quote-card mt-lg"
				style="text-align: center; max-width: 800px; margin-left: auto; margin-right: auto; font-style: normal; font-size: 1.2rem;"
			>
				"We need to be the company we want to help others become."
			</div>
		</div>
	</section>
{/if}

{#if step === 13}
						<section
							in:fade={{ duration: 500 }}
							out:fade={{ duration: 220 }}
							class="deck-abs-center"
						>
							<div class="deck-block">
								<div class="deck-wide">
									<div class="deck-subtle">Decision frame</div>
									<div class="deck-title-xl">90-day mandate and what it unlocks</div>

									<div class="two-col">
										<div class="col">
											<div class="mini-label">What I am asking for</div>
											<ul class="pill-list">
												{#each [
													'Admin access to Halo, MSPbots, and relevant automation tools.',
													'Dylan for a defined allocation of time each week.',
													'Authority to run cross functional workflow discovery and set standards.',
													'A 90 day mandate, reporting directly to the MD for automation and governance decisions.'
												] as item, i}
													<li
														class="pill pill-strong"
														in:fly={{ y: 10, duration: 400, delay: 200 + i * 100 }}
														out:fade={{ duration: 150 }}
													>
														{item}
													</li>
												{/each}
											</ul>
										</div>
										<div class="col">
											<div class="mini-label">What I am not asking for</div>
											<ul class="pill-list">
												<li class="pill pill-soft">No increase in headcount.</li>
												<li class="pill pill-soft">No new budget line today.</li>
												<li class="pill pill-soft">No permanent structural change yet.</li>
												<li class="pill pill-soft">No change in remuneration.</li>
											</ul>
										</div>
									</div>

									<div class="deck-body-lg mt-lg max-width-md">
										We can continue to absorb inefficiencies, or we can operate as the modern
										technology partner our customers already expect us to be. You brought me in for
										this work. This 90-day plan lets me deliver it with clarity, accountability, and
										low risk.
									</div>
									<div class="mandate-quote-card mt-lg">
										This is a 90-day mandate. At the end of this period, we review the measurable
										wins, the frameworks established, and decide on the permanent structure. A
										low-risk, high-impact experiment.
									</div>
								</div>
							</div>
						</section>
					{/if}
				</div>
			{/key}
			<div class="deck-progress-overlay">
				<div class="deck-progress-fill" style={`--progress:${progress}`}></div>
			</div>
		</main>

		<footer class="deck-footer">
			<div>Step {step + 1} / {maxStep + 1}</div>
			<div class="deck-actions">
				<button class="deck-btn" on:click={prev} disabled={step === 0}>
					<span>Back</span>
				</button>
				<button class="deck-btn primary" on:click={next} disabled={step === maxStep}>
					<span>{step === maxStep ? 'End' : 'Next'}</span>
				</button>
			</div>
		</footer>
	</div>
</div>