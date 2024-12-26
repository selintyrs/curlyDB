<script>
    let { hairtype } = $props();
</script>

<div class="card text-center shadow-none">
  <!-- Name und Hairtype über dem Bild -->
  <div class="card-header">
    <h5 class="card-title">{hairtype.name.toUpperCase()}</h5>
    <h6 class="card-subtitle text-muted">{hairtype.hairtype}</h6>
  </div>
  <!-- Bild -->
  <div class="card-image">
    <img
      src={hairtype.picture}
      alt={hairtype.name}
    />
  </div>
  <!-- Beschreibung -->
  <div class="card-body">
    <p class="card-text">{hairtype.description}</p>
  </div>
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: auto;
    border: none; 
    box-shadow: none;

  }

  .card-header {
    margin-bottom: 10px; /* Abstand zwischen Header und Bild */
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
    font-style: italic;
    margin-bottom: 5px; /* Kleiner Abstand zwischen Titel und Subtitle */
  }

  .card-subtitle {
    font-size: 1rem;
    font-weight: bold;
    font-style: italic;
    color: #000000;
  }

  .card-image img {
    width: 150px; /* Bild wird in voller Breite angezeigt */
    height: 250px; /* Einheitliche Höhe */
    object-fit: contain; /* Bild wird nicht abgeschnitten, sondern skaliert */
    border-radius: 0; /* Keine abgerundeten Ecken */
  }

  .card-body {
    margin-top: 10px;
  }

  .card-text {
    font-size: 1rem;
    font-style: italic;
    color: #000000;
  }
</style>