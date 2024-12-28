<script>
  let {form} = $props();
  const { hairtypes } = data;
</script>

<form method="Post" action="?/create">
  <h2>Select your hairtype:</h2>
    <div>
        {#each hairtypes as hairtype}
            <div>
                <input
                    type="radio"
                    name="hairtype_id"
                    id="hairtype-{hairtype._id}"
                    value="{hairtype._id}"
                />
                <label for="hairtype-{hairtype._id}">
                    {hairtype.name}
                </label>
            </div>
        {/each}
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
    <button type="submit" class="btn btn-primary">Add Insider</button>
  </div>
</form>

{#if form?.success}
<p>Insider added !</p>
{/if}
