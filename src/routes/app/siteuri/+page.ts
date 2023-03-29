export const prerender = true;

import { database } from "$lib/firebase/client";
import { collection, getDocs } from "firebase/firestore";


/** @type {import('./$types').PageLoad} */
export async function load() {
    // let userData:[any]
    const querySnapshot = await getDocs(collection(database, "websites"));
    const websites = querySnapshot.docs.map(doc => doc.data())

    console.log(websites)
    return {
        websites
    }
}