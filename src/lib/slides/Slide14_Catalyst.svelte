<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
	<div class="deck-wide">
		<div class="deck-subtle">The Strategic Catalyst</div>
		<div class="deck-title-lg">Unlocking Our Next Level of Performance</div>
		<div class="deck-body-sm deck-mute deck-hint mb-lg">
			We have a clear opportunity to evolve our operating model to match our ambition.
		</div>

		<div class="two-paths">
			<!-- Current Trajectory -->
			<div class="path-card current-path">
				<div class="path-title">Our Current Trajectory</div>
				<ul class="pill-list">
					<li class="pill">Growth creates complexity</li>
					<li class="pill">Goodwill absorbs friction</li>
					<li class="pill">Reacting to market shifts</li>
					<li class="pill">Incremental improvements</li>
				</ul>
			</div>
			<!-- The Catalyst -->
			<div class="path-card new-path">
				<div class="path-title">With This 90-Day Catalyst</div>
				<ul class="pill-list">
					<li class="pill">Structure enables scale</li>
					<li class="pill">Systems create capacity</li>
					<li class="pill">Defining the market for customers</li>
					<li class="pill">Step-change in performance & revenue</li>
				</ul>
			</div>
		</div>

		<div class="philosophy-quote mt-lg">
			"We need to build the company internally that we want to be for our customers externally."
		</div>
	</div>
</section>

