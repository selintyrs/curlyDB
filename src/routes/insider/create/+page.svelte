<script>
  
  const { hairtypes } = data;
  let {form} = $props();

</script>
{#each hairtypes as hairtype}
<h1>{ hairtype.name}</h1>
{/each}

<form method="Post" action="?/create">
  <div class="col-md-6">
    <label for="inputLength" class="form-label">tip text</label>
    <textarea
      class="form-control"
      id="tip_text"
      name="tip_text"
      rows="3"
      required
    ></textarea>
  
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
