<script lang="ts">
	export let found: string[];
</script>

<div class="found">
	{#each found as emoji (emoji)}
		<span>{emoji}</span>
	{/each}
</div>

<style>
	.found {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1em;
		height: 100%;

		& > span {
			font-size: 4em;
		}
	}
</style>