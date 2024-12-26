<script>
  let { children } = $props();
</script>

<nav class="navbar navbar-expand-lg fixed-top" style="background-color: #c28562;" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/" style="color: black;">CurlyDB</a>
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
          <a class="nav-link active" aria-current="page" href="/hairtypes" style="color: black;">Hairtype</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/insider" style="color: black;">Insider</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="content-container">
  {@render children()}
</div>

<style>
  body {
    margin: 0;
    padding: 0;
    background-color: #E7D5BD; /* Standard Hintergrundfarbe */
  }

  .navbar {
    z-index: 10;
  }

  .content-container {
    min-height: 100vh;
    padding: 2rem;
  }
</style>
