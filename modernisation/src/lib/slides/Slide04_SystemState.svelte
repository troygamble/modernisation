<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
	<div class="deck-block">
		<div class="deck-wide">
			<div class="deck-subtle">System state</div>
			<div class="deck-title-lg">The Structural Barrier to Scale</div>
			<p class="deck-body-lg">
				Our success and growth have naturally introduced complexity. The core issue is that we are currently using BAU delivery mechanisms to try and implement structural change.
			</p>
			<div class="lane-grid fractured">
				<div class="lane-col">
					<div class="lane-head">Project Delivery</div>
					<div class="lane-sub">Scope creep · Timeline slips · Vague reporting</div>
				</div>
				<div class="lane-col">
					<div class="lane-head">Internal Initiatives</div>
					<div class="lane-sub">Competing priorities · Duplicated effort</div>
				</div>
				<div class="lane-col">
					<div class="lane-head">Workflow Automation</div>
					<div class="lane-sub">Manual processes · Tool friction · Untapped data</div>
				</div>
				<div class="lane-col">
					<div class="lane-head">The "BAU" Trap</div>
					<div class="lane-sub" style="color: var(--danger);">Change initiatives buried in operational backlogs</div>
				</div>
			</div>
			<div class="lane-conclusion">
				<div class="conclusion-icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
				</div>
				<div>These are not departmental failures; they are symptoms of a system that lacks the <span class="accent-text">connecting tissue</span> to operate efficiently at scale.</div>
			</div>
		</div>
	</div>
</section>

