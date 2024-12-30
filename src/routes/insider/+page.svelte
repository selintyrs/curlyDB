<script>
  export let data; // The data provided by the load function
  const { insiders } = data; // Extract the insiders from the data
  import InsiderCard from "$lib/components/InsiderCard.svelte";
</script>

<div class="section-1">
  <div class="hero-content">
      <h1>Welcome to your <br /> curly hair database</h1>
      <p>Learn to embrace your curls!</p>
      <a class="btn btn-primary" href={`/insider/create`} role="button">Add New Tip</a>
  </div>
</div>

<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
      {#if insiders && insiders.length > 0}
          {#each insiders.slice(0, Math.ceil(insiders.length / 6)) as group, i}
              <div class="carousel-item {i === 0 ? 'active' : ''}">
                  <div class="container">
                      <div class="row row-cols-1 row-cols-md-3 g-4">
                          {#each group as insider}
                              <div class="col d-flex align-items-stretch">
                                  <InsiderCard insider={insider} />
                              </div>
                          {/each}
                      </div>
                  </div>
              </div>
          {/each}
      {:else}
          <p>No insiders found!</p>
      {/if}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="section-2">
  <div class="hero-content">
      <h1>Welcome to your <br /> curly hair database</h1>
      <p>Learn to embrace your curls!</p>
  </div>
</div>

<style>
  .section-1, .section-2 {
      width: 100%;
      height: 100vh;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
  }
  .section-1 {
      background-image: url("/images/models/group.jpeg");
  }
  .section-2 {
      background-image: url("/images/models/small_group.jpeg");
  }
</style>
