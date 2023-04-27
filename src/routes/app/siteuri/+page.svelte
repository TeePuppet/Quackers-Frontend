<script lang="ts">
	import Button from "$lib/components/elements/button/Button.svelte";
	import Input from "$lib/components/elements/inputs/Input.svelte";
    import PageLayout from "$lib/components/layout/PageLayout.svelte";
	import Loading from "$lib/components/Loading.svelte";
	import Modal from "$lib/components/Modal.svelte";
    import Row from "$lib/components/Row.svelte";
    import { addWebsite, websites } from '$lib/stores/siteuri/siteuri';
	import { templates } from "$lib/stores/siteuri/templates";
	import { createSiteFromTemplate } from "$lib/utils/siteuri/github";
    export let data
    let uid = data.uid

    // Modal
    let modal: boolean
    const closeModal = () => modal = false

    let siteName:string = ""
    let template: any
    const adaugaSite = async () => {
        const siteFromTemplate = await createSiteFromTemplate(template.githubTemplate, siteName)
        await addWebsite({
            name: siteName,
            github: siteFromTemplate.url,
            githubHTML: siteFromTemplate.html_url,
            template: template.id,
            status: "Pending",
            owner: uid,
            moderator: [],
            categories: [],
        })
        closeModal()
    }
</script>

{#if $websites}
    <PageLayout topBar={false}>
        <div class="flex gap-2 items-center justify-between responsive-p-x responsive-p-y" >
            <h2>Site'uri</h2>
            <div class="flex items-center gap-2">
                <Button href="siteuri/templateuri" size="icon"><i class="fa-solid fa-brush"></i></Button>
                <Modal actionIcon="fa-solid fa-plus" bind:isOpen={modal}>

                    <div slot="content">
                        <Input extraClass="w-full" label="Nume Site" placeholder="Adauga un nume site'ului" bind:value={siteName}/>
                        <div class="mb-3">
                            <label class="block text-sm font-semibold text-white/40 mb-1">Selecteaza un Template</label>
                            <select class="w-full" bind:value={template}>
                                {#if $templates}
                                    {#each $templates as template}
                                        <option value={template}>{template.name}</option>
                                    {/each}
                                {:else}
                                    <option>Loading Templates...</option>
                                {/if}
                            </select>
                        </div>


                        <Button size="lg" on:click={adaugaSite}>Adauga Site</Button>
                    </div>

                </Modal>
        </div>
        </div>
        <div class="responsive-p-x">
                {#each $websites as website }
                    <Row url="siteuri/{website.id}">
                        <span>{website.status}</span>
                        <span>{website.name}</span>
                    </Row>
                {/each}
        </div>
    </PageLayout>
{:else}
<Loading/>
{/if}


