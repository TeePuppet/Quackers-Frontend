<script>
    export let topBar = true;
    export let pageTitle = "Page Title"

</script>
{#if topBar}
    <div id="top-bar">
        <div class="flex items-center">
            <button on:click={() => history.back()} class="border-none"><i class="fa-solid fa-chevron-left"></i></button>
            <div>
                <span class="font-semibold">{pageTitle}</span>
            </div>

        </div>
        <slot name="topBar"></slot>
    </div>
{/if}

<div id="content">
    <slot></slot>
</div>

<style lang="postcss">

	#top-bar {
		@apply sticky top-0 flex justify-between items-center px-4 py-2 bg-white bg-opacity-5;
		@apply border-b border-zinc-800 sm:px-8 sm:py-2;
	}

</style>