<script>
  import { enhance } from "$app/forms";
  export let insider;
  export let form;

  function handleRatingSubmit(event) {
    return async ({ result }) => {
      if (result.type === "success") {
        window.location.reload();
      }
    };
  }
</script>

<div class="card">
  <h4 class="card-title">
    <span class="hairtype">{insider.hairtype_id}</span>
    <strong>{insider.tip_for}</strong>
  </h4>
  <p class="card-text">{insider.tip_text}</p>
  <p class="card-rate">★ Rating: {insider.ratingAvg}</p>
  <p class="card-rate">★ Total Ratings: {insider.totalRating}</p>

  <!-- Bewertungsformular -->
  <form
    method="POST"
    action="/insider?/rate"
    class="rating-form"
    use:enhance={handleRatingSubmit}
  >
    <input type="hidden" name="insiderId" value={insider._id} />
    <div class="stars">
      {#each Array(5) as _, i}
        <input
          type="radio"
          id="star-{insider._id}-{i + 1}"
          name="rating"
          value={5 - i}
          required
        />
        <label for="star-{insider._id}-{i + 1}">★</label>
      {/each}
    </div>
    <button type="submit" class="btn btn-primary">Submit Rating</button>
  </form>
</div>

{#if form?.success && form?.ratingId}
  <p class="success">Rating submitted!</p>
{/if}
{#if form?.error}
  <p class="error">{form.error}</p>
{/if}

<style>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 15px;
    width: 100%;
    max-width: 300px;
    height: 300px;
    min-height: 300px;
    background-color: transparent !important;
    border: 1.2px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    overflow: hidden;
    box-shadow: none;
    text-align: left;
  }

  .card-title {
    font-size: 1.5rem;
    font-style: italic;
    font-family: "Roboto", sans-serif;
    color: #000000;
  }

  .hairtype {
    margin-right: 0.5rem;
  }

  .card-text {
    font-size: 1rem;
    font-style: italic;
    font-family: "Roboto", sans-serif;
    font-weight: lighter;
    color: #000000;
    word-wrap: break-word;
    margin: 0;
  }

  .card-rate {
    font-size: 0.8rem;
    font-style: italic;
    font-family: "Roboto", sans-serif;
    font-weight: lighter;
    color: #000000;
    margin: 0;
    line-height: 0;
  }

  .stars {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 5px;
  }

  .stars input[type="radio"] {
    display: none;
  }

  .stars label {
    font-size: 2rem;
    color: gray;
    cursor: pointer;
    transition: color 0.2s ease; /* Sanfter Übergang bei Hover */
  }

  .stars input[type="radio"]:checked ~ label,
  .stars input[type="radio"]:hover ~ label {
    color: gold;
  }

  .stars label:hover,
  .stars input[type="radio"]:hover + label {
    color: gold;
  }

  .btn {
    border-color: black;
    border-width: 2px;
    background-color: transparent;
    font-style: italic;
    font-family: "Roboto", sans-serif;
    color: black;
    font-weight: bold;
    font-size: 0.8rem;
  }
</style>
