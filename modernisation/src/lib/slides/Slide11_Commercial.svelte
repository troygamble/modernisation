<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
	<div class="deck-wide" style="text-align: center;">
		<div class="deck-subtle">Pillar 3: The Commercial Opportunity</div>
		<div class="market-quote">"The market will show no mercy to traditional ways of working."</div>
		<div class="commercial-flow" style="text-align: left; margin-top: 32px;">
			<div class="flow-card">
				<div class="flow-card-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>
				</div>
				<div class="flow-card-title">1. Master Internally</div>
				<div class="flow-card-text">
					Use our own business as the proving ground. Uplift staff knowledge safely, ensuring security and data governance are solved first.
				</div>
			</div>
			<div class="flow-arrow-large">→</div>
			<div class="flow-card">
				<div class="flow-card-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
				</div>
				<div class="flow-card-title">2. Package Externally</div>
				<div class="flow-card-text">
					Develop a premium Professional Services offering that differentiates us from standard MSPs.
				</div>
			</div>
			<div class="flow-arrow-large">→</div>
			<div class="flow-card accent">
				<div class="flow-card-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
				</div>
				<div class="flow-card-title">3. Monetise Leadership</div>
				<div class="flow-card-text">
					Cement our brand as the definitive technology leader for our customers, opening new high-margin revenue streams.
				</div>
			</div>
		</div>
	</div>
</section>

