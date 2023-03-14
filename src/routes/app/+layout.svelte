<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { signOut } from '$lib/firebase/client';

	const logout = async () => {
		await signOut()
			.then(() => invalidateAll())
			.catch((err) => console.error('Unable to sign out', err));
	};

</script>

<div class="flex h-screen">
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
		@apply overflow-y-auto fixed bg-zinc-900 h-full flex flex-col justify-between px-3 pt-10 pb-6 w-48;
	}

    #content-area {
        @apply ml-48 px-16 py-12;
    }

    ul {
        @apply flex flex-col w-full;
    }

    li a, li .side-btn{
        @apply block w-full px-3 py-2 rounded;
        @apply hover:bg-zinc-800 hover:cursor-pointer;
    }
</style>
