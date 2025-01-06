<div class="section-1">
  <div class="section-1-content">
    <h1>Welcome to your <br /> curly hair database</h1>
    <p>Learn to embrace your curls!</p>
  </div>
</div>

<div class="card-container">
  <div class="card" style="width: 18rem;">
    <a href="/hairtypes" class="card-link" aria-label="Hair Types">
      <img
        src="/images/icons/hairtype.png"
        class="card-img-top"
        alt="hairtype"
      />
      <div class="card-body">
        <p class="card-text">Find out your curl type.</p>
      </div>
    </a>
  </div>
  <div class="card" style="width: 18rem;">
    <a href="/insider" class="card-link" aria-label="Insiders read">
      <img
        src="/images/icons/community.png"
        class="card-img-top"
        alt="hairtype"
      />
      <div class="card-body">
        <p class="card-text">Read the community insiders.</p>
      </div>
    </a>
  </div>
  <div class="card" style="width: 18rem;">
    <a href="/insider/create" class="card-link" aria-label="Insiders write">
      <img src="/images/icons/advice.png" class="card-img-top" alt="hairtype" />
      <div class="card-body">
        <p class="card-text">Share your insiders.</p>
      </div>
    </a>
  </div>
</div>

<div class="section-2">
  <div class="section-2-content"></div>
</div>


<style>
  .section-1 {
    width: 100%;
    height: calc(100vh - 30px);
    background-image: url("/images/models/main.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    margin: 0;
    padding: 0;
    top: 0px;
    z-index: 1;
  }

  .section-1-content h1 {
    position: absolute;
    top: 7%;
    right: 3%;
    text-align: right;
    color: rgb(0, 0, 0);
    font-size: 2.8rem;
    font-weight: 900;
    font-style: italic;
    font-family: "Roboto", sans-serif;
    line-height: 1.5;
    word-wrap: break-word;
  }

  .section-1-content p {
    position: absolute;
    bottom: 5%;
    right: 3%;
    text-align: right;
    color: black;
    font-size: 2rem;
    font-style: italic;
    font-weight: 900;
    font-family: "Roboto", sans-serif;
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 2.3rem;
    padding: 2rem;
    max-width: 1200px;
    background-color: transparent !important;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 18rem;
    padding: 1rem;
    border: transparent;
    background-color: #fff;
  }

  .card-img-top {
    padding: 10px;
    width: 50%;
    height: auto;
    position: center;
  }

  .card-text {
    font-size: 1rem;
    font-style: italic;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    color: #000000;
    background-color: transparent !important;
    text-align: center;
  }

  .card-link {
    display: block; /* Macht den gesamten Inhalt klickbar */
    text-decoration: none;
    color: inherit;
  }

  .section-2 {
    background-image: url("/images/models/group2.jpeg");
  }
</style>
