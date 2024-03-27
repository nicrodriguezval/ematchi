<script lang="ts">
	import { getTwemojiUrl } from "$lib/utils";

	export let found: string[];
</script>

<div class="found">
	{#each found as emoji (emoji)}
		<img alt={emoji} src={getTwemojiUrl(emoji)} />
	{/each}
</div>

<style>
	.found {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1em;
		height: 100%;

		& > img {
			width: 5em;
		}
	}
</style>