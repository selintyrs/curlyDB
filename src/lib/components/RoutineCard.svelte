<script>
  let { hairtype } = $props();
</script>

<div class="card-container">
  <!-- Washing Card -->
  <div class="card text-center shadow-none">
    <div class="class-header">
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
  <div class="card text-center shadow-none">
    <div class="class-header">
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
  <div class="card text-center shadow-none">
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
  <div class="card text-center shadow-none">
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
    justify-content: space-between;
    padding: 1rem;
  }

  .card {
      border: none;
      border-radius: 0;
      padding: 1rem;
      flex: 1 1 calc(25% - 2rem); /* Karten sollen gleichmäßig verteilt sein */
      max-width: calc(25% - 2rem); /* Ensure cards don't exceed 25% width */
      height: auto;
      box-shadow: none;
      background-color: transparent !important;
      margin: 0.5rem;
      text-align: left;
    }

  .card-header {
    margin-bottom: 5px; /* Abstand zwischen Header und Bild */
    background-color: transparent !important; /* Header is see-through */
  }

  .card-img-top {
    width: 300px;
    height: auto;
    border-radius: 0px;
    object-fit: contain;
  }

  .card-body {
    margin-top: 0.5rem;
    background-color: transparent !important;
  }

  .card-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    font-style: italic;
  }

  .step-number {
    font-size: 3rem;
    font-weight: bold;
    margin-right: 0.5rem;
    font-style: italic;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-size: 1rem;
    line-height: 1.4;
    font-style: italic;
    font-weight: bold;
    margin-bottom: 1rem;
  }
</style>
