
<script lang="ts">
	import Modal from "$lib/components/Modal.svelte";
    import PageLayout from "$lib/components/layout/PageLayout.svelte";
	import Input from "$lib/components/elements/inputs/Input.svelte";
	import Tabs from "$lib/components/Tabs.svelte";
	import TabContent from "$lib/components/TabContent.svelte";
	import { generateDescription, getEMAGProductData } from "$lib/utils/siteuri";
	import ProductCard from "./ProductCard.svelte";
	import Row from "$lib/components/Row.svelte";
	import Loading from "$lib/components/Loading.svelte";
	import { selectedWebsite } from "$lib/stores/siteuri/siteuri";
	import Button from "$lib/components/elements/button/Button.svelte";
	import { deployWebsite } from "$lib/utils/siteuri/vercel";
	import Section from "$lib/components/layout/Section.svelte";
	import PostRow from "$lib/components/PostRow.svelte";

    // $: reviews = $selectedWebsite.reviews
    // let categories = website.categories
    // Tabs
    let tabs = ["Topuri", "Categorii"]
    let activeTab:string = "Topuri"

    // Modal
    let modal: boolean
    const closeModal = () => modal = false

    // Date Postare
    // *******
    let titlu:string;
    let introducere:string;
    let categorie:string;
    let tipProdus:string;
    //------
    let linkProdus: string
    let produs:any
    let listaProduse:any[] = [

    ]



    const generateTitleDescription = async () => {
        introducere = await generateDescription(titlu) as string
    }
    const test = "Testing Logpoints"
    const productData = async () => {
        produs = await getEMAGProductData(linkProdus)
        listaProduse.push({
            titlu: produs.title,
            imagini: produs.images,
            descriere: "Descriere",
            pro: [],
            contra:[]
        })
        listaProduse = listaProduse
        linkProdus = '';

    }

    const publishWebsite =async () => {
        await deployWebsite($selectedWebsite!.name, $selectedWebsite!.github.url.replace("https://github.com/", ""), $selectedWebsite?.github.id! )
    }
    $: console.log($selectedWebsite)

</script>

{#if $selectedWebsite}
<PageLayout contentClass="responsive-p-x" pageTitle='{$selectedWebsite.name}/{$selectedWebsite.vercel.domain}'>
    <div slot="topBar">
        <Button href="{$selectedWebsite.id}/setari"size="icon" style="outline"><i class="fa-solid fa-gear"></i></Button>
    </div>


    Content Types

    <!-- POSTARI -->
 

        {#each Array(150) as _, index (index)}
            <PostRow />
	    {/each}





</PageLayout>

{:else}
<Loading/>
{/if}

<style lang="postcss">
    .productList {
        @apply flex flex-col gap-2;
    }
</style>