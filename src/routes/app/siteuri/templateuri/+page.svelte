<script lang="ts">
	import Input from "$lib/components/Input.svelte";
	import Loading from "$lib/components/Loading.svelte";
	import Modal from "$lib/components/Modal.svelte";
	import Row from "$lib/components/Row.svelte";
	import Button from "$lib/components/elements/button/Button.svelte";
	import PageLayout from "$lib/components/layout/PageLayout.svelte";
    import { addTemplate, templates } from '$lib/stores/siteuri/templates';

    let numeTemplate:string
    let githubURL:string
    let error:string

    // Modal
    let modal: boolean
    const closeModal = () => modal = false

    const addNewTemplate = async () => {
        try {
            await addTemplate({
                name: numeTemplate,
                github: githubURL
            })
            numeTemplate = "";
            githubURL = ""
            closeModal()
        } catch (err) {
            error = err as string
        }
    }
    $: console.log($templates)
</script>

<PageLayout contentClass="responsive-p-x" pageTitle="Template'uri">

    <div slot="topBar">
        <Modal actionIcon="fa-solid fa-plus" bind:isOpen={modal}>
            <div slot="content">
                <h2>Adauga un template nou</h2>
                <Input extraClass="w-full" placeholder="Nume template" bind:value={numeTemplate}/>
                <Input extraClass="w-full" placeholder="Github URL" bind:value={githubURL}/>
                <Button on:click={addNewTemplate}>Adauga</Button>
        </Modal>
    </div>

    <div class="flex flex-col gap-3">
    {#if $templates}
        {#if $templates.length !== 0}
            {#each $templates as template }
                <a href="templateuri/{template.id}"class="block border border-white border-opacity-20 px-4 py-4 rounded flex justify-between items-center hover:cursor-pointer hover:border-opacity-70">
                    <div>
                        <div>{template.name}</div>
                        <div class="text-xs">{template.github}</div>
                    </div>
                    <div>
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </a>
            {/each}
        {:else}
            <div class=" border border-dashed border-white/30 rounded px-4 py-6">

                <p class="text-center text-white/30">Nu exista template'uri</p>
            </div>
        {/if}

    {:else}
        <Loading/>
    {/if}
    </div>


</PageLayout>