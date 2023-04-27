
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

    // $: reviews = $selectedWebsite.reviews
    // let categories = website.categories
    console.log($selectedWebsite)

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
        console.log(produs)
    }



</script>

{#if $selectedWebsite}
<PageLayout pageTitle={$selectedWebsite.name}>

    <div slot="topBar">
        <Button href="{$selectedWebsite.id}/setari"size="icon" style="outline"><i class="fa-solid fa-gear"></i></Button>
    </div>


        <Tabs {tabs} bind:activeTab={activeTab}/>

        <!-- * TOPURI -->
        <!-- * ****** -->
        {#if activeTab === "Topuri"}
            <TabContent title={activeTab}>
                <div slot="action">
                    <Modal action="Top Nou" bind:isOpen={modal}>

                        <div slot="content">
                            <Input extraClass="w-full border-0" placeholder="Titlu postare" bind:value={titlu}/>
                            <div class="flex flex-col gap-3 items-center rounded border border-dashed border-zinc-700 px-3 py-3 mb-3">
                            {#if introducere}
                                <div role="textbox" contenteditable bind:innerHTML={introducere}></div>                            
                                {:else}
                                {#await introducere}
                                    <p>Loading</p>
                                {/await}
                                <p class="text-zinc-400 mt-3 focus:outline-none text-center mx-2">Completeaza <b>titlul</b> de mai sus si genereaza o introducere.</p>
                                <button class="small mb-3" on:click={generateTitleDescription}>Genereaza introducere</button>                            
                            {/if}
                            </div>
                            
                            <h2 class="font-semibold text-lg mb-2">Top Produse</h2>
                            <div class="productList">
                                {#each listaProduse as produs, i }
                                    <ProductCard 
                                        position={i+1} 
                                        title={produs.titlu}
                                        images={produs.imagini}
                                        description={produs.descriere}
                                        pros={produs.pro}
                                        cons={produs.contra}
                                    />
                                {/each}
                            </div>


                            <div class="flex gap-2 justify-between items-center">

                                    <Input extraClass="w-full m-0" placeholder="Link eMag" bind:value={linkProdus}/>
                                    <button class="small" on:click={productData}>Adauga</button>
                            </div>
                            
        
                        </div>
                        
                        <button class="small w-full" on:click={closeModal}>Adauga Top</button>
                    </Modal>
                </div>
                <div slot="content">
                    <!-- {#each $selectedWebsite.data.topuri as top }
                        <Row> {top.titlu}</Row>
                    {/each} -->
                </div>
            </TabContent>      
        
        {/if}


</PageLayout>

{:else}
<Loading/>
{/if}

<style lang="postcss">

    .productList {
        @apply flex flex-col gap-2;
    }
    #tabs {
        @apply flex;
    }
</style>