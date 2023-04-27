<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import Loading from "$lib/components/Loading.svelte";
	import Modal from "$lib/components/Modal.svelte";
    import Button from "$lib/components/elements/button/Button.svelte";
	import PageLayout from "$lib/components/layout/PageLayout.svelte";
	import { deleteWebsite, selectedWebsite } from "$lib/stores/siteuri/siteuri";
	import { deleteRepo } from "$lib/utils/siteuri/github";

const deleteW = async () => {
    await deleteRepo($selectedWebsite?.github!)
    await deleteWebsite($page.params.site)
    goto('/app/siteuri')
}

$: console.log($selectedWebsite?.github!)

</script>

{#if $selectedWebsite}
<PageLayout contentClass="responsive-p-x"pageTitle="Setari {$selectedWebsite.name}">
    <Modal action="Delete Site">
        <div slot="content" class="text-center">
            <h2 class="mb-6 px-8">Esti sigur ca vrei sa stergi site'ul <span class="decoration-dotted underline underline-offset-4 capitalize">{$selectedWebsite?.name}</span>?</h2>
            <Button on:click={deleteW}>Sterge</Button>
        </div>
    </Modal>
</PageLayout>
{:else}
<Loading/>
{/if}