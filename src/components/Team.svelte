<script>
  import { link } from 'svelte-spa-router';
  import TeamGrid from './TeamGrid.svelte';
  export let team;
  export let index = 0;
</script>

<div class="w-60 md:w-56 h-72 md:h-64 md:mr-6 red-card shadow-lg flex flex-col">
  <h1 class="flex-1 font-bold text-2xl text-red-500 ">{team.name}</h1>
  <TeamGrid />
  <a
    class="p-2 font-bold text-md text-white text-center bg-red-400 w-36 rounded-md"
    href="/teams/{index}"
    use:link
  >
    View Team
  </a>
</div>
