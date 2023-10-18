<script lang="ts">
	import { applyAction, deserialize } from '$app/forms';
	import { goto, invalidateAll } from '$app/navigation';
	import type { ActionResult } from '@sveltejs/kit';
	import { signInWithEmailAndPassword, type UserCredential } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { authStore } from '$lib/stores/auth';
	import { auth } from '$lib/firebase/client';
	import type { ActionData } from './$types';

	export let form: ActionData;

	onMount(() => {
		return authStore.subscribe((user) => {
			if (user) goto('/app');
		});
	});

	const login = async (email: string | undefined, password: string | undefined ): Promise<ActionResult<{ credential: UserCredential }, Record<string, string>>> => {
		
		if (!email || !password) {
			return { type: 'failure', status: 400, data: { message: 'Email or password are missing' } };
		}
		const firebaseAuth = auth

		try {
			const credential = await signInWithEmailAndPassword(firebaseAuth, email, password);

			return {
				type: 'success',
				status: 200,
				data: { credential }
			};
		} catch (error) {
			return {
				type: 'failure',
				status: 403,
				data: { message: (error as Error).message }
			};
		}
	};

	async function handleSubmit(this: HTMLFormElement, event: unknown): Promise<void> {

		const formData = new FormData(this);

		const email = formData.get('email')?.toString();
		const password = formData.get('password')?.toString();

		try {
			const loginResult = await login(email, password);

			if (loginResult.type !== 'success') { 
				
				applyAction(loginResult);
				return;
			}
			
			const { data } = loginResult;
			if (!data?.credential) {
				
				throw new Error('Login returned success but no user credential data');
			}

			const { credential: { user } } = data;
			formData.set('token', await user.getIdToken());

			const response = await fetch(this.action, {
				method: 'POST',
				body: formData
			});

			const result = deserialize(await response.text());

			if (result.type === 'success') { await invalidateAll();}
			
		} catch (error) {
			applyAction({
				type: 'error',
				error
			});
		}
	}
</script>

<div class="container mt-8 mx-auto">
	<div class="sm:max-w-1/3 w-full mx-auto px-4">
		{#if form && !form.success && form.message}
			<div class="text-red-700">
				{form.message}
			</div>
		{/if}

		<form class="mt-4" method="POST" on:submit|preventDefault={handleSubmit}>

			<div>
				<input class="mb-2" placeholder="Email" name="email" type="email" required />
			</div>

			<div>
				<input class="mb-2" placeholder="Password" name="password" type="password" required />
			</div>

			<div>
				<button type="submit">Submit</button>
			</div>

		</form>
	</div>
</div>