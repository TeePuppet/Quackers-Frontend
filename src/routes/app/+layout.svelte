<script lang="ts">
	import Button from '$lib/components/elements/button/Button.svelte';
	import MenuItem from '$lib/components/navigation/MenuItem.svelte';
	import { logout } from '$lib/firebase/utils';

	export let data

	$: sideMenu = true

	const toggleMenu = () => {
		if (sideMenu) {
			sideMenu = false
		} else {
			sideMenu = true
		}
}

	$: console.log(sideMenu)

</script>


<div id="main" class="flex h-full" class:green="{data.admin}">

	{#if sideMenu}
	<div id="side-menu" class="w-48 sticky bg-white/5">
		<div>
				<div id="mobile">
					<MenuItem path="/app/tricouri" faIcon="fa-solid fa-shirt" label="Tricouri"/>
					<MenuItem path="/app/siteuri" faIcon="fa-regular fa-message" label="Site'uri"/>
					<MenuItem path="/app/videos" faIcon="fa-brands fa-youtube" label="Videos"/>
					<MenuItem path="/app/admin/logs" faIcon="fa-solid fa-chart-simple" label="Logs"/>
				</div>
				<div class="hidden sm:block">
					<Button on:click={()=> logout()}>Logout</Button>
				</div>
		</div>
	</div>
	{/if}

	<!-- Content Area -->
	<div id="content-area" class="w-full h-full overflow-y-scroll relative">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="transition ease-in-out absolute left-2 top-1/2 transform -translate-y-1/2 px-3 py-6 hover:cursor-pointer bg-white/5 hover:bg-white/10 text-white/20 hover:text-white/80 rounded-lg" on:click={()=> toggleMenu()}>
			<i class="fa-solid fa-grip-lines-vertical"></i>
		</div>
		<div id="content">
			<slot />
		</div>
	</div>
</div>

<style lang="postcss">

/* 
	#side-menu {
		@apply bg-zinc-900 fixed  bottom-6 rounded-full border border-zinc-800 px-8 pt-2 pb-1 sm:px-2;
		@apply  sm:rounded-none sm:border-none sm:h-full sm:flex sm:flex-col sm:justify-between sm:w-48;
	}

	#side-menu #mobile {
		@apply flex justify-center gap-4;
		@apply sm:flex-col sm:w-auto sm:gap-0;
	} */

</style>
