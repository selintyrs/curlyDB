<script>
  let { children } = $props();
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet" />
</svelte:head>

<nav class="navbar navbar-expand-lg fixed-top" style="background-color: #c28562;" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/" style="color: black;">
      <img src="/images/icon.png" alt="Logo" width="34" height="32" class="d-inline-block align-text-top">
      CurlyDB</a>
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
          <a class="nav-link active" aria-current="page" href="/hairtypes" style="color: black;">Hairtypes</a>
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

  .navbar {
    z-index: 10;
    font-style: italic;
    font-weight: 900;
    font-family: 'Roboto', sans-serif;
  }

  .content-container {
    min-height: 100vh;
    padding: 2rem;
  }
</style>
