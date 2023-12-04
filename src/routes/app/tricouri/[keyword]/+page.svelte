<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';
	import Button from '$lib/components/elements/button/Button.svelte';
	import Input from '$lib/components/elements/inputs/Input.svelte';
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import { selectedTag } from '$lib/stores/tricouri';

    import {trendingTags} from "$lib/stores/logs copy"
    import { page } from '$app/stores';

    $: tags = $trendingTags
    $: data = tags.find(p => p.searchTag === $page.params.keyword);
// Subscribe to the $page store to access parameters

</script>

{#if data}
<PageLayout topBar={true} pageTitle={data.searchTag}>

	<div class="flex flex-col max-w-2xl w-full gap-4 mx-auto ">

            <Section>
                <h2 class="text-2xl capitalize my-2">{data.searchTag}</h2>
                <p>Search score: {data.searchScore}</p>
                <p>Number of products: {data.data.products}</p>
            </Section>
			<Section>
                <div class="flex gap-2 overflow-x-scroll z-0">
                    {#each data.data.designs as design}
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
            
            <h2 class="my-2">People also search for</h2>
            <Section>
                <div class="flex flex-wrap gap-2">
                    {#each data.data.alsoSearch as tag}
                    <p class="tag">{tag}</p>
                    {/each}
                </div>
            </Section>

            <h2 class="my-2">Related Tags</h2>
            <Section>
                <div class="flex flex-wrap gap-2">
                    {#each data.data.relatedTags as tag}
                        <p class="tag">{tag}</p>
                    {/each}
                </div>
            </Section>

            <h2 class="my-2">Popular Tags</h2>
            <Section>
                <div class="flex flex-wrap gap-2">
                    {#each data.data.tags as tag}
                        <p class="tag">{tag.tag} <span class="text-sm">{tag.count}</span></p>
                    {/each}
                </div>
            </Section>

		</div>
</PageLayout>
{/if}


<style lang="postcss">

    .tag {
        @apply rounded border border-white/10 px-2 py-1;
    }
</style>

