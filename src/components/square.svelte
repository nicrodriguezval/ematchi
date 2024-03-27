<script lang="ts">
	import { getTwemojiUrl } from "$lib/utils";

  export let emoji: string;
  export let selected: boolean;
  export let found: boolean;
</script>

<div class="square" class:flipped={selected}>
  <button on:click />
  {#if !found}
    <img alt={emoji} src={getTwemojiUrl(emoji)} />
  {/if}
</div>

<style>
  .square {
    position: relative;
    display: grid;
    place-content: center;
    border-radius: 1em;
    overflow: hidden;
    background-color: var(--gray-color);

    & > button {
      position: absolute;
      inset: 0;
      border: none;
      background-color: transparent;
    }
    
    & > img {
      width: 5em;
    }
  }

  .flipped {
    background-color: teal;
  }
</style>
