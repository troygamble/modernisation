<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 300, delay: 200 }} out:fade={{ duration: 200 }} class="deck-fade deck-rise">
	<div class="deck-block">
		<div class="hero-shell">
			<div class="deck-subtle">Strategic Modernisation Initiative</div>
			<div class="deck-title-xl hero-title">
				Structure. Modernise. <span class="accent-text">Monetise.</span>
			</div>
			<div class="deck-body-md hero-body">
				This 90-day plan deploys a targeted <strong>governance and automation layer</strong> to resolve systemic friction. It establishes the frameworks required to standardise delivery and enable scale, without disrupting core operations.
			</div>
		</div>
	</div>
</section>

