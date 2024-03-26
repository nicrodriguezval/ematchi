<script lang="ts">
  export let emoji: string;
  export let selected: boolean;
  export let found: boolean;
</script>

<div class="square" class:flipped={selected}>
  <button on:click />
  {#if !found}
    <span>{ emoji }</span>
  {/if}
</div>

<style>
  .square {
    position: relative;
    display: grid;
    place-content: center;
    border-radius: 1em;
    overflow: hidden;

    & > button {
      position: absolute;
      inset: 0;
      z-index: 0;
      border: none;
    }
    
    & > span {
      font-size: 5em;
      z-index: 1;
    }
  }

  .flipped {
    & > button {
      background-color: teal;
    }
  }
</style>
