<script lang="ts">
  import { onMount } from 'svelte';

  import PokerControls from './PokerControls.svelte';
  import PokerCard from './PokerCard.svelte';
  import { Card } from './Card';
  import { Deck } from './Deck';
  import type { Advantage } from './Advantage';

  let deck = new Deck();
  let player: Card[] = [];
  let community: Card[] = [];
  let reveal = false;
  let advantage: Advantage = -1;

  onMount(() => {
    reset();
  });

  function reset() {
    deck = new Deck();
    player = [];
    community = [];
    reveal = false;

    // Draw community cards
    for (let i = 0; i < 3; i++) {
      community.push(deck.draw()!);
    }

    // Draw player cards
    for (let i = 0; i < 2; i++) {
      player.push(deck.draw()!);
    }
  }

  function revealCards() {
    reveal = true;
  }
</script>

<div class="container">
  <!-- Community Cards -->
  <div class="columns is-mobile is-centered is-gapless">
    {#each community as card, i}
      <div class="column is-1">
        <PokerCard faceUp={reveal || i == 2 - advantage} {card} />
      </div>
    {/each}
  </div>

  <!-- Player Cards -->
  <div class="columns is-mobile is-centered is-gapless">
    {#each player as card}
      <div class="column is-1">
        <PokerCard faceUp {card} />
      </div>
    {/each}
  </div>

  <!-- PokerControls -->
  <div class="columns is-mobile is-centered is-gapless">
    <div class="column">
      <PokerControls
        bind:advantage
        on:deal={() => reset()}
        on:reveal={() => revealCards()}
      />
    </div>
  </div>
</div>
