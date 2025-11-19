Origin of Strategy (Directly addressing Kev)
Objective: Make it clear this plan exists because he identified the problem and he asked for the solution.
Changes:
Tone: Shifted from "We discussed" to "You identified."
Link: Explicitly ties the plan to his "directive."
File: src/lib/slides/Slide01_Vision.svelte
code
Svelte
<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
	<div class="deck-block">
		<div class="deck-wide">
			<div class="deck-subtle">Origin of Strategy</div>
			<div class="deck-title-lg">Delivering the "V3" Vision</div>
			
			<div class="two-col mt-lg">
				<div class="col">
					<div class="deck-body-lg">
						This plan answers the specific directive to evolve beyond the V2 MSP model. You identified that internal bottlenecks are currently the primary constraint on our ability to scale.
					</div>
					<div class="deck-body-sm deck-mute mt-md">
						It operationalises the insights from previous executive sessions regarding process friction and efficiency.
					</div>
				</div>
				<div class="col">
					<div class="mandate-quote-card">
						This is the execution strategy for that vision. It provides the structural answer to the friction points identified by leadership, designed to free up executive time for high-level strategy.
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


The Strategic Arc (Removing "Legacy")
Objective: Remove the implied criticism of "Legacy."
Changes:
Title: Changed to "Transformation to Technology Leadership".
File: src/lib/slides/Slide03_StrategicArc.svelte
code
Svelte
<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
	<div class="deck-wide">
		<div class="deck-subtle">The Strategic Arc</div>
		<div class="deck-title-lg">Transformation to Technology Leadership</div>
		<div class="journey-flow">
			<div class="journey-node">
				<div class="journey-tag">Pillar 1</div>
				<div class="journey-title">Establish a Foundation</div>
				<div class="journey-text">Predictable delivery, clear governance, and reduced executive noise.</div>
				<div class="journey-pillar-link">→ Pillar 1: Governance & PMO</div>
			</div>
			<div class="journey-arrow">→</div>
			<div class="journey-node">
				<div class="journey-tag">Pillar 2</div>
				<div class="journey-title">Modernise Capability</div>
				<div class="journey-text">Automate internal workflows to increase capacity and efficiency.</div>
				<div class="journey-pillar-link">→ Pillar 2: Automation</div>
			</div>
			<div class="journey-arrow">→</div>
			<div class="journey-node accent">
				<div class="journey-tag">Pillar 3</div>
				<div class="journey-title">Monetise Innovation</div>
				<div class="journey-text">Convert internal capability into a new, high-margin revenue stream.</div>
				<div class="journey-pillar-link">→ Pillar 3: Commercialisation</div>
			</div>
		</div>
	</div>
</section>

src/lib/slides/Slide02_Credentials.svelte
code
Svelte
<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
	<div class="deck-wide">
		<div class="deck-subtle">Execution Capability</div>
		<div class="deck-title-lg">The Required Capability Mix</div>
		<div class="deck-body-sm deck-mute deck-hint mb-lg">
			Success requires a leader who speaks both the language of the Boardroom and the Engineer.
		</div>

		<div class="two-col-uneven">
			<div class="col">
				<div class="mini-label">Pillar 1: Governance & PMO</div>
				<div class="deck-body-md mb-md">
					I bring the formal frameworks required to standardise delivery without creating bureaucracy.
				</div>
				<ul class="pill-list">
					<li class="pill pill-strong">Masters Degree in Project Management</li>
					<li class="pill">AICD Graduate (Australian Institute of Company Directors)</li>
					<li class="pill">PRINCE2 Practitioner & Agile Certified</li>
					<li class="pill">Certified Scrum Master & ITIL Certified</li>
				</ul>
			</div>
			<div class="col">
				<div class="mini-label">Pillar 2 & 3: Automation & Tech</div>
				<div class="deck-body-md mb-md">
					Strategic oversight of high-stakes technical initiatives and secure infrastructure environments.
				</div>
				<ul class="pill-list">
					<li class="pill pill-strong">Technical Architecture & Integration Strategy</li>
					<li class="pill">Applied AI & Process Automation Strategy</li>
					<li class="pill">NV2 Security Clearance (5-Eyes Context)</li>
					<li class="pill">Enterprise Release Management</li>
				</ul>
			</div>
		</div>
	</div>
