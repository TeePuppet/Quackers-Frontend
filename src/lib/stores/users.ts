import { db } from "$lib/firebase/client";
import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import { writable } from "svelte/store";
import type { User } from "./auth";

// export const Users = writable<User[]>([])
export const Users = writable<any[]>([])


onSnapshot(collection(db, "users"), (snapshot) => {
    console.log(snapshot.docs)
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    Users.set(data);
});

// export const getAllUsers = async ():Promise<User[]> => {
//     try{
//         const querySnapshot = await getDocs(collection(db, "users"));
//         const users:User[] = querySnapshot.docs.map(doc => doc.data()) as User[]
//         Users.set(users)
//         return users
//     } catch (err) {
//         console.error(err)
//         throw(err)
//     }
// }


// export const getUser = async (userId:string):Promise<User> => {
//     const userDoc = doc(db, "users", userId)
//     const user = await (await getDoc(userDoc)).data() as User
//     return user
// }

// export const deleteUser = async (userId:string) => {
//     try{
//         await deleteDoc(doc(db, "users", userId));
//         return true
//     } catch (err) {
//         console.error(err)
//         return false
//     }
    
// }