<script lang="ts">

    export let blogTitle:string;
    export let url:string;
</script>

<a class="flex justify-between border border-zinc-800 rounded px-4 py-4" href={url}>
   {blogTitle}
</a>

<style lang="postcss">
    a {
        @apply transition-all ease-in duration-150 hover:border-white;
    }
</style>


