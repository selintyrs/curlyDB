<script>
  import "./styles.css";
  let { children } = $props();
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet" />
</svelte:head>

<nav class="navbar navbar-expand-lg fixed-top" style="background-color: white;" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/" style="color: black;">
      <img src="/images/icon.png" alt="Logo" width="38" height="36" class="d-inline-block align-text-top">
      CurlyDB</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
    margin: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    position: sticky;
    top: 0;

  }

  .content-container {
    min-height: 100vh;
    padding: 2rem;
  }
</style>
