<script>
  import { supabase } from "./supaBaseClient";

  let kohlenhydrateAuf100Gramm =0;

let portionGewicht =0;

let bolus=0;

  //
  import {MahlzeitenStore} from "./store.js"

  MahlzeitenStore.subscribe((data) => {
  console.log(data) 
    }
  );
  

  let MahlzeitUpdated =false;


function addItemToMahlzeit(){
  let newItem ={
    id: 1,
    name: nameLebensmittel,
    gramm: portionGewicht,
    kohlenhydrate: bolusAusrechnen()
  }



  MahlzeitenStore.update((currentData) => {

    MahlzeitUpdated = true;
  return [newItem, ...currentData];



  }
)
};
//

console.log(MahlzeitenStore)












function bolusAusrechnen(){
  bolus = kohlenhydrateAuf100Gramm/100*portionGewicht/10;
  bolus = parseFloat(bolus.toFixed(1));
  return bolus;
}





//save to db

let  saveToDB = false;
let nameLebensmittel;
let saved = false;

  const addToDatabse = async () => {
    try{
        const { data, error } = await supabase
            .from('Kohlenhydrate')
            .insert([{name: nameLebensmittel, kohlenhydrate: kohlenhydrateAuf100Gramm}])
            if (error) throw new Error(error.message);
    }
            finally{
              saved = true;
            }
    };









</script>


<h2> Bolus ausrechnen bei Angabe der Kohlenhydrate für 100g</h2>
<p>Zum Beispiel in der Nährwerttabelle auf einer Verpackung</p>

<p>Hundert Gramm des Lebensmittels haben <input type=number max="100" inputmode="numeric" pattern="[0-9]*" class="kohlenhydrate-auf100" bind:value={kohlenhydrateAuf100Gramm} on:input={bolusAusrechnen}  > Gramm Kohlenhydate</p>

<p>Die Portion wiegt <input type=number class="portion-gewicht" inputmode="numeric" pattern="[0-9]*" bind:value={portionGewicht} on:input={bolusAusrechnen}> Gramm</p>




<br>
<p> Bolus für <i>BolusExpert</i>: </p>

<div class="result">
  <span> KH</span> <span><strong> {bolus} </strong><span class="be">BE</span> </span>
</div>

<!-- save to Mahlzeit -->
<br>
<input class="name-lebensmittel"  type="text" placeholder="Name des Lebensmittels" bind:value={nameLebensmittel}  />

<button on:click="{addItemToMahlzeit}">In Mahlzeit speichern</button>

{#if MahlzeitUpdated}
  <p>√</p>
{/if}




<!-- save to db -->
<br><br>
<label>
	<input type=checkbox bind:checked={saveToDB}>
	In Datenbank speichern
</label>

{#if saveToDB }
<div class="save-dialog">
  <br>
  <input class="name-lebensmittel"  type="text" placeholder="Name des Lebensmittels" bind:value={nameLebensmittel}  />
  <br>
  <button on:click|once={addToDatabse}>In Datenbank speichern</button>

  {#if saved}
  <p>Gespeichert!</p>
  {/if}

</div>
{/if}

<br><br>



<style>
  .save-dialog{
    background-color: rgba(255, 255, 107, 0.409);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 1rem;
}
  

</style>

