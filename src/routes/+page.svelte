<script>
    // Kein spezieller JS-Code nötig
  </script>
  
  <div class="hero-section">
    <div class="hero-content">
      <h1>Welcome to your curly hair database</h1>
      <p>Learn to embrace your curls!</p>
    </div>
  </div>
  
  <!-- Weitere Inhalte -->
  <div class="main-content">
    <p>This is additional content below the hero section.</p>
  </div>
  
  <style>
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
  
    .main-content {
      padding: 2rem;
    }
  </style>
  