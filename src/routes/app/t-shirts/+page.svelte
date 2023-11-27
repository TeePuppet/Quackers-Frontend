<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';
	import Button from '$lib/components/elements/button/Button.svelte';
	import Input from '$lib/components/elements/inputs/Input.svelte';
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import Section from '$lib/components/layout/Section.svelte';

	// Modal
	let modal: boolean;
	const closeModal = () => (modal = false);

	let channel = {
		name: '',
		youtube: '',
		tiktok: '',
		description: '',
		tiktok_zapier_webhook: '',
		youtube_zapier_webhook: ''
	};

	let keywords = [
		{
			keyword: "christmas",
			competition: "32%",
			platform: "Tee Public"
		},
		{
			keyword: "doctor who",
			competition: "52%",
			platform: "Tee Public"
		},
		{
			keyword: "ajr",
			competition: "52%",
			platform: "Tee Public"
		},
		{
			keyword: "one piece",
			competition: "32%",
			platform: "Tee Public"
		},
		{
			keyword: "five nights at freddies",
			competition: "52%",
			platform: "Tee Public"
		},
		{
			keyword: "anime",
			competition: "52%",
			platform: "Tee Public"
		},
		{
			keyword: "the office",
			competition: "32%",
			platform: "Tee Public"
		},
		{
			keyword: "hoodies",
			competition: "52%",
			platform: "Tee Public"
		},
		{
			keyword: "lego",
			competition: "52%",
			platform: "Tee Public"
		},
		{
			keyword: "fnaf",
			competition: "32%",
			platform: "Tee Public"
		},
		{
			keyword: "lord of the rings",
			competition: "52%",
			platform: "Tee Public"
		},
		{
			keyword: "cat",
			competition: "52%",
			platform: "Tee Public"
		},
		{
			keyword: "philadelphia eagles",
			competition: "32%",
			platform: "Tee Public"
		},
		{
			keyword: "80s",
			competition: "52%",
			platform: "Tee Public"
		},
		{
			keyword: "demon slayer",
			competition: "52%",
			platform: "Tee Public"
		},
		{
			keyword: "friends",
			competition: "32%",
			platform: "Tee Public"
		},
		{
			keyword: "bluey dad",
			competition: "52%",
			platform: "Tee Public"
		},
		{
			keyword: "simpson",
			competition: "52%",
			platform: "Tee Public"
		},
	]
	

	let selected:any
	$: selected = keywords[0]

</script>

<PageLayout topBar={false}>
	<div class="flex gap-2 items-center justify-between responsive-p-x responsive-p-y">
		<h2>T-Shirts</h2>
		<div class="flex items-center gap-2">
			<Modal actionIcon="fa-solid fa-plus" bind:isOpen={modal}>
				<div slot="content">
					<h2 class="mb-2">Add Channel</h2>
					<div>
						<Input
							label="Channel Name"
							placeholder="What is the name of your channel"
							bind:value={channel.name}
						/>
						<Input
							label="Youtube URL"
							placeholder="Youtube channel link"
							bind:value={channel.youtube}
						/>
						<Input
							label="TikTok URL"
							placeholder="TikTok channel link"
							bind:value={channel.youtube}
						/>
						<Input
							label="Description"
							placeholder="What is the channel about"
							bind:value={channel.description}
						/>
						<Input
							label="TikTok Zapier Webhook"
							placeholder="TikTok zapier webhook"
							bind:value={channel.description}
						/>
						<Input
							label="Youtube Zapier Webhook"
							placeholder="TikTok zapier webhook"
							bind:value={channel.description}
						/>
					</div>

					<Button size="lg" on:click={() => console.log('test')}>Add Channel</Button>
				</div>
			</Modal>
		</div>
	</div>
	<div class="flex w-full gap-4">
		<div class="w-2/5 h-full overflow-y-scroll">
			<Section>
				<div class="font-bold flex justify-between items-center px-4 py-2">
					<p>Keyword</p>
					<p>Competition</p>
				</div>
				{#each keywords as key, index}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div class="flex justify-between border border-white/10 rounded-md items-center px-4 py-2 mb-2 hover:cursor-pointer hover:border-white/100" on:click={()=> selected = keywords[index]}>
						<p>{key.keyword}</p>
						<p>{key.competition}</p>
					</div>
				{/each}
			</Section>
		</div>
		<div class="w-3/5">
			<Section>
				<p>{selected.keyword}</p>
				<p>{selected.competition}</p>
			</Section>
		</div>


	</div>
</PageLayout>
