<script>
  import Select from "svelte-select";

  import { supabase } from "./supaBaseClient";

  import { onMount } from "svelte";
  let importedData;

  // import data
  onMount(async () => {
    const { data, error } = await supabase.from("Kohlenhydrate").select();
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
