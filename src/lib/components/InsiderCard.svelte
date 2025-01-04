<script>
  let { insider, form } = $props();
let rating = insider.rating?.average || 0; // Use optional chaining to avoid errors

let selectedRating = $state(0);


</script>

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">
      <span class="hairtype">{insider.hairtype_id}</span>{insider.tip_for}
    </h5>
    <p class="card-text">{insider.tip_text}</p>
    
    <!-- Rating Form -->
    <form method="POST" action="?/update">
      <input type="hidden" name="_id" value={insider._id} />
      <label for="rating">Rate this tip:</label>
      <select name="rating" bind:value={selectedRating}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button type="submit">Submit</button>
    </form>

    <p class="rating-text">Average rating: {insider.rating.average} / 5</p>
  </div>
</div>


<style>
  .card {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 0rem;
    padding: 0rem;
    width: 100%;
    background-color: transparent !important;
    margin-top: 0rem;
    margin-left: 0rem;
    margin-right: 0rem;
    border: 1.2px solid rgba(0, 0, 0, 0.2);
    border-radius: 0px;
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
</style>
