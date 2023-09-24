<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import type { Advantage } from './Advantage';
  import type { GamePhase } from './GamePhase';

  export let phase: GamePhase;
  export let advantage: Advantage = -1;

  const dispatch = createEventDispatcher();
</script>

<div class="columns is-centered">
  <div class="column is-one-fifth">
    <!-- Deal -->
    <button class="button is-link" on:click={() => dispatch('deal')}>
      Deal
    </button>

    <!-- Continue -->
    <button
      class="button is-primary"
      disabled={phase === 'fifth' || (phase === 'fourth' && advantage === 2)}
      on:click={() => dispatch('continue')}
    >
      Continue
    </button>

    <!-- Advantage Selection -->
    <label class="label" for="advantage-selector">Advantage</label>
    <div class="select">
      <select id="advantage-selector" bind:value={advantage}>
        <option value={-1}>None</option>
        <option value={0}>3rd Street</option>
        <option value={1}>4th Street</option>
        <option value={2}>5th Street</option>
      </select>
    </div>
  </div>
</div>
