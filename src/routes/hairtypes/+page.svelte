<script>
    export let data;
    const { hairtypes } = data;
  import HairtypeCard from "$lib/components/HairtypeCard.svelte";
</script>

<div class="container">
  <!-- Überschrift -->
  <h1 class="page-title">Discover Your Curl Type</h1>

  <!-- Grid für Karten -->
  <div class="row row-cols-1 row-cols-md-3 g-4">
    {#each hairtypes as hairtype}
      <div class="col d-flex align-items-stretch">
        <a href={`/hairtypes/${hairtype._id}`} class="card-link">
          <HairtypeCard hairtype={hairtype} />
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
.container {
  margin: 0 auto; /* Zentriert den Container horizontal */
  display: flex;
  flex-direction: column; /* Stapelt Titel und Grid vertikal */
  align-items: center; /* Zentriert den Grid-Inhalt horizontal */
  width: 100%;
}

.page-title {
  text-align: left; /* Behält den Titel linksbündig */
  margin-top: 0rem;
  font-size: 3.5rem;
  font-weight: 900;
  font-style: italic;
  color: #000000;
  font-family: 'Roboto', sans-serif;
  align-self: flex-start; /* Positioniert den Titel links im flex-Container */
  padding-left: 5px;
}

.row {
  display: grid; /* Nutzt CSS-Grid für die Kartenanordnung */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsives Verhalten */
  gap: 20px; /* Abstand zwischen Karten */
  margin-top: 20px;
  width: 100%; /* Füllt den Container aus */
  justify-content: center; /* Zentriert die Karten horizontal */
}

.card-link {
  display: block; /* Macht den gesamten Inhalt klickbar */
  text-decoration: none;
  color: inherit;
}


  .col {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
</style>