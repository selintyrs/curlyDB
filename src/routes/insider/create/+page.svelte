<script>
    let { form } = $props();
  </script>

<form method = "Post" action="?/create">
    <div class="mb-3">
      <label for="tip_for" class="form-label">Tip for...</label>
      <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
        <option selected disabled value ="">Select</option>
        <option value="1">Washing</option>
        <option value="2">Styling</option>
        <option value="3">Drying</option>
        <option value="4">Refreshing</option>
      </select>
      <div id="validationServer04Feedback" class="invalid-feedback">
        Please select.
      </div>
    </div>
    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Your insider tip:</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>

  {#if form?.success}
    <p>Insider added</p>
    {/if}