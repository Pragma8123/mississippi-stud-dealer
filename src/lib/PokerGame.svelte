<script lang="ts">
  import { onMount } from 'svelte';

  import PokerControls from './PokerControls.svelte';
  import PokerCard from './PokerCard.svelte';
  import { Card } from './Card';
  import { Deck } from './Deck';
  import type { Advantage } from './Advantage';
  import type { GamePhase } from './GamePhase';

  let phase: GamePhase = 'deal';
  let deck = new Deck();
  let player: Card[] = [];
  let community: Card[] = [];
  let advantage: Advantage = -1;

  onMount(() => {
    reset();
  });

  function reset() {
    phase = 'deal';
    deck = new Deck();
    player = [];
    community = [];

    // Draw community cards
    for (let i = 0; i < 3; i++) {
      community.push(deck.draw()!);
    }

    // Draw player cards
    for (let i = 0; i < 2; i++) {
      player.push(deck.draw()!);
    }
  }

  function advancePhase() {
    switch (phase) {
      case 'deal': {
        if (advantage === 0) {
          phase = 'fourth';
        } else {
          phase = 'third';
        }
        break;
      }

      case 'third': {
        if (advantage === 1) {
          phase = 'fifth';
        } else {
          phase = 'fourth';
        }
        break;
      }

      case 'fourth': {
        phase = 'fifth';
        break;
      }
    }
  }
</script>

<div class="container">
  <!-- Community Cards -->
  <div class="columns is-mobile is-centered is-gapless">
    <!-- Fifth Street -->
    <div class="column is-1">
      <PokerCard
        faceUp={phase === 'fifth' || advantage === 2}
        card={community[0]}
      />
    </div>

    <!-- Fourth Street -->
    <div class="column is-1">
      <PokerCard
        faceUp={phase === 'fourth' || phase === 'fifth' || advantage === 1}
        card={community[1]}
      />
    </div>

    <!-- Third Street -->
    <div class="column is-1">
      <PokerCard
        faceUp={phase !== 'deal' || advantage === 0}
        card={community[2]}
      />
    </div>
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
        {phase}
        bind:advantage
        on:deal={() => reset()}
        on:continue={() => advancePhase()}
      />
    </div>
  </div>
</div>
