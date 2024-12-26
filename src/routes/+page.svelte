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
        height: 100vh;
        background-image: url("/images/models/main.jpeg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
    }

    .hero-content h1 {
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%,-40%); 
        text-align: center;
        color: white;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.7);
        font-size: 2.8rem; /* Größere Schrift für mehr Präsenz */
        font-weight: bold;
        font-style: italic;
        line-height: 1.5; /* Abstand zwischen den Zeilen */
        width: 80%; /* Breite für Zeilenumbruch */
        word-wrap: break-word;
    }

    .hero-content p {
        position: absolute;
        bottom: 10%;
        right: 5%;
        text-align: right;
        color: black;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.7);
        font-size: 1.2rem;
        font-style: italic;
        font-weight: bold;
    }

    .main-content {
        padding: 2rem;
    }
</style>
