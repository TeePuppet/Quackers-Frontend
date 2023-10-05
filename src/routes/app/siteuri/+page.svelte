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
	import { deployWebsite } from "$lib/utils/siteuri/vercel.js";
    export let data
    let uid = data.uid

    // Modal
    let modal: boolean
    const closeModal = () => modal = false

    let siteName:string = ""
    let template: any
    const adaugaSite = async () => {
        const github = await createSiteFromTemplate(template.githubTemplate, siteName)
        const vercel = await deployWebsite(siteName, github.full_name, github.id)
        console.log(github)
        console.log(vercel)
        await addWebsite({
            name: siteName,
            github: {
                default_branch: github.default_branch,
                repo: github.full_name,
                id: github.id,
                api: github.url,
                url: github.html_url
            },
            vercel: {
                projectId: vercel.projectId,
                vercelURL: vercel.alias[0],
                domain: vercel.alias[0]
            },
            template: template.id,
            status: "Pending",
            owner: uid,
            moderator: [],
            categories: [],
        })
        closeModal()
    }

    const addSite = adaugaSite()
    $: console.log($websites)
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
                            <span class="block text-sm font-semibold text-white/40 mb-1">Selecteaza un Template</span>
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
                        <span>{website.name}</span>
                        <span>{website.status}</span>
                    </Row>
                {/each}
        </div>
    </PageLayout>
{:else}
<Loading/>
{/if}


