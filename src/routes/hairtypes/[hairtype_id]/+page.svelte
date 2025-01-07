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
<h2>Insider-Tipps</h2>

console.log(data.insiders);


<div class="col-12">
  <ol>
    {#if data.insiders && data.insiders.length > 0}
  {#each data.insiders as insider}
    <li>{insider.tip_text || 'Kein Text vorhanden'}</li>
  {/each}
{:else}
  <p>Keine Insider-Tipps verfügbar.</p>
{/if}

  </ol>
  
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

  .row {
    margin-top: 10px;
  }

  .btn {
    border-color: black;
    border-width: 2px;
    background-color: white;
    font-style: italic;
    font-family: "Roboto", sans-serif;
    color: black;
    margin-top: 20px;
    margin-left: 10px;
  }

  .col-12 ol {
    padding: 10px;
    background-color: #791919;
  }


</style>
