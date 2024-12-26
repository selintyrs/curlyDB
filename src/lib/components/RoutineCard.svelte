<script>
    let { hairtype } = $props();
</script>

<div class="card-container">
    <div class="card">
      <img src={hairtype.routines.washing.image} class="card-img-top" alt="Washing Step" />
      <div class="card-body">
        <h5 class="card-title">01 Washing</h5>
        <p class="card-text">Bla bla bla bla bla</p>
      </div>
    </div>
  
    <div class="card">
      <img src={hairtype.routines.styling.image} class="card-img-top" alt="Styling Step" />
      <div class="card-body">
        <h5 class="card-title">02 Styling</h5>
        <p class="card-text">Bla bla bla bla bla</p>
      </div>
    </div>
  
    <div class="card">
      <img src={hairtype.routines.drying.image} class="card-img-top" alt="Drying Step" />
      <div class="card-body">
        <h5 class="card-title">03 Drying</h5>
        <p class="card-text">Bla bla bla bla bla</p>
      </div>
    </div>
  
    <div class="card">
      <img src={hairtype.routines.refreshing.image} class="card-img-top" alt="Refreshing Step" />
      <div class="card-body">
        <h5 class="card-title">04 Refreshing</h5>
        <p class="card-text">Bla bla bla bla bla</p>
      </div>
    </div>
  </div>
  
  <style>
    .card-container {
      display: flex;
      gap: 1rem;
      justify-content: space-between;
      padding: 1rem;
    }
  
    .card {
      width: 18rem;
      text-align: center;
      border: none;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
    .card-img-top {
      border-radius: 8px;
      height: 200px;
      object-fit: cover;
    }
  
    .card-title {
      font-weight: bold;
      font-size: 1.2rem;
      margin-top: 0.5rem;
    }
  
    .card-text {
      font-style: italic;
      color: #555;
    }
  </style>