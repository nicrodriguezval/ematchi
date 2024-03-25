<script lang="ts">
	import Grid from "./grid.svelte";
  import { levels, type Level } from "$lib/levels";

  const level = levels[0];

  const { size } = level;
  let grid = createGrid(level);
  let found: string[] = [];

  function createGrid(level: Level) {
    const emojisCopy = level.emojis.slice();
    const pairs: string[] = [];

    for (let i = 0; i < level.size / 2; i++) {
      const index = Math.floor(Math.random() * emojisCopy.length);
      const [emoji] = emojisCopy.splice(index, 1);
      pairs.push(emoji);
    }

    pairs.push(...pairs);

    return pairs;
  }
</script>

<div class="game">
	<div class="info"></div>
	<div class="grid-container">
    <Grid {grid} />
  </div>
	<div class="info"></div>
</div>

<style>
	.game {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
    height: 100vh;
    font-size: min(1vmin, 0.3rem);
	}

  .info {
    width: 80em;
    height: 10em;
    background-color: #333;
  }

  .grid-container {
    width: 80em;
    height: 80em;
    background-color: teal;
  }
</style>
