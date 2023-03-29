<script lang="ts">
	import PageLayout from "$lib/components/layout/PageLayout.svelte";
    import Modal from "$lib/components/Modal.svelte";
    import Row from "$lib/components/Row.svelte";
	import { addWebsiteToDatabse } from "$lib/firebase/client";
	import { currentUser } from "$lib/store/user";
    
    export let data;

    let websites = data.websites

    let siteName:string 
    let siteRepo:string 
    let owner:string

    currentUser.subscribe(value => {
		if(value) owner = value.uid
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

<PageLayout pageTitle="Site'uri">
    <div slot="topBar">
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
    </div>

    <div class="flex flex-col gap-2">
        {#each websites as website }
            <Row url="siteuri/{website.name}" title="{website.name} ({website.posts.length})">

            </Row>
        {/each}
    </div>

</PageLayout>

