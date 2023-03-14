<script lang="ts">
	import EmailAndPasswordLogin from "$lib/firebase/components/EmailAndPasswordLogin.svelte";
	import GoogleAuthLogin from "$lib/firebase/components/GoogleAuthLogin.svelte";


</script>

<div id="logo-container" class="mt-5 flex flex-col justify-start h-screen px-4 box-border sm:mt-0 sm:justify-center sm:items-center">
    <h1 class="text-2xl pb-4 font-bold">Login</h1>
	<EmailAndPasswordLogin />
</div>