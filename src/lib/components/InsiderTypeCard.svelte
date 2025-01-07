<script>
    export let insider;
</script>

<ol class="insider-list">
  <li class="insider-item">
    <div class="insider-content">
      <h4 class="insider-title">{insider.tip_for}</h4>
      <p class="insider-text">{insider.tip_text}</p>
    </div>
    <span class="insider-rating">
        {#if insider.ratingAvg > 0}
        {insider.ratingAvg} <span class="star"> ★</span>
        {:else}
            - <span class="star"> ★</span>
        {/if}
    </span>
  </li>
</ol>

<style>
  .insider-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .insider-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    padding: 15px;
    margin-bottom: 10px;
    background-color: transparent;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .insider-content {
    flex-grow: 1;
    margin-right: 20px;
    text-align: center;
  }

  .insider-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0 0 5px 0;
  }

  .insider-text {
    margin: 0;
    color: #000000; 
    font-size: 0.95rem;
  }

  .insider-rating {
    font-size: 1rem;
    font-weight: lighter;
    color: #000000; /* Blaue Farbe für das Rating */
  }
</style>
