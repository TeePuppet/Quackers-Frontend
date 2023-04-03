<script>
	import PageLayout from "$lib/components/layout/PageLayout.svelte";
	import Modal from "$lib/components/Modal.svelte";
	import Row from "$lib/components/Row.svelte";
	import { Users } from "$lib/stores/users";
	// export let data

	$: newUser = {
		email: ""
	}
</script>
<PageLayout pageTitle="Utilizatori">
	<div slot="topBar">
		<Modal action="Adauga Utilizator">
			<div slot="header">Adauga un Utilizator</div>
			<div slot="content">
				<input placeholder="Email Address" bind:value={newUser.email}/>
				
			</div>
		</Modal>
	</div>
	
	<div id="labels" class="z-0 grid grid-cols-3 font-semibold text-sm mb-2 px-4 opacity-50">
		<span>Email</span>
		<span>Role</span>
		<span>Verified</span>
		<span></span>
	</div>

	{#each $Users as user}
		<Row url="/app/admin/utilizatori/{user.id}">
			<span>{user.email}</span>
			<span>{user.role}</span>
			<span>{user.verified}</span>
			</Row>
	{/each}

</PageLayout>
