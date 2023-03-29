<script lang="ts">
	import { emailAndPasswordSignIn } from "$lib/firebase/client";

	type FormState = 'idle' | 'verifying' | Error;
	let state: FormState;
	let email:string;
	let password: string

	const login =async () => {
		try {
			state = 'verifying';
			const { res, err } = await emailAndPasswordSignIn(email, password);

			if (err) throw new Error(err);        
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
	
</div>

