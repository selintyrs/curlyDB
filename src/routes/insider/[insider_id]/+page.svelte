<script>
    let { data } = $props();
    import { enhance } from "$app/forms";

    function handleRatingSubmit(event) {
    return async ({ result }) => {
      if (result.type === "success") {
        window.location.reload();
      }
    };
  }

  function formatDate(dateString) {
    return new Date(dateString).toLocaleString();
  }
</script>

<h1 class="page-title">{data.insider.insider}</h1>

<form method="POST" action="?/addRating" use:enhance={handleRatingSubmit} class="rating-form">
    <div class="stars">
      {#each Array(5) as _, i}
        <input type="radio" id="star{i + 1}" name="rating" value={5 - i} required />
        <label for="star{i + 1}">★</label>
      {/each}
    </div>
    <button type="submit" class="btn btn-primary">Send Rating</button>
  </form>
