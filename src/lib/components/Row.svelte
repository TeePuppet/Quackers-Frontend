<script lang="ts">
    export let url = "noUrl";
</script>

{#if url !== "noUrl"}
    <a class="row" href={url}>
       <slot class="slot"/>
    </a>
{:else}
    <div class="row">
       <slot class="slot"/>
    </div>
{/if}



<style lang="postcss">
    .row {
        @apply w-full grid grid-cols-3 border border-zinc-800 rounded px-4 py-4 font-semibold mb-2 cursor-pointer
    }
    .slot {
        @apply grid grid-cols-3
    }
    a {
        @apply transition-all ease-in duration-150 hover:border-white;
    }
</style>


