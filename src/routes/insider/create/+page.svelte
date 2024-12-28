<script>
  
  let {form} = $props();

</script>

<form method="Post" action="?/create">
  <div class="col-md-6">
    <label for="inputName" class="form-label">hairtype</label>
    <input name="hairtype_id" class="form-control" id="inputName">
  </div>
  <div class="col-md-6">
    <label for="inputYear" class="form-label">tip for</label>
    <input name="tip_for" class="form-control" id="inputYear">
  </div>
  <div class="col-12">
    <label for="inputLength" class="form-label">tip text</label>
    <input name="tip_text" class="form-control" id="inputLength">
  </div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Add Insider</button>
  </div>
</form>

{#if form?.success}
<p>Insider added successfully!</p>
{/if}
