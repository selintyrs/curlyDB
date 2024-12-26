<script>
    // Kein spezieller JS-Code erforderlich
  </script>
  
  <div class="hero">
    <div class="hero-overlay">
      <h1>Welcome to your curly hair database</h1>
      <p>Learn to embrace your curls!</p>
    </div>
  </div>
  
  <style>
    /* Hero-Bereich */
    .hero {
      position: fixed; /* Feststehender Hintergrund über die gesamte Seite */
      top: 0;
      left: 0;
      width: 100vw; /* Volle Breite des Viewports */
      height: 100vh; /* Volle Höhe des Viewports */
      background-image: url('/images/models/main.jpeg'); /* Bild hinzufügen */
      background-size: cover; /* Bild proportional vergrößern, um den Bereich zu füllen */
      background-position: center; /* Bild zentrieren */
      background-repeat: no-repeat; /* Kein Wiederholen des Bildes */
      z-index: -1; /* Hintergrund hinter allen Inhalten */
    }
  
    /* Textüberlagerung */
    .hero-overlay {
      position: absolute;
      top: 50%;
      left: 70%;
      transform: translate(-50%, -50%);
      color: black;
      text-align: left;
    }
  
    .hero-overlay h1 {
      font-size: 2.7rem;
      font-weight: bold;
    }
  
    .hero-overlay p {
      font-size: 1.5rem;
      margin-top: 10px;
    }
  
  </style>
  