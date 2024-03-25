<script>
	import Square from "./square.svelte";

	const squares = Array(16).fill(0);
</script>

<div class="grid">
	{#each squares as _}
		<Square />
	{/each}
</div>

<style>
	.grid {
    height: 100%;
		display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
		gap: 0.5em;
	}
</style>
