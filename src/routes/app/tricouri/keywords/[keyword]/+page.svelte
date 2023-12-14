<script lang="ts">
import { onMount } from "svelte";

import Button from '$lib/components/elements/button/Button.svelte';
import PageLayout from '$lib/components/layout/PageLayout.svelte';
import Section from '$lib/components/layout/Section.svelte';

import trendingTags, { selectedTag } from "$lib/stores/tricouri"
import { page } from '$app/stores';
import { goto } from "$app/navigation";

export let data
console.log(data)

$: tags = data.tag
$: recommendedTags = data.recommendedTags
// $: console.log('the tags', tags)

// Function to handle tag selection
function selectTag(tag: any): void {
    goto(`/app/tricouri/keywords/${tag}`);
}


function analyzeKeywords(tag:string[]) {
    console.log('test')
}
</script>

<PageLayout topBar={true} pageTitle={$page.params.keyword}>

    <div class="max-w-5xl mx-auto flex gap-6 ">

	<div class="flex flex-col w-2/3 gap-2">
        {#if tags}

			<Section>
                <div class="flex justify-between items-center mb-4">


                    <div class="flex gap-1 items-center">
                        <h2 class="text-2xl capitalize my-2">{tags.searchTag}</h2>
                        {#if tags.searchScore > 0}
                        <p class="text-xs font-medium bg-white/10 border border-white/10 px-2 py-1 rounded-md ml-1">{tags.searchScore}</p>
                        {/if}
                        <p class="text-xs font-medium bg-white/10 border border-white/10 px-2 py-1 rounded-md ml-1">{tags.data.products}</p>
                    </div>
                    <a class="text-xs" target="_blank" href="https://www.teepublic.com/t-shirts?query={tags.searchTag}">Go to TeePublic</a>
                </div>
                <div class="flex gap-2 overflow-x-scroll z-0">
                    {#each tags.data.designs as design}
                        <a href="{design.designURL}" target="_blank" class="z-0 relative flex-none w-72 border border-white/10 rounded-md overflow-hidden">
                            <!-- svelte-ignore a11y-missing-attribute -->
                            <p class="absolute border border-white/20 rounded-md px-2 py-1 top-2 left-2 bg-black/70">#{design.mainTag}</p>
                            <div class="w-full bg-gradient-to-t from-black absolute bottom-0 pb-3 pt-9 leading-tight text-md px-4 font-bold">
                                <h3>{design.title}</h3>
                            </div>
                            <!-- svelte-ignore a11y-missing-attribute -->
                            <img class="" src={design.imageURL}/>
                        </a>
                    {/each}
                </div>
            </Section>
            
            <div class="flex justify-between items-center">
                <h2>Related Tags</h2>
                <Button on:click={() => analyzeKeywords(tags.data.relatedTags)}>Analyze</Button>
            </div>
            <Section>
                <div class="flex flex-wrap gap-2">
                    {#each tags.data.relatedTags as tagData}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-static-element-interactions -->
                        <div on:click={() => selectTag(tagData)} class="tag">{tagData}</div>
                    {/each}
                </div>
            </Section>

            <div class="flex justify-between items-center">
                <h2>Popular Tags</h2>
                <!-- <Button on:click={() => analyzeKeywords($selectedTag.data.tags)}>Analyze</Button> -->
            </div>
            <Section>
                <div class="flex flex-wrap gap-2">
                    {#each tags.data.tags as tagData}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-static-element-interactions -->
                        <div on:click={() => selectTag(tagData.tag)} class="tag">{tagData.tag} <span class="text-sm">{tagData.count}</span></div>
                    {/each}
                </div>
            </Section>

            <div class="flex justify-between items-center">
                <h2>People also search for</h2>
                <Button on:click={() => analyzeKeywords(tags.data.alsoSearch)}>Analyze</Button>
            </div>
            <Section>
                <div class="flex flex-wrap gap-2">
                    {#each tags.data.alsoSearch as tagData}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div on:click={() => selectTag(tagData)} class="tag">{tagData}</div>
                    {/each}
                </div>
            </Section>


            {:else}
                <Section>
                    Your search tag is: {$page.params.keyword}. Data is loading
                </Section>
        {/if}
	</div>
    
    <div class="flex flex-col w-1/3 gap-4">
        <Section>
            <div>
                <h2>Main Tag</h2>Copy
                <p>Main tag</p> 
            </div>

            <div>
                <h2>Recomended Tags</h2>
                <div class="flex gap-1 flex-nowrap">
                {#each recommendedTags as tag}
                    <p class="text-xs font-medium bg-white/10 border border-white/10 px-2 py-1 rounded-md whitespace-nowrap">{tag}</p>
                {/each}
            </div>
                <button>Copy</button>
            </div>
            <Button customClass="w-full">Generate Metadata</Button>
        </Section>
    </div>

    </div>
</PageLayout>




<style lang="postcss">

    .tag {
        @apply rounded border border-white/10 px-2 py-1 hover:cursor-pointer;
    }
</style>

