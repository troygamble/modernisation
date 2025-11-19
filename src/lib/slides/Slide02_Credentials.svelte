<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
	<div class="deck-wide">
		<div class="deck-subtle">Execution Capability</div>
		<div class="deck-title-lg">Why this specific skillset fits the problem</div>
		<div class="deck-body-sm deck-mute deck-hint mb-lg">
			This plan relies on a unique intersection of formal governance training and technical strategy.
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
					A proven history of directing enterprise-grade software and secure infrastructure projects.
				</div>
				<ul class="pill-list">
					<li class="pill pill-strong">Technical Architecture & Systems Integration</li>
					<li class="pill">Applied AI & Process Automation Strategy</li>
					<li class="pill">NV2 Security Clearance (5-Eyes Context)</li>
					<li class="pill">Enterprise Release Management</li>
				</ul>
			</div>
		</div>
	</div>
</section>

