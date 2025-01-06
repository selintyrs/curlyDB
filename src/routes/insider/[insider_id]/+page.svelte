<script>
    import { enhance } from '$app/forms';

    export let data;

    function handleSubmit(event) {
    return async ({ result }) => {
      if (result.type === "success") {
        window.location.reload();
      }
    };
  }
</script>

<h1 class="page-title">{data.insider.tip_for}</h1>

<form method="POST" action="?/create" use:enhance={handleSubmit} class="rating-form">

    <input type="hidden" name="insiderId" value={data.insider._id} />

    <div class="stars">
        {#each Array(5) as _, i}
            <input
                type="radio"
                id="star{i + 1}"
                name="rating"
                value={5 - i}
                required
            />
            <label for="star{i + 1}">★</label>
        {/each}
    </div>
    <button type="submit" class="btn btn-primary">Send Rating</button>
</form>
