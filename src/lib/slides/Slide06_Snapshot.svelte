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

