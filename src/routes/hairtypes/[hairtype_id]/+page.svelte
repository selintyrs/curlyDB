<script>
  export let data;
  const { hairtype, insiders } = data;

  import RoutineCard from "$lib/components/RoutineCard.svelte";
  import InsiderTypeCard from "$lib/components/InsiderTypeCard.svelte";
</script>

<a href="/hairtypes" class="btn">Back</a>

<h1 class="page-title">{data.hairtype.hairtype} - {data.hairtype.name}</h1>

<div class="row row-cols-1 row-cols-md-3 g-4">
  <RoutineCard hairtype={data.hairtype} />
</div>

<!-- Liste der Insider-Tipps -->
<div class="container">
  <h2>Insiders for your hairtype</h2>
  <div class="col-12">
    {#each data.insiders as insider}
      <InsiderTypeCard {insider} />
    {/each}
  </div>
</div>

<style>
  .page-title {
    text-align: left;
    margin-top: 0rem;
    margin-bottom: 0rem;
    font-size: 3.5rem;
    font-weight: 900;
    font-family: "Roboto", sans-serif;
    font-style: italic;
    color: #000000;
    padding-left: 5px;
  }

  .btn {
    border-color: black;
    border-width: 2px;
    background-color: white;
    font-style: italic;
    font-family: "Roboto", sans-serif;
    color: black;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 10px;
  }

  .container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-style: italic;
    color: #000000;
    font-family: "Roboto", sans-serif;
    background-color: transparent !important;
  }

  .container h2 {
    font-size: 1.7rem;
  }
</style>
