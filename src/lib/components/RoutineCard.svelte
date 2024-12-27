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
    gap: 1.5rem; /* Abstand zwischen Karten */
    justify-content: center; /* Zentriert die Karten */
    padding: 2rem;
  }

  .card {
    flex: 0 1 calc(23% - 1rem); /* 23% Breite, damit vier Karten in einer Reihe Platz haben */
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 1rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .card:hover {
    transform: scale(1.05); /* Vergrößert Karte beim Hover */
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  .card-header {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
  }

  .card-img-top {
    width: 100%;
    height: 150px; /* Einheitliche Höhe für Bilder */
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
    font-size: 0.9rem;
    line-height: 1.4;
    color: #555;
    text-align: left;
  }

  .step-number {
    font-size: 1.5rem;
    font-weight: bold;
    color: #e30613; /* Rot für Nummerierung */
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    .card {
      flex: 0 1 calc(45% - 1rem); /* Zwei Karten pro Zeile auf kleineren Geräten */
    }
  }

  @media (max-width: 480px) {
    .card {
      flex: 0 1 calc(100% - 1rem); /* Eine Karte pro Zeile auf sehr kleinen Geräten */
    }
  }
</style>