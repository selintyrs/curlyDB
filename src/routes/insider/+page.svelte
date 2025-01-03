<script>
  export let data; // The data provided by the load function
  const { insiders, hairtypeId } = data; // Extract the insiders from the data
  import InsiderCard from "$lib/components/InsiderCard.svelte";
  import { enhance } from "$app/forms";

  let selectedHairtype = hairtypeId || ""; // Aktuell ausgewählter Filter

  // Function to group insiders into chunks of 6
  const chunkedInsiders = [];
  for (let i = 0; i < insiders.length; i += 6) {
    chunkedInsiders.push(insiders.slice(i, i + 6));
  }

  // Filter anwenden und Seite mit Parameter neu laden
  function applyFilter() {
    window.location.href = `/insider?hairtype=${selectedHairtype}`;
  }
</script>

<div class="section-1">
  <div class="section-1-content">
    <h1>You're not alone - <br /> we got eachother's back</h1>
    <p>Share your most beloved tips <br /> with your curly community:</p>
    <a class="btn btn-primary" href={`/insider/create`} role="button"
      >Add new insider</a
    >
  </div>
</div>

<div class="container">
  <h1 class="page-title">Read the tips of your community:</h1>

  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      {#each chunkedInsiders as group, index}
        <div class="carousel-item {index === 0 ? 'active' : ''}">
          <div class="container">
            <div class="row">
              {#each group as insider}
                <div class="col-md-4 d-flex align-items-stretch">
                  <InsiderCard {insider} />
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>

    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>

<!-- Filter-Dropdown -->
<form method="GET" use:enhance>
  <div class="filter">
    <label for="hairtype">Filter by Hairtype:</label>
    <select id="hairtype" bind:value={selectedHairtype}>
      <option value="">All Hairtypes</option>
      <option value="2A">2A</option>
      <option value="2B">2B</option>
      <option value="2C">2C</option>
      <option value="3A">3A</option>
      <option value="3B">3B</option>
      <option value="3C">3C</option>
      <option value="4A">4A</option>
      <option value="4B">4B</option>
      <option value="4C">4C</option>
    </select>
    <button on:click={applyFilter} class="apply">Apply Filter</button>
  </div>
</form>

<div class="section-2">
  <div class="section-2-content"></div>
</div>

<style>
  .section-1,
  .section-2 {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
  }
  .section-1 {
    background-image: url("/images/models/small_group.jpeg");
  }
  .section-2 {
    background-image: url("/images/models/group.jpeg");
  }

  .section-1-content h1 {
    position: absolute;
    top: 4%;
    right: 3%;
    text-align: right;
    color: rgb(0, 0, 0);
    font-size: 1.9rem;
    font-weight: 900;
    font-style: italic;
    font-family: "Roboto", sans-serif;
    line-height: 1.5;
    word-wrap: break-word;
  }

  .section-1-content p {
    position: absolute;
    bottom: 23%;
    right: 3%;
    text-align: right;
    color: black;
    font-size: 1.7rem;
    font-style: italic;
    font-weight: 900;
    font-family: "Roboto", sans-serif;
  }

  .btn {
    position: absolute;
    bottom: 15%;
    right: 3%;
    border-color: black;
    border-width: 2px;
    background-color: transparent;
    font-style: italic;
    font-family: "Roboto", sans-serif;
    color: black;
    padding: 10px 20px;
    font-weight: bold;
  }

  .container {
    position: relative;
    margin: 0 auto;
    width: 100%;
    padding: 20px 0;
  }

  .carousel {
    position: relative;
  }

  .carousel-inner {
    margin: 0 auto;
    width: 90%;
  }

  .page-title {
    font-size: 3.5rem;
    font-weight: 900;
    font-style: italic;
    color: #000000;
    font-family: "Roboto", sans-serif;
    text-align: center;
  }

  .carousel-control-prev,
  .carousel-control-next {
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-control-prev {
    left: -20px;
  }

  .carousel-control-next {
    right: -20px;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    filter: invert(1);
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

  .filter {
    font-size: 1rem;
    font-style: italic;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    color: #000000;
    margin-bottom: 10px;
  }

  .apply {
    bottom: 15%;
    right: 3%;
    border-color: black;
    border-width: 1px;
    border-radius: 10%;
    background-color: transparent;
    font-style: italic;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    color: black;
    padding: none;
    font-weight: lighter;
  }
</style>
