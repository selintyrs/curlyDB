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
    background-color: transparent !important;
    margin-bottom: 1px;

  }

  .card-header {
    margin-bottom: 0.8px;
    background-color: transparent !important; 
  }

  .card-title {
    font-size: 1.7rem;
    font-weight: bold;
    font-style: italic;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 5px; 
    color: #000000;
  }

  .hairtype {
    font-size: 2.2rem;
    font-style: italic;
    font-family: 'Roboto', sans-serif;
    color: #000000;
    margin-right: 0.5rem;
  }

  .card-image img {
    width: 200px; 
    height: 300px;
    object-fit: contain; 
    border-radius: 0; 
  }

  .card-body {
    padding: 10px; 
    background-color: transparent !important;
    margin-top: 0.7px;
    
  }

  .card-text {
    font-size: 1rem;
    font-style: italic;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #000000;
    word-wrap: break-word;
    margin: 0;
  }


</style>