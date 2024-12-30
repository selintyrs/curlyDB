<script>
  export let data; // The data provided by the load function
  const { insiders } = data; // Extract the insiders from the data
  import InsiderCard from "$lib/components/InsiderCard.svelte";

  // Function to group insiders into chunks of 6
  const chunkedInsiders = [];
  for (let i = 0; i < insiders.length; i += 6) {
    chunkedInsiders.push(insiders.slice(i, i + 6));
  }
</script>

<div class="section-1">
  <div class="hero-content">
      <h1>Welcome to your <br /> curly hair database</h1>
      <p>Learn to embrace your curls!</p>
      <a class="btn btn-primary" href={`/insider/create`} role="button">Add New Tip</a>
  </div>
</div>

<div class="container">
  <h1 class="page-title">Curly Hair Tips</h1>

  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      {#each chunkedInsiders as group, index}
        <div class="carousel-item {index === 0 ? 'active' : ''}">
          <div class="container">
            <div class="row">
              {#each group as insider}
                <div class="col-md-4 d-flex align-items-stretch">
                  <InsiderCard insider={insider} />
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/each}
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

  .container {
  margin: 0 auto; /* Zentriert den Container horizontal */
  display: flex;
  flex-direction: column; /* Stapelt Titel und Grid vertikal */
  align-items: center; /* Zentriert den Grid-Inhalt horizontal */
  width: 100%;
}

.carousel {
  align-items: center;
}

  .page-title {
    font-size: 3.5rem;
  font-weight: 900;
  font-style: italic;
  color: #000000;
  font-family: 'Roboto', sans-serif;
  text-align: left;

  }

  .carousel-control-prev {
    left: 2%;
  }

  .carousel-control-next {
    right: 2%;
  }


  .carousel-control-prev-icon, .carousel-control-next-icon {
    filter: invert(1); /* Makes icons visible */
    width: 40px;
    height: 40px;
    color: black;

  }

  .row {
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
}

.col-md-4 {
    display: flex;
    justify-content: center;
    margin-top: 0px;
    padding: 0px;
  }

</style>