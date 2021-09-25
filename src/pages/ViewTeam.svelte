<script>
  import { onMount } from 'svelte';
  import Dark from '../icons/Dark.svelte';

  import store from '../store';
  export let params = {};
  const { team: index } = params;
  const teamInfo = $store.teams[index];
  console.log(teamInfo);

  // onMount(async () => {
  //   console.log(await import('../icons/Dragon.svelte'));
  // });
</script>

<p>
  Your name is: <b>{params.first}</b>
  <b
    >{#if params.last}{params.last}{/if}</b
  >
</p>
<div class="test">
  <Dark /><Dark /><Dark /><Dark /><Dark /><Dark /><Dark /><Dark /><Dark /><Dark
  />
</div>

<!-- {#await import('../icons/Dark.svelte') then icon}
  <svelte:component this={icon.default} />
{/await} -->
<style>
  .test {
    /* width: 4rem; */
    width: max-content;
    /* max-width: 12rem; */
    max-width: 100%;
    height: 4rem;
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
