<script>
  import { enhance } from "$app/forms";
  export let data;

    function handleRatingSubmit(event) {
    return async ({ result }) => {
      if (result.type === "success") {
        window.location.reload();
      }
    };
  }
</script>

<h1 class="page-title">{data.insider.tip_for}</h1>


