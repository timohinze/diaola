<script>

  import Select from "svelte-select";

  import { supabase } from "./supaBaseClient";

  import { onMount } from "svelte";
  let importedData;



  // save in Mahlzeit
  import {MahlzeitenStore} from "./store.js"
  $: MahlzeitItems =  $MahlzeitenStore;

  MahlzeitenStore.subscribe((data) => {
  console.log(data) 
    }
  );
  

  let MahlzeitUpdated =false;


function addItemToMahlzeit(){
  let newItem ={
    id: MahlzeitItems.length+1,
    name: selectedItemName,
    gramm: portionGewicht,
    kohlenhydrate: bolusBerechnenBasedOnSavedValues()
  }



  MahlzeitenStore.update((currentData) => {

    MahlzeitUpdated = true;
  return [newItem, ...currentData];



  }
)
};
// save in Mahlzeit








  
  // import data
  onMount(async () => {
    const { data, error } = await supabase.from("Kohlenhydrate").select().order('name', { ascending: true })
    if (error) throw new Error(error.message);
    importedData = data;
  });

  //Identifier for Select Field
  const optionIdentifier = "id";
  const labelIdentifier = "name";

  let selectedItemName = null;
  let selectedItemKohlenhydrate = null;

  function handleSelect(event) {
    // console.log('selected item', event.detail);
    selectedItemName = event.detail.name;
    selectedItemKohlenhydrate = event.detail.kohlenhydrate;

    bolusBerechnenBasedOnSavedValues();
  }

  let portionGewicht = null;
  let bolus = null;

  function bolusBerechnenBasedOnSavedValues() {
    bolus = ((selectedItemKohlenhydrate / 100) * portionGewicht) / 10;
    bolus = parseFloat(bolus.toFixed(1));
    return bolus;
  }
</script>

<h2>Bolus ausrechnen mit hinterlegten Werten</h2>

<Select
  {optionIdentifier}
  {labelIdentifier}
  items={importedData}
  placeholder="Suche…"
  on:select={handleSelect}
/>

<p>
  Die Portion wiegt <input
    type="number"
    class="portion-gewicht"
    inputmode="numeric" pattern="[0-9]*"
    bind:value={portionGewicht}
    on:input={bolusBerechnenBasedOnSavedValues}
  /> Gramm
</p>

<br>

{#if bolus != null && portionGewicht != null}
  <p>Bolus für <i>BolusExpert</i>:</p>

  <div class="result">
    <span> KH</span>
    <span><strong> {bolus} </strong><span class="be">BE</span> </span>
  </div>
{/if}


<!-- save to Mahlzeit -->
<br>

<button on:click="{addItemToMahlzeit}">In Mahlzeit speichern</button>

{#if MahlzeitUpdated}
  <p>√</p>
{/if}