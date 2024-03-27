<script lang="ts">
	import { getTwemojiUrl } from "$lib/utils";
	import { send } from "$lib/transitions";

  export let emoji: string;
  export let selected: boolean;
  export let found: boolean;
  export let group: 'a' | 'b';
</script>

<div class="square" class:flipped={selected || found}>
  <button on:click />
  {#if !found}
    <img 
      out:send={{ key: `${emoji}:${group}` }}
      alt={emoji}
      src={getTwemojiUrl(emoji)}
    />
  {/if}
</div>

<style>
  .square {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--gray-color);
    transform-style: preserve-3d;
    transition: transform 0.5s, background-color 0.5s 0.1s;
    border-radius: 1.5em;

    & > button {
      position: absolute;
      inset: 0;
      border: none;
      background-color: transparent;
    }
    
    & > img {
      width: 5em;
      height: 5em;
      pointer-events: none;
      transform: rotateY(180deg);
      backface-visibility: hidden;
    }
  }

  .flipped {
    background-color: transparent;
    border: .5em solid teal;
    transform: rotateY(180deg);
  }
</style>
