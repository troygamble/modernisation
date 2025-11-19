<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 300, delay: 200 }} out:fade={{ duration: 200 }} class="deck-fade deck-rise">
	<div class="deck-block">
		<div class="hero-shell">
			<div class="deck-subtle">The Opportunity for Leadership</div>
			<div class="deck-title-xl hero-title">
				Structure. Modernise. <span class="accent-text">Monetise.</span>
			</div>
			<div class="deck-body-md hero-body">
				This 90-day plan introduces the structure needed to unlock new efficiencies, build a modern operating model, and create a foundation for future growth.
			</div>
		</div>
	</div>
</section>

