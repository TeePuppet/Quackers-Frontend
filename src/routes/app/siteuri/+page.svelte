<script lang="ts">
	import ContentTitle from "$lib/components/ContentTitle.svelte";
    import Modal from "$lib/components/Modal.svelte";
	import { addWebsiteToDatabse } from "$lib/firebase/client";
	import { currentUser } from "$lib/store/user";

	import WebsiteEntry from "./components/WebsiteEntry.svelte";
    
    export let data;

    let websites = data.websites

    let siteName:string 
    let siteRepo:string 
    let owner:string

    currentUser.subscribe(value => {
		if(value) owner = value.uid
        if(value) console.log(value)
	});

    const addSite = async() => await addWebsiteToDatabse(siteName, {
            name: siteName,
            repo: siteRepo,
            owner: owner,
            moderators: ['UserID', 'UserID'],
            categories: [],
            posts: [],
            pages: []
        })

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
        {#each websites as website }
            <WebsiteEntry blogTitle="{website.name}" url=siteuri/{website.name}/>
        {/each}
    </div>

    <div>
    </div>
