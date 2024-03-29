import type { Handle } from '@sveltejs/kit';
import { decodeToken } from '$lib/firebase/admin';
import { SESSION_COOKIE_NAME } from '$lib/constants';

export const handle = (async ({ event, resolve }) => {
    const cookies = event.cookies
    const token = cookies.get(SESSION_COOKIE_NAME)

    if (token) {
        const decodedToken = await decodeToken(token);
        if (decodedToken) {
            event.locals.user = decodedToken
        }
    }
    return resolve(event);
}) satisfies Handle;