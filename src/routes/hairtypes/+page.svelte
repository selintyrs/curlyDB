<script>
    export let data; // Die von der `load`-Funktion bereitgestellten Daten
    const { hairtypes } = data;

</script>

{#each hairtypes as hairtype}
  <p>{hairtype.hairtype}</p>
{/each}
  