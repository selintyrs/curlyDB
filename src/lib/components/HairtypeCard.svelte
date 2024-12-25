<script>
    let { hairtypes } = $props();
</script>

<div class="card text-center mb-3 shadow-sm" style="width: 18rem;">
    <img src={picture} class="card-img-top" alt={name} style="max-height: 200px; object-fit: cover;" />
    <div class="card-body">
      <h5 class="card-title">{name}</h5>
      <h6 class="card-subtitle text-muted">{type}</h6>
      <p class="card-text">{description}</p>
    </div>
  </div>