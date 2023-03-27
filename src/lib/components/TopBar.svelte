
<div id="top-bar">
    <div class="flex">
        <button on:click={() => history.back()} class="border-none"><i class="fa-solid fa-chevron-left"></i></button>
        <button on:click={() => history.forward()} class="border-none"><i class="fa-solid fa-chevron-right"></i></button>

    </div>
    <div class="flex gap-2 justify-between">
        <div id="admin">
            <a href="/app/admin/utilizatori"><i class="fa-regular fa-circle-user"></i></a>
            <a href="/app/admin/"><i class="fa-regular fa-face-smile-wink"></i></a>
            <a href="/app/account/"><i class="fa-solid fa-gear"></i></a>
        </div>

    </div>

</div>

<style lang="postcss">
    	#admin {
		@apply flex items-center px-4;
	}
	#admin a {
		@apply block opacity-40 hover:opacity-100 px-2 py-2 rounded-md;
	}
	#top-bar {
		@apply flex justify-between items-center px-4 py-2;
		@apply border-b border-zinc-800 sm:px-8 sm:py-2;
	}
</style>