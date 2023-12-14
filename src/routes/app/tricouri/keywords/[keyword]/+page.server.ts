import trendingTags, { selectedTag, type TeePublicTrending } from '$lib/stores/tricouri.js';
import { getTeePublicTag } from '$lib/utils/tricouri.js';
import { get } from 'svelte/store';
import { getMultipleRandom } from "$lib/utils/tricouri.js";

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
    const relatedTags = tag.data.relatedTags.slice(0, 2);
    const alsoSearch = tag.data.alsoSearch.slice(0, 2);
    // const popularTags = getMultipleRandom(tag.data.tags)
    const filteredPopularTags = tag.data.tags.filter(tag => tag.count > 5)
    const popularTags = filteredPopularTags.map(a => a.tag )

    const nonDuplicatePopularTags = popularTags.filter(item => !relatedTags.includes(item));

   


    return {
        tag,
        relatedTags,
        popularTags: nonDuplicatePopularTags,
        recommendedTags: [...relatedTags, ...getMultipleRandom(nonDuplicatePopularTags, 3) ]
    }
}




