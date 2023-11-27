<script lang="ts">

	import MenuItem from '$lib/components/navigation/MenuItem.svelte';
	import { logout } from '$lib/firebase/utils';
	export let data

</script>


<div id="main" class="flex h-full" class:green="{data.admin}">
	<div id="side-menu">
		<div id="mobile">
			<MenuItem path="/app/t-shirts" faIcon="fa-regular fa-rocket" label="T-Shirts"/>
			<MenuItem path="/app/siteuri" faIcon="fa-regular fa-message" label="Site'uri"/>
			<MenuItem path="/app/videos" faIcon="fa-brands fa-youtube" label="Videos"/>
		</div>
		<div class="hidden sm:block">
			<button class="items-end w-full" on:click={()=> logout()}>Logout</button>
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
		@apply bg-zinc-900 fixed left-1/2 -translate-x-1/2 bottom-6 rounded-full border border-zinc-800 px-8 pt-2 pb-1 sm:px-2;
		@apply  sm:rounded-none sm:left-0 sm:bottom-0 sm:-translate-x-0 sm:border-none sm:h-full sm:flex sm:flex-col sm:justify-between sm:w-48;
	}

	#side-menu #mobile {
		@apply flex justify-center gap-4;
		@apply sm:flex-col sm:w-auto sm:gap-0;
	}

</style>
