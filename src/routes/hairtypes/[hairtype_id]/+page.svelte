<script>
    let { data } = $props();

    import RoutineCard from "$lib/components/RoutineCard.svelte";
</script>


 <h1>{data.hairtype.hairtype} " - "{data.hairtype.name}</h1>

<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col d-flex align-items-stretch">
    <RoutineCard hairtype={data.hairtype} />
  </div>
</div>