
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
<PageLayout contentClass="responsive-p-x" pageTitle={$selectedWebsite.name}>

    <div slot="topBar">
        <Button href="{$selectedWebsite.id}/setari"size="icon" style="outline"><i class="fa-solid fa-gear"></i></Button>
    </div>

    <div class="bg-white/5 px-4 py-4 rounded-md text-white/40 text-sm flex gap-2 items-center mb-2">
        <i class="fa-brands fa-github"></i>
        <a href="{$selectedWebsite.github.url}" target="_blank">{$selectedWebsite.github.url}</a>
       
    </div>

    <div class="bg-white/5 px-4 py-4 rounded-md text-white/40 text-sm flex gap-2 items-center justify-between">
        

        <a href="https://{$selectedWebsite.vercel.domain}" target="_blank">{$selectedWebsite.vercel.domain}</a>

    </div>




</PageLayout>

{:else}
<Loading/>
{/if}

<style lang="postcss">
    .productList {
        @apply flex flex-col gap-2;
    }
</style>