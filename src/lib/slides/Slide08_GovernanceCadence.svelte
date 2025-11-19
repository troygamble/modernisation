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

