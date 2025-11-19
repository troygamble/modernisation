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

