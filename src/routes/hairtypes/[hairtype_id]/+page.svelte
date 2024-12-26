<script>
    export let hairtype;
    import RoutineCard from "$lib/components/RoutineCard.svelte";
</script>

<h1>{data.hairtype.name}</h1>

<h1>{data.hairtype.name}</h1>
<div class="row">
  <RoutineCard hairtype={data.hairtype} />
</div>
