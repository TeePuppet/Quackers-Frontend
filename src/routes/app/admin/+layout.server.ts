import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ locals, cookies }) => {
	if (locals?.user?.role !== 'duke_of_quack') {
		cookies.delete('session');
		throw redirect(302, '/app');
    }
};