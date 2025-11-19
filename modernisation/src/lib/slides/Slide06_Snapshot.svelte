<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
	<div class="deck-wide">
		<div class="deck-subtle">Workflow Capture</div>
		<div class="deck-title-lg">A Snapshot of Our Operating Reality</div>
		<div class="deck-body-sm deck-mute deck-hint mb-lg">
			As we've grown, our processes have become naturally complex.
		</div>
		<div class="snapshot-diagram">
			<div class="snapshot-node" style="grid-area: spof;">
				<div class="snapshot-title">Single Points of Failure</div>
				<div class="snapshot-text">Key processes dependent on specific individuals.</div>
			</div>
			<div class="snapshot-node" style="grid-area: friction;">
				<div class="snapshot-title">Cross-Team Friction</div>
				<div class="snapshot-text">Slow handoffs and misaligned priorities.</div>
			</div>
			<div class="snapshot-node" style="grid-area: tooling;">
				<div class="snapshot-title">Legacy Tooling</div>
				<div class="snapshot-text">Old and new systems creating data silos.</div>
			</div>
			<div class="snapshot-core">Current Workflows</div>
			<div class="snapshot-node" style="grid-area: scaling;">
				<div class="snapshot-title">Challenges in Scaling</div>
				<div class="snapshot-text">Manual steps limit our ability to grow capacity.</div>
			</div>
			<div class="snapshot-node" style="grid-area: resources;">
				<div class="snapshot-title">Resource Constraints</div>
				<div class="snapshot-text">High-value staff consumed by low-value tasks.</div>
			</div>
		</div>
	</div>
</section>

