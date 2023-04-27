<script lang="ts">
	import Button from "$lib/components/elements/button/Button.svelte";
	import Input from "$lib/components/Input.svelte";
    import PageLayout from "$lib/components/layout/PageLayout.svelte";
	import Loading from "$lib/components/Loading.svelte";
	import Modal from "$lib/components/Modal.svelte";
    import Row from "$lib/components/Row.svelte";
    import { websites } from '$lib/stores/siteuri/siteuri';
	import { templates } from "$lib/stores/siteuri/templates";

    let nume:string = ""

    const adaugaSite = async () => {
        // await createSite('Recenzii', 'Test2')
    }
</script>

{#if $websites}
    <PageLayout topBar={false}>
        <div class="flex gap-2 items-center justify-between responsive-p-x responsive-p-y" >
            <h2>Site'uri</h2>
            <div class="flex items-center gap-2">
                <Button href="siteuri/templateuri" size="icon"><i class="fa-solid fa-brush"></i></Button>
                <Modal actionIcon="fa-solid fa-plus">

                    <div slot="content">
                        <Input extraClass="w-full" label="Nume Site" placeholder="Adauga un nume site'ului" bind:value={nume}/>
                        <select>
                            {#if $templates}
                                {#each $templates as template}
                                    <option>{template.name}</option>
                                {/each}
                            {:else}
                                <option>Loading Templates...</option>
                            {/if}
                        </select>

                        <Button size="lg" on:click={adaugaSite}>Adauga Site</Button>
                    </div>

                </Modal>
        </div>
        </div>
        <div class="responsive-p-x">
                {#each $websites as website }
                    <Row url="siteuri/{website.name}">
                        <span>{website.status}</span>
                        <span>{website.name}</span>
                    </Row>
                {/each}
        </div>
    </PageLayout>
{:else}
<Loading/>
{/if}


