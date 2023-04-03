// import { database } from "$lib/firebase/client";
import { getAllUsers } from "$lib/stores/users";


/** @type {import('./$types').PageLoad} */
export async function load() {
    await getAllUsers()
}