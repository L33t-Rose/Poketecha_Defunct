<script>
  import TeamGrid from '../components/TeamGrid.svelte';
  import { onMount } from 'svelte';
  import store from '../store';
  import icons from '../icons';

  export let params = {};
  console.log(params);
  const { team: index } = params;
  const teamInfo = $store.teams[index];
  console.log('this is the team info', teamInfo);

  // console.log($icons);
  // console.log($icons.Bug);
  const type = 'Dragon';
</script>

<p>
  Your name is: <b>{params.first}</b>
  <b>
    {#if params.last}
      {params.last}
    {/if}
  </b>
</p>
<div class="test pb-2 bg-red-100 space-x-1">
  {#each Object.entries($icons) as local, i}
    <div class="inline-block">
      <svelte:component this={$icons['Fire']} />
      <p>x 1</p>
    </div>
  {/each}
  <!-- <Dark /><Dark /><Dark /><Dark /><Dark /><Dark /><Dark /><Dark /><Dark /><Dark/> -->
</div>
<TeamGrid />
<!-- <svelte:component this={Bug} /> -->
<!-- <Dark /> -->
<svelte:component this={$icons[type]} />

<div class="h-8 w-8 bg-red-700" />

<!-- {#await import('../icons/Dark.svelte') then icon}
  <svelte:component this={icon.default} />
{/await} -->
<style>
  .test {
    /* width: 4rem; */
    width: max-content;
    max-width: 12rem;
    /* max-width: 100%; */
    /* height: 4rem; */
    white-space: nowrap;
    overflow-y: hidden;
    overflow-x: scroll;
    /* display: flex; */
    /* flex-shrink: 0; */
  }
  .test :global(svg) {
    display: inline-block;
    width: 4rem !important;
    /* flex-grow: 1; */
    /* width: 100% !important; */
  }
</style>
