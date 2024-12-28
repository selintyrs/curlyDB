<script>
  let { form } = $props();
</script>

<form method="Post" action="?/create">
  <h2>Select your hairtype:</h2>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="hairtype_id"
      id="flexRadioDefault1"
      value="2A"
    />
    <label class="form-check-label" for="flexRadioDefault1">2A</label>
  </div>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="hairtype_id"
      id="flexRadioDefault2"
      value="2B"
    />
    <label class="form-check-label" for="flexRadioDefault2">2B</label>
  </div>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="hairtype_id"
      id="flexRadioDefault3"
      value="2C"
    />
    <label class="form-check-label" for="flexRadioDefault3">2C</label>
  </div>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="hairtype_id"
      id="flexRadioDefault4"
      value="3A"
    />
    <label class="form-check-label" for="flexRadioDefault4">3A</label>
  </div>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="hairtype_id"
      id="flexRadioDefault5"
      value="3B"
    />
    <label class="form-check-label" for="flexRadioDefault5">3B</label>
  </div>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="hairtype_id"
      id="flexRadioDefault6"
      value="3C"
    />
    <label class="form-check-label" for="flexRadioDefault6">3C</label>
  </div>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="hairtype_id"
      id="flexRadioDefault7"
      value="4A"
    />
    <label class="form-check-label" for="flexRadioDefault7">4A</label>
  </div>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="hairtype_id"
      id="flexRadioDefault8"
      value="4B"
    />
    <label class="form-check-label" for="flexRadioDefault8">4B</label>
  </div>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="hairtype_id"
      id="flexRadioDefault9"
      value="4C"
    />
    <label class="form-check-label" for="flexRadioDefault9">4C</label>
  </div>
  

  <div class="col-md-6">
    <label for="inputYear" class="form-label">tip for</label>
    <select class="form-select" id="tip_for" name="tip_for" required>
      <option selected disabled value="">Select</option>
      <option value="1">Washing</option>
      <option value="2">Styling</option>
      <option value="3">Drying</option>
      <option value="4">Refreshing</option>
    </select>
  </div>
  <div class="col-12">
    <label for="inputLength" class="form-label">tip text</label>
    <textarea
      class="form-control"
      id="tip_text"
      name="tip_text"
      rows="3"
      required
    ></textarea>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Add Insider</button>
  </div>
</form>

{#if form?.success}
  <p>Insider added!</p>
{/if}
