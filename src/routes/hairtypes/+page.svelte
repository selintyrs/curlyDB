<script>
    export let data; // Die von der `load`-Funktion bereitgestellten Daten
    const { hairtypes } = data; // Extrahiere die Filme aus den Daten

</script>

{#each hairtypes as hairtype}
  <p>{hairtype.hairtype}</p>
{/each}
  