<script>
  export let insider;
  export let form; // To handle server response
</script>

<div class="card">
  <div class="card-body">
      <h5 class="card-title">
          <span class="hairtype">{insider.hairtype_id}</span> {insider.tip_for}
      </h5>
      <p class="card-text">{insider.tip_text}</p>

      <!-- Display current ratings -->
      <div class="card-ratings">
          <p>Average Rating: {insider.ratingAvg?.toFixed(1) || 0} ⭐</p>
          <p>Total Ratings: {insider.totalRating || 0}</p>
      </div>

      <!-- Rating Form -->
      <form method="POST" action={`/insider/${insider._id}/create`} class="rating-form">
          <input type="hidden" name="insiderId" value={insider._id} />
          <div class="stars">
              {#each Array(5) as _, i}
                  <label>
                      <input
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

      <!-- Success/Error Messages -->
      {#if form?.success}
          <p class="success">Rating successfully added!</p>
      {/if}
      {#if form?.error}
          <p class="error">{form.error}</p>
      {/if}
  </div>
</div>

<style>
  .card {
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 15px;
      margin: 10px;
      width: 300px;
  }

  .card-title {
      font-size: 1.2rem;
      font-weight: bold;
  }

  .card-text {
      margin: 10px 0;
  }

  .card-ratings p {
      margin: 5px 0;
      font-size: 0.9rem;
      color: #666;
  }

  .stars {
      display: flex;
      align-items: center;
      margin: 10px 0;
  }

  .stars label {
      cursor: pointer;
      font-size: 1.5rem;
      color: #ccc;
  }

  .stars input {
      display: none;
  }

  .stars label:hover,
  .stars label:hover ~ label {
      color: gold;
  }

  .success {
      margin-top: 10px;
      color: green;
      font-size: 0.9rem;
  }

  .error {
      margin-top: 10px;
      color: red;
      font-size: 0.9rem;
  }

  .btn {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 3px;
      cursor: pointer;
  }

  .btn:hover {
      background-color: #0056b3;
  }
</style>
