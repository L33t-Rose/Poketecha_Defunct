<script>
  import Team from '../components/Team.svelte';
  import teamSchema from '../utils/utils';
  const tempTeam = teamSchema();
  tempTeam.name = 'Junior Jean';
</script>

<!-- <div class="h-20 w-full bg-[#F87171]" />
<svg
  width="1920"
  height="332"
  viewBox="0 0 1920 332"
  class="w-full h-auto -mt-1"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  <path
    d="M728.042 218.872C589.5 140 338.624 139.262 0 332V0.5H1920V205C1920 258.5 1766 70 1540 179.5C1394.5 295 1051 358.5 728.042 218.872Z"
    fill="#F87171"
  />
</svg> -->

<!-- <svg
  data-name="Layer 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1200 120"
  preserveAspectRatio="none"
>
  <path
    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
    class="shape-fill"
    fill="#F87171"
  />
</svg> -->

<!-- <svg
        width="1920"
        height="332"
        viewBox="0 0 1920 332"
        class="w-full h-auto absolute inset-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M728.042 218.872C589.5 140 338.624 139.262 0 332V0.5H1920V205C1920 258.5 1766 70 1540 179.5C1394.5 295 1051 358.5 728.042 218.872Z"
          fill="#F87171"
        />
      </svg> -->

<header class="min-h-[50vh]  relative grid place-items-center overflow-hidden">
  <div class="absolute inset-0 ">
    <div class=" w-full bg-darkred h-1/2 md:h-1/4" />
    <svg
      width="1920"
      height="332"
      viewBox="0 0 1920 332"
      class="w-full h-auto -mt-1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M728.042 218.872C589.5 140 338.624 139.262 0 332V0.5H1920V205C1920 258.5 1766 70 1540 179.5C1394.5 295 1051 358.5 728.042 218.872Z"
        fill="#F87171"
      />
    </svg>
  </div>
  <div
    class="container mx-auto px-10 relative z-10 flex flex-col md:flex-row pt-4 md:pt-0 space-y-4 md:space-y-0"
  >
    <div class="flex-1 space-y-2">
      <h1 class="font-bold text-white text-4xl">PokeTecha</h1>
      <p class=" !text-white text-2xl">Search Any Pokemon</p>
      <p class=" !text-white text-2xl">Build Any Team</p>
    </div>
    <!-- <div class="whitespace-nowrap w-1/2 mr-0">
      <div
        class="relative inline-block transform translate-y-3 z-10 mt-3 flex-none"
      >
        <Team team={tempTeam} />
      </div>
      <div class="relative z-0 inline-block transform -translate-x-3/4">
        <Team team={tempTeam} />
      </div>
    </div> -->
    <div class="mr-0 relative grid place-items-center">
      <div class="relative inline-block z-10 mt-3 flex-none">
        <Team team={tempTeam} />
      </div>
      <div class="absolute top-0 right-7 md:right-0 md:left-3 z-0 inline-block">
        <Team team={tempTeam} />
      </div>
    </div>
    <!-- <div class="z-[3]">
        <Team team={tempTeam} />
      </div> -->
  </div>
</header>
<section class="min-h-[50vh]">
  <div class="container mx-auto px-10 ">
    <p>Balls</p>
  </div>
</section>

<style lang="postcss">
  :global(body) {
    @apply bg-red-100;
  }
</style>
