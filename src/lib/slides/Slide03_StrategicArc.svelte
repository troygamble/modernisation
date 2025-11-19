<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
	<div class="deck-wide">
		<div class="deck-subtle">The Strategic Arc</div>
		<div class="deck-title-lg">From Legacy Provider to Modern Partner</div>
		<div class="journey-flow">
			<div class="journey-node">
				<div class="journey-tag">Phase 1</div>
				<div class="journey-title">Establish a Foundation</div>
				<div class="journey-text">Predictable delivery, clear governance, and reduced executive noise.</div>
				<div class="journey-pillar-link">→ Pillar 1: Governance & PMO</div>
			</div>
			<div class="journey-arrow">→</div>
			<div class="journey-node">
				<div class="journey-tag">Phase 2</div>
				<div class="journey-title">Modernise Capability</div>
				<div class="journey-text">Automate internal workflows to increase capacity and efficiency.</div>
				<div class="journey-pillar-link">→ Pillar 2: Automation</div>
			</div>
			<div class="journey-arrow">→</div>
			<div class="journey-node accent">
				<div class="journey-tag">Phase 3</div>
				<div class="journey-title">Monetise Innovation</div>
				<div class="journey-text">Convert internal capability into a new, high-margin revenue stream.</div>
				<div class="journey-pillar-link">→ Pillar 3: Commercialisation</div>
			</div>
		</div>
	</div>
</section>

