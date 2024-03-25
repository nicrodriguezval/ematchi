<script lang="ts">
  export let emoji: string;
  export let selected = false;
</script>

<div class="square" class:flipped={selected}>
  <button on:click />
  <span>{ emoji }</span>
</div>

<style>
  .square {
    background-color: yellow;
    display: grid;
    place-content: center;
    position: relative;

    & > button {
      position: absolute;
      inset: 0;
      z-index: 0;
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
