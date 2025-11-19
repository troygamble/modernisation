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

