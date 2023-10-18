import { writable } from 'svelte/store';
import { auth } from '$lib/firebase/client'; // Import your Firebase auth instance

export interface User {
    id: string,
    email: string,
    verified: boolean,
    role: string,
}

// Create a writable Svelte store for the auth state
export const authStore = writable<User | null>(null);

// Listen to Firebase's onAuthStateChanged event
auth.onAuthStateChanged(user => {
    if (user) {
        // User is signed in, update the Svelte store
        authStore.set({
            id: user.uid,
            email: user.email || '',
            verified: user.emailVerified,
            role: 'user' // You might want to fetch the role from your database or set it based on some other logic
        });
    } else {
        // User is signed out
        authStore.set(null);
    }
});
