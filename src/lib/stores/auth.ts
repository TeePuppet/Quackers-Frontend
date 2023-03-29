import { page } from '$app/stores';
import { derived } from 'svelte/store';

type User = {
    uid: string;
    email?: string;
    role: string;
};

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