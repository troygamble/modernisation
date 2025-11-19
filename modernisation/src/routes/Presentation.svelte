<script lang="ts">
	import { onMount } from 'svelte';
	
	// Import all slides
	import Slide00 from '$lib/slides/Slide00_Title.svelte';
	import Slide01 from '$lib/slides/Slide01_Vision.svelte';
	import Slide02 from '$lib/slides/Slide02_Credentials.svelte';
	import Slide03 from '$lib/slides/Slide03_StrategicArc.svelte';
	import Slide04 from '$lib/slides/Slide04_SystemState.svelte';
	import Slide05 from '$lib/slides/Slide05_ThreePillars.svelte';
	import Slide06 from '$lib/slides/Slide06_Snapshot.svelte';
	import Slide07 from '$lib/slides/Slide07_Pillar1Blueprint.svelte';
	import Slide08 from '$lib/slides/Slide08_GovernanceCadence.svelte';
	import Slide09 from '$lib/slides/Slide09_PortfolioControl.svelte';
	import Slide10 from '$lib/slides/Slide10_Pillar2Engine.svelte';
	import Slide11 from '$lib/slides/Slide11_Commercial.svelte';
	import Slide12 from '$lib/slides/Slide12_PersonalContext.svelte';
	import Slide13 from '$lib/slides/Slide13_Mandate.svelte';
	import Slide14 from '$lib/slides/Slide14_Catalyst.svelte';
	import Slide15 from '$lib/slides/Slide15_Charter.svelte';

	let step = 0;
	
	// REORDERED FLOW based on your feedback
	const slides = [
		Slide00, // Title
		Slide01, // Vision (Context)
		Slide03, // Strategic Arc (Show the plan first)
		Slide02, // Credentials (Why me)
		Slide04, // System State (The Problem)
		Slide06, // Snapshot (Visualizing the problem - Moved here)
		Slide05, // Three Pillars (The Structural Answer)
		Slide07, // Pillar 1 Blueprint
		Slide08, // Governance Cadence
		Slide09, // Portfolio Control
		Slide10, // Pillar 2 Engine
		Slide11, // Commercial
		Slide12, // Personal Context
		Slide13, // Mandate
		Slide14, // Catalyst
		Slide15  // Charter
	];
	
	const maxStep = slides.length - 1;

	function next() { if (step < maxStep) step += 1; }
	function prev() { if (step > 0) step -= 1; }

	function handleKey(event: KeyboardEvent) {
		if (event.key === 'ArrowRight' || event.key === ' ' || event.key === 'PageDown') next();
		if (event.key === 'ArrowLeft' || event.key === 'PageUp') prev();
	}

	onMount(() => {
		window.addEventListener('keydown', handleKey);
		return () => window.removeEventListener('keydown', handleKey);
	});

	$: progress = step / maxStep;
</script>

<div class="deck-root">
	<div class="deck-shell">
		<header class="deck-header">
			<div class="deck-badge">90-Day Modernisation Plan</div>
			<div>Efficiency · Quality · Growth</div>
		</header>

		<main class="deck-main">
			<!-- Key block destroys and recreates the component on step change, triggering transitions -->
			{#key step}
				<div class="deck-shell-inner">
					<svelte:component this={slides[step]} />
				</div>
			{/key}
			
			<div class="deck-progress-overlay">
				<div class="deck-progress-fill" style={`--progress:${progress}`}></div>
			</div>
		</main>

		<footer class="deck-footer">
			<div>Step {step + 1} / {maxStep + 1}</div>
			<div class="deck-actions">
				<button class="deck-btn" on:click={prev} disabled={step === 0}><span>Back</span></button>
				<button class="deck-btn primary" on:click={next} disabled={step === maxStep}>
					<span>{step === maxStep ? 'End' : 'Next'}</span>
				</button>
			</div>
		</footer>
	</div>
</div>