import { PRIVATE_FIREBASE_ADMIN_CLIENT_EMAIL, PRIVATE_FIREBASE_ADMIN_PRIVATE_KEY } from "$env/static/private";
import { PUBLIC_FIREBASE_PROJECT_ID } from "$env/static/public";
import { initializeApp, cert, getApps, getApp } from "firebase-admin/app";
import { getAuth, type DecodedIdToken } from "firebase-admin/auth";

const projectId = PUBLIC_FIREBASE_PROJECT_ID;
const clientEmail = PRIVATE_FIREBASE_ADMIN_CLIENT_EMAIL;
const privateKey = PRIVATE_FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n');

const adminConfig = {
    credential: cert({
        projectId,
        clientEmail,
        privateKey
    })
};


export const getAdminApp = () => getApps().length ? getApp() : initializeApp(adminConfig);

export async function decodeToken(token: string): Promise<DecodedIdToken | null> {
    if (!token) return null;

    try {
        const auth = getAuth(getAdminApp());
        return await auth.verifyIdToken(token);

    } catch (err) {
        console.error('An error occurred validating token', (err as Error).message);
        return null;
    }
}