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
        @apply px-6 py-5;
        @apply sm:px-8 sm:py-4;
    }

    	#admin {
		@apply flex items-center;
	}
	#admin a {
		@apply block opacity-40 hover:opacity-100 px-2 py-2 rounded-md;
	}
	#top-bar {
		@apply flex justify-between items-center px-6 py-2;
		@apply border-b border-zinc-800 sm:px-8 sm:py-2;
	}
</style>