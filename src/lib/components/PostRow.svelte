<script lang="ts">
    import Button from "./elements/button/Button.svelte";
</script>
<div class="bg-zinc-900 flex gap-2 justify-between px-4 py-2 mb-2 items-center rounded-lg border border-zinc-800">
    <h3>Titlu</h3>
    <p>12 Jan 2023</p>
    <p><span class="pill ai-draft">AI Draft</span></p>
    <ul class="flex">
        <li>Frigider</li>
        <li>Frigider 5l</li>
    </ul>
    <Button>Edit</Button>
</div>

<style lang="postcss">

    .pill {
        @apply text-xs uppercase font-semibold px-2 py-1 rounded-full
    }
    .published {
        @apply bg-green-900 
    }

    .ai-draft {
        @apply bg-orange-600
    }

    
</style>