<script lang="ts">

    import { selectedTag } from '$lib/stores/tricouri';
    import { goto } from '$app/navigation';
	import Section from "$lib/components/layout/Section.svelte";
	import Button from "$lib/components/elements/button/Button.svelte";

    import trendingTags from "$lib/stores/tricouri"


    $: tags = $trendingTags.filter(tag => tag.data.products < 1500)

    let lowComp = true

    function selectTag(tag:any): void {
        selectedTag.set(tag);
        goto(`/app/tricouri/keywords/${tag.searchTag}`);
    }

    const showLowCompetiton = () => {
        lowComp = true
		if (tags) tags = tags.filter(tag => tag.data.products < 1500)
	}

	const showAllTags = () => {
        lowComp = false
		tags = $trendingTags;
	}

</script>

<div class="mt-6 flex justify-between items-center mb-2">
    <h2>Trending on TeePublic</h2>
    <div class="flex gap-2">
        {#if lowComp}
            <Button on:click={showAllTags}>All Tags</Button>
            {:else} 
            <Button on:click={showLowCompetiton}>Low Competition</Button>
        {/if}
    </div>
</div>

<Section>

    {#if tags}
        <div class="font-semibold flex justify-between items-center text-sm px-4 py-2 text-white/40">
            <p class="w-3/4">Keyword</p>
            <p class="w-1/4 text-right">No. of Products</p>
        </div>
        {#each tags as tag, index}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={() => selectTag(tag)}
                class="w-full flex flex-wrap justify-between border border-white/10 rounded-md items-center px-4 py-2 mb-1 hover:cursor-pointer hover:border-white/100">
                <p class="w-3/4 capitalize">{tag.searchTag} <span class="text-xs font-medium bg-white/10 border border-white/10 px-2 py-1 rounded-md ml-1">{tag.searchScore}</span></p>
                <p class="w-1/4 text-right">{tag.data.products}</p>
            </div>
            
        {:else}
        <p class="">Loading...</p>
        {/each}
    {/if}
</Section>

