<script lang="ts">
    export let url = "noUrl";
    export let title:string;
</script>

{#if url !== "noUrl"}
    <a class="row" href={url}>
       {title}
    </a>
{:else}
    <div class="row noClick">
       {title}
    </div>
{/if}



<style lang="postcss">
    .row {
        @apply border border-zinc-800 rounded px-4 py-4 font-semibold
    }
    a {
        @apply transition-all ease-in duration-150 hover:border-white;
    }
</style>


