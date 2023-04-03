import { loadWebsites } from "$lib/stores/websites";


/** @type {import('./$types').PageLoad} */
export async function load({parent}) {
    const { user } = await parent();
    if(user) {
        const userID = user.uid
        let admin = false
        if(user.role === "duke_of_quack") admin = true
        const websites = await loadWebsites(admin, userID)
        return { websites }
    }
}