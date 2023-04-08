import { db } from "$lib/firebase/client";
import { collection, deleteDoc, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { writable } from "svelte/store";
// import randomUUID from "crypto";

export interface Website {
    id: string,
    name: string,
    github: string,
    owner: string | undefined,
    moderator: string[],
    posts: any,
    categories: any,
}

export const Websites = writable<Website[]>([])


export const loadWebsites = async (admin:boolean, userID:string) => {

    try {

        if(admin) {
            const websitesRef = collection(db, "websites");
            const adminWebsites = await getDocs(websitesRef);
            const websiteData: Website[] = []
            adminWebsites.forEach((doc) => {
                websiteData.push(doc.data() as Website);
            });
            Websites.set(websiteData)
        } else {
            const websitesRef = collection(db, "websites");
            const userWebsites = query(websitesRef, where("moderator", "array-contains", userID));
            const querySnapshot = await getDocs(userWebsites)
            const websiteData: Website[] = []
            querySnapshot.forEach((doc) => {
                websiteData.push(doc.data() as Website);
            });
            Websites.set(websiteData)
        }

    } catch (err) {
        console.error(err)
        throw(err)
    }
}

export const getWebsite = async (docId:string):Promise<Website> => {
    const websiteDoc = doc(db, "websites", docId)
    const website = await (await getDoc(websiteDoc)).data() as Website
    return website
}

export const deleteWebsite = async (docId:string) => {
    try{
        await deleteDoc(doc(db, "websites", docId));
        return true
    } catch (err) {
        console.error(err)
        return false
    }
    
}

// export const addWebsite = async ({ fullname, email, avatar }, user_id) => {
//     try{
//         await setDoc(doc(db, "websites", random), data)
//     } catch (err) {
//         return err
//     }
    

//     if (error) {
//         return console.error(error)
//     }

//     Users.update(currentUsers => [...currentUsers, data[0]])
// }

// export const deleteUser = async id => {
//     const { error } = await supabase.from('users').delete().match({ id })

//     if (error) {
//         return console.error(error)
//     }

//     Users.update(users => users.filter(user => user.id !== id))
// }





// export const addWebsiteToDatabase = async (docName:string, data:Website) => {
//     await setDoc(doc(db, "websites", docName), data)
// }

// export const deleteDocument = async (collection:string, documentID:string) => {
//     try{
//         await deleteDoc(doc(db, collection, documentID));
//         return {
//             status:true,
//             data: "File Deleted"
//         }
//     } catch (err) {
//         return {
//             status: false,
//             data: err
//         }
//     }
    
// }