<script>
  let { insider } = $props();
  import { addRating } from "$lib/db.js";

async function handleRating(rating) {
  await addRating(insider._id, rating);
  // Refresh the page to show updated rating
  window.location.reload();
}
  
</script>

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">
      <span class="hairtype">{insider.hairtype_id}</span>{insider.tip_for}
    </h5>
    <p class="card-text">{insider.tip_text}</p>
    <!-- Add rating display and controls -->
    <div class="rating">
      {#each Array(5) as _, i}
        <button 
          onclick={() => handleRating(i + 1)}
          class="star {i < Math.round(insider.averageRating || 0) ? 'filled' : ''}"
        >
          ★
        </button>
      {/each}
      <span class="rating-count">({insider.totalRatings || 0})</span>
    </div>
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

  .rating {
    margin-top: 10px;
  }
  
  .star {
    background: none;
    border: none;
    font-size: 1.2rem;
    color: #ccc;
    cursor: pointer;
  }
  
  .star.filled {
    color: gold;
  }
  
  .rating-count {
    font-size: 0.9rem;
    color: #666;
    margin-left: 5px;
  }
</style>
