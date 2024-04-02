<script lang="ts">
	import Grid from "./grid.svelte";
  import type { Level } from "$lib/levels";
  import { shuffle } from "$lib/utils";
	import Found from "./found.svelte";
	import Countdown from "./countdown.svelte";
	import { createEventDispatcher } from "svelte";

  export let level: Level;
  
  let { size, duration } = level;
  let remaining = duration;
  let grid: string[] = createGrid(level);
  let found: string[] = [];
  let countdown: Countdown;

  const dispatch = createEventDispatcher();

  function createGrid(level: Level) {
    const emojisCopy = level.emojis.slice();
    const pairs: string[] = [];

    for (let i = 0; i < size * size / 2; i++) {
      const index = Math.floor(Math.random() * emojisCopy.length);
      const [emoji] = emojisCopy.splice(index, 1);
      pairs.push(emoji);
    }

    pairs.push(...pairs);

    return shuffle(pairs);
  }

  function onFound(e: CustomEvent) {
    found = [...found, e.detail.emoji];

    if (found.length === size * size / 2) {
      countdown.pause();
      dispatch('win');
    }
  }

  function onEnd() {
    countdown.pause();
    dispatch('lose');
  }
</script>

<div class="game" style="--size: {size}">
	<div class="info">
    <Countdown
      bind:this={countdown}
      {duration}
      {remaining}
      on:end={onEnd}
      on:pause
      on:play
    />
  </div>
	<div class="grid-container">
  <Grid {grid} {found} on:found={onFound} />
  </div>
	<div class="info">
    <Found {found} />
  </div>
</div>

<style>
	.game {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
    gap: 1em;
    height: 100vh;
    font-size: min(1vmin, 0.3rem);
	}

  .info {
    width: 80em;
    height: 10em;
  }

  .grid-container {
    width: 80em;
    height: 80em;
  }
</style>
