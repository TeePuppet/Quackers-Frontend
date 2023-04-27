<script lang="ts">
    export let label:string = ""
    export let placeholder:string
    export let value:string
    export let extraClass:string = ""
    export let type = "input"
    export let options: string[] = []
    
</script>

<style lang="postcss">
    input, textarea, select {
        @apply block w-full rounded-md border-0 py-2 px-3 bg-black/90 ring-1 ring-inset ring-white/20 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6;
    }
</style>