</section>

src/lib/slides/Slide04_SystemState.svelte
code
Svelte
<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
	<div class="deck-block">
		<div class="deck-wide">
			<div class="deck-subtle">System state</div>
			<div class="deck-title-lg">The Structural Barrier to Scale</div>
			<p class="deck-body-lg">
				Our success and growth have naturally introduced complexity. The core issue is that we are currently using BAU delivery mechanisms to try and implement structural change.
			</p>
			<div class="lane-grid fractured">
				<div class="lane-col">
					<div class="lane-head">Project Delivery</div>
					<div class="lane-sub">Scope creep · Timeline slips · Vague reporting</div>
				</div>
				<div class="lane-col">
					<div class="lane-head">Internal Initiatives</div>
					<div class="lane-sub">Competing priorities · Duplicated effort</div>
				</div>
				<div class="lane-col">
					<div class="lane-head">Workflow Automation</div>
					<div class="lane-sub">Manual processes · Tool friction · Untapped data</div>
				</div>
				<div class="lane-col">
					<div class="lane-head">The "BAU" Trap</div>
					<div class="lane-sub" style="color: var(--danger);">Change initiatives buried in operational backlogs</div>
				</div>
			</div>
			<div class="lane-conclusion">
				<div class="conclusion-icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
				</div>
				<div>These are not departmental failures; they are symptoms of a system that lacks the <span class="accent-text">connecting tissue</span> to operate efficiently at scale.</div>
			</div>
		</div>
	</div>
</section>

src/lib/slides/Slide06_Snapshot.svelte
code
Svelte
<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
	<div class="deck-wide">
		<div class="deck-subtle">Operational Friction</div>
		<div class="deck-title-lg">A Snapshot of Our Operating Reality</div>
		<div class="deck-body-sm deck-mute deck-hint mb-lg">
			As we've grown, the complexity of our connections has outpaced our tools.
		</div>

		<div class="snapshot-container">
			<!-- 
				Background Connectors 
				Updated coordinates to create cleaner "spokes"
			-->
			<svg class="snapshot-lines" viewBox="0 0 960 420" preserveAspectRatio="none">
				<!-- Left Side Connectors -->
				<line x1="0" y1="60" x2="480" y2="210" vector-effect="non-scaling-stroke" />
				<line x1="0" y1="210" x2="480" y2="210" vector-effect="non-scaling-stroke" />
				<line x1="0" y1="360" x2="480" y2="210" vector-effect="non-scaling-stroke" />
				
				<!-- Right Side Connectors -->
				<line x1="960" y1="60" x2="480" y2="210" vector-effect="non-scaling-stroke" />
				<line x1="960" y1="210" x2="480" y2="210" vector-effect="non-scaling-stroke" />
				<line x1="960" y1="360" x2="480" y2="210" vector-effect="non-scaling-stroke" />
			</svg>

			<div class="snapshot-grid">
				<!-- LEFT COLUMN -->
				<div class="snapshot-col">
					<div class="snapshot-node danger-border">
						<div class="snapshot-title text-danger">Single Points of Failure</div>
						<div class="snapshot-text">Key delivery processes dependent on specific individual knowledge.</div>
					</div>
					<div class="snapshot-node">
						<div class="snapshot-title">Legacy Tooling</div>
						<div class="snapshot-text">Old and new systems creating data silos and double-handling.</div>
					</div>
					<div class="snapshot-node">
						<div class="snapshot-title">Reactive Cadence</div>
						<div class="snapshot-text">High volume of "urgent" requests disrupting planned strategic work.</div>
					</div>
				</div>

				<!-- CENTER HUB -->
				<div class="snapshot-core">
					<div class="core-label">Current<br>Operating<br>Complexity</div>
				</div>

				<!-- RIGHT COLUMN -->
				<div class="snapshot-col">
					<div class="snapshot-node">
						<div class="snapshot-title">Cross-Team Friction</div>
						<div class="snapshot-text">Slow handoffs and misaligned priorities between departments.</div>
					</div>
					<div class="snapshot-node">
						<div class="snapshot-title">Challenges in Scaling</div>
						<div class="snapshot-text">Manual steps limit our ability to add customers without adding headcount.</div>
					</div>
					<div class="snapshot-node">
						<div class="snapshot-title">Resource Constraints</div>
						<div class="snapshot-text">High-value senior staff consumed by low-value administrative tasks.</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

