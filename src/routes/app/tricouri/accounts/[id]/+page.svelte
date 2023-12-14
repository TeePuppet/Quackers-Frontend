<script lang="ts">
	import { page } from "$app/stores";

    $: id = $page.params.id

    $: console.log(id)
</script>

{id}