import { redirect, type Handle } from "@sveltejs/kit";
import { verifyIdToken } from '$lib/firebase/admin';
import type { User } from "$lib/types/user";

export const handle = (async ({ event, resolve }) => {
    const { cookies } = event;
    const authToken = cookies.get('auth') as string;
    const user = authToken ? await getUserFromToken(authToken) : null;
    if (event.url.pathname.startsWith('/login') && user) {
        throw redirect(303, '/app');
    }

    if (event.url.pathname.startsWith('/app')) {
        if (!user) {
            throw redirect(303, '/');
        }
        
        if (event.url.pathname.startsWith('/app/admin')) {
            if (!user.roles.includes("ADMIN")) {
                throw redirect(303, '/app');
            }
        }
    }

    return resolve(event);
}) satisfies Handle;

async function getUserFromToken(token: string): Promise<User | null> {
    const decodedToken = await verifyIdToken(token);

    const user: User = {
        uid: decodedToken.uid,
        expiry_time: decodedToken.exp,
        email: decodedToken.email,
        roles: []
    }

    return user;
}