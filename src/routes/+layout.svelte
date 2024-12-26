<script>
  let { children } = $props();
</script>

<nav class="navbar navbar-expand-lg fixed-top" style="background-color: #5D4037;" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/" style="color: white;">CurlyDB</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/hairtypes" style="color: white;">Hairtype</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/insider" style="color: white;">Insider</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="hero-section">
  <div class="hero-content">
    <h1>Welcome to your curly hair database</h1>
    <p>Learn to embrace your curls!</p>
  </div>
</div>

<div class="content-container">
  {@render children()}
</div>

<style>
  /* Globale Einstellungen */
  body {
    margin: 0;
    padding: 0;
  }

  /* Navbar-Styling */
  .navbar {
    z-index: 10;
  }

  /* Hero-Bereich */
  .hero-section {
    height: 100vh; /* Voller Bildschirmhöhe */
    background-image: url('/images/models/main.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
  }

  .hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.7);
  }

  .hero-content h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  .hero-content p {
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  /* Content-Bereich */
  .content-container {
    background-color: #f8f9fa; /* Hintergrundfarbe für den restlichen Bereich */
    padding: 2rem;
    min-height: 100vh;
  }
</style>