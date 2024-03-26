<script lang="ts">
	import { createEventDispatcher, onMount } from "svelte";

	export let duration: number;
	export let remaining: number;

	const dispatch = createEventDispatcher();

	let playing = true;

	function countdown() {
		const start = Date.now();
		let remainingAtStart = remaining;

		const loop = () => {
			if (!playing) return;

			requestAnimationFrame(loop);

			remaining = remainingAtStart - (Date.now() - start);

			if (remaining <= 0) {
				playing = false;
				remaining = 0;
				dispatch('end');
			}
		}

		loop();
	}

	onMount(countdown);
</script>

<div class="countdown">
	<button>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path
				d="M15 16h-2V8h2m-4 8H9V8h2m1-6A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
				fill="currentColor"
			/>
		</svg>
	</button>
	<div class="duration">
		<div class="remaining" style="--p: {remaining / duration}" />
	</div>
</div>

<style>
	.countdown {
		display: flex;
		align-items: center;
		gap: 2em;

		& > button {
			font-size: 8em;
			width: 1em;
			aspect-ratio: 1;
			border: none;
			background-color: transparent;
			position: relative;

			& > svg {
				position: absolute;
				inset: 0;
				color: var(--gray-color);
			}
		}

		& .duration {
			flex: 1;
			height: 1.2em;
			background-color: var(--gray-color);
			position: relative;
			border-radius: 1em;
			overflow: hidden;

			& .remaining {
				position: absolute;
				height: 100%;
				width: calc(100% * var(--p));
				background-color: #999;
			}
		}
	}
</style>
