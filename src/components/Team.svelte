<script>
  import TeamGrid from './TeamGrid.svelte';
  export let team;
</script>

<div
  class="w-full md:w-56 h-72 md:h-64 md:mr-6 red-card shadow-lg flex flex-col"
>
  <h1 class="flex-1 font-bold text-2xl text-red-500 ">{team.name}</h1>
  <TeamGrid />
  <button class="p-2 font-bold text-md text-white bg-red-400 w-36 rounded-md"
    >View Team</button
  >
</div>
