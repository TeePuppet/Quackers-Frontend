// $lib/stores/websites.ts
import { derived, writable, type Writable } from "svelte/store";
import { collection, doc, onSnapshot, QuerySnapshot, updateDoc, type DocumentData, collectionGroup, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "$lib/firebase/client";
import { page } from '$app/stores';
import type { WebsiteTemplate } from "./templates";

export interface Website {
    id?: string,
    name: string,
    github: {
        default_branch: string,
        repo: string,
        id: string,
        api: string,
        url: string
    },
    vercel: {
        projectId: string | null,
        vercelURL: string | null,
        domain:string | null
    },
    template: string,
    status: string,
    owner: string | undefined,
    moderator: string[],
    categories: any,
    data?: {
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

//Helpers
export const addWebsite = async (data:Website) => {
    await addDoc(websitesCollection, data);
}

export const deleteWebsite = async (id:string) => {
    const docRef = doc(db, "/websites/websites/data", id);
    await deleteDoc(docRef)
}


export const updateTemplate =async (id:string , data:any) => {
    const docRef = doc(db, "/websites/websites/data", id);
    await updateDoc(docRef, data);


}

export { websites, unsubscribe};




