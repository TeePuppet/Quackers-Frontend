<script lang="ts">
	import Modal from "$lib/components/Modal.svelte";
	import Button from "$lib/components/elements/button/Button.svelte";
	import Input from "$lib/components/elements/inputs/Input.svelte";
    import PageLayout from "$lib/components/layout/PageLayout.svelte";
	import Section from "$lib/components/layout/Section.svelte";

        // Modal
    let modal: boolean
    const closeModal = () => modal = false

let channel = {
    name: "",
    youtube: "",
    tiktok: "",
    description: "",
    tiktok_zapier_webhook: "",
    youtube_zapier_webhook: ""
}
</script>

<PageLayout topBar={false}>
    <div class="flex gap-2 items-center justify-between responsive-p-x responsive-p-y" >
        <h2>Videos</h2>
        <div class="flex items-center gap-2">
            <Modal actionIcon="fa-solid fa-plus" bind:isOpen={modal}>
                <div slot="content">
                    <h2 class="mb-2">Add Channel</h2>
                    <div>
                        <Input label="Channel Name" placeholder="What is the name of your channel" bind:value="{channel.name}"/>
                        <Input label="Youtube URL" placeholder="Youtube channel link" bind:value="{channel.youtube}"/>
                        <Input label="TikTok URL" placeholder="TikTok channel link" bind:value="{channel.youtube}"/>
                        <Input label="Description" placeholder="What is the channel about" bind:value="{channel.description}"/>
                        <Input label="TikTok Zapier Webhook" placeholder="TikTok zapier webhook" bind:value="{channel.description}"/>
                        <Input label="Youtube Zapier Webhook" placeholder="TikTok zapier webhook" bind:value="{channel.description}"/>
                    </div>

                    <Button size="lg" on:click={() => console.log('test')}>Add Channel</Button>
                </div>

            </Modal>
        </div>
    </div>
    <div class="">



        <div>
            Channel data preview
            <p>* Channel Name</p>
            <p>* Channel Youtube Icon + URL</p>
            <p>* Channel TikTok Icon + URL</p>
            <p>* What is the channel about, what kind of videos need to be createad</p>
            <p>* TikTok Subscribers</p>
            <p>* Youtube Subscribers</p>

            <p> Section to create videos</p>
        </div>

    </div>
</PageLayout>

