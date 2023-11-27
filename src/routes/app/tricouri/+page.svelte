<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';
	import Button from '$lib/components/elements/button/Button.svelte';
	import Input from '$lib/components/elements/inputs/Input.svelte';
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import Section from '$lib/components/layout/Section.svelte';

	// Modal
	let modal: boolean;
	const closeModal = () => (modal = false);


	let searchKeyword:string

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
			keyword: 'christmas',
			competition: '32%',
			also_search: [
				'ugly christmas sweater',
				'christmas movies',
				'santa claus',
				'cute christmas',
				'elf matching',
				'vintage christmas'
			],
			main_tag: 'christmas',
			related_tags: [
				'xmas',
				'merry christmas',
				'funny',
				'birthday',
				'gift',
				'halloween',
				'christmas gifts',
				'holiday',
				'santa'
			]
		}
	];

	let selected: any;
	$: selected = keywords[0];
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
		<div class="mx-auto w-full max-w-2xl h-full overflow-y-scroll">
			<Section css="mb-2">
				<div class="">
					<h2 class="mb-2">Research keyword</h2>
					<Input placeholder="Search by keyword" bind:value="{searchKeyword}" />
					<Button style="primary" customClass="w-full">Search</Button>
				</div>
			</Section>
			<Section>
				<div class="font-bold flex justify-between items-center text-sm px-4 py-2">
					<p>Keyword</p>
					<p>Competition</p>
				</div>
				{#each keywords as key, index}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="flex justify-between border border-white/10 rounded-md items-center px-4 py-2 mb-2 hover:cursor-pointer hover:border-white/100"
						on:click={() => (selected = keywords[index])}
					>
						<p>{key.keyword}</p>
						<p>{key.competition}</p>
					</div>
				{/each}
			</Section>
		</div>

	</div>
</PageLayout>
