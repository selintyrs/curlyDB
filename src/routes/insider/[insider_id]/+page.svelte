<script>
    export let data;
    
    async function handleSubmit(event) {
      event.preventDefault();
      
      const formData = new FormData(event.target);
  
      const response = await fetch(event.target.action, {
        method: "POST",
        body: formData,
      });
  
      const result = await response.json();
  
      if (result.success) {
        window.location.reload(); // Refresh or handle success
      } else {
        console.error("Failed to save rating", result);
      }
    }
  </script>
  
  <h1 class="page-title">{data.insider.tip_for}</h1>
  
  <form method="POST" action="?/create" on:submit={handleSubmit} class="rating-form">
    <input type="hidden" name="insiderId" value={data.insider._id} />
  
    <div class="stars">
      {#each Array(5) as _, i}
        <input
          type="radio"
          id="star{i + 1}"
          name="rating"
          value={5 - i}
          required
        />
        <label for="star{i + 1}">★</label>
      {/each}
    </div>
  
    <button type="submit" class="btn btn-primary">Send Rating</button>
  </form>
  