<script>
  let { form } = $props();
</script>

<form method="Post" action="?/create">
  <h2>Select your hairtype:</h2>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault1"
    />
    <label class="form-check-label" for="flexRadioDefault1"> 2A </label>
  </div>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault2"
      checked
    />
    <label class="form-check-label" for="flexRadioDefault2"> 2B </label>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault2"
        checked
      />
      <label class="form-check-label" for="flexRadioDefault2"> 2C </label>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked
        />
        <label class="form-check-label" for="flexRadioDefault2"> 3A </label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault2"> 3B </label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2"> 3C </label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                4A
              </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  4B
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    4C
                  </label>
                </div>

                <div class="col-md-6">
                  <label for="inputYear" class="form-label">tip for</label>
                  <select
                    class="form-select"
                    id="tip_for"
                    name="tip_for"
                    required
                  >
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
                  <button type="submit" class="btn btn-primary"
                    >Add Insider</button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>

{#if form?.success}
  <p>Insider added !</p>
{/if}
