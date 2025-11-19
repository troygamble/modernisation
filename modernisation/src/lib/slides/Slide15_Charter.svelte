<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 500 }} out:fade={{ duration: 220 }} class="deck-abs-center">
	<div class="deck-block">
		<div class="deck-wide">
			<div class="deck-subtle">Decision Frame</div>
			<div class="deck-title-xl">The 90-Day Modernisation Charter</div>
			<div class="two-col mt-lg">
				<div class="col">
					<div class="mini-label">The Remit & Authority</div>
					<ul class="pill-list">
						<li class="pill pill-strong" style="color: var(--accent);">Director - Programs, Automation & Modernisation</li>
						<li class="pill pill-strong">Assume ownership of the Governance & PMO uplift.</li>
						<li class="pill pill-strong">Authority to audit and optimise internal toolchains.</li>
						<li class="pill pill-strong">Direct reporting line to the MD for this strategic initiative.</li>
					</ul>
				</div>
				<div class="col">
					<div class="mini-label">The Lean Operating Model</div>
					<ul class="pill-list">
						<li class="pill pill-strong">One dedicated engineering resource (Dylan).</li>
						<li class="pill pill-strong">Operates within existing budgets.</li>
						<li class="pill pill-strong">No new headcount required.</li>
					</ul>
				</div>
			</div>
			<div class="mandate-quote-card mt-lg">
				This is a 90-day mandate to unlock the modern capabilities our customers—and our future—demand.
			</div>
		</div>
	</div>
</section>

