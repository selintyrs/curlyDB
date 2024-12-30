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

<div class="carousel-container">
  <h1 class="page-title">Curly Hair Tips</h1>

  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      {#each chunkedInsiders as group, index}
        <div class="carousel-item {index === 0 ? 'active' : ''}">
          <div class="container">
            <div class="row gx-4">
              {#each group as insider}
                <div class="col-md-2 d-flex align-items-stretch">
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

  .carousel-container {
    width: 100%;
    margin: 0 auto;
    padding: 20px 0;
    position: relative;
  }

  .carousel-inner {
    width: 100%; /* Leaves space for navigation buttons */
    margin: 0 auto;
  }

  .row {
    width: 100%; /* Center-align the tips */
  }

  .carousel-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 5%;
    background-color: rgba(0, 0, 0, 0.1);
    border: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }


  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    filter: invert(1); /* Für sichtbare Icons */
    width: 30px;
    height: 30px;
  }

  .carousel-control-prev {
    left: 0;
  }

  .carousel-control-next {
    right: 0;
  }


  .col-md-2 {
    flex: 0 0 16%; /* Ensures 6 items fit per row */
    max-width: 16%;
    padding: 0 10px;
  }

  .carousel {
    position: relative;
  }

  .page-title {
    text-align: center;
    margin-bottom: 20px;
  }
</style>
