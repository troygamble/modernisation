<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center deck-fade deck-rise deck-flow-in">
	<div class="deck-block">
		<div class="deck-wide">
			<div class="deck-subtle">Portfolio control</div>
			<div class="deck-title-md">Aligning all in-flight work</div>
			<div class="deck-body-sm deck-mute deck-hint mb-md">
				A single source of truth ensuring resources are deployed only against validated priorities.
			</div>
			<div class="kanban-board">
				<div class="kanban-column">
					<div class="kanban-head">Backlog</div>
					<div class="kanban-sub">Capture</div>
					<ul class="pill-list">
						<li class="pill pill-soft">Unfunded Initiatives</li>
						<li class="pill pill-soft">Departmental Requests</li>
						<li class="pill pill-soft">"Nice to have" ideas</li>
					</ul>
				</div>
				<div class="kanban-column">
					<div class="kanban-head">Prioritised</div>
					<div class="kanban-sub">Executive Review</div>
					<ul class="pill-list">
						<li class="pill">Strategic Directives</li>
						<li class="pill">Compliance Requirements</li>
						<li class="pill">ROI-Positive Automation</li>
					</ul>
				</div>
				<div class="kanban-column accent-border">
					<div class="kanban-head">In Progress</div>
					<div class="kanban-sub">Execution</div>
					<ul class="pill-list">
						<li class="pill pill-strong">Active Delivery</li>
						<li class="pill pill-strong">Resource Allocated</li>
						<li class="pill pill-strong">Tracking vs Plan</li>
					</ul>
				</div>
				<div class="kanban-column">
					<div class="kanban-head">Done</div>
					<div class="kanban-sub">Closure</div>
					<ul class="pill-list">
						<li class="pill">Handover to Ops</li>
						<li class="pill">Benefit Realisation</li>
						<li class="pill">Lessons Learned</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.kanban-sub {
		font-size: 0.75rem;
		color: var(--muted);
		margin-bottom: 12px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	.accent-border {
		border-color: var(--accent-soft);
		background: linear-gradient(145deg, #0f141b, #081016);
	}
	/* Override pill styles slightly for this abstract view */
	.pill-soft { opacity: 0.6; }
</style>

