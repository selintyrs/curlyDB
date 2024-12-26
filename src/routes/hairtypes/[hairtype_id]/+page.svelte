<script>
    let { data } = $props();
    import RoutineCard from "$lib/components/RoutineCard.svelte";
</script>

<h1>{data.hairtype.name}</h1>

<div class="row">
    {#each hairtypes as hairtype}
        <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
            <RoutineCard {hairtype} />
        </div>
    {/each}
</div>
