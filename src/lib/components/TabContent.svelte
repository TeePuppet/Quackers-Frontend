<script lang="ts">
    export let title:string
</script>
<div class=" rounded-md border-zinc-800 mt-2">
    <div class="flex justify-between items-center py-3">
        <h2 class="ml-4">{title}</h2>
        <slot name="action"/>
    </div>
    <slot name="content"/>
</div>