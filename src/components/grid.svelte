<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Square from "./square.svelte";

	export let grid: string[];
	export let found: string[];

	const dispatch = createEventDispatcher();

	let a = -1;
	let b = -1;
	let resetTimeout: number;

	function onSelect(i: number) {
		clearTimeout(resetTimeout);

		if (a === -1 && b === -1) {
			a = i;
		} else if (b === -1) {
			b = i;

			if (grid[a] === grid[b]) {
				dispatch('found', { emoji: grid[a] });
			} else {
				resetTimeout = setTimeout(() => {
					a = b = -1;
				}, 1000);
			}
		} else {
			a = i;
			b = -1;
		}
	}
</script>

<div class="grid">
	{#each grid as emoji, i}
		<Square
			{emoji}
			selected={a === i || b === i}
			found={found.includes(emoji)}
			on:click={() => onSelect(i)}
		/>
	{/each}
</div>

<style>
	.grid {
    height: 100%;
		display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
		gap: 0.75em;
		perspective: 100vw;
	}
</style>
