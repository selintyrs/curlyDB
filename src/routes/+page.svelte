<script>
    // Kein JS-Code notwendig
</script>


<div class="hero-section">
    <div class="hero-content">
        <h1>Welcome to your <br /> curly hair database</h1>
        <p>Learn to embrace your curls!</p>
    </div>
</div>

<div class="card-container">
    <div class="card" style="width: 18rem;">
        <a href="/hairtypes" class="card-link" aria-label="Hair Types">
        <img src="/images/icons/hairtype.png" class="card-img-top" alt="hairtype">
        <div class="card-body">
          <p class="card-text">Find out your curl type.</p>
        </div>
    </a>
      </div>
      <div class="card" style="width: 18rem;">
        <a href="/insider" class="card-link" aria-label="Insiders read">
        <img src="/images/icons/community.png" class="card-img-top" alt="hairtype">
        <div class="card-body">
          <p class="card-text">Read the community insiders.</p>
        </div>
    </a>
      </div>
      <div class="card" style="width: 18rem;">
        <a href="/insider/create" class="card-link" aria-label="Insiders write">
        <img src="/images/icons/advice.png" class="card-img-top" alt="hairtype">
        <div class="card-body">
          <p class="card-text">Share your insiders.</p>
        </div>
    </a>
      </div>
</div>

<style>

    .hero-section {
    width: 100%;
    height: calc(100vh - 30px); /* 100vh minus der Navbar-Höhe (56px bei Bootstrap) */
    background-image: url("/images/models/main.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative; /* Wichtig für absolute Positionierung der Inhalte */
    margin: 0; /* Entfernt unnötige Margins */
    padding: 0; /* Keine Abstände */
    top: 0px; /* Beginnt direkt unter der Navbar */
    z-index: 1; /* Stellt sicher, dass es unter der Navbar liegt */
    }

    .hero-content h1 {
        position: absolute;
        top: 7%;
        right: 3%;
        text-align: right;
        color: rgb(0, 0, 0);
        font-size: 2.8rem; /* Größere Schrift für mehr Präsenz */
        font-weight: 900;
        font-style: italic;
        font-family: 'Roboto', sans-serif;
        line-height: 1.5; /* Abstand zwischen den Zeilen */
        word-wrap: break-word;
    }

    .hero-content p {
        position: absolute;
        bottom: 5%;
        right: 3%;
        text-align: right;
        color: black;
        font-size: 2rem;
        font-style: italic;
        font-weight: 900;
        font-family: 'Roboto', sans-serif;
    }

    .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Flexible Spalten */
    gap: 1.8rem; /* Abstand zwischen den Karten */
    padding: 2rem;
    width: 100%;
    background-color: transparent !important;
    margin-top: 0rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    align-items: center;
  }

  .card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Zentriert die Inhalte vertikal */
  text-align: center;
  width: 18rem;
  padding: 1rem;
  border: transparent; /* Optional für die Karten-Rahmen */
  border-radius: 8px; /* Optional für abgerundete Ecken */
  background-color: #fff;
}

  .card-img-top {
    padding: 10px;
    width: 50%;
    height: auto;
    position: center;
  }

  .card-text {
    font-size: 1rem;
    font-style: italic;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #000000;
    background-color: transparent !important;
    text-align: center;
  }

  .card-link {
  display: block; /* Macht den gesamten Inhalt klickbar */
  text-decoration: none;
  color: inherit;
}

</style>
