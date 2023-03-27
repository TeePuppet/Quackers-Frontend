
import type { PageServerLoad } from "./$types";

// eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
export const load = (async (event) => {
    console.log(event.params)
    return event.params
}) satisfies PageServerLoad;