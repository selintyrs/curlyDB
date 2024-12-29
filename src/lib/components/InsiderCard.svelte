<script>
    let { insider } = $props();
</script>
  

<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{insider.hairtype_id}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">{insider.tip_for}</h6>
      <p class="card-text">{insider.tip_text}</p>
    </div>
  </div>