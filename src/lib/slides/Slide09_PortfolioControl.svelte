<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center deck-fade deck-rise deck-flow-in">
	<div class="deck-block">
		<div class="deck-wide">
			<div class="deck-subtle">Portfolio control</div>
			<div class="deck-title-md">Aligning all in-flight work</div>
			<div class="deck-body-sm deck-mute deck-hint mb-md">
				A single source of truth for all internal change.
			</div>
			<div class="kanban-board">
				{#each [
					{ title: 'Backlog', cards: ['Legacy Decommission', 'Platform Integration'] },
					{ title: 'Prioritised', cards: ['Operational Efficiency', 'Feature Rollout'] },
					{ title: 'In Progress', cards: ['Data Uplift', 'Security Hardening'] },
					{ title: 'Done', cards: [] }
				] as column}
					<div class="kanban-column">
						<div class="kanban-head">{column.title}</div>
						<ul class="pill-list">
							{#each column.cards as card}<li class="pill">{card}</li>{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

