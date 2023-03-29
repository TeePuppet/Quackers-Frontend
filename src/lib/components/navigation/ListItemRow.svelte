<script lang="ts">

    export let first:string;
    export let second:string;
    export let third:string;
    export let url:string;
</script>

<a class="flex justify-between border border-zinc-800 rounded px-4 py-4" href={url}>
   <div>{first}</div>
   <div>{second}</div>
   <div>{third}</div>
</a>

<style lang="postcss">
    a {
        @apply transition-all ease-in duration-150 hover:border-white;
    }
</style>


