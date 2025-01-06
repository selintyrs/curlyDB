<script>
    import { enhance } from "$app/forms";
    export let insiderId;
    let userRating = 0;
    let hoveredRating = 0;
    const stars = [1, 2, 3, 4, 5];
  </script>
  
  <div class="rating-container">
    <form 
    method="POST" 
    action="?/addRating"
    use:enhance={({ formData }) => {
      return async ({ update }) => {
      await update();
      window.location.reload();
      };
    }}
    >
    <input type="hidden" name="insiderId" value={insiderId} />
    
    <div class="rating-stars">
      {#each stars as star}
      <button 
        type="button"
        class="star-btn"
        class:active={star <= (hoveredRating || userRating)}
        on:mouseenter={() => hoveredRating = star}
        on:mouseleave={() => hoveredRating = 0}
        on:click={() => userRating = star}
      >
        ★
      </button>
      {/each}
      <input type="hidden" name="rating" value={userRating} />
    </div>
   
   
    <button type="submit" class="btn submit-btn" disabled={!userRating}>
      Bewertung abschicken
    </button>
    </form>
  </div>
  
  <style>
    .rating-container {
    background: #1a1a1a;
    padding: 2rem;
    border-radius: 10px;
    margin-top: 2rem;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.7);
    }
   
    .rating-stars {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
    }
   
    .star-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #666;
    cursor: pointer;
    transition: color 0.2s;
    }
   
    .star-btn.active {
    color: #ff00b3;
    }
   
   
    .submit-btn {
    width: 100%;
    }
   
    .submit-btn:disabled {
    background: #666;
    cursor: not-allowed;
    }
  </style>
  