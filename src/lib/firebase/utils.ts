import { invalidateAll } from "$app/navigation";
import type { Website } from "$lib/stores/websites";

import { signOut } from "firebase/auth";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { auth, db } from "./client";


export const logout = async () => {
    await signOut(auth);
    await fetch('/api/logout', { method: 'POST' });
    await invalidateAll();
}

export const getSitesData = async (userID:string) => {
    console.log(userID)
    return "Test"
}

export const addWebsiteToDatabase = async (docName:string, data:Website) => {
    await setDoc(doc(db, "websites", docName), data)
}

export const deleteDocument = async (collection:string, documentID:string) => {
    try{
        await deleteDoc(doc(db, collection, documentID));
        return {
            status:true,
            data: "File Deleted"
        }
    } catch (err) {
        return {
            status: false,
            data: err
        }
    }
    
}