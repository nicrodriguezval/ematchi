<script lang="ts">
	import { getTwemojiUrl } from "$lib/utils";
	import { receive } from "$lib/transitions";

	export let found: string[];
</script>

<div class="found">
	{#each found as emoji (emoji)}
		<div class="pair">
			<img
				in:receive={{ key: `${emoji}:a` }}
				alt={emoji}
				src={getTwemojiUrl(emoji)}
			/>
			<img
				in:receive={{ key: `${emoji}:b`  }}
				alt={emoji}
				src={getTwemojiUrl(emoji)}
			/>
	</div>
	{/each}
</div>

<style>
	.found {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2em;
		height: 100%;	
	}

	.pair {
		width: 6.5em;
		aspect-ratio: 1;
		position: relative;
		border-radius: 50%;
		background-color: white;

		& > img {
			position: absolute;
			inset: 1.2em;
		}
	}
</style>