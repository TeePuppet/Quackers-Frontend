<script lang="ts">

	import SideMenuItem from '$lib/components/navigation/SideMenuItem.svelte';
	import TopBar from '$lib/components/TopBar.svelte';
    
    const admin = true;

</script>


<div class="flex h-full">
	<div id="side-menu">
		<ul>
			<SideMenuItem path="/app" faIcon="fa-regular fa-font-awesome" label="Home"/>
			<SideMenuItem path="/app/siteuri" faIcon="fa-regular fa-message" label="Site'uri"/>
		</ul>
        <div>
    </div>

	</div>

	<!-- Content Area -->
	<div id="content-area" class="">
		<TopBar/>
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
		@apply z-10 fixed bottom-0 w-full border-t bg-black border-zinc-800 px-4 pt-2 pb-6;
		@apply sm:left-0 sm:border-r sm:h-full sm:flex sm:flex-col sm:justify-between sm:w-48;
	}

	#side-menu ul {
		@apply flex justify-center;
		@apply sm:flex-col sm:w-auto;
	}

	#content {
		@apply px-6 py-6;
		@apply w-full  sm:px-12 sm:py-6;
	}


</style>
