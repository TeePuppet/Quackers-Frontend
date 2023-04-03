<script lang="ts">
	import PageLayout from "$lib/components/layout/PageLayout.svelte";
    import Modal from "$lib/components/Modal.svelte";
    import Row from "$lib/components/Row.svelte";
    import { addWebsiteToDatabase  } from "$lib/firebase/utils";
	import { Websites, type Website } from "$lib/stores/websites";
	import { onDestroy, onMount } from "svelte";
	import { v4 as uuidv4 } from "uuid";
    import { page } from '$app/stores';

    export let data 
    console.log(data)
   let websites = $Websites
   let isAdmin = true
    // Websites.subscribe(value => console.log("server",value))
   
    // $Websites
    // console.log($Websites)


    let websiteData: Website = {
        id: uuidv4(),
        name: "",
        github: "",
        owner: $page.data.user.uid,
        posts: [],
        moderator: [],
        categories: [],
    };

    // const addSite = async() => await addWebsiteToDatabase(websiteData.uid, websiteData)

    // onDestroy(unsubscribe)

</script>

<PageLayout pageTitle="Site'uri">

        <div slot="topBar">
            {#if isAdmin}
            <Modal action="Adauga un site">
                <h1 slot="header">Adauga un site nou</h1>
                <div slot="content">
                <input class="w-full" placeholder="Nume site" bind:value={websiteData.name}>
                <input class="w-full" placeholder="URL Github Repo" bind:value={websiteData.github}>
                </div>
                <div slot="footer">
                    <!-- <button on:click={addSite}>Adauga site</button> -->
                </div>
            </Modal>
            {/if}
        </div>


    <div class="flex flex-col gap-2">
        {#each $Websites as website }
            <Row url="siteuri/{website.id}">
                <span>{website.name}</span>
            </Row>
        {/each}
    </div>

</PageLayout>

