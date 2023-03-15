<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { signOut } from '$lib/firebase/client';

	const logout = async () => {
		await signOut()
			.then(() => invalidateAll())
			.catch((err) => console.error('Unable to sign out', err));
	};

</script>

<div class="flex h-full">
	<div id="side-menu">
		<ul>
			<li><a href="/app">Dashboard</a></li>
			<li><a href="/app/blogs">Blogs</a></li>
			<li><a href="/app/shirts">Shirts</a></li>
		</ul>
        <ul>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li><span class="side-btn" on:click={logout}>Logout</span></li>
        </ul>
	</div>


    <!-- Content Area -->
	<div id="content-area">
		<slot />
	</div>
</div>

<style lang="postcss">

	#side-menu {
        @apply fixed bottom-0 w-full border-t border-zinc-800 px-4 py-4;
        @apply sm:left-0 sm:border-r sm:h-full sm:flex sm:flex-col sm:justify-between sm:w-48;
	}

    #side-menu ul {
        @apply flex justify-center;
        @apply sm:flex-col sm:w-auto;
    }


    #content-area {
        @apply px-6 py-6;
        @apply w-full sm:ml-48 sm:px-16 sm:py-12;
    }

    li a, li .side-btn{
        @apply block w-full px-3 py-2 rounded;
        @apply hover:bg-zinc-800 hover:cursor-pointer;
    }
</style>
