<script>
    let { hairtypes } = $props();
</script>

<div class="card text-center mb-3 shadow-sm" style="width: 18rem;">
    <img src={hairtypes.picture} class="card-img-top" alt={hairtypes.name} style="max-height: 200px; object-fit: cover;" />
    <div class="card-body">
      <h5 class="card-title">{hairtypes.name}</h5>
      <h6 class="card-subtitle text-muted">{hairtypes.hairtype}</h6>
      <p class="card-text">{hairtypes.description}</p>
    </div>
  </div>