<script>
    export let topBar = true;
    export let pageTitle = "Page Title"

</script>
{#if topBar}
    <div id="top-bar">
        <div class="flex items-center">
            <button on:click={() => history.back()} class="border-none"><i class="fa-solid fa-chevron-left"></i></button>
            <div>
                <h2 class="font-semibold">{pageTitle}</h2>
            </div>

        </div>
        <slot name="topBar"></slot>
    </div>
{/if}

<div id="content">
    <slot></slot>
</div>

<style lang="postcss">
    #content {
        @apply px-4 py-5;
        @apply sm:px-8 sm:py-4;
    }

	#top-bar {
		@apply flex justify-between items-center px-4 py-2;
		@apply border-b border-zinc-800 sm:px-8 sm:py-2;
	}

</style>