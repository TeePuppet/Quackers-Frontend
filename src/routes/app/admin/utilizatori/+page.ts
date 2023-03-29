// import { database } from "$lib/firebase/client";
import { collection, getDocs } from "firebase/firestore";


// /** @type {import('./$types').PageLoad} */
// export async function load() {
//     // let userData:[any]
//     const querySnapshot = await getDocs(collection(database, "users"));
//     const newData = querySnapshot.docs.map(doc => doc.data())

//     console.log(newData)
//     return {
//         newData
//     }
// }