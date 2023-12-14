import trendingTags, { selectedTag, type TeePublicTrending } from '$lib/stores/tricouri.js';
import { getTeePublicTag } from '$lib/utils/tricouri.js';
import { get } from 'svelte/store';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    let tags:TeePublicTrending[] = get(trendingTags)
    let tag:TeePublicTrending | undefined = tags.find(p => p.searchTag === params.keyword)

    if(!tag) {
        tag = await getTeePublicTag(params.keyword)
        selectedTag.set(tag)
        // console.log('Tag not found', tag)
    } else {
        selectedTag.set(tag)
        // console.log('Tag found', tag)
    }
    let recommendedTags = []
    const relatedTags = tag.data.relatedTags.slice(0, 2);
    const alsoSearch = tag.data.alsoSearch.slice(0, 2);
    recommendedTags = [...relatedTags, ...alsoSearch]
    console.log('Tag found', recommendedTags)

    return {
        tag,
        recommendedTags
    }
}

