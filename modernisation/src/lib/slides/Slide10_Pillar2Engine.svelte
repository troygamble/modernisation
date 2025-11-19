<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
	<div class="deck-wide">
		<div class="deck-subtle">Pillar 2: The Modernisation Engine</div>
		<div class="deck-title-lg">Turning Insight into Action</div>
		<div class="deck-body-sm deck-mute deck-hint mb-lg">
			We will deploy a continuous discovery process to build a safe, prioritised pipeline of improvements.
		</div>

		<div class="engine-flow">
			<div class="engine-stage">
				<div class="engine-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
				</div>
				<div class="engine-title">1. Capture & Mine</div>
				<div class="engine-text">
					Process mining key workflows. Identifying Single Points of Failure (SPOF) and manual bottlenecks.
				</div>
			</div>
			<div class="engine-arrow">→</div>
			<div class="engine-stage">
				<div class="engine-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
				</div>
				<div class="engine-title">2. The "5 Whys"</div>
				<div class="engine-text">
					Rigorous analysis to eliminate unnecessary steps before automating. We do not automate bad processes.
				</div>
			</div>
			<div class="engine-arrow">→</div>
			<div class="engine-stage accent">
				<div class="engine-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
				</div>
				<div class="engine-title">3. Deploy & Document</div>
				<div class="engine-text">
					Prioritised execution with full documentation to reduce tool count and staff toil.
				</div>
			</div>
		</div>
	</div>
</section>

