<script>
  export let data; // Die von der `load`-Funktion bereitgestellten Daten
  const { hairtypes } = data;
</script>

{#each hairtypes as hairtype}
  <a href={"/hairtypes/" + hairtype._id}>
    {hairtype._id}
  </a>
  <p>{hairtype.description}</p>
{/each}
