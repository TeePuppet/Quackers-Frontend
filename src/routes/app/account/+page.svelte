<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { signOut } from '$lib/firebase/client';

	const logout = async () => {
		await signOut()
			.then(() => invalidateAll())
			.catch((err) => console.error('Unable to sign out', err));
	};
</script>

<button on:click={logout}>Logout</button>