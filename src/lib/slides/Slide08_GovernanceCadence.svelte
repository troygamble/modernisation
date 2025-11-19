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
					<div class="cadence-item">
						<div class="cadence-title">Weekly: Project Health & Blocker Removal</div>
						<div class="cadence-text">Tactical session: removing obstacles to ensure velocity.</div>
					</div>
					<div class="cadence-item">
						<div class="cadence-title">Fortnightly: PMO Governance Board</div>
						<div class="cadence-text">Review/approve new briefs, templates, and process improvements.</div>
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
						<div class="esc-node-path accent">Program Director (Single Point)</div>
						<div class="esc-arrow-path-exec">↑ Only strategic escalations ↑</div>
						<div class="esc-node-path exec">MD & Executive Team</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

