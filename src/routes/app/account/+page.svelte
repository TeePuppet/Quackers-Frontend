<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import { signOut } from '$lib/firebase/client';

	const logout = async () => {
		await signOut()
			.then(() => invalidateAll())
			.catch((err) => console.error('Unable to sign out', err));
	};
</script>

<PageLayout pageTitle="Setari">
	<button on:click={logout}>Logout</button>
</PageLayout>
