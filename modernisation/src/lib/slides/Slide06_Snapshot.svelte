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
	let viewBoxDimensions = '0 0 1000 600';

	// Calculate line positions based on actual DOM positions
	function updateLinePositions() {
		if (!containerRef || !svgRef || !coreRef || !leftNode1 || !leftNode2 || !leftNode3 || !rightNode1 || !rightNode2 || !rightNode3) {
			return;
		}

		// Get the SVG's actual rendered dimensions
		const svgRect = svgRef.getBoundingClientRect();
		const containerRect = containerRef.getBoundingClientRect();

		// Set viewBox to match SVG's exact pixel dimensions for 1:1 coordinate mapping
		viewBoxDimensions = `0 0 ${svgRect.width} ${svgRect.height}`;

		// Calculate positions relative to the SVG element (not container)
		const coreRect = coreRef.getBoundingClientRect();
		const circleCenterX = coreRect.left + coreRect.width / 2 - svgRect.left;
		const circleCenterY = coreRect.top + coreRect.height / 2 - svgRect.top;

		const leftNodes = [leftNode1, leftNode2, leftNode3];
		const rightNodes = [rightNode1, rightNode2, rightNode3];

		const newLines = [];

		// Left side lines - connect from right edge center of box to circle center
		leftNodes.forEach(node => {
			const rect = node.getBoundingClientRect();
			const x1 = rect.right - svgRect.left; // Right edge relative to SVG
			const y1 = rect.top + rect.height / 2 - svgRect.top; // Vertical center relative to SVG
			newLines.push({ x1, y1, x2: circleCenterX, y2: circleCenterY });
		});

		// Right side lines - connect from left edge center of box to circle center
		rightNodes.forEach(node => {
			const rect = node.getBoundingClientRect();
			const x1 = rect.left - svgRect.left; // Left edge relative to SVG
			const y1 = rect.top + rect.height / 2 - svgRect.top; // Vertical center relative to SVG
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
		}, 50);

		// Update on window resize with debounce
		let resizeTimeout;
		const handleResize = () => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(updateLinePositions, 100);
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
			<svg class="snapshot-lines" bind:this={svgRef} viewBox="{viewBoxDimensions}" preserveAspectRatio="none">
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

