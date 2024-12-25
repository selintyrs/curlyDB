<script>
let {data}  = $props();
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