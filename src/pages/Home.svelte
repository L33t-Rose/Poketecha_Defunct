<script>
  import Team from '../components/Team.svelte';
  import Navbar from '../components/Navbar.svelte';
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
<Navbar />
<header
  class="min-h-[50vh] overflow-auto mt-16 relative grid place-items-center"
>
  <div class="absolute inset-0 ">
    <div class=" w-full bg-darkred h-1/2 lg:h-20" />
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
    class="container mx-auto px-10 lg:px-20 relative z-10 flex flex-col md:flex-row pt-4 md:pt-0 space-y-4 md:space-y-0"
  >
    <div class="flex-1 space-y-2">
      <h1 class="font-bold text-white text-4xl">PokeTecha</h1>
      <p class=" !text-white text-2xl">Search Any Pokemon</p>
      <p class=" !text-white text-2xl">Build Any Team</p>
    </div>
    <div
      class="mr-0 relative flex-1 z-0 grid place-items-center md:place-items-start"
    >
      <div class="relative z-10 mt-3 flex-none">
        <Team team={tempTeam} />
      </div>
      <div
        class="absolute top-0 left-1/2 translate-x-[calc(-50%+1rem)] md:-translate-x-0 md:left-4 z-[1]"
      >
        <Team team={tempTeam} />
      </div>
      <p>Junior</p>
    </div>
    <!-- <div class="z-[3]">
        <Team team={tempTeam} />
      </div> -->
  </div>
</header>
<section class="min-h-[50vh] pb-4 ">
  <div class="container mx-auto px-10 lg:px-20 ">
    <h1 class="font-bold text-darkred text-4xl">Balls</h1>
    <div class="flex flex-wrap flex-col sm:flex-row w-full gap-2 lg:gap-20 ">
      <div class="bg-darkred flex-1 p-4 rounded-md space-y-3">
        <h3 class="text-white font-semibold text-2xl">Build Any Team</h3>
        <div class="space-y-1 text-white text-xl">
          <p>Create your dream team with our team builder</p>
          <p>Add the pokemon of your choice</p>
          <p>Get an overview of your team</p>
          <p>Make necessary changes</p>
        </div>

        <button
          class="bg-red-600 hover:bg-red-700 text-white text-lg font-medium px-3 py-2 rounded-md "
          >View Demo</button
        >
      </div>
      <div class="bg-darkred flex-1 p-4 rounded-md space-y-3">
        <h3 class="text-white font-semibold text-2xl">Search Any Pokemon</h3>
        <div class="space-y-1 text-white text-xl">
          <p>Search any Pokemon from any generation</p>
          <p>Add It To Your Team</p>
          <p>Get An Overview Of A Pokemon</p>
          <p>Make necessary changes</p>
        </div>

        <button
          class="bg-red-600 hover:bg-red-700 text-white text-lg font-medium px-3 py-2 rounded-md "
          >View Demo</button
        >
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  :global(body) {
    @apply bg-red-100;
  }
</style>
