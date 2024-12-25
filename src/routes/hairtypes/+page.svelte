<script>
  export let data; // Die von der `load`-Funktion bereitgestellten Daten
  const { hairtypes } = data;
</script>



{#each hairtypes as hairtype}
      <tr>
        <td>
          <a href={"/hairtypes/" + hairtype._id}>
            {hairtype._id}
          </a>
        </td>
        <td>{hairtype.description}</td>
        </tr>
{/each}