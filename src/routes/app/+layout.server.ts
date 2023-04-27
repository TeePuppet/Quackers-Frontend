import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ locals }) => {
	let admin = false
	const uid = locals.user?.uid
	if (!locals.user) {
		throw redirect(302, '/');
	}
	if (locals.user.role === "duke_of_quaks") admin = true;
	return { admin, uid }
};