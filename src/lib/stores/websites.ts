// $lib/stores/websites.ts
import { derived, writable, type Writable } from "svelte/store";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "$lib/firebase/client";
import { page } from '$app/stores';

export interface Website {
    id: string,
    name: string,
    github: string,
    owner: string | undefined,
    moderator: string[],
    categories: any,
    data: {
        topuri:any,
        posts: any,
    }


}


const websites: Writable<Website[] | null> = writable();

const websitesCollection = collection(db, "websites");
const unsubscribe = onSnapshot(websitesCollection, (snapshot) => {
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Website);
    websites.set(data);
});

const selectedWebsite = derived(
    [websites, page],
    ([$websites, $page]) => $websites?.find(website => website.id === $page.params.site)
  );

const addWebsite = () => {
    console.log("adding website")
}

const updateFirebaseDocument = async (collection:string, document:string, dataToUpdate:any) => {
    const docRef = doc(db, collection, document);
    await updateDoc(docRef, dataToUpdate);
}
export { websites, unsubscribe, selectedWebsite, updateFirebaseDocument };




