<script>
	import Modal from "$lib/components/Modal.svelte";
	import BlogEntry from "./components/BlogEntry.svelte";

</script>

	<div class="flex justify-between">
		<h1>Blogs</h1>
        <Modal>
            <h1 slot="header">Adauga un site nou</h1>
            <div slot="content">
            <input class="w-full" placeholder="Nume site">
            <input class="w-full" placeholder="URL Github Repo">
            </div>
        </Modal>
	</div>

    <BlogEntry blogTitle="eBuyer.ro" url="blogs/blog"/>

    <div>
       
    </div>
