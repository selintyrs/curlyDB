<script>
    let { insider } = $props();
</script>
  

<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title"><span class="hairtype">{insider.hairtype_id}</span>{insider.tip_for}</h5>
      <p class="card-text">{insider.tip_text}</p>
    </div>
  </div>

  <style>
    .card {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Flexible Spalten */
      gap: 0rem; /* Abstand zwischen den Karten */
      padding: 0rem;
      width: 100%;
      background-color: transparent !important;
      margin-top: 0rem;
      margin-left: 0rem;
      margin-right: 0rem;
      border: none;
    border-radius: 0px;
    overflow: hidden;
    box-shadow: none;
    text-align: left;
    
    }

    .card-body {
      font-size: 2.2rem;
      font-style: italic;
      font-family: 'Roboto', sans-serif;
      color: #000000;

    }

    .hairtype {
      margin-right: 0.5rem;
    }
    </style>