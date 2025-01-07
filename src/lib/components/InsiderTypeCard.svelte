<script>
    export let insider;
</script>

<ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">{insider.tip_for}</div>
      {insider.tip_text}
    </div>
    <span class="badge text-bg-primary rounded-pill">
      {insider.ratingAvg ?? '-'}
    </span>
  </li>
</ol>

<style>
  .list-group {
    margin-top: 10px;
    padding: 10px;
    background-color: #bd3030;
  }

  ol li {
    margin: 10px 0;
    list-style-type: none;
    background-color: #f8d7da; /* Leichte rote Farbe zum Testen */
    padding: 10px;
    
  }
</style>
