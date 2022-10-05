<script>
//
//import {MahlzeitenStore, totalBolus} from "./store.js"

import {MahlzeitenStore} from "./store.js"
import calcNaehrwertTabelle from "./calcNaehrwertTabelle.svelte"
import { onMount } from "svelte";
let MahlzeitenData;

MahlzeitenStore.subscribe((data) => {
  MahlzeitenData=data;

  }
);
///

//

let deleteFromMahlzeit = id => {
  console.log(id);
  MahlzeitenData = MahlzeitenData.filter(MahlzeitenData => MahlzeitenData.id !== id);
 
  caclculateTotalBolus();

};

let totalBolus = 0
$: totalBolus = totalBolus;



// let caclculateTotalBolus = totalBolus => {
// 		let kohlenhydrate = 0
// 		MahlzeitenData.forEach(e => kohlenhydrate = kohlenhydrate+e.kohlenhydrate)
//     console.log(kohlenhydrate);
//     totalBolus = kohlenhydrate;
// 	};

function caclculateTotalBolus(){
		let kohlenhydrate = 0
		MahlzeitenData.forEach(e => kohlenhydrate = kohlenhydrate+e.kohlenhydrate)
    console.log(kohlenhydrate);
    totalBolus = kohlenhydrate;
	};



  onMount(() => {
    caclculateTotalBolus();
    console.log("mount");
  });



</script>


<div class="mahlzeit-modal">
<h2>Mahlzeit</h2>
<ul class="mahlzeit">


{#each MahlzeitenData as Mahlzeit}
 <li>{Mahlzeit.gramm}g {Mahlzeit.name} = {Mahlzeit.kohlenhydrate} KHE <button on:click={() => deleteFromMahlzeit(Mahlzeit.id)}>löschen</button></li>
{/each}
</ul>


 {#if MahlzeitenData.length > 0} 
<br>
<p> Bolus für <i>BolusExpert</i>: </p>

<div class="result">
  <span> KH</span> <span><strong> {totalBolus} </strong><span class="be">BE</span> </span>
</div>
{/if}

</div>


<style>
  .mahlzeit{
    width: 100%;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
  }
  .mahlzeit li{
    border-bottom: 1px solid black;
    list-style: none;
    padding: 0.5rem;
  }
  .mahlzeit li:first-child{
    border-top: 1px solid black;
  }

  .mahlzeit-modal{
  
    position: fixed;
    background: rgba(255, 255, 255, 0.85);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(15px);
    z-index: 10;
  }
</style>