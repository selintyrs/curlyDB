<script>
  let { children } = $$props;
</script>



<nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">CurlyDB</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/hairtypes">Hairtypes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/insider">Insider</a>
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
    background-color: #bd9878; /* Deine fixe Hintergrundfarbe */
    margin: 0;
    padding: 0;
  }
  
  .content-container {
    position: relative;
    z-index: 1;
    padding: 1rem;
  }
</style>