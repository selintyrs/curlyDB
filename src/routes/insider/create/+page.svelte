<script>
  let { form } = $props();

  function onClick(e) {
    e.preventDefault();
    grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute(
        "6LcF7K4qAAAAAAvmfOwSpeReVvjDoDAVHTSxJrCf",
        { action: "LOGIN" },
      );
    });
  }
</script>
<a href="/insider" class="btn btn-secondary disabled" tabindex="-1" role="button" aria-disabled="false">Back</a>
<h1 class="page-title">Sharing is caring!</h1>

<form method="Post" action="?/create" class="form-container">
  <!-- Left Column -->
  <div class="form-left">
    <h2 class="form-question">Select your hairtype:</h2>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="hairtype_id"
        id="flexRadioDefault1"
        value="2A"
      />
      <label class="form-check-label" for="flexRadioDefault1"
        >2A - SLIGHT WAVES</label
      >
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="hairtype_id"
        id="flexRadioDefault2"
        value="2B"
      />
      <label class="form-check-label" for="flexRadioDefault2"
        >2B - SOFT WAVES</label
      >
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="hairtype_id"
        id="flexRadioDefault3"
        value="2C"
      />
      <label class="form-check-label" for="flexRadioDefault3"
        >2C - SOFT CURLS</label
      >
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="hairtype_id"
        id="flexRadioDefault4"
        value="3A"
      />
      <label class="form-check-label" for="flexRadioDefault4"
        >3A - CLASSIC CURLS</label
      >
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="hairtype_id"
        id="flexRadioDefault5"
        value="3B"
      />
      <label class="form-check-label" for="flexRadioDefault5"
        >3B - SPIRAL CURLS</label
      >
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="hairtype_id"
        id="flexRadioDefault6"
        value="3C"
      />
      <label class="form-check-label" for="flexRadioDefault6"
        >3C - CORKSCREWS</label
      >
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="hairtype_id"
        id="flexRadioDefault7"
        value="4A"
      />
      <label class="form-check-label" for="flexRadioDefault7"
        >4A - SLIGHTLY COILED</label
      >
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="hairtype_id"
        id="flexRadioDefault8"
        value="4B"
      />
      <label class="form-check-label" for="flexRadioDefault8">4B - KINKY</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="hairtype_id"
        id="flexRadioDefault9"
        value="4C"
      />
      <label class="form-check-label" for="flexRadioDefault9"
        >4C - SUPER KINKY</label
      >
    </div>
  </div>

  <!-- Right Column -->
  <div class="form-right">
    <div class="col-md-6">
      <label for="inputYear" class="form-question">Tip for</label>
      <select class="form-select" id="tip_for" name="tip_for" required>
        <option selected disabled value="">Select</option>
        <option value="Washing">Washing</option>
        <option value="Styling">Styling</option>
        <option value="Drying">Drying</option>
        <option value="Refreshing">Refreshing</option>
      </select>
    </div>
    <div class="col-12">
      <label for="inputLength" class="form-question">Your insider tip: </label>
      <textarea
        class="form-control"
        id="tip_text"
        name="tip_text"
        rows="6"
        required
      ></textarea>
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>

{#if form?.success}
  <p>Successfully added!</p>
{/if}

<div class="banner">
  <img src="/images/locken.jpg" alt="banner" />
</div>

<style>
  .page-title {
    text-align: left;
    margin-top: 0rem;
    margin-bottom: 15px;
    font-size: 3.5rem;
    font-weight: 900;
    font-style: italic;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }

  .form-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 50px;
    padding: 0 30px;
    margin-bottom: 80px;
  }

  .form-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    font-family: "Roboto", sans-serif;
    font-style: italic;
  }

  .form-check {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

  .form-check-input {
    width: 20px;
    height: 20px;
    border-width: 2px;
    margin-right: 10px;
    color: #000000;
  }

  .form-check-label {
    font-family: "Roboto", sans-serif;
    font-style: italic;
    font-size: 1.2rem;
    font-weight: lighter;
    line-height: 0.5;
    text-align: left;
  }

  .form-right .form-question,
  .form-left .form-question {
    font-family: "Roboto", sans-serif;
    font-style: italic;
    font-size: 1.7rem;
  }

  .form-select {
    font-family: "Roboto", sans-serif;
    font-style: italic;
    font-size: 1rem;
    font-weight: lighter;
    margin-bottom: 30px;
  }

  .form-control {
    margin-bottom: 20px;
  }

  .btn {
    border-color: black;
    border-width: 2px;
    background-color: white;
    font-style: italic;
    font-family: "Roboto", sans-serif;
    color: black;
  }

  .banner img {
    width: 100vw;
    height: auto;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  /* Responsive Adjustment */
  @media (max-width: 768px) {
    .form-container {
      grid-template-columns: 1fr;
    }

    .form-left,
    .form-right {
      padding: 0;
      align-items: center;
    }
  }
</style>
