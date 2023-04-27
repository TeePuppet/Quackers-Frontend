// $lib/stores/websites.ts
import { derived, writable, type Writable } from "svelte/store";
import { collection, doc, onSnapshot, QuerySnapshot, updateDoc, type DocumentData, collectionGroup } from "firebase/firestore";
import { db } from "$lib/firebase/client";
import { page } from '$app/stores';
import type { WebsiteTemplate } from "./templates";

export interface Website {
    id: string,
    name: string,
    github: string,
    template: WebsiteTemplate,
    status: string,
    owner: string | undefined,
    moderator: string[],
    categories: any,
    data: {
        topuri:any,
        posts: any,
    }
}



// const websites: Writable<Website[] | null> = writable();
const websites: Writable<Website[] | null> = writable();
const websitesCollection = collection(db, "/websites/websites/data");



const unsubscribe = onSnapshot(websitesCollection, (snapshot) => {
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Website);
    websites.set(data);
});

export const selectedWebsite = derived(
    [websites, page],
    ([$websites, $page]) => $websites?.find(website => website.id === $page.params.site)
);


export { websites, unsubscribe};




