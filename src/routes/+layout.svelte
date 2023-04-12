<script>
    import "../app.css";
    import { onMount } from 'svelte';
	import { requestWakeLock } from "$lib/utils/wakeLock";

  onMount(async () => {
    if (typeof window !== 'undefined') {
      await requestWakeLock();
    }
  });
</script>



<slot />




