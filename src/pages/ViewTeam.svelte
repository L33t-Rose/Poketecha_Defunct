<script>
  export let params = {};
  console.log(params);
</script>

<p>
  Your name is: <b>{params.first}</b>
  <b
    >{#if params.last}{params.last}{/if}</b
  >
</p>
