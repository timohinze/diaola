<script>
  import Select from "svelte-select";

  import calcNaehrwertTabelle from "./calcNaehrwertTabelle.svelte";
  import CalcBuch from "./calcBuch.svelte";

  import CalcSavedValues from "./calcSavedValues.svelte";

  import CalcNaehrwertTabelle from "./calcNaehrwertTabelle.svelte";

  import CalcMahlzeitenVarianten from "./calcMahlzeitenVarianten.svelte";

  //
  import {MahlzeitenStore} from "./store.js"
  $: MahlzeitenImport = MahlzeitenStore;
  import Mahlzeit from "./Mahlzeit.svelte";

  $: MahlzeitItems =  $MahlzeitenStore;


  //
  let newItem ={  }

function addItemToMahlzeit(){
MahlzeitenImport.update((currentData) => {

  return [newItem, ...currentData];
  }
)
};
//

let openMahlzeitModal = false;


//
function toggleMahlzeit(){
  openMahlzeitModal =!openMahlzeitModal;
}
//



</script>

<svelte:head>
	<title>DiaOla</title>
	<meta name="robots" content="noindex nofollow" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<html lang="de" />
</svelte:head>


<main>
  <h1>DiaOla</h1>

  {#if MahlzeitItems.length >= 1}
  <div class="btn-wrapper">
  <button class="mahlzeit-zeigen-btn" on:click="{toggleMahlzeit}">Mahlzeit  {#if openMahlzeitModal == true} schließen {:else} zeigen {/if}({MahlzeitItems.length})</button>
</div>
{/if}

  {#if openMahlzeitModal == true}
<Mahlzeit></Mahlzeit>
{/if}


<div class="component-wrapper">
    <CalcNaehrwertTabelle />
  </div>


  <div class="component-wrapper">
    <CalcSavedValues />
  </div>

  <div class="component-wrapper">
    <CalcBuch />
  </div>

<div class="component-wrapper">
  <CalcMahlzeitenVarianten></CalcMahlzeitenVarianten>
</div>

</main>



<style>
  .component-wrapper {
    margin-top: 2rem;
    margin-bottom: 8rem;
  }
  :global(input[type="number"]),
  :global(input[type="text"]) {
    padding: 10px;
    font-size: 16px;
    border: 1px solid lightgray;
    outline: 0;
    border-radius: 5px;
    width: 60px;
  }
  :global(input[type="text"]) {
    width: auto;
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

  .btn-wrapper{
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 11;
    background: rgba(255, 255, 255, 0.846);
    width: 100%;
    border-top: 1px solid black;
    backdrop-filter: blur(5px);
  }
</style>
