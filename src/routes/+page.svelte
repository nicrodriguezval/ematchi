<script lang="ts">
  import '../styles.css';
	import Game from '../components/game.svelte';
	import Modal from '../components/modal.svelte';
	import { levels } from '$lib/levels';

	let state: 'waiting' | 'playing' | 'paused' | 'won' | 'lost' = 'waiting';
</script>

<Game />

{#if state !== 'playing'}
	<Modal>
		<div class="modal-content">
			<header>
				<h1>e<span>match</span>i</h1>
				<p>The emoji matching game</p>
			</header>

			{#if state === 'won' || state === 'lost'}
				<p>You {state} the game!</p>
			{:else if state === 'paused'}
				<p>Game paused</p>
			{:else if state === 'waiting'}
				<p>Choose a level:</p>
			{/if}

			<div class="button">
				{#if state === 'paused'}
					<button>resume</button>
					<button>quit</button>
				{:else}
					{#each levels as level}
						<button>{level.label}</button>
					{/each}
				{/if}
			</div>
		</div>
	</Modal>
{/if}

<style>
	.modal-content {
		color: white;
		text-align: center;

		& h1 {
			font-size: 4em;
			color: white;

			& > span {
				color: var(--primary-color);
			}
		}
	}
</style>