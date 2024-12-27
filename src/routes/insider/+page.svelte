<script>
    export let data; // Die von der `load`-Funktion bereitgestellten Daten
    const { hairtypes } = data; // Extrahiere die Filme aus den Daten

</script>

<div class="section-1">
    <div class="hero-content">
        <h1>Welcome to your <br /> curly hair database</h1>
        <p>Learn to embrace your curls!</p>
    </div>
</div>

<div class="main-content">
    <p>Additional content below the hero section.</p>
</div>

<div class="section-2">
    <div class="hero-content">
        <h1>Welcome to your <br /> curly hair database</h1>
        <p>Learn to embrace your curls!</p>
    </div>
</div>



<style>
    .section-1 {
        width: 100%;
        height: 100vh;
        background-image: url("/images/models/group.jpeg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
    }

    .section-2 {
        width: 100%;
        height: 100vh;
        background-image: url("/images/models/small_group.jpeg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
    }
    </style>;
