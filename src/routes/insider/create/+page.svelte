<script>
  import { onMount } from 'svelte';
  const { hairtypes } = data;

  let {form} = $props();

  onMount(() => {
    'use strict';

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
  });
</script>

<form method="POST" action="?/create" class="needs-validation" novalidate>
  <div class="mb-3">
    <label class="form-label" for= "id">Select Hairtype</label>
    {#each hairtypes as hairtype}
      <div class="form-check">
        <input 
          class="form-check-input" 
          type="radio" 
          name="hairtype_id" 
          id="hairtype-{hairtype._id}" 
          value="{hairtype._id}" 
          required>
        <label class="form-check-label" for="hairtype-{hairtype._id}">
          {hairtype.hairtype}
        </label>
      </div>
    {/each}
    <div class="invalid-feedback">
      Please select a hairtype.
    </div>
  </div>

  <div class="mb-3">
    <label for="tip_for" class="form-label">Tip for...</label>
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
    <div class="invalid-feedback">
      Please select a tip category.
    </div>
  </div>

  <div class="mb-3">
    <label for="tip_text" class="form-label">Your insider tip:</label>
    <textarea
      class="form-control"
      id="tip_text"
      name="tip_text"
      rows="3"
      required
    ></textarea>
    <div class="invalid-feedback">
      Please provide your tip.
    </div>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

{#if form?.success}
<p>Insider added successfully!</p>
{/if}
