<script>
  export let insider; // Insider-Daten
  export let form; // Form-Ergebnis von der Action
</script>

<div class="card">
  <h4 class="card-title">
    <span class="hairtype">{insider.hairtype_id}</span> <strong>{insider.tip_for}</strong>
  </h4>
  <p class="card-text">{insider.tip_text}</p>
  <p class="card-rate">★ Rating: {insider.ratingAvg} ★ </p>
  <p class="card-rate">★ Total: {insider.totalRating} ★</p>

  <!-- Bewertungsformular -->
  <form method="POST" action="/insider?/rate" class="rating-form">
    <input type="hidden" name="insiderId" value="{insider._id}" />
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

  <!-- Erfolg- oder Fehlermeldung -->
  {#if form?.success && form?.ratingId}
    <p class="success">Rating submitted successfully!</p>
  {/if}
  {#if form?.error}
    <p class="error">{form.error}</p>
  {/if}
</div>


<style>
.card {
    display: flex;
    flex-direction: column; /* Damit Inhalte gestapelt werden */
    justify-content: space-between; /* Platz zwischen den Elementen */
    align-items: stretch;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 15px;
    width: 100%;
    max-width: 300px; /* Maximalbreite für Konsistenz */
    height: 300px; /* Feste Höhe für alle Karten */
    min-height: 300px; /* Mindesthöhe für alle Karten */
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

  .stars input[type="radio"] {
    display: none;
  }
  .stars label {
    font-size: 2rem;
    color: gray;
    cursor: pointer;
  }
  .stars input[type="radio"]:checked ~ label {
    color: gold;
  }
  .success {
    color: green;
    font-weight: bold;
  }
  .error {
    color: red;
    font-weight: bold;
  }

  .btn {
    border-color: black;
    border-width: 2px;
    background-color: transparent;
    font-style: italic;
    font-family: "Roboto", sans-serif;
    color: black;
    font-weight: bold;
    font-size: 0.8rem ;
  }
</style>
