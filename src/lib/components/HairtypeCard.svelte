<script>
    let { hairtype } = $props();
</script>

<div class="card text-center shadow-none">
  <!-- Name und Hairtype über dem Bild -->
  <div class="card-header">
    <h5 class="card-title"><span class="hairtype">{hairtype.hairtype}</span> {hairtype.name.toUpperCase()}</h5>
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
    border-radius: 0;
    background-color: transparent !important; /* Card is see-through */
    margin-bottom: 1px;

  }

  .card-header {
    margin-bottom: 0.8px; /* Abstand zwischen Header und Bild */
    background-color: transparent !important; /* Header is see-through */
  }

  .card-title {
    font-size: 1.7rem;
    font-weight: bold;
    font-style: italic;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 5px; /* Kleiner Abstand zwischen Titel und Subtitle */
    color: #000000;
  }

  .hairtype {
    font-size: 2.2rem;
    font-style: italic;
    font-family: 'Roboto', sans-serif;
    color: #000000;
  }

  .card-image img {
    width: 200px; /* Bild wird in voller Breite angezeigt */
    height: 300px; /* Einheitliche Höhe */
    object-fit: contain; /* Bild wird nicht abgeschnitten, sondern skaliert */
    border-radius: 0; /* Keine abgerundeten Ecken */
  }

  .card-body {
    padding: 10px; /* Adds padding around the description */
    background-color: transparent !important;
    margin-top: 0.7px; /* Abstand zwischen Bild und Beschreibung */
    
  }

  .card-text {
    font-size: 1rem;
    font-style: italic;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #000000;
    word-wrap: break-word; /* Allows text to wrap to the next line */
    margin: 0; /* Removes default margin */
  }


</style>