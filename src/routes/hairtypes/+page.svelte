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
  .page-title {
    text-align: center;
    margin-top: 2rem;
    font-size: 2.5rem;
    font-weight: bold;
    font-style: italic;
    color: #000000;
    font-family: 'Roboto', sans-serif;
  }


  .card-link {
    display: block; /* Macht den gesamten Inhalt klickbar */
    text-decoration: none;
    color: inherit;
  }

  .row {
    margin-top: 20px;
  }

  .col {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
</style>