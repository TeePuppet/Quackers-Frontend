import { page } from "$app/stores";
import { db } from "$lib/firebase/client";
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { derived, writable } from "svelte/store";

export interface WebsiteTemplate {
    id?: string,
    name: string,
    github: string,
}

// Stores
export const templates = writable<WebsiteTemplate[] | null>(null);
export const selectedTemplateId = writable<string | null>(null);

export const selectedTemplate = derived(
    [templates, selectedTemplateId],
    ([$templates, $selectedTemplateId]) => $templates?.find(template => template.id === $selectedTemplateId)
);

// Collections
const templateCollection = collection(db, "/websites/templates/data");

export const unsubscribe = onSnapshot(templateCollection, (snapshot) => {
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as WebsiteTemplate);
    templates.set(data);
});

// Helpers
export const addTemplate = async (data: WebsiteTemplate) => {
    await addDoc(templateCollection, data);
}

export const deleteTemplate = async (id: string) => {
    const docRef = doc(db, "/websites/templates/data", id);
    await deleteDoc(docRef);
}

export const updateTemplate = async (id: string, data: any) => {
    const docRef = doc(db, "/websites/templates/data", id);
    await updateDoc(docRef, data);
}
