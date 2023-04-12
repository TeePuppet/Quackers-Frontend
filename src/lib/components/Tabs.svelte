<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    let dispatch = createEventDispatcher();

    export let tabs:string[];
    export let selectedTab:string;
</script>

<div class="tabs">
    <ul>
        {#each tabs as tab}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li on:click={() => dispatch('tabChange', tab)} class:active={tab === selectedTab}>
                { tab }
            </li>
        {/each}
    </ul>
</div>

<style lang="postcss">
    .tabs ul {
        @apply mt-4 flex text-sm flex-nowrap gap-2 overflow-x-auto snap-x snap-mandatory py-2;
    }

    .tabs li {
        @apply border border-zinc-800 text-center px-3 py-2 hover:cursor-pointer flex-none rounded-md snap-always snap-center;;
    }
    .active {
        @apply bg-zinc-900 border-zinc-400;
    }
</style>