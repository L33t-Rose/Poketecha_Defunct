<script>
  import store from '../store';
  export let params = {};
  const { team: index } = params;
  const teamInfo = $store.teams[index];
  console.log(teamInfo);
</script>

<p>
  Your name is: <b>{params.first}</b>
  <b
    >{#if params.last}{params.last}{/if}</b
  >
</p>
