<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import type { TransitionConfig } from 'svelte/transition';

let step = 0;
const maxStep = 12; // 0..12

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
			<div>Efficiency · Quality · Growth</div>
		</header>

		<main class="deck-main">
			<!-- Use a key block to re-trigger the transition on step change -->
			{#key step}
				<div class="deck-shell-inner" in:fade={{ duration: 300, delay: 200 }} out:fade={{ duration: 200 }}>
					{#if step === 0}
						<section class="deck-fade deck-rise">
							<div class="deck-block">
								<div class="hero-shell">
								<div class="deck-subtle">The Opportunity for Leadership</div>
								<div class="deck-title-xl hero-title">
									Structure. Modernise. <span class="accent-text">Monetise.</span>
								</div>
								<div class="deck-body-md hero-body">
									This 90-day plan introduces the structure needed to unlock new efficiencies, build a modern operating model, and create a foundation for future growth. It addresses systemic friction points that require a dedicated, cross-functional approach to resolve.
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
					<div class="journey-title">Establish a Foundation</div>
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
											<div class="lane-head">Project Delivery</div>
											<div class="lane-sub">Scope creep · Timeline slips · Vague reporting</div>
										</div>
										<div class="lane-col">
											<div class="lane-head">Internal Initiatives</div>
											<div class="lane-sub">Siloed work · No central priority · Duplicated effort</div>
										</div>
										<div class="lane-col">
											<div class="lane-head">Workflow Automation</div>
											<div class="lane-sub">Manual processes · Tool friction · Untapped data</div>
										</div>
										<div class="lane-col">
											<div class="lane-head">Executive Oversight</div>
											<div class="lane-sub">Project noise · High-cost meetings · Slow decisions</div>
										</div>
										<div class="fracture-line"></div>
									</div>
									<div class="lane-conclusion">
										<div class="conclusion-icon">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
										</div>
										<div>
											These are not departmental failures; they are symptoms of a system that lacks the <span class="accent-text">connecting tissue</span> to operate efficiently at scale.
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
								<div class="deck-title-lg">Three Pillars for Strategic Maturity</div>
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
											<div class="pillar-sub">Create a predictable engine room.</div>
											<ul class="pillar-list">
												<li class="pill">Standard PMO templates and language</li>
												<li class="pill">Clear RACI and escalation paths</li>
												<li class="pill">Delivery cadence aligned to executives</li>
												<li class="pill">Single-point escalation to protect executive time</li>
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
												<li class="pill">Modernising core business systems</li>
												<li class="pill">Data-driven efficiency gains</li>
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
												<li class="pill">Developing a go-to-market strategy</li>
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
									<div class="deck-title-lg">Maturing for the Next Stage of Growth</div>
									<div class="deck-body-sm deck-mute deck-hint mb-lg">
										Our current processes have served us well, but are now straining under our success. To scale, we need to evolve.
									</div>

									<div class="two-col">
										<div class="col">
											<div class="mini-label">From chaos to clarity</div>
											<div class="before-after-grid">
												<!-- BEFORE STATE -->
												<div class="state-card before-state">
													<div class="state-title">Before: Growth Strain</div>
													<ul class="pill-list" style="text-align: left; margin-top: 12px;">
														<li class="pill">Organic Processes</li>
														<li class="pill">Reactive Decisions</li>
														<li class="pill">Key Person Dependencies</li>
														<li class="pill">Executive Overload</li>
													</ul>
												</div>

												<!-- AFTER STATE -->
												<div class="state-card after-state">
													<div class="state-title">After: Scalable Framework</div>
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
												<li class="pill">Visibility of automation opportunities</li>
												<li class="pill">Identification of systemic friction points</li>
												<li class="pill">Clear strategy for tool consolidation &amp; savings</li>
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
							A lightweight framework to ensure customer projects are delivered with predictability and quality.
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
								<li class="pill">RACI model for project delivery roles</li>
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

						<div class="governance-model">
							<!-- Cadence Column -->
							<div class="model-col">
								<div class="mini-label">Rhythm & Reporting</div>
								<div class="cadence-item">
									<div class="cadence-title">Weekly: Project Health & Blocker Removal</div>
									<div class="cadence-text">A tactical session focused on servant leadership: removing obstacles for the project teams to ensure velocity.</div>
								</div>
								<div class="cadence-item">
									<div class="cadence-title">Fortnightly: PMO Governance Board</div>
									<div class="cadence-text">Review and approve new project briefs, templates, and process improvements.</div>
								</div>
								<div class="cadence-item">
									<div class="cadence-title">Monthly: Portfolio Status with MD</div>
									<div class="cadence-text">A strategic review of overall portfolio health, major risks, and alignment with executive goals. No operational noise.</div>
								</div>
							</div>

							<!-- Escalation Column -->
							<div class="model-col">
								<div class="mini-label">Escalation Path</div>
								<div class="esc-path">
									<div class="esc-node-path">Project Teams</div>
									<div class="esc-arrow-path">↓</div>
									<div class="esc-node-path">Project Manager</div>
									<div class="esc-arrow-path">↓</div>
									<div class="esc-node-path accent">Program Director (Single Point of Contact)</div>
									<div class="esc-arrow-path-exec">↑ Only strategic escalations ↑</div>
									<div class="esc-node-path exec">MD & Executive Team</div>
								</div>
								<div class="deck-body-sm deck-mute deck-hint mt-md">
									My role is to absorb 95% of project issues, protecting executive time for strategic decisions.
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
									cards: ['Legacy System Decommission', 'New Platform Integration']
								},
								{
									title: 'Prioritised (Exec Review)',
									cards: ['Operational Efficiency Initiative', 'Customer-Facing Feature Rollout']
								},
								{
									title: 'In Progress',
									cards: ['Data & Reporting Uplift', 'Security Hardening Project']
								},
								{
									title: 'Done',
									cards: []
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
							A single source of truth for all internal change. We ensure capital and resources are deployed <em>only</em> against validated executive priorities.
						</div>
					</div>
				</div>
			</section>
		{/if}

{#if step === 8}
		<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
			<div class="deck-wide">
				<div class="deck-subtle">Pillar 2: The Modernisation Engine</div>
				<div class="deck-title-lg">How We Turn Insight into Action</div>
				<div class="deck-body-sm deck-mute deck-hint mb-lg">
					We'll deploy a lightweight, continuous discovery process to build a pipeline of high-impact improvements.
				</div>

				<div class="engine-flow">
					<!-- Stage 1: Capture -->
					<div class="engine-stage">
						<div class="engine-icon">
							<!-- Icon for Data Capture -->
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
						</div>
						<div class="engine-title">1. Capture Reality</div>
						<div class="engine-text">Engage with business operations and project teams to map key workflows, tools, handoffs, and friction points using simple, structured inputs.</div>
					</div>

					<div class="engine-arrow">→</div>

					<!-- Stage 2: Analyze -->
					<div class="engine-stage">
						<div class="engine-icon">
							 <!-- Icon for Analysis/AI -->
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
						</div>
						<div class="engine-title">2. Identify Opportunity</div>
						<div class="engine-text">Analyze the captured data to pinpoint high-value targets for automation, tool consolidation, SPOF mitigation, and process simplification.</div>
					</div>

					<div class="engine-arrow">→</div>

					<!-- Stage 3: Act -->
					<div class="engine-stage accent">
						<div class="engine-icon">
							 <!-- Icon for Action/Backlog -->
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
						</div>
						<div class="engine-title">3. Prioritize & Execute</div>
						<div class="engine-text">Build a single, transparent backlog of modernisation initiatives, prioritized by executive strategy, to be actioned by empowered teams.</div>
					</div>
				</div>
			</div>
		</section>
	{/if}

{#if step === 9}
		<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
			<div class="deck-wide" style="text-align: center;">
				<div class="deck-subtle">Pillar 3: The Commercial Opportunity</div>
				<div class="market-quote">"The market will show no mercy to traditional ways of working."</div>
				
				<div class="commercial-flow" style="text-align: left; margin-top: 32px;">
					<!-- Step 1 -->
					<div class="flow-card">
						<div class="flow-card-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>
						</div>
						<div class="flow-card-title">1. Master Internally</div>
						<div class="flow-card-text">
							Use our own business as the proving ground. Develop and document repeatable automation and AI patterns with measured gains.
						</div>
					</div>

					<div class="flow-arrow-large">→</div>

					<!-- Step 2 -->
					<div class="flow-card">
						<div class="flow-card-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
						</div>
						<div class="flow-card-title">2. Package Externally</div>
						<div class="flow-card-text">
							Create a high-margin Professional Services offering, targeting pilot customers from our existing base of 1,800 contacts.
						</div>
					</div>

					<div class="flow-arrow-large">→</div>

					<!-- Step 3 -->
					<div class="flow-card accent">
						<div class="flow-card-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
						</div>
						<div class="flow-card-title">3. Monetise Leadership</div>
						<div class="flow-card-text">
							Unlock a potential ~$700k revenue stream and cement our brand as the definitive technology leader for our customers.
						</div>
					</div>
				</div>

				<div class="philosophy-quote">
					To lead the market, we must first become the company we want to help our customers become.
				</div>
			</div>
		</section>
	{/if}


{#if step === 10}
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

{#if step === 11}
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

{#if step === 12}
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