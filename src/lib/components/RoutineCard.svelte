<script>
    let { hairtype } = $props();
</script>

<div class="card-container">
  
  <!-- Washing Card -->
  <div class="card">
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
  <div class="card">
    <div class="class-header">
      <h5 class="card-title">02 Styling</h5>
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
      <h5 class="card-title">03 Drying</h5>
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
      <h5 class="card-title">04 Refreshing</h5>
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
    gap: 1rem;
    justify-content: space-between;
    padding: 1rem;
  }

  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    flex: 1;
    max-width: 18rem;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    background-color: transparent !important;
  }

  .card-header {
    margin-bottom: 5px; /* Abstand zwischen Header und Bild */
    background-color: transparent !important; /* Header is see-through */
  }

  .card-img-top {
    width: 400px;
    height: 200px;
    border-radius: 0px;
    object-fit: contain;
  }

  .card-body {
    margin-top: 0.5rem;
    background-color: transparent !important;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    font-style: italic;
  }

  .step-number {
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 0.5rem;
    font-style: italic;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-size: 0.9rem;
    line-height: 1.4;
    font-style: italic;
    font-weight: bold;
  }
</style>