<script>
  import { onMount } from "svelte";

  import buchBild from "./assets/ke-buch.png";

  let summeKohlenhydratEinheitenBuch = 1;

  let kohlenhydrateBuch = 15;

  let portionGegessen = 15;

  let bolus = 0;

  onMount(() => {
    bolusBerechnenBasedOnBook();
  });

  function bolusBerechnenBasedOnBook() {
    bolus =
      (summeKohlenhydratEinheitenBuch / kohlenhydrateBuch) * portionGegessen;

    bolus = parseFloat(bolus.toFixed(1));

    return bolus;
  }
</script>

<h2>Bolus ausrechnen nach Buch</h2>
<p>Basiert auf dem Buch <i>Kalorien zählen für Diabetiker leicht gemacht</i></p>

<p>
  Benötigt wird aus dem Buch die Menge in Gramm und in KHE für ein Lebensmittel
</p>

<img class="buch" src={buchBild} alt="Buch" />

<p>
  <input
    type="number"
    class="kohlenhydrate-buch"
    bind:value={kohlenhydrateBuch}
    on:input={bolusBerechnenBasedOnBook}
  />
  Gramm des Lebensmittels haben

  <input
    type="number"
    class="portion-ke"
    bind:value={summeKohlenhydratEinheitenBuch}
    on:input={bolusBerechnenBasedOnBook}
  /> KHE
</p>

<p>
  Die Mahlzeit beträgt <input
    type="number"
    class="portion-gegessen"
    bind:value={portionGegessen}
    on:input={bolusBerechnenBasedOnBook}
  /> Gramm
</p>

<br />
<p>Bolus für <i>BolusExpert</i>:</p>

<div class="result">
  <span> KH</span>
  <span><strong> {bolus} </strong><span class="be">BE</span> </span>
</div>

<style>
  .buch {
    width: 300px;
    max-width: 100%;
    height: auto;
  }
</style>
