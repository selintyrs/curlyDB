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
    <div>
        {#each Array(5) as _, i}
            <label>
                <input type="radio" name="rating" value="{i + 1}" required />
                {i + 1} ★
            </label>
        {/each}
    </div>
    <button type="submit">Submit</button>
</form>
