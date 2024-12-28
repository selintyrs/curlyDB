<script>
    // Kein JS-Code notwendig
</script>


<div class="hero-section">
    <div class="hero-content">
        <h1>Welcome to your <br /> curly hair database</h1>
        <p>Learn to embrace your curls!</p>
    </div>
</div>

<div class="main-content">
    <p>Additional content below the hero section.</p>
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
        top: 10%;
        right: 3%;
        text-align: left;
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
        right: 5%;
        text-align: right;
        color: black;
        font-size: 2rem;
        font-style: italic;
        font-weight: 900;
        font-family: 'Roboto', sans-serif;
    }

    .main-content {
        padding: 2rem;
    }
</style>
