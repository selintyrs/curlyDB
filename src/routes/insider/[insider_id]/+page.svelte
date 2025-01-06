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


<form method="POST" action="?/create" use:enhance={handleRatingSubmit} class="rating-form">
    <div class="stars">
      {#each Array(5) as _, i}
        <input type="radio" id="star{i + 1}" name="rating" value={5 - i} required />
        <label for="star{i + 1}">★</label>
      {/each}
    </div>
    <button type="submit" class="btn btn-primary">Send Rating</button>
  </form>

  {#if form?.success}
  <p>Successfully added!</p>
{/if}
  
