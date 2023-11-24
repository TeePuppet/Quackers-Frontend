<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import Loading from "$lib/components/Loading.svelte";
	import Modal from "$lib/components/Modal.svelte";
	import Row from "$lib/components/Row.svelte";
    import Button from "$lib/components/elements/button/Button.svelte";
	import Input from "$lib/components/elements/inputs/Input.svelte";
	import PageLayout from "$lib/components/layout/PageLayout.svelte";
	import Section from "$lib/components/layout/Section.svelte";
	import { deleteWebsite, selectedWebsite } from "$lib/stores/siteuri/siteuri";
	import { deleteRepo } from "$lib/utils/siteuri/github";
	import { deleteVercelProject } from "$lib/utils/siteuri/vercel";

const deleteW = async () => {
    await deleteRepo($selectedWebsite?.github.api!)
    await deleteVercelProject($selectedWebsite?.vercel.projectId!)
    await deleteWebsite($page.params.site)
    goto('/app/siteuri')
}

$: console.log($selectedWebsite)
</script>

{#if $selectedWebsite}
<PageLayout contentClass="px-2" pageTitle="{$selectedWebsite.name} / Setari">
    <div slot="topBar">
        <Modal action="Delete Site">
            <div slot="content" class="text-center">
                <h2 class="mb-6 px-8">Esti sigur ca vrei sa stergi site'ul <span class="decoration-dotted underline underline-offset-4 capitalize">{$selectedWebsite?.name}</span>?</h2>
                <Button on:click={deleteW}>Sterge</Button>
            </div>
        </Modal>
    </div>

    <Section highlight={false}>
        <Input label="Nume Site" placeholder="Adauga un nume site'ului" value="{$selectedWebsite.name}"/>
        <Input label="github.url" placeholder="github.url" value="{$selectedWebsite.github.url}"/>
        <Input label="Moderator" placeholder="Adauga un moderator" value="{$selectedWebsite.name}"/>
    </Section>

    
    <!-- Content Types -->
    <div class="flex justify-between align-middle ">
        <h3>Content Types</h3>
        <Modal action="Add">
            <div slot="content">
                <Input label="Nume" placeholder="Adauga un nume site'ului" value=""/>
                <Input label="Source path" placeholder="path/to/markdown" value=""/>
                <p class="mb-2">Folder where the markdown (.md, .markdown) content is and will be stored</p>
                <Button style="primary" customClass="w-full">Adauga</Button>
            </div>
        </Modal>
    </div>
    <Section>
        <Row>Test</Row>
        <Row>Test</Row>
        <Row>Test</Row>
        <Row>Test</Row>
        <Row>Test</Row>
        <Row>Test</Row>
        <Row>Test</Row>
        <Row>Test</Row>
        <Row>Test</Row>
        <Row>Test</Row>
    </Section>


    <Button>Salveaza Modificarile</Button>


</PageLayout>
{:else}
<Loading/>
{/if}