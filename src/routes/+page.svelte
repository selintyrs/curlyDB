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
        top: 20%;
        right: 5%;
        text-align: left;
        color: rgb(0, 0, 0);
        font-size: 2.8rem; /* Größere Schrift für mehr Präsenz */
        font-weight: bold;
        font-style: italic;
        line-height: 1.5; /* Abstand zwischen den Zeilen */
        word-wrap: break-word;
    }

    .hero-content p {
        position: absolute;
        bottom: 5%;
        right: 5%;
        text-align: right;
        color: black;
        font-size: 1.5rem;
        font-style: italic;
        font-weight: bold;
    }

    .main-content {
        padding: 2rem;
    }
</style>
