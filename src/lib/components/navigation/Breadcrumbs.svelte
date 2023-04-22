<script lang="ts">
	import { page } from "$app/stores";

    $: currentRoute = $page.route.id
    $: routes = $page.route.id?.split('/')!

    
</script>
<div class="flex items-center gap-1 opacity-50">
{#each routes as route, i}
        {#if route !== ""}
            {#if route === "app"}
                <a class="leading-none capitalize" href={currentRoute?.slice(0 ,currentRoute.indexOf(route) + route.length)}>
                    <i class="fa-solid fa-house"></i>
                </a>
            {/if}
            <a class="leading-none capitalize" href={currentRoute?.slice(0 ,currentRoute.indexOf(route) + route.length)}>{route}</a>
        {/if}
{/each}
</div>