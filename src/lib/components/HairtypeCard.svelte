<script>
    let { hairtype } = $props();
</script>

<div class="card text-center mb-3 shadow-sm" style="width: 18rem;">
    <img src={hairtype.picture} class="card-img-top" alt={hairtype.name} style="max-height: 200px; object-fit: cover;" />
    <div class="card-body">
      <h5 class="card-title">{hairtype.name}</h5>
      <h6 class="card-subtitle text-muted">{hairtype.hairtype}</h6>
      <p class="card-text">{hairtype.description}</p>
    </div>
  </div>