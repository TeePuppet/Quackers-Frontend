import type { LayoutServerLoad } from './$types';

export const load = (async (event) => {
    const user = event.locals.user;
    let admin =  false
    if(user?.role === "duke_of_quack") admin = true
    return { user, admin};
}) satisfies LayoutServerLoad;