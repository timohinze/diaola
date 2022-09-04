<script>
    let kohlenhydrateAuf100Gramm = 0;

    let gewichtVarianten = "20, 30, 50, 70, 80, 120";

    let gewichtVariantenArray = Array();

    let bolus = 0;

    function buildGewichtVariantenArray() {
        gewichtVariantenArray = gewichtVarianten.split(",");
    }

    function bolusAusrechnenNachGewicht(gewicht) {
        bolus = ((kohlenhydrateAuf100Gramm / 100) * gewicht) / 10;
        bolus = parseFloat(bolus.toFixed(1));

        return bolus;
    }
</script>

<h2>Mahlzeitengrößen Varianten errechnen</h2>
<p>Zum Beispiel für den Kindergarten</p>

<p>
    Hundert Gramm des Lebensmittels haben <input
        type="number"
        max="100"
        class="kohlenhydrate-auf100"
        bind:value={kohlenhydrateAuf100Gramm}
        on:input={buildGewichtVariantenArray}
    /> Gramm Kohlenhydate
</p>

<p>
    Varianten: <input
        type="text"
        class="varianten"
        bind:value={gewichtVarianten}
        on:input={buildGewichtVariantenArray}
    /> Gramm
</p>

<ul class="varianten">
    {#each gewichtVariantenArray as gewicht}
        <li>{gewicht}g = {bolusAusrechnenNachGewicht(gewicht)} KHE</li>
    {/each}
</ul>

<style>
    .varianten li {
        padding: 8px;
        border-bottom: 1px solid grey;
        list-style-type: none;
    }
</style>
