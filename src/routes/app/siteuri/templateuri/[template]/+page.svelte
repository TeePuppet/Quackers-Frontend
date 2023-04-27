<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import Input from "$lib/components/Input.svelte";
	import Loading from "$lib/components/Loading.svelte";
	import Modal from "$lib/components/Modal.svelte";
    import Button from "$lib/components/elements/button/Button.svelte";
	import PageLayout from "$lib/components/layout/PageLayout.svelte";
    import { deleteTemplate, selectedTemplate } from "$lib/stores/siteuri/templates";


    const deleteT = async () => {
        await deleteTemplate($page.params.template)
        goto('/app/siteuri/templateuri')
    }

    const updateT = async () => {
        console.log('Update')
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
    <Input label="Name" placeholder="Nume Template" bind:value={$selectedTemplate.name}/>
    <Input label="Github URL" placeholder="Github URL" bind:value={$selectedTemplate.github}/>
    <Button on:click={updateT}>Salveaza Modificarile</Button>
</PageLayout>

{:else}
    <Loading/>
{/if}
