<script>

let kohlenhydrateAuf100Gramm =0;

let portionGewicht =0;

let bolus=0;

function bolusAusrechnen(){
  bolus = kohlenhydrateAuf100Gramm/100*portionGewicht/10;
  bolus = parseFloat(bolus.toFixed(1));
  return bolus;
}

</script>


<h2> Bolus ausrechnen bei Angabe der Kohlenhydrate für 100g</h2>
<p>Zum Beispiel in der Nährwerttabelle auf einer Verpackung</p>

<p>Hundert Gramm des Lebensmittels haben <input type=number max="100" class="kohlenhydrate-auf100" bind:value={kohlenhydrateAuf100Gramm} on:input={bolusAusrechnen}  > Gramm Kohlenhydate</p>

<p>Die Portion wiegt <input type=number class="portion-gewicht" bind:value={portionGewicht} on:input={bolusAusrechnen}> Gramm</p>

<br><br><br>
<p> Bolus für <i>BolusExpert</i>: </p>

<div class="result">
  <span> KH</span> <span><strong> {bolus} </strong><span class="be">BE</span> </span>
</div>
