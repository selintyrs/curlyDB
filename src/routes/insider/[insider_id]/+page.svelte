<script>
    export let data; // Contains insider and other data
    export let form; // Handles the form response
  </script>
  
  <h1 class="page-title">{data.insider.tip_for}</h1>
  
  <!-- Rating Form -->
  <form method="POST" action="?/create" class="rating-form">
    <input type="hidden" name="insiderId" value={data.insider._id} />
    <div class="stars">
      {#each Array(5) as _, i}
        <input type="radio" id="star{i + 1}" name="rating" value={5 - i} required />
        <label for="star{i + 1}">★</label>
      {/each}
    </div>
    <button type="submit" class="btn btn-primary">Send Rating</button>
  </form>
  
  <!-- Form Success/Error Messages -->
  {#if form?.success}
    <p>Successfully added!</p>
  {/if}
  {#if form?.error}
    <p class="error">{form.error}</p>
  {/if}
  