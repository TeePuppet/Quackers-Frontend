<script lang="ts">

    import { selectedTag } from '$lib/stores/tricouri';
    import { goto } from '$app/navigation';
	import Section from "$lib/components/layout/Section.svelte";
	import Button from "$lib/components/elements/button/Button.svelte";
	import combinedData from '$lib/stores/tricouri';

    import {trendingTags} from "$lib/stores/logs copy"


    $: tags = $trendingTags

    function selectTag(tag:any): void {
        selectedTag.set(tag);
        goto(`/app/tricouri/${tag.searchTag}`);
    }

    const showLowCompetiton = () => {
		if (tags) tags = tags.filter(tag => tag.data.products < 1500)
	}

	const showAllTags = () => {

		tags = $trendingTags;
	}

</script>

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
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={() => selectTag(tag)}
                class="w-full flex justify-between border border-white/10 rounded-md items-center px-4 py-2 mb-1 hover:cursor-pointer hover:border-white/100">
                <p>{tag.searchTag}</p>
                <p>{tag.searchScore}</p>
                <p>{tag.data.products}</p>
            </div>
            
        {:else}
        <p class="">Loading...</p>
        {/each}
    {/if}
</Section>

