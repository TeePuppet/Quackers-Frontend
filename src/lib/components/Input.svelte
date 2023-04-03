<script lang="ts">
    export let label:string = ""
    export let placeholder:string
    export let value:string
    export let extraClass:string = ""
    export let type = "input"

    
</script>

<div class="input-wrap">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    {#if label !== ""}
    <label class="block text-sm font-semibold mb-1">{label}</label>
    {/if}
    {#if type === "input"}
        <input class={extraClass} placeholder={placeholder} bind:value={value} />
    {/if}
    {#if type === "textArea"}
        <textarea class={extraClass} placeholder={placeholder} bind:value={value} />
    {/if}
</div>

<!-- <style lang="postcss">
    .input-wrap {
        @apply 
    }
</style> -->