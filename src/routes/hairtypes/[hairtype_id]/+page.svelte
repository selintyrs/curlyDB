<script>
    export let data;
    const { hairtype } = data;

    import RoutineCard from "$lib/components/RoutineCard.svelte";
</script>


{#if data.hairtype}
  <h1>{data.hairtype.name}</h1>
  <div class="row">
    <RoutineCard hairtype={data.hairtype} />
  </div>
{:else}
  <p>Loading...</p>
{/if}
