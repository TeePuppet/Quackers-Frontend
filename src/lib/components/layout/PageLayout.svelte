<script lang="ts">
	import Breadcrumbs from "../navigation/Breadcrumbs.svelte";
    import { page } from "$app/stores";
	import Button from "../elements/button/Button.svelte";
    $: currentRoute = $page.route.id
    $: routes = $page.route.id?.split('/')!
    export let pageTitle:string = "Page Title"


    export let topBar = true;
    export let contentClass = '';



</script>
{#if topBar}
    <div id="top-bar" class="responsive-p-x responsive-p-y z-10">
        <div class="flex items-center">
            <Button size="icon" on:click={() => history.back()}> <i class="fa-solid fa-chevron-left"></i></Button>
            <div>
                <!-- <span class="text-xs"><Breadcrumbs/></span> -->
                <span class=" ml-2 font-semibold block">{pageTitle}</span>
            </div>

        </div>
        <slot name="topBar"></slot>
    </div>


    
{/if}

<div class="{contentClass} px-2 pb-28">
    <slot></slot>
</div>

<style lang="postcss">

	#top-bar {
		@apply sticky top-0 flex justify-between items-center bg-gradient-to-b from-black;
	}

</style>