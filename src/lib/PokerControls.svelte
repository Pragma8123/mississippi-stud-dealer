<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import type { Advantage } from './Advantage';
  import type { GamePhase } from './GamePhase';

  export let phase: GamePhase;
  export let advantage: Advantage = -1;

  const dispatch = createEventDispatcher();
</script>

<nav class="level is-centered">
  <div class="level-item">
    <div class="field is-grouped">
      <!-- Deal -->
      <div class="control">
        <button class="button is-link" on:click={() => dispatch('deal')}>
          Deal
        </button>
      </div>

      <!-- Continue -->
      <div class="control">
        <button
          class="button is-primary"
          disabled={phase === 'fifth' ||
            (phase === 'fourth' && advantage === 2)}
          on:click={() => dispatch('continue')}
        >
          Continue
        </button>
      </div>
    </div>

    <!-- Advantage Selection -->
    <div class="field">
      <label class="label" for="advantage-selector">Advantage</label>
      <div class="control">
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
  </div>
</nav>
