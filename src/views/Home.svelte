<script>
    import Modal from "../components/Modal.svelte";
    import {MultiPageForm as Form} from "../components/MultiPageForm.js";
    let text = "";
    let youtube = ""
    let haha = "";
    
    function handleSubmit(e){
        console.log(e);
        text= "";
        youtube= "";
        haha = "";
    }
</script>
<style>
    :global(.indicator){
        @apply bg-red-100 text-gray-900 !important;
    }
    :global(.selected){
        @apply border-red-400 !important;
    }
    :global(#kyle){
        @apply rounded-md;
    }
    :global(#kyle button){
        @apply rounded-sm; 
    }
    input[type="text"]{
        @apply rounded-sm border-red-300 focus:outline-none;
    }
    input[type="radio"]{
        display:inline-block;
		width:auto !important;
    }

</style>
<h1>Hey Whats UP!</h1>
<Modal/>
<Form id="kyle" class="space-y-4 bg-red-200" on:submit={handleSubmit}>
    <svelte:fragment slot="first">
        <label for="fuck">
            Label
        </label>
        <input type="text" name="fuck" required bind:value={text}>
        <label for="youtube">YouTube</label>
        <input type="text" name="youtube" required bind:value={youtube}>
    </svelte:fragment>
    <svelte:fragment slot="second">
        <label for="isCool">Yes</label>
        <input type="radio" name="isCool" value="Yes" required>
        <label for="isCool">Possibly</label>
        <input type="radio" name="isCool" value="Possibly">
        <label for="isCool">Debatable</label>
        <input type="radio" name="isCool" value="Debatable">
        <label for="isCool">No</label>
        <input type="radio" name="isCool" value="No">
    </svelte:fragment>
    <svelte:fragment slot="third">
        <label for="Haha">
            Haha
        </label>
        <input type="text" name="haha" bind:value={haha}>
    </svelte:fragment>
</Form>
<!-- <Form class="space-y-4 bg-gray-700 text-gray-200 space-y-2">
    <label for="fuck">
        Label
    </label>
    <input type="text" name="fuck">
    <label for="youtube">YouTube</label>
    <input type="text" name="youtube">
    <label for="haha">
        Haha
    </label>
    <input type="text" name="haha">
</Form> -->