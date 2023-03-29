<script lang="ts">
	import { applyAction, deserialize } from '$app/forms';
	import { goto, invalidateAll } from '$app/navigation';
	import type { ActionResult } from '@sveltejs/kit';
	import { getAuth, signInWithEmailAndPassword, type User, type UserCredential } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { authStore } from '$lib/stores/auth';
	// import type { ActionData } from './$types';
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
	<div class="w-1/3 mx-auto">
		{#if form && !form.success && form.message}
			<div class="text-red-700">
				{form.message}
			</div>
		{/if}

		<form class="mt-4" method="POST" on:submit|preventDefault={handleSubmit}>
			<div>
				<label>
					Email
					<input
						class="block border border-gray-400 rounded py-1 px-2 mt-2 mb-4 w-full"
						name="email"
						type="email"
						required
					/>
				</label>
			</div>
			<div>
				<label>
					Password
					<input
						class="block border border-gray-400 rounded py-1 px-2 mt-2 mb-4 w-full"
						name="password"
						type="password"
						required
					/>
				</label>
			</div>

			<div>
				<button
					class="block mx-auto bg-indigo-700 hover:bg-indigo-600 text-gray-200 hover:text-white rounded py-2 px-4"
					type="submit"
				>
					Submit
				</button>
			</div>
		</form>
	</div>
</div>

<!-- <script lang="ts">
	// import { emailAndPasswordSignIn } from "$lib/firebase/client";

	type FormState = 'idle' | 'verifying' | Error;
	let state: FormState;
	let email:string;
	let password: string

	const login =async () => {
		try {
			state = 'verifying';
			// const { res, err } = await emailAndPasswordSignIn(email, password);

			// if (err) throw new Error(err);        
		} catch (error) {
			state = error as Error;
		}
	}

</script>

<div class="h-full py-6 px-6 flex flex-col justify-start box-border sm:justify-center sm:items-center">

	
	
		<input class="w-full max-w-sm" placeholder="Email Address" type="email" id="email" bind:value={email} required>
		<input class="w-full max-w-sm" placeholder="Password" type="password" name="password" id="password" bind:value={password} required>
		
		<button class="w-full max-w-sm" on:click={login}>Login</button>
	
	
	{#if state == 'verifying'}
		<p>Logging in, please wait...</p>
	{:else if state instanceof Error}
		<p>Unable to login, please try again.</p>
	{/if}
	
</div> -->

