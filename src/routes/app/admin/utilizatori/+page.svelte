<script>
	import ContentTitle from "$lib/components/ContentTitle.svelte";
	import PageLayout from "$lib/components/layout/PageLayout.svelte";
	import Modal from "$lib/components/Modal.svelte";
	import TopBar from "$lib/components/TopBar.svelte";
	import UserList from "./UserList.svelte";

	export let data;

</script>
<PageLayout pageTitle="Utilizatori">
	<Modal action="Adauga Utilizator" />
</PageLayout>


<UserList userData={data.newData} />