/* Add/Verify this in your CSS */
.snapshot-core {
    /* ... existing styles ... */
    background: #050509; /* Must match page background to hide lines */
    z-index: 2; /* Must be higher than lines */
    position: relative;
}

.snapshot-lines {
    /* ... existing styles ... */
    z-index: 0;
}

src/lib/slides/Slide05_ThreePillars.svelte
code
Svelte
<script>
	import { fade, slide } from 'svelte/transition';
</script>

<section in:slide={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
	<div class="deck-block">
		<div class="deck-wide">
			<div class="deck-subtle">Structural answer</div>
			<div class="deck-title-lg">Three Pillars for Strategic Maturity</div>
			<div class="pillar-grid">
				<div class="pillar-card">
					<div class="pillar-icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
					</div>
					<div class="pillar-tag">Pillar 1</div>
					<div class="pillar-title">Governance & PMO uplift</div>
					<div class="pillar-sub">Create a predictable engine room.</div>
					<ul class="pillar-list">
						<li class="pill">Standard PMO templates and language</li>
						<li class="pill">Clear RACI and escalation paths</li>
						<li class="pill">Delivery cadence aligned to executives</li>
					</ul>
				</div>
				<div class="pillar-card accent">
					<div class="pillar-icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
					</div>
					<div class="pillar-tag">Pillar 2</div>
					<div class="pillar-title">Automation & Modernisation</div>
					<div class="pillar-sub">Increase capacity without adding headcount.</div>
					<ul class="pillar-list">
						<li class="pill">Process mapping and SPOF removal</li>
						<li class="pill">Optimising tool utilization & workflow integration</li>
						<li class="pill">Data-driven efficiency gains</li>
					</ul>
				</div>
				<div class="pillar-card">
					<div class="pillar-icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9.5a4 4 0 1 1 0 5.2" /><path d="M2 12h12" /><path d="m18 12 4-4" /><path d="m18 12 4 4" /></svg>
					</div>
					<div class="pillar-tag">Pillar 3</div>
					<div class="pillar-title">Commercialisation</div>
					<div class="pillar-sub">Convert capability into revenue.</div>
					<ul class="pillar-list">
						<li class="pill">SMB automation packages</li>
						<li class="pill">Product-Led Services integration patterns</li>
						<li class="pill">Developing a go-to-market strategy</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

src/lib/slides/Slide07_Pillar1Blueprint.svelte
code
Svelte
<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center deck-fade deck-rise deck-flow-in">
	<div class="deck-block">
		<div class="deck-wide">
			<div class="deck-subtle">Pillar 1: Tactical Blueprint</div>
			<div class="deck-title-md">The "First 30 Days" Governance Uplift</div>
			<div class="deck-body-sm deck-mute deck-hint mb-md">
				Moving from concept to execution: The specific artefacts and rules we will implement.
			</div>

			<div class="two-col">
				<div class="col">
					<div class="mini-label">Standards & Definitions</div>
					<ul class="pill-list">
						<li class="pill"><span class="pill-strong">The PMP Uplift:</span> Formal Project Management Plans for every engagement.</li>
						<li class="pill"><span class="pill-strong">RACI Definition:</span> Hard-coded roles for who approves, who supports, and who delivers.</li>
						<li class="pill"><span class="pill-strong">Commercial Change Control:</span> A zero-tolerance financial process for scope creep.</li>
						<li class="pill"><span class="pill-strong">Pre-Validation:</span> Engineering leads must validate schedules before customer submission.</li>
					</ul>
				</div>
				<div class="col">
					<div class="mini-label">Cadence & Control</div>
					<ul class="pill-list">
						<li class="pill"><span class="pill-strong">RAID Logs:</span> Active tracking of Risks, Assumptions, Issues, and Dependencies.</li>
						<li class="pill"><span class="pill-strong">Meeting Compression:</span> Replacing "roundtable updates" with exception-based reporting to recover delivery hours.</li>
						<li class="pill"><span class="pill-strong">Lessons Learned:</span> A closed loop where project failures update the templates.</li>
						<li class="pill"><span class="pill-strong">Status Reports:</span> Clear "Red/Amber/Green" separating noise from executive action.</li>
					</ul>
				</div>
			</div>
			
			<div class="mandate-quote-card mt-md" style="font-size: 0.95rem;">
				Outcome: We eliminate problems early. We increase project capacity, professionalism, and ensure robust and accurate reporting.
			</div>
		</div>
	</div>
</section>

src/lib/slides/Slide08_GovernanceCadence.svelte
code
Svelte
<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center deck-fade deck-rise deck-flow-in">
	<div class="deck-block">
		<div class="deck-wide">
			<div class="deck-subtle">Pillar 1</div>
			<div class="deck-title-md">Governance Cadence & Escalation</div>
			<div class="governance-model">
				<div class="model-col">
					<div class="mini-label">Rhythm & Reporting</div>
					<!-- New Block: The Daily Grind -->
					<div class="cadence-item" style="border-left: 3px solid var(--accent);">
						<div class="cadence-title">Continuous: Scope & Risk Monitoring</div>
						<div class="cadence-text">Daily oversight of deliverables, change requests, and schedule variances. I act as the first line of defense against scope creep.</div>
					</div>
					<div class="cadence-item">
						<div class="cadence-title">Weekly: Blocker Removal</div>
						<div class="cadence-text">Tactical session to clear obstacles for delivery teams.</div>
					</div>
					<div class="cadence-item">
						<div class="cadence-title">Monthly: Portfolio Status (Exec)</div>
						<div class="cadence-text">Strategic review of portfolio health. No operational noise.</div>
					</div>
				</div>
				<div class="model-col">
					<div class="mini-label">Escalation Path</div>
					<div class="esc-path">
						<div class="esc-node-path">Project Teams</div>
						<div class="esc-arrow-path">↓</div>
						<div class="esc-node-path">Project Manager</div>
						<div class="esc-arrow-path">↓</div>
						<!-- Title Fix Here -->
						<div class="esc-node-path accent">Director - Programs (Escalation)</div>
						<div class="esc-arrow-path-exec">↑ Only strategic escalations ↑</div>
						<div class="esc-node-path exec">MD & Executive Team</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

src/lib/slides/Slide09_PortfolioControl.svelte
code
Svelte
<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center deck-fade deck-rise deck-flow-in">
	<div class="deck-block">
		<div class="deck-wide">
			<div class="deck-subtle">Portfolio control</div>
			<div class="deck-title-md">Aligning all in-flight work</div>
			<div class="deck-body-sm deck-mute deck-hint mb-md">
				A single source of truth ensuring resources are deployed only against validated priorities.
			</div>
			<div class="kanban-board">
				<div class="kanban-column">
					<div class="kanban-head">Backlog</div>
					<div class="kanban-sub">Capture</div>
					<ul class="pill-list">
						<li class="pill pill-soft">Unfunded Initiatives</li>
						<li class="pill pill-soft">Departmental Requests</li>
						<li class="pill pill-soft">"Nice to have" ideas</li>
					</ul>
				</div>
				<div class="kanban-column">
					<div class="kanban-head">Prioritised</div>
					<div class="kanban-sub">Executive Review</div>
					<ul class="pill-list">
						<li class="pill">Strategic Directives</li>
						<li class="pill">Compliance Requirements</li>
						<li class="pill">ROI-Positive Automation</li>
					</ul>
				</div>
				<div class="kanban-column accent-border">
					<div class="kanban-head">In Progress</div>
					<div class="kanban-sub">Execution</div>
					<ul class="pill-list">
						<li class="pill pill-strong">Active Delivery</li>
						<li class="pill pill-strong">Resource Allocated</li>
						<li class="pill pill-strong">Tracking vs Plan</li>
					</ul>
				</div>
				<div class="kanban-column">
					<div class="kanban-head">Done</div>
					<div class="kanban-sub">Closure</div>
					<ul class="pill-list">
						<li class="pill">Handover to Ops</li>
						<li class="pill">Benefit Realisation</li>
						<li class="pill">Lessons Learned</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.kanban-sub {
		font-size: 0.75rem;
		color: var(--muted);
		margin-bottom: 12px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	.accent-border {
		border-color: var(--accent-soft);
		background: linear-gradient(145deg, #0f141b, #081016);
	}
	/* Override pill styles slightly for this abstract view */
	.pill-soft { opacity: 0.6; }
</style>

src/lib/slides/Slide10_Pillar2Engine.svelte
code
Svelte
<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
	<div class="deck-wide">
		<div class="deck-subtle">Pillar 2: The Modernisation Engine</div>
		<div class="deck-title-lg">Turning Insight into Action</div>
		<div class="deck-body-sm deck-mute deck-hint mb-lg">
			We will deploy a continuous discovery process to build a safe, prioritised pipeline of improvements.
		</div>

		<div class="engine-flow">
			<div class="engine-stage">
				<div class="engine-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
				</div>
				<div class="engine-title">1. Capture & Mine</div>
				<div class="engine-text">
					Process mining key workflows. Identifying Single Points of Failure (SPOF) and manual bottlenecks.
				</div>
			</div>
			<div class="engine-arrow">→</div>
			<div class="engine-stage">
				<div class="engine-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
				</div>
				<div class="engine-title">2. The "5 Whys"</div>
				<div class="engine-text">
					Rigorous analysis to eliminate unnecessary steps before automating. We do not automate bad processes.
				</div>
			</div>
			<div class="engine-arrow">→</div>
			<div class="engine-stage accent">
				<div class="engine-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
				</div>
				<div class="engine-title">3. Deploy & Document</div>
				<div class="engine-text">
					Prioritised execution with full documentation to reduce tool count and staff toil.
				</div>
			</div>
		</div>
	</div>
</section>

src/lib/slides/Slide11_Commercial.svelte
code
Svelte
<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
	<div class="deck-wide" style="text-align: center;">
		<div class="deck-subtle">Pillar 3: The Commercial Opportunity</div>
		<div class="market-quote">"The market will show no mercy to traditional ways of working."</div>
		<div class="commercial-flow" style="text-align: left; margin-top: 32px;">
			<div class="flow-card">
				<div class="flow-card-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>
				</div>
				<div class="flow-card-title">1. Master Internally</div>
				<div class="flow-card-text">
					Use our own business as the proving ground. Uplift staff knowledge safely, ensuring security and data governance are solved first.
				</div>
			</div>
			<div class="flow-arrow-large">→</div>
			<div class="flow-card">
				<div class="flow-card-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
				</div>
				<div class="flow-card-title">2. Package Externally</div>
				<div class="flow-card-text">
					Develop a premium Professional Services offering that differentiates us from standard MSPs.
				</div>
			</div>
			<div class="flow-arrow-large">→</div>
			<div class="flow-card accent">
				<div class="flow-card-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
				</div>
				<div class="flow-card-title">3. Monetise Leadership</div>
				<div class="flow-card-text">
					Cement our brand as the definitive technology leader for our customers, opening new high-margin revenue streams.
				</div>
			</div>
		</div>
	</div>
</section>

src/lib/slides/Slide12_PersonalContext.svelte
code
Svelte
<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
	<div class="deck-wide">
		<div class="deck-subtle">Personal Commitment</div>
		<div class="deck-title-lg">Maximising Return on Investment</div>
		
		<div class="two-col mt-lg">
			<div class="col">
				<div class="deck-body-lg">
					I relocated my family to the region to build a long-term future here.
				</div>
				<p class="deck-body-sm deck-mute mt-md">
					My experience in high-velocity environments means I have the capacity to absorb this strategic workload <strong>in addition</strong> to my current operational duties. This plan allows the business to extract maximum value from my salary without requiring a new hire.
				</p>
			</div>
			<div class="col">
				<div class="mandate-quote-card">
					"I am an excellent soldier, but I am a far better officer. I don't have 10 years to prove my value incrementally—I want to demonstrate it structurally, starting now."
				</div>
			</div>
		</div>
	</div>
</section>

src/lib/slides/Slide13_Mandate.svelte
code
Svelte
<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
	<div class="deck-block">
		<div class="deck-wide">
			<div class="deck-subtle">The Mandate</div>
			<div class="deck-title-lg">Why This Work Requires a Specialised Mandate</div>
			<div class="two-col-uneven mt-lg">
				<div class="col">
					<div class="accelerator-diagram">
						<div class="layer accelerator-layer">
							<div class="layer-title">Program Focus: Transformation</div>
							<!-- FULL TITLE HERE -->
							<div class="layer-node accent">Director - Programs, Automation & Modernisation</div>
						</div>
						<div class="layer-arrows"><span>↓</span><span>↓</span><span>↓</span></div>
						<div class="layer bau-layer">
							<div class="layer-title">BAU Focus: Stability</div>
							<div class="layer-node-group">
								<div class="layer-node">Projects</div>
								<div class="layer-node">Systems</div>
								<div class="layer-node">Operations</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="mini-label">How This Layer Adds Value</div>
					<ul class="pill-list">
						<li class="pill">Business-as-usual is for *running* the business. This mandate is for *changing* it.</li>
						<li class="pill">It provides a single point of accountability for complex cross-functional outcomes.</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

src/lib/slides/Slide14_Catalyst.svelte
code
Svelte
<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
	<div class="deck-wide">
		<div class="deck-subtle">The Strategic Catalyst</div>
		<div class="deck-title-lg">Unlocking Our Next Level of Performance</div>
		<div class="deck-body-sm deck-mute deck-hint mb-lg">
			We have a clear opportunity to evolve our operating model to match our ambition.
		</div>

		<div class="two-paths">
			<!-- Current Trajectory -->
			<div class="path-card current-path">
				<div class="path-title">Our Current Trajectory</div>
				<ul class="pill-list">
					<li class="pill">Growth outpaces structure</li>
					<li class="pill">Reliance on individual heroics</li>
					<li class="pill">Reacting to market shifts</li>
					<li class="pill">Linear, incremental growth</li>
				</ul>
			</div>
			<!-- The Catalyst -->
			<div class="path-card new-path">
				<div class="path-title">With This 90-Day Catalyst</div>
				<ul class="pill-list">
					<li class="pill">Governance enables scale</li>
					<li class="pill">Systems create leverage</li>
					<li class="pill">Leading the market conversation</li>
					<li class="pill">Step-change in performance & revenue</li>
				</ul>
			</div>
		</div>

		<div class="philosophy-quote mt-lg">
			"We need to build the company internally that we want to be for our customers externally."
		</div>
	</div>
</section>

src/lib/slides/Slide15_Charter.svelte
code
Svelte
<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 500 }} out:fade={{ duration: 220 }} class="deck-abs-center">
	<div class="deck-block">
		<div class="deck-wide">
			<div class="deck-subtle">Decision Frame</div>
			<div class="deck-title-xl">The 90-Day Modernisation Charter</div>
			<div class="two-col mt-lg">
				<div class="col">
					<div class="mini-label">The Remit & Authority</div>
					<ul class="pill-list">
						<li class="pill pill-strong" style="color: var(--accent);">Director - Programs, Automation & Modernisation</li>
						<li class="pill pill-strong">Assume ownership of the Governance & PMO uplift.</li>
						<li class="pill pill-strong">Authority to audit and optimise internal toolchains.</li>
						<li class="pill pill-strong">Direct reporting line to the MD for this strategic initiative.</li>
					</ul>
				</div>
				<div class="col">
					<div class="mini-label">The Lean Operating Model</div>
					<ul class="pill-list">
						<li class="pill pill-strong">One dedicated engineering resource (Dylan).</li>
						<li class="pill pill-strong">Operates within existing budgets.</li>
						<li class="pill pill-strong">No new headcount required.</li>
					</ul>
				</div>
			</div>
			<div class="mandate-quote-card mt-lg">
				This is a 90-day mandate to unlock the modern capabilities our customers—and our future—demand.
			</div>
		</div>
	</div>
</section>