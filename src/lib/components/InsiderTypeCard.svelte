<script>
    export let insider;
</script>

<ol class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">{insider.tip_for}</div>
        {insider.tip_text}
      </div>
      <span class="badge">{insider.ratingAvg}</span>
    </li>
  </ol>