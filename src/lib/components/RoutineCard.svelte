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
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center; /* Zentriere die Karten auf der Seite */
    padding: 1rem;
  }

  .card {
    flex: 0 1 calc(25% - 2rem); /* Jede Karte nimmt 25% Breite minus Abstand ein */
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
    padding: 1rem;
  }

  .card-header {
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
  }

  .card-body {
    padding: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  .step-number {
    font-size: 1.5rem;
    color: #555;
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    .card {
      flex: 0 1 calc(50% - 2rem); /* Zwei Karten pro Zeile auf Tablets */
    }
  }

  @media (max-width: 480px) {
    .card {
      flex: 0 1 calc(100% - 2rem); /* Eine Karte pro Zeile auf kleinen Geräten */
    }
  }
</style>
