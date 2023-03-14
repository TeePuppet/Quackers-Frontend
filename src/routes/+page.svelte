<script lang="ts">
	import EmailAndPasswordLogin from "$lib/firebase/components/EmailAndPasswordLogin.svelte";
	import GoogleAuthLogin from "$lib/firebase/components/GoogleAuthLogin.svelte";


</script>

<div class="flex flex-col items-center justify-center h-screen">
	<h1>Login</h1>

	<EmailAndPasswordLogin />

	<div class="divider">or</div>

    <GoogleAuthLogin />

</div>

