<script>
  export let data;
  const { hairtypes } = data;
  import HairtypeCard from "$lib/components/HairtypeCard.svelte";
</script>

<div class="row">
  {#each hairtypes as hairtype}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2"></div>

    <a
      href={`hairtypes/${hairtype._id}`}
      style="text-decoration: none; color: inherit;"
    >
      <HairtypeCard {hairtype} />
    </a>
  {/each}
</div>
`;
