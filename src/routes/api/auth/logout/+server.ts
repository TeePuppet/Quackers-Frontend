import type { RequestHandler } from "@sveltejs/kit";

export const POST = ( async ({ locals, cookies }) => {
    locals.user = null;
    cookies.delete('auth', { path: '/'});

    return new Response('', { status: 200, statusText: 'Logged out successfully' });
}) satisfies RequestHandler;