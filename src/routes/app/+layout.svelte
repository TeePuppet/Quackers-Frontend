<script lang="ts">

	import MenuItem from '$lib/components/navigation/MenuItem.svelte';
    
    const admin = true;

</script>


<div id="main" class="flex h-full">
	<div id="side-menu">
		<div id="mobile">
			<MenuItem path="/app" faIcon="fa-solid fa-rocket" label="Home"/>
			<MenuItem path="/app/siteuri" faIcon="fa-regular fa-message" label="Site'uri"/>
		</div>
		<div class="hidden sm:block">
			<button class="items-end">Logout</button>
		</div>
	</div>

	<!-- Content Area -->
	<div id="content-area" class="">
		<div id="content">
			<slot />
		</div>
	</div>
</div>

<style lang="postcss">
	#content-area {
		@apply w-full sm:ml-48;
	}

	#side-menu {
		@apply z-10 fixed bottom-0 w-full border-t bg-black border-zinc-800 px-4 pt-3 pb-6;
		@apply sm:left-0 sm:border-r sm:h-full sm:flex sm:flex-col sm:justify-between sm:w-48;
	}

	#side-menu #mobile {
		@apply flex justify-center gap-4;
		@apply sm:flex-col sm:w-auto sm:gap-0;
	}

</style>
