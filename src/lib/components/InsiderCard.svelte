<script>
    let { insiders } = $props();
</script>
  

<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{insiders.hairtype_id}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">{insiders.tip_for}</h6>
      <p class="card-text">{insiders.tip_text}</p>
    </div>
  </div>