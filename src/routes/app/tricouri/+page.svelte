<script lang="ts">
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import Trending from './Trending.svelte';
</script>

<PageLayout topBar={false}>
	<div class="flex gap-2 items-center justify-between responsive-p-x responsive-p-y">
		<h2>Tricouri</h2>
	</div>

	<div class="flex w-full gap-4">
		<div class="mx-auto w-full max-w-2xl h-full overflow-y-scroll">

			<Trending/>

		</div>

	</div>
</PageLayout>



