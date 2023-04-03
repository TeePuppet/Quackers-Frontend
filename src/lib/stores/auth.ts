import { page } from '$app/stores';
import { derived } from 'svelte/store';

export interface User {
    id: string,
    expiry_time: number,
    email: string,
    verified: boolean,
    role: string,
}

export const authStore = derived<typeof page, User | null>(
    page,
    ($page, set) => {
        const { user } = $page.data;
        if (!user) {
            set(null);
            return;
        }

        set(user);
    },
    null
);