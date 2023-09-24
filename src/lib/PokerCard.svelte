<script lang="ts">
  import { Card } from './Card';

  export let faceUp: boolean = true;
  export let card: Card;
</script>

{#if faceUp}
  <img
    src={`/${card.suit}-${card.value}.svg`}
    alt={`${card.suit}-${card.value}`}
    height="154"
    width="112"
  />
{:else}
  <img src="/blue-back.png" alt="" height="154" width="112" />
{/if}
