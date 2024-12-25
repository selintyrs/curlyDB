<script>
  export let data; // Die von der `load`-Funktion bereitgestellten Daten
  const { hairtypes } = data;
</script>

{#each hairtypes as hairtype}
  <a href={"/hairtypes/" + hairtypes._id}>
    {artist._id}
  </a>
  <p>{hairtype.hairtype}</p>
{/each}
