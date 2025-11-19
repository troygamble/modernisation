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
					I relocated my family to the region for the long term. I am not here for a rotation; I am here to build.
				</div>
				<p class="deck-body-sm deck-mute mt-md">
					The current structure isolates my capability from the company's biggest challenges. This plan is a mechanism to deploy my full skillset—Strategic Governance and Technical Architecture—to solve your most expensive problems.
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

