<script>
  export let insider; // Data for this card
  export let form; // For handling server responses
</script>

<div class="card" style="width: 18rem;">
  <div class="card-body">
      <h5 class="card-title">
          <span class="hairtype">{insider.hairtype_id}</span> {insider.tip_for}
      </h5>
      <p class="card-text">{insider.tip_text}</p>

      <!-- Display Ratings -->
      <p>Average Rating: {insider.ratingAvg?.toFixed(1) || 0} ⭐</p>

      <!-- Rating Form -->
      <form method="POST" action={`/insider/${insider._id}/create`} class="rating-form">
          <input type="hidden" name="insiderId" value={insider._id} />
          <div class="stars">
              {#each Array(5) as _, i}
                  <label for={`star-${insider._id}-${i + 1}`}>
                      <input
                          id={`star-${insider._id}-${i + 1}`}
                          type="radio"
                          name="rating"
                          value={5 - i}
                          required
                      />
                      ★
                  </label>
              {/each}
          </div>
          <button type="submit" class="btn btn-primary">Submit Rating</button>
      </form>

      <!-- Form Feedback -->
      {#if form?.success}
          <p style="color: green;">Rating successfully added!</p>
      {/if}
      {#if form?.error}
          <p style="color: red;">{form.error}</p>
      {/if}
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
      justify-content: start;
      gap: 0.2rem;
      margin: 0.5rem 0;
  }

  .stars label {
      cursor: pointer;
      font-size: 1.5rem;
      color: #ddd;
  }

  .stars input {
      display: none;
  }


  .stars label:hover,
  .stars label:hover ~ label {
      color: gold;
  }

  .btn-primary {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      cursor: pointer;
  }

  .btn-primary:hover {
      background-color: #0056b3;
  }
</style>
