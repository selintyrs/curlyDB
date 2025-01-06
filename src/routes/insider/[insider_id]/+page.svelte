<script>
  import { enhance } from "$app/forms";
  export let data;

    function handleRatingSubmit(event) {
    return async ({ result }) => {
      if (result.type === "success") {
        window.location.reload();
      }
    };
  }
</script>

<h1 class="page-title">{data.insider.tip_for}</h1>


<form method="POST" action="?/create">
    <input type="hidden" name="insiderId" value="{data.insider._id}" />
    {#each Array(5) as _, i}
        <input type="radio" name="rating" value="{i + 1}" required />
    {/each}
    <button type="submit">Send Rating</button>
</form>


  {#if form?.success}
  <p>Successfully added!</p>
{/if}
  
