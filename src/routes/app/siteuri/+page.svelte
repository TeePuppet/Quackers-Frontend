<script lang="ts">
	import Input from "$lib/components/Input.svelte";
    import PageLayout from "$lib/components/layout/PageLayout.svelte";
	import Loading from "$lib/components/Loading.svelte";
	import Modal from "$lib/components/Modal.svelte";
    import Row from "$lib/components/Row.svelte";
    import { websites } from '$lib/stores/websites';
	// import { createSite } from "$lib/utils/siteuri";

    let nume:string
    const adaugaSite = async () => {
        // await createSite('Recenzii', 'Test2')
    }
</script>

{#if $websites}
    <PageLayout>
        <div class="flex gap-2" slot="topBar">
            <a href="siteuri/setari" class="px-2 py-2"><i class="fa-solid fa-gear"></i></a>
            <Modal action="Adauga Site">
                <div slot="header">
                    <h2>Adauga un site nou</h2>
                </div>
                <div slot="content">
                    <Input extraClass="w-full" label="Nume Site" placeholder="Adauga un nume site'ului" bind:value={nume}/>
                    <Input extraClass="w-full" label="Selecteaza tipul site'ului" placeholder="Selecteaza tipul site'ului" bind:value={nume}/>
                    <h2>Setari</h2>
                    <Input extraClass="w-full" label="Culoare Principala" placeholder="#232323" bind:value={nume}/>
                    <Input extraClass="w-full" label="Culoare Secundara" placeholder="#232323" bind:value={nume}/>
                    <Input extraClass="w-full" label="Logo" placeholder="Selecteaza logo" bind:value={nume}/>
                </div>
                <div slot="footer">
                    <button on:click={adaugaSite}>Adauga Site</button>
                </div>
            </Modal>
        </div>
                {#each $websites as website }
                    <Row url="siteuri/{website.id}">
                        <span>{website.name}</span>
                    </Row>
                {/each}
    </PageLayout>
{:else}
<Loading/>
{/if}


