<script lang="ts">
	import Breadcrumbs from "../navigation/Breadcrumbs.svelte";
    import { page } from "$app/stores";
    $: currentRoute = $page.route.id
    $: routes = $page.route.id?.split('/')!
    $: pageTitle = routes[routes.length - 1]

    export let topBar = true;
    export let contentClass = '';



</script>
{#if topBar}
    <div id="top-bar">
        <div class="flex items-center">
            <button on:click={() => history.back()} class="border-none"><i class="fa-solid fa-chevron-left"></i></button>
            <div>
                <span class="font-semibold block mb-1 capitalize">{pageTitle}</span>
                <span class="text-xs"><Breadcrumbs/></span>
            </div>

        </div>
        <slot name="topBar"></slot>
    </div>
{/if}

<div id="content" class="{contentClass}">
    <slot></slot>
</div>

<style lang="postcss">

	#top-bar {
		@apply sticky top-0 flex justify-between items-center px-4 py-5 ;
		@apply border-b border-zinc-800 sm:px-8 sm:py-2;
	}

</style>