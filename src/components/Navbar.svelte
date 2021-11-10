<script>
  import { link } from 'svelte-spa-router';
  let showMenu = false;
  function toggleMenu() {
    showMenu = !showMenu;
  }
</script>

<nav class="bg-darkred fixed top-0 w-full py-4 shadow-md z-20">
  <!-- logo -->
  <!-- <a href="/"><span>PokeTecha</span></a> -->
  <div class="container mx-auto px-10 lg:px-20 flex">
    <div class="w-full md:w-auto flex">
      <p class="text-white text-2xl font-bold flex-1 md:flex-none">Test</p>
      <button on:click={toggleMenu} class="block sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <ul
      class="hidden sm:flex flex-1 justify-end items-center space-x-6 font-bold"
    >
      <li>Team</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    <div class="flex flex-1 justify-end items-center sm:hidden p-2" />
  </div>
  {#if showMenu}
    <ul
      class="flex flex-col sm:hidden flex-1 justify-end items-center font-bold"
    >
      <li>Team</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  {/if}
  <!-- primary nav -->

  <!-- icon -->
</nav>
