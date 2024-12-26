<script>
    let { hairtype } = $props();
</script>

<div class="card text-center shadow-sm">
  <div class="card-body">
    <!-- Name und Hairtype über dem Bild -->
    <h5 class="card-title">{hairtype.name.toUpperCase()}</h5>
    <h6 class="card-subtitle text-muted">{hairtype.hairtype}</h6>
  </div>
  <!-- Bild nach dem Namen -->
  <img
    src={hairtype.picture}
    class="card-img-top"
    alt={hairtype.name}
  />
  <div class="card-body">
    <!-- Beschreibung -->
    <p class="card-text">{hairtype.description}</p>
  </div>
</div>

<style>
  .card {
    height: 100%; /* Gleiche Höhe für alle Karten */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 18rem;
    margin: auto;
  }

  .card-img-top {
    max-height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
    font-style: italic;
    margin-bottom: 5px; /* Kleiner Abstand zum Hairtype */
  }

  .card-subtitle {
    font-size: 1rem;
    font-weight: bold;
    font-style: italic;
    margin-bottom: 15px; /* Größerer Abstand zum Bild */
  }

  .card-text {
    font-size: 0.9rem;
    margin-top: 10px;
    font-style: italic;
  }
</style>