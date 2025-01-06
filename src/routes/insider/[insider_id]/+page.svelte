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


<form method="POST" action="?/create" use:enhance={handleRatingSubmit}>
    <input type="radio" name="rating" value="1" />
    <input type="radio" name="rating" value="2" />
    <input type="radio" name="rating" value="3" />
    <input type="radio" name="rating" value="4" />
    <input type="radio" name="rating" value="5" />
    <button type="submit">Submit</button>
</form>

  {#if form?.success}
  <p>Successfully added!</p>
{/if}
  
