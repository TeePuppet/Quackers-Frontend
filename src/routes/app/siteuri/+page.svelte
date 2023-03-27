<script lang="ts">
	import ContentTitle from "$lib/components/ContentTitle.svelte";
    import Modal from "$lib/components/Modal.svelte";
	import { addWebsiteToDatabse } from "$lib/firebase/client";
	import BlogEntry from "./components/BlogEntry.svelte";

    let siteName:string 
    let siteRepo:string 


    const addSite = async() => {
        const add = await addWebsiteToDatabse(siteName, {
            name: siteName,
            repo: siteRepo
        })
    } 
</script>
    <ContentTitle title="Site'uri">

        <Modal action="Adauga un site">
            <h1 slot="header">Adauga un site nou</h1>
            <div slot="content">
            <input class="w-full" placeholder="Nume site" bind:value={siteName}>
            <input class="w-full" placeholder="URL Github Repo" bind:value={siteRepo}>
            </div>
            <div slot="footer">
                <button on:click={addSite}>Adauga site</button>
            </div>
        </Modal>
    
    </ContentTitle>

    <div class="flex flex-col gap-2">
        <BlogEntry blogTitle="eBuyer.ro" url="siteuri/eBuyer"/>
        <BlogEntry blogTitle="Bebetrei.ro" url="siteuri/bebe"/>
    </div>

    <div>
    </div>
