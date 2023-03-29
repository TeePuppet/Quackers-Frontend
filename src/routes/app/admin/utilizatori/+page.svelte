<script>
	import ContentTitle from "$lib/components/ContentTitle.svelte";
	import Modal from "$lib/components/Modal.svelte";
	import UserList from "./UserList.svelte";

	export let data;

</script>
<ContentTitle title="Utilizatori">
        <Modal action="Adauga Utilizator" />
</ContentTitle>

<UserList userData={data.newData} />