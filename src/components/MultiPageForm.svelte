<script>
  import { onMount } from "svelte";
  let form;
  let clazz = "";
  export { clazz as class };
  export let id = "";
  export let title = "";
  let index = 0;
  const length = Object.keys($$slots).length;
  console.log($$slots);

  /**
   * Determines if a group of radio buttons / checkboxes is considered valid.
   * This is done by finding all the input that have the same name and determine if at least one of them is checked
   * (This can be changed using the minNumOfElementsChecked variable).
   * @param {HTMLFormElement} form Parent Form Element
   * @param {string} nameofInputs The value of radio button's name attribute [input type="radio" name="foo"]
   * @param {number} minNumOfElemetsChecked Minimum of elements that should be "checked" in order for the group of checkboxes/radio buttons to be valid
   * @returns {{isValid: boolean, length: number}} [isValid] - resulting boolean, [length] - number of elements checked 
   */
  function validRadioandCheckBox(
    form,
    nameofInputs,
    minNumOfElemetsChecked = 1
  ) {
    let inputs = form.querySelectorAll(`input[name=${nameofInputs}]`);
    let count = 0;

    for (let elem of inputs) {
      if (elem.checked) count++;
    }

    return {
      isValid: count >= minNumOfElemetsChecked,
      length: inputs.length,
    };
  }

  export let validateFn = () => {
    let valid = true;
    let requiredInputs = form.querySelectorAll(
      'form div[class|="svelte"]:not(.gone) input[required]'
    );

    for (let i = 0; i < requiredInputs.length; i++) {
      let input = requiredInputs[i];
      switch (input.type) {
        case "text":
          if (!input.value) {
            valid = valid && false;
          }
          break;
        case "radio":
        case "checkbox":
          let isElemValid = validRadioandCheckBox(form, input.name);
          i += isElemValid.length;
          valid = valid && isElemValid.isValid;
          break;
        default:
      }
    }

    return valid;
  };

  onMount(() => {
    let i = id ? `#${id}` : '';
    form = document.querySelector(`[data-id="customForm"]${i}`);
    console.log(form)
  });

  $: {
    console.log(index);
    if (index <= 0) {
      index = 0;
    } else if (index >= length - 1) {
      index = length - 1;
    }
  }

  function next() {
    if (validateFn()) {
      index++;
    }
  }
  function prev() {
    index--;
  }
</script>

<div {id} class={`${clazz || ""}`} data-id="customForm">
  <h1 class="form-title">
    {title}
  </h1>
  {#if $$slots.default !== true}
    <div class="indicator-container">
      <div
        class="indicator"
        class:gone={!$$slots.first}
        class:selected={index == 0}
      >
        1
      </div>
      <div
        class="indicator"
        class:gone={!$$slots.second}
        class:selected={index == 1}
      >
        2
      </div>
      <div
        class="indicator"
        class:gone={!$$slots.third}
        class:selected={index == 2}
      >
        3
      </div>
      <div
        class="indicator"
        class:gone={!$$slots.fourth}
        class:selected={index == 3}
      >
        4
      </div>
      <div
        class="indicator"
        class:gone={!$$slots.fifth}
        class:selected={index == 4}
      >
        5
      </div>
    </div>
  {/if}
  <form action="" on:submit|preventDefault>
    <slot />
    {#if $$slots.first}
      <div class:gone={index !== 0}>
        <slot name="first" />
      </div>
    {/if}
    {#if $$slots.second}
      <div class:gone={index !== 1}>
        <slot name="second" />
      </div>
    {/if}
    {#if $$slots.third}
      <div class:gone={index !== 2}>
        <slot name="third" />
      </div>
    {/if}
    {#if $$slots.fourth}
      <div class:gone={index !== 3}>
        <slot name="fourth" />
      </div>
    {/if}
    {#if $$slots.fifth}
      <div class:gone={index !== 4}>
        <slot name="fifth" />
      </div>
    {/if}
    {#if index == length - 1}
      <input type="submit">
    {/if}
  </form>
  <div class="button-bar">
    <div class="controller-wrapper">
      <button id="prevBtn" on:click={prev} class:bye={index === 0}>Prev</button>
      <button id="nextBtn" on:click={next} class:bye={index == length - 1}
        >Next</button
      >
    </div>
  </div>
</div>

<style>
  :root {
    --borderColor: black;
  }
  .gone {
    display: none;
  }
  .selected {
    border: 2px solid var(--borderColor);
  }
  .bye {
    visibility: hidden;
  }
  :global([type="text"]){
    border:1px solid gray;
    padding: 4px;
  }
  input[type="submit"]{
    margin-top: 0.5em;
    padding: 0.5em 0;
  }
  button {
    cursor: pointer;
    padding:0.25em 1em;
    background-color: whitesmoke;
    color:black;
  }
  button:hover,button:focus {
    outline:none;
    background-color: black;
    color:white;
  }
  div[data-id="customForm"] {
    min-width: 300px;
    width: 40vw;
    max-width: 350px;
    margin: 0 auto;
    padding: 0.5em;
  }
  .controller-wrapper {
    display: flex;
    justify-content: space-between;
  }
  .indicator-container {
    display: flex;
    justify-content: space-around;
    margin: 1em 0;
  }
  .indicator-container .indicator:not(.gone) {
    background-color: whitesmoke;
    color: black;
    font-size: 1.5rem;
    width: 2em;
    height: 2em;
    display: grid;
    place-items: center;
    border-radius: 50%;
  }
  /* .select */
  div[data-id="customForm"] :global(input:not([type="checkbox"])) {
    width: 100%;
    color: black;
  }
</style>
