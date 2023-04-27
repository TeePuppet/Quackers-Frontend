<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import Input from "$lib/components/elements/inputs/Input.svelte";
	import Loading from "$lib/components/Loading.svelte";
	import Modal from "$lib/components/Modal.svelte";
    import Button from "$lib/components/elements/button/Button.svelte";
	import PageLayout from "$lib/components/layout/PageLayout.svelte";
    import { deleteTemplate, selectedTemplate, updateTemplate } from "$lib/stores/siteuri/templates";

    $: templateName = $selectedTemplate?.name!
    $: templateURL = $selectedTemplate?.github!
    $: templateID = $selectedTemplate?.id!

    $: templateData = {
        name: templateName,
        github: templateURL,
        id: templateID
    } 

    const deleteT = async () => {
        await deleteTemplate($page.params.template)
        goto('/app/siteuri/templateuri')
    }

    const updateT = async () => {
        await updateTemplate($page.params.template, templateData)
        console.log('Update Complete')
    }

</script>

{#if $selectedTemplate}
<PageLayout pageTitle={$selectedTemplate.name} contentClass="responsive-p-x responsive-p-y">
    <div slot="topBar">
        <Modal actionIcon="fa-solid fa-trash-can">
            <div slot="content" class="text-center">
                <h2 class="mb-6 px-8">Esti sigur ca vrei sa stergi template'ul <span class="decoration-dotted underline underline-offset-4 capitalize">{$selectedTemplate.name}</span>?</h2>
                <Button on:click={deleteT}>Sterge</Button>
            </div>
        </Modal>
    </div>
    <Input label="Name" placeholder="Nume Template" bind:value={templateData.name}/>
    <Input label="Github URL" placeholder="Github URL" bind:value={templateData.github}/>
    <div>
        <Button on:click={updateT}>Salveaza Modificarile</Button>
    </div>
</PageLayout>

{:else}
    <Loading/>
{/if}
