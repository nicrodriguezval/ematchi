<script lang="ts">
  import '../styles.css';
	import Game from '../components/game.svelte';
	import Modal from '../components/modal.svelte';
	import { levels, type Level } from '$lib/levels';
	import { confetti } from '@neoconfetti/svelte';

	let state: 'waiting' | 'playing' | 'paused' | 'won' | 'lost' = 'waiting';
	let level: Level;
</script>

{#if level}
	<Game
		{level}
		on:pause={() => state = 'paused'}
		on:play={() => { state = 'playing' }}
		on:win={() => state = 'won'}
		on:lose={() => state = 'lost'}
	/>
{/if}

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
					{#each levels as l}
						<button on:click={() => level = l}>
							{l.label}
						</button>
					{/each}
				{/if}
			</div>
		</div>
	</Modal>
{/if}

{#if state === 'won'}
	<div class="confetti" use:confetti={{
		stageWidth: innerWidth,
		stageHeight: innerHeight,
	}}/>
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

	.confetti {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 50%;
		top: 30%;
		pointer-events: none;
	}
</style>