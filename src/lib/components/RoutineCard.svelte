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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Flexible Spalten */
    gap: 2rem; /* Abstand zwischen den Karten */
    padding: 2rem;
    width: 100%;
    background-color: transparent !important;
    margin-top: 0rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }

  .card {
    background-color: transparent !important;
    border: none;
    border-radius: 0px;
    overflow: hidden;
    box-shadow: none;
    text-align: left;
    padding: 1rem;
  }

  .card-header {
    margin-bottom: 1rem;
    text-align: left;
    background-color: transparent !important;
  }

  .card-title {
    font-size: 1.7rem;
    font-weight: bold;
    font-style: italic;
    font-family: 'Roboto', sans-serif;
    color: #000000;
    margin-bottom: 0.5rem;
  }

  .card-img-top {
    width: 100%;
    height: auto;
    max-height: 200px;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: 0%;
  }

  .card-body {
    font-size: 1rem;
    font-style: italic;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #000000;
    background-color: transparent !important;
    text-align: left;
  }

  .step-number {
    font-size: 2.2rem;
    font-style: italic;
    font-family: 'Roboto', sans-serif;
    color: #000000; 
    margin-right: 0.5rem;
  }

  ul {
  list-style: none; /* Entfernt die Disks */
  padding: 0; /* Entfernt den Standard-Abstand auf der linken Seite */
  margin: 0; /* Entfernt den Standard-Abstand oben und unten */
}

li {
  margin-bottom: 0.5rem; /* Fügt etwas Abstand zwischen den Listenpunkten hinzu */
}
</style>