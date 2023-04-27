<script lang="ts">
    export let size = "lg"
    export let style = "secondary"
    export let href = ""
</script>



{#if href !== ""}
    <a href={href} class="button flex items-center justify-center {size} {style}">
        <slot></slot>
    </a>
{:else}
    <button type="button" class="button {size} {style}" on:click>
        <slot></slot>
    </button>
{/if}


<style lang="postcss">
    .button {
        @apply rounded shadow-sm text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ;
    } 
    .xs {
        @apply px-2 py-1 text-xs;
    }

    .sm {
        @apply px-2 py-1 text-sm;
    }

    .md {
        @apply rounded-md px-2.5 py-1.5;
    }

    .lg {
        @apply rounded-md px-3 py-2;
    }

    .xl {
        @apply rounded-md px-3.5 py-2.5;
    }

    .icon {
        @apply rounded-full w-10 h-10
    }

    .icon-sm {
        @apply rounded-full w-8 h-8
    }


    .primary {
        @apply bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600;
    }

    .secondary {
        @apply bg-white/10  hover:bg-white/20 outline-none
    }

    .outline {
        @apply bg-white/5  hover:bg-white/20 outline-white/10
    }
</style>



