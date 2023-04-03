
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
    let introducere:string
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
                    <h2 class="font-semibold">Adauga o postare noua</h2>
                </div>
                <div slot="content">
                    <Input extraClass="w-full border-0 text-sm" placeholder="Titlu postare" bind:value={postTitle}/>
                    <button class="w-full small mb-2">Genereaza Introducere</button>
                    {#if introducere}
                    <Input type="textArea" extraClass="w-full text-sm" placeholder="e.g. Top 10. Cele mai bune frigidere" bind:value={postTitle}/>
                    {/if}
                    <h2 class="font-semibold text-lg mb-2">Top Produse</h2>
                    {#if prod.length > 0}
                        {#each prod as product, i}
                        <div>{i+1}, {product.link}</div>
                        {/each}
                        {:else}
                        <div>Nu ai nici un produs adaugat in top</div>
                        {/if}
                    <div class="flex gap-2 justify-between items-center">
                        <Input extraClass="w-full text-sm m-0" placeholder="Link eMag" bind:value={product}/>
                        <button class="small" on:click={addProduct}>Adauga</button>
                    </div>
                    

                </div>

            <div slot="footer" class="mt-6">
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