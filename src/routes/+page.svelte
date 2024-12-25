<div class="hero-section">
    <img src="/images/models/main.jpg" alt="main" class="hero-image" />
    <div class="hero-text">
      <h1>Welcome to your curly hair database</h1>
      <p>Learn to embrace your curls!</p>
    </div>
  </div>
  
  <style>
    /* Hero-Bereich */
    .hero-section {
      position: relative;
      width: 100%; /* Vollbildbreite */
      height: 100vh; /* Vollbildhöhe */
      margin: 0; /* Entfernt alle Ränder */
      padding: 0;
      overflow: hidden;
    }
  
    /* Bild über gesamte Breite und Höhe */
    .hero-image {
      width: 100vw; /* 100% der Bildschirmbreite */
      height: 100vh; /* 100% der Bildschirmhöhe */
      object-fit: cover; /* Bild proportional skalieren, ohne Verzerrung */
      position: absolute;
      top: 0;
      left: 0;
    }
  
    /* Textüberlagerung */
    .hero-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.5); /* Halbtransparenter Hintergrund */
      padding: 20px;
      border-radius: 10px;
    }
  
    /* Überschrift */
    .hero-text h1 {
      font-size: 3rem;
      font-weight: bold;
      margin: 0;
    }
  
    /* Untertitel */
    .hero-text p {
      font-size: 1.5rem;
      margin: 10px 0 0 0;
    }
  </style>