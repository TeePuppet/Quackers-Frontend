<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';
	import Button from '$lib/components/elements/button/Button.svelte';
	import Input from '$lib/components/elements/inputs/Input.svelte';
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import { getPopularTags } from '$lib/utils/trending';
	import { onMount } from 'svelte';

	import combinedData from '$lib/stores/tricouri/teepublic';

	// Modal
	let modal: boolean;
	const closeModal = () => (modal = false);

	let searchKeyword:string

	$: tags = $combinedData.data;

    const showLowCompetiton = () => {
		if (tags) tags = tags.filter(tag => tag.data.products < 1500)
	}

	const showAllTags = () => {
		tags = $combinedData.data;
	}
</script>

<PageLayout topBar={false}>
	<div class="flex gap-2 items-center justify-between responsive-p-x responsive-p-y">
		<h2>Tricouri</h2>
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

			<div class="mt-6 flex justify-between items-center mb-2">
				<h2>Trending on TeePublic</h2>
				<div class="flex gap-2">
					<Button on:click={showLowCompetiton}>Low Competition</Button>
					<Button on:click={showAllTags}>All Tags</Button>
				</div>
			</div>

			<Section>
				{#if tags}
					<div class="font-semibold flex justify-between items-center text-sm px-4 py-2 text-white/40">
						<p>Keyword</p>
						<p>Competition</p>
					</div>
					{#each tags as tag, index}
						<div
							class="flex justify-between border border-white/10 rounded-md items-center px-4 py-2 mb-1 hover:cursor-pointer hover:border-white/100">
							<p>{tag.searchTag}</p>
							<p>{tag.data.products}</p>
						</div>
						
					{:else}
					<p class="">Loading...</p>
					{/each}
				{/if}
			</Section>

		</div>

	</div>
</PageLayout>



