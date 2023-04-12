
<script lang="ts">
	import Modal from "$lib/components/Modal.svelte";
    import PageLayout from "$lib/components/layout/PageLayout.svelte";
    import Card from "$lib/components/Card.svelte";
	import { page } from "$app/stores";
	import { Websites } from "$lib/stores/websites";
	import Row from "$lib/components/Row.svelte";
	import Input from "$lib/components/Input.svelte";
	import Tabs from "$lib/components/Tabs.svelte";
	import TabContent from "$lib/components/TabContent.svelte";
	import { generateDescription } from "$lib/utils/website";
	import ProductCard from "./ProductCard.svelte";

    // Tabs
    let tabs = ["Topuri", "Recenzii", "Postari", "Categorii", "Testam un alt tab"]
    let selectedTab:string = "Topuri"
    const tabChange = (event:CustomEvent) => {
        selectedTab = event.detail
    }

    // Modal
    let modal: boolean
    const closeModal = () => modal = false

    // Postare
    let postTitle:string
    let postIntroduction:string

    let product: string
    let products:{link:string}[] = []
    $:prod = products


    const generateTitleDescription = async () => {
        postIntroduction = await generateDescription(postTitle) as string
    }
    const addProduct = () => {
        products = [...products, {link:product}];
        product = "";
    }

</script>

<PageLayout pageTitle = "Pagina Site">
    <div slot="topBar">
        <Modal action="Setari">
        </Modal>
    </div>
    <div class="">
        <h2>Nume Site</h2>
        <p>Github.url</p>
    </div>

    <Tabs {tabs} {selectedTab} on:tabChange={tabChange}/>

    {#if selectedTab === "Topuri"}
        <TabContent title={selectedTab}>
            <div slot="action">
                <Modal action="Top Nou" bind:isOpen={modal}>
                    <div slot="header">
                        <h2 class="font-semibold">Adauga o postare noua</h2>
                    </div>
                    <div slot="content">
                        <Input extraClass="w-full border-0" placeholder="Titlu postare" bind:value={postTitle}/>
                        <div class="flex flex-col gap-3 items-center rounded border border-dashed border-zinc-700 px-3 py-3 mb-3">
                        {#if postIntroduction}
                            <div role="textbox" contenteditable bind:innerHTML={postIntroduction}></div>                            
                            {:else}
                            {#await postIntroduction}
                                <p>Loading</p>
                            {/await}
                            <p class="text-zinc-400 mt-3 focus:outline-none text-center mx-2">Completeaza <b>titlul</b> de mai sus si genereaza o introducere.</p>
                            <button class="small mb-3" on:click={generateTitleDescription}>Genereaza introducere</button>                            
                        {/if}
                        </div>
                        
                        <h2 class="font-semibold text-lg mb-2">Top Produse</h2>
                        <div class="productList">
                            <ProductCard 
                                position={1} 
                                title="Samsung TX23125123" 
                                images={["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"]}
                                description="Descriere..." 
                                pros={["Pros 1"]}
                                cons={["Cons 1"]}
                            />
                            <ProductCard 
                                position={1} 
                                title="GRUNDING" 
                                images={["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"]}
                                description="Descriere..." 
                                pros={["Pros 1"]}
                                cons={["Cons 1"]}
                            />
                            <ProductCard 
                                position={2} 
                                title="GRUNDING" 
                                images={["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"]}
                                description="Descriere..." 
                                pros={["Pros 1"]}
                                cons={["Cons 1"]}
                            />
                            <ProductCard 
                                position={3} 
                                title="GRUNDING" 
                                images={["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"]}
                                description="Descriere..." 
                                pros={["Pros 1"]}
                                cons={["Cons 1"]}
                            />
                            <ProductCard 
                                position={4} 
                                title="GRUNDING" 
                                images={["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"]}
                                description="Descriere..." 
                                pros={["Pros 1"]}
                                cons={["Cons 1"]}
                            />
                            <ProductCard 
                                position={5} 
                                title="GRUNDING" 
                                images={["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"]}
                                description="Descriere..." 
                                pros={["Pros 1"]}
                                cons={["Cons 1"]}
                            />
                            <ProductCard 
                                position={6} 
                                title="GRUNDING" 
                                images={["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"]}
                                description="Descriere..." 
                                pros={["Pros 1"]}
                                cons={["Cons 1"]}
                            />
                            <ProductCard 
                                position={7} 
                                title="GRUNDING" 
                                images={["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"]}
                                description="Descriere..." 
                                pros={["Pros 1"]}
                                cons={["Cons 1"]}
                            />
                            <ProductCard 
                                position={8} 
                                title="GRUNDING" 
                                images={["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"]}
                                description="Descriere..." 
                                pros={["Pros 1"]}
                                cons={["Cons 1"]}
                            />
                            <ProductCard 
                                position={9} 
                                title="GRUNDING" 
                                images={["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"]}
                                description="Descriere..." 
                                pros={["Pros 1"]}
                                cons={["Cons 1"]}
                            />
                            <ProductCard 
                                position={10} 
                                title="GRUNDING" 
                                images={["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"]}
                                description="Descriere..." 
                                pros={["Pros 1"]}
                                cons={["Cons 1"]}
                            />

                        </div>

                        {#if prod.length > 0}
                            {#each prod as product, i}
                            <div>{i+1}. {product.link}</div>
                            {/each}
                            {:else}
                            <div class="text-center border rounded-md border-dashed border-zinc-600 py-5 mb-2">Nu ai nici un produs adaugat in top</div>
                            {/if}
                        <div class="flex gap-2 justify-between items-center">
                            <Input extraClass="w-full m-0" placeholder="Link eMag" bind:value={product}/>
                            <button class="small" on:click={addProduct}>Adauga</button>
                        </div>
                        
    
                    </div>
    
                <div slot="footer" class="mt-6">
                    <!-- <button class="small w-full" on:click={closeModal}>Adauga Postare</button> -->
                </div>
                </Modal>
            </div>
            <div slot="content">
                <Row> Titlu Postare </Row>
                <Row> Titlu Postare </Row>
                <Row> Titlu Postare </Row>
                <Row> Titlu Postare </Row>
            </div>
        </TabContent>      
    {:else if selectedTab === "Categorii"}
        <TabContent title={selectedTab}>
            <div slot="action">
                <button>Categorie Noua</button>
            </div>
            <div slot="content">
                <Row> Categorie </Row>
                <Row> Categorie </Row>
            </div>
        </TabContent>  
    {:else if selectedTab === "Postari"}
        <TabContent title={selectedTab}>
        </TabContent>
    {:else if selectedTab === "Recenzii"}
        <TabContent title={selectedTab}>
        </TabContent>
    {/if}

</PageLayout>

<style lang="postcss">

    .productList {
        @apply flex flex-col gap-2;
    }
    #tabs {
        @apply flex;
    }
</style>