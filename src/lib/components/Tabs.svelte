<script lang="ts">
    export let tabs: string[] = [];
    export let activeTab = tabs[0];
    
    function switchTab(tab: string) {
        activeTab = tab;
    }
</script>

<div class="tabs">
    <ul class="no-scrollbar"> 
        {#each tabs as tab}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li on:click={() => switchTab(tab)} class:active={tab === activeTab}>
                { tab }
            </li>
        {/each}
    </ul>
</div>

<style lang="postcss">
    .tabs ul {
        @apply flex text-sm flex-nowrap gap-1 overflow-x-auto snap-x snap-mandatory py-2;
    }

    .tabs li {
        @apply border border-zinc-800 border-opacity-60 text-center px-3 py-2 hover:cursor-pointer flex-none rounded-md snap-always snap-start;
    }
    li.active {
        @apply border-opacity-20 border-amber-400 text-amber-400 bg-amber-400 bg-opacity-5;
    }
</style>