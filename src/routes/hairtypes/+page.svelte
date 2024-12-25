<script>
  export let data;
  const { hairtypes } = data;
  import HairtypeCard from '$lib/components/HairtypeCard.svelte';
</script>



{#each data.hairtypes as hairtype}
      <tr>
        <td>
          <a href={"/hairtypes/" + hairtype._id}>
            {hairtype._id}
          </a>
        </td>
        <td>{hairtype.description}</td>
        </tr>
{/each}