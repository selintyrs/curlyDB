<script>
  export let insider;

  // Function to handle form submission without redirection
  async function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload
    const form = new FormData(event.target);

    const response = await fetch('/insider/' + insider._id + '/create', {
      method: 'POST',
      body: form
    });

    const result = await response.json();

    if (result?.form?.success) {
      alert('Rating submitted successfully!');
    } else {
      alert(result?.form?.error || 'An error occurred.');
    }
  }
</script>

<div class="card">
  <div class="card-body">
    <h5 class="card-title">
      <span class="hairtype">{insider.hairtype_id}</span>
      {insider.tip_for}
    </h5>
    <p class="card-text">{insider.tip_text}</p>
    <p>Average Rating: {insider.ratingAvg} ★</p>
    <p>Total Ratings: {insider.totalRating}</p>

    <!-- Rating Form -->
    <form on:submit={handleSubmit} class="rating-form">
      <input type="hidden" name="insiderId" value="{insider._id}" />
      <div class="stars">
        {#each Array(5) as _, index}
          <input
            type="radio"
            id="star-{insider._id}-{5 - index}"
            name="rating"
            value="{5 - index}"
            required
          />
          <label for="star-{insider._id}-{5 - index}">★</label>
        {/each}
      </div>
      <button type="submit" class="btn btn-primary">Submit Rating</button>
    </form>
  </div>
</div>



<style>
  .card {
      display: grid;
      gap: 0.5rem;
      padding: 1rem;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 0.5rem;
      text-align: left;
      background-color: transparent !important;
  }

  .card-title {
      font-size: 1.5rem;
      font-style: italic;
      color: #000;
  }

  .hairtype {
      margin-right: 0.5rem;
  }

  .card-text {
      font-size: 1rem;
  }

  .stars {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }
  input[type='radio'] {
    display: none;
  }
  label {
    font-size: 1.5rem;
    cursor: pointer;
    color: #ccc;
  }
  input[type='radio']:checked ~ label,
  input[type='radio']:checked + label {
    color: gold;
  }
</style>
