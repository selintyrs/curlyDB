<script>
    export let data; // Die von der `load`-Funktion bereitgestellten Daten
    const { insiders } = data; // Extrahiere die Filme aus den Daten
    import InsiderCard from "$lib/components/InsiderCard.svelte";

</script>

<div class="section-1">
    <div class="hero-content">
        <h1>Welcome to your <br /> curly hair database</h1>
        <p>Learn to embrace your curls!</p>¨
        <a class="btn btn-primary" href={`/insider/create`} role="button">Add New Tip</a>
    </div>
</div>

<div class="container">
<div class="row row-cols-1 row-cols-md-3 g-4">
    {#each insiders as insider}
      <div class="col d-flex align-items-stretch">
          <InsiderCard insider={insider} />
      </div>
    {/each}
  </div>
</div>


<div class="section-2">
    <div class="hero-content">
        <h1>Welcome to your <br /> curly hair database</h1>
        <p>Learn to embrace your curls!</p>
    </div>
</div>



<style>
    .section-1 {
        width: 100%;
        height: 100vh;
        background-image: url("/images/models/group.jpeg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
    }

    .section-2 {
        width: 100%;
        height: 100vh;
        background-image: url("/images/models/small_group.jpeg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
    }
    </style>;
