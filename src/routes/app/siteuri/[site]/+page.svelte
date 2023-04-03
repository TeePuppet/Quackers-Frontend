
<script lang="ts">
	import Modal from "$lib/components/Modal.svelte";
    import PageLayout from "$lib/components/layout/PageLayout.svelte";
    import Card from "$lib/components/Card.svelte";
	import { page } from "$app/stores";
	import { Websites } from "$lib/stores/websites";
	import Row from "$lib/components/Row.svelte";
	import Input from "$lib/components/Input.svelte";

    console.log($page)

    let postTitle:string
    let product: string
    let products:{link:string}[] = []
    $:prod = products

    const addProduct = () => {
        products = [...products, {link:product}]
        product = ""
        console.log(products)
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
    <div id="tabs">
        <div>Postari</div>
        <div>Categorii</div>
        <div>Pagini</div>
    </div>
    <div id="Postari">
        <div class=" bg-zinc-900 flex justify-between items-center px-4 py-2">
            <span>Postari</span>
            <Modal action="Postare Noua">
                <div slot="header">
                    <h2>Adauga o postare noua</h2>
                </div>
                <div slot="content">
                    <Input extraClass="w-full border-0" placeholder="e.g. Top 10. Cele mai bune frigidere" bind:value={postTitle}/>
                    <Input type="textArea" extraClass="w-full text-sm" label="Introducere" placeholder="e.g. Top 10. Cele mai bune frigidere" bind:value={postTitle}/>

                    
                    <div class="flex justify-between items-center border-b pb-2 border-zinc-700 mb-3">
                        <h2 class="font-semibold text-lg">Top Produse</h2>
                        <button class="small" on:click={addProduct}>Adauga Produs</button>
                    </div>
                    <Input extraClass="w-full" label="Link eMag" placeholder="LinkEmag" bind:value={product}/>
                    {#each prod as product}
                        <div>{product.link}</div>
                    {/each}
                </div>

            <div slot="footer">
                <button class="small w-full">Adauga Postare</button>
            </div>
            </Modal>
        </div>
        <Row> Titlu Postare </Row>
        <Row> Titlu Postare </Row>
        <Row> Titlu Postare </Row>
        <Row> Titlu Postare </Row>
    </div>
</PageLayout>

<style lang="postcss">
    #tabs {
        @apply flex;
    }
</style>