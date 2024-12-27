<script>
    let { data } = $props();

    import RoutineCard from "$lib/components/RoutineCard.svelte";
</script>


 <h1 class="page-title">{data.hairtype.hairtype} - {data.hairtype.name}</h1>

<div class="row row-cols-1 row-cols-md-3 g-4">
    <RoutineCard hairtype={data.hairtype} />
</div>

<style>
    .page-title {
      text-align: left;
      margin-top: 0.5rem;
      font-size: 3.5rem;
      font-weight: bold;
      font-style: italic;
      color: #000000;
    }

    .row {
    margin-top: 20px;
  }

</style>  