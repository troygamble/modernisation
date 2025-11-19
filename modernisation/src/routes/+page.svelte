<script lang="ts">
	import { checkPassword } from '$lib/gate';
	import Presentation from './Presentation.svelte';

	let access = false;
	let input = '';
	let error = '';

	function enter() {
		if (checkPassword(input)) {
			access = true;
			error = '';
		} else {
			error = 'Incorrect passphrase';
		}
	}

	function onKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			enter();
		}
	}
</script>

{#if !access}
	<div class="gate-shell">
		<div class="gate-panel">
			<div class="gate-title">Access</div>
			<div class="gate-headline">90-Day Strategic Execution Framework</div>
			<div class="gate-label">Passphrase</div>
			<input
				class="gate-input"
				type="password"
				bind:value={input}
				on:keydown={onKeydown}
				autocomplete="off"
				spellcheck="false"
			/>
			{#if error}
				<div class="gate-error">{error}</div>
			{/if}
			<button class="gate-button" on:click={enter}>Enter</button>
		</div>
	</div>
{:else}
	<Presentation />
{/if}
