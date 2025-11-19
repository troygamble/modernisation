<script>
	import { fade } from 'svelte/transition';
	import { onMount, tick } from 'svelte';

	// Element references
	let containerRef;
	let svgRef;
	let coreRef;
	let leftNode1, leftNode2, leftNode3;
	let rightNode1, rightNode2, rightNode3;

	// Line coordinates state
	let lines = [];
	let viewBoxWidth = 960;
	let viewBoxHeight = 500;

	// Calculate line positions using container-relative coordinates
	function updateLinePositions() {
		if (!containerRef || !svgRef || !coreRef || !leftNode1 || !leftNode2 || !leftNode3 || !rightNode1 || !rightNode2 || !rightNode3) {
			return;
		}

		// Get container dimensions for viewBox
		viewBoxWidth = containerRef.offsetWidth;
		viewBoxHeight = containerRef.offsetHeight;

		// Calculate circle center using offsetLeft/offsetTop (container-relative)
		const circleCenterX = coreRef.offsetLeft + coreRef.offsetWidth / 2;
		const circleCenterY = coreRef.offsetTop + coreRef.offsetHeight / 2;

		const leftNodes = [leftNode1, leftNode2, leftNode3];
		const rightNodes = [rightNode1, rightNode2, rightNode3];

		const newLines = [];

		// Left side lines - connect from right edge center of box to circle center
		leftNodes.forEach(node => {
			const x1 = node.offsetLeft + node.offsetWidth; // Right edge
			const y1 = node.offsetTop + node.offsetHeight / 2; // Vertical center
			newLines.push({ x1, y1, x2: circleCenterX, y2: circleCenterY });
		});

		// Right side lines - connect from left edge center of box to circle center
		rightNodes.forEach(node => {
			const x1 = node.offsetLeft; // Left edge
			const y1 = node.offsetTop + node.offsetHeight / 2; // Vertical center
			newLines.push({ x1, y1, x2: circleCenterX, y2: circleCenterY });
		});

		lines = newLines;
	}

	onMount(async () => {
		// Wait for DOM to be fully rendered
		await tick();
		
		// Small delay to ensure layout is complete
		setTimeout(() => {
			updateLinePositions();
		}, 100);

		// Update on window resize with debounce
		let resizeTimeout;
		const handleResize = () => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(updateLinePositions, 150);
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			clearTimeout(resizeTimeout);
		};
	});
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
	<div class="deck-wide">
		<div class="deck-subtle">Operational Friction</div>
		<div class="deck-title-lg">A Snapshot of Our Operating Reality</div>
		<div class="deck-body-sm deck-mute deck-hint mb-lg">
			As we've grown, the complexity of our connections has outpaced our tools.
		</div>
		<div class="snapshot-container" bind:this={containerRef}>
			<!-- 
				Background Connectors 
				Dynamically positioned based on actual element positions
			-->
			<svg class="snapshot-lines" bind:this={svgRef} viewBox="0 0 {viewBoxWidth} {viewBoxHeight}">
				{#each lines as line, i}
					<line 
						x1={line.x1} 
						y1={line.y1} 
						x2={line.x2} 
						y2={line.y2} 
						vector-effect="non-scaling-stroke"
					/>
				{/each}
			</svg>
			<div class="snapshot-grid">
				<!-- LEFT COLUMN -->
				<div class="snapshot-col">
					<div class="snapshot-node danger-border" bind:this={leftNode1}>
						<div class="snapshot-title text-danger">Single Points of Failure</div>
						<div class="snapshot-text">Key delivery processes dependent on specific individual knowledge.</div>
					</div>
					<div class="snapshot-node" bind:this={leftNode2}>
						<div class="snapshot-title">Legacy Tooling</div>
						<div class="snapshot-text">Old and new systems creating data silos and double-handling.</div>
					</div>
					<div class="snapshot-node" bind:this={leftNode3}>
						<div class="snapshot-title">Reactive Cadence</div>
						<div class="snapshot-text">High volume of "urgent" requests disrupting planned strategic work.</div>
					</div>
				</div>
				<!-- CENTER HUB -->
				<div class="snapshot-core" bind:this={coreRef}>
					<div class="core-label">Current<br>Operating<br>Complexity</div>
				</div>
				<!-- RIGHT COLUMN -->
				<div class="snapshot-col">
					<div class="snapshot-node" bind:this={rightNode1}>
						<div class="snapshot-title">Cross-Team Friction</div>
						<div class="snapshot-text">Slow handoffs and misaligned priorities between departments.</div>
					</div>
					<div class="snapshot-node" bind:this={rightNode2}>
						<div class="snapshot-title">Challenges in Scaling</div>
						<div class="snapshot-text">Manual steps limit our ability to add customers without adding headcount.</div>
					</div>
					<div class="snapshot-node" bind:this={rightNode3}>
						<div class="snapshot-title">Resource Constraints</div>
						<div class="snapshot-text">High-value senior staff consumed by low-value administrative tasks.</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

