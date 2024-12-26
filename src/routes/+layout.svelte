<script>
  let { children } = $props();
</script>

<nav
  class="navbar navbar-expand-lg"
  style="background-color: #654321;"
>
  <div class="container-fluid">
    <a class="navbar-brand" href="/">CurlyDB</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/hairtypes">Hairtype</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/insider">Insider</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


<div class="container mt-3">
  {@render children()}
</div>

<style>
  :global(body) {
    background-color: #bd987a8a; /* Standard-Hintergrundfarbe */
    margin: 0;
    padding: 0;
  }

  .content-container {
    min-height: 100vh;
    padding-top: 1rem;
    background-color: #f8f9fa; /* Gleiche Hintergrundfarbe wie der Body */
  }

  nav {
    margin-bottom: 1rem;
  }
</style>
