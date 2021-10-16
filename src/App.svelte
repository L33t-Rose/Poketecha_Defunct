<script>
  export let name;
  import Router, { replace } from 'svelte-spa-router';
  import routes from './routes';

  function conditionsFailed(event) {
    console.error('conditionsFailed event', event.detail);

    replace('/teams');
  }
</script>

<Router {routes} on:conditionsFailed={conditionsFailed} />

<style global lang="postcss">
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;

  @layer utilities {
    .red-card {
      @apply flex flex-col mb-6 rounded-md  bg-red-200  p-4;
    }

    .offset {
      @apply transform translate-x-4 -translate-y-2;
    }

    .smallCard {
      @apply md:w-56 md:h-64;
    }

    .btn {
    }
    .btn:hover {
      @apply bg-red-500;
    }

    .btn:active svg,
    .btn:focus svg {
      @apply bg-red-500;
      outline: none;
    }
  }
  .center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  body.noscroll {
    overflow: hidden;
  }
</style>
