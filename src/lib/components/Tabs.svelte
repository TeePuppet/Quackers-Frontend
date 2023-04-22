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
        @apply flex text-sm flex-nowrap gap-1 overflow-x-auto snap-x snap-mandatory pt-2 border-b border-white border-opacity-5;
    }

    .tabs li {
        @apply text-center px-4 pt-2 pb-4 hover:cursor-pointer flex-none rounded-md snap-always snap-start text-zinc-500 hover:text-white
    }
    li.active {
        @apply rounded-none border-b border-white text-white;
    }
</style>