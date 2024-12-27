<script>
  let { hairtype } = $props();
</script>

<div class="card-container">
  <!-- Washing Card -->
  <div class="card">
    <div class="card-header">
      <h5 class="card-title"><span class="step-number">01</span> Washing</h5>
    </div>
    <img
      src={hairtype.routines.washing.image}
      class="card-img-top"
      alt="Washing Step"
    />
    <div class="card-body">
      <ul>
        {#each hairtype.routines.washing.instructions as instruction}
          <li>{instruction}</li>
        {/each}
      </ul>
    </div>
  </div>

  <!-- Styling Card -->
  <div class="card">
    <div class="card-header">
      <h5 class="card-title"><span class="step-number">02</span> Styling</h5>
    </div>
    <img
      src={hairtype.routines.styling.image}
      class="card-img-top"
      alt="Styling Step"
    />
    <div class="card-body">
      <ul>
        {#each hairtype.routines.styling.instructions as instruction}
          <li>{instruction}</li>
        {/each}
      </ul>
    </div>
  </div>

  <!-- Drying Card -->
  <div class="card">
    <div class="card-header">
      <h5 class="card-title"><span class="step-number">03</span> Drying</h5>
    </div>
    <img
      src={hairtype.routines.drying.image}
      class="card-img-top"
      alt="Drying Step"
    />
    <div class="card-body">
      <ul>
        {#each hairtype.routines.drying.instructions as instruction}
          <li>{instruction}</li>
        {/each}
      </ul>
    </div>
  </div>

  <!-- Refreshing Card -->
  <div class="card">
    <div class="card-header">
      <h5 class="card-title"><span class="step-number">04</span> Refreshing</h5>
    </div>
    <img
      src={hairtype.routines.refreshing.image}
      class="card-img-top"
      alt="Refreshing Step"
    />
    <div class="card-body">
      <ul>
        {#each hairtype.routines.refreshing.instructions as instruction}
          <li>{instruction}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
  .card-container {
    display: flex;
    flex-wrap: nowrap; /* Karten nicht umbrechen */
    justify-content: space-between; /* Gleichmäßiger Abstand */
    gap: 1rem; /* Abstand zwischen Karten */
    padding: 2rem;
  }

  .card {
    flex: 1; /* Karten haben gleiche Breite */
    max-width: 23%; /* Karten nehmen max. 23% der Breite */
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .card-header {
    padding: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
  }

  .card-img-top {
    width: 100%;
    height: auto;
    max-height: 200px; /* Einheitliche Bildhöhe */
    object-fit: cover;
    border-bottom: 1px solid #ddd;
  }

  .card-body {
    padding: 1rem;
  }

  .step-number {
    font-size: 1.5rem;
    color: #e30613; /* Rot für Nummerierung */
    margin-right: 0.5rem;
  }
</style>