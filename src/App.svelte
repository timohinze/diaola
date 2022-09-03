<script>
  import Select from "svelte-select";

  import calcNaehrwertTabelle from "./calcNaehrwertTabelle.svelte";
  import CalcBuch from "./calcBuch.svelte";

  import CalcSavedValues from "./calcSavedValues.svelte";

  import CalcNaehrwertTabelle from "./calcNaehrwertTabelle.svelte";
</script>

<svelte:head>
	<title>DiaOla</title>
	<meta name="robots" content="noindex nofollow" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<html lang="de" />
</svelte:head>

<main>
  <h1>Diaola</h1>

  <div class="component-wrapper">
    <CalcNaehrwertTabelle />
  </div>

  <div class="component-wrapper">
    <CalcSavedValues />
  </div>

  <div class="component-wrapper">
    <CalcBuch />
  </div>
</main>



<style>
  .component-wrapper {
    margin-top: 2rem;
    margin-bottom: 8rem;
  }
  :global(input[type="number"]) {
    padding: 10px;
    font-size: 16px;
    border: 1px solid lightgray;
    outline: 0;
    border-radius: 5px;
    width: 60px;
  }
  :global(input[type="number"]:focus) {
    border: 1px solid blue;
  }

  :global(.result) {
    margin-top: 1rem;
    font-size: 1.25rem;
    padding: 0.5rem;
    border-bottom: 1px solid rgb(0, 0, 0);
    border-top: 1px solid rgb(0, 0, 0);
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  :global(.result > span) {
    width: 50%;
    text-align: left;
  }
  :global(.be) {
    font-size: 0.7em;
  }
</style>
