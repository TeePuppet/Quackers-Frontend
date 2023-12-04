// src/stores/logsStore.ts
import { writable } from 'svelte/store';
import { collection, getDocs, query, orderBy, type Timestamp, getDoc, doc } from 'firebase/firestore';
import { db } from "$lib/firebase/client";

export interface TeePublicTrending {
  data: {
      alsoSearch: string[],
      designs: [{
          title: string,
          designURL: string,
          imageURL: string,
          rank: number,
          tags: string[],
          mainTag: string
      }],
      products: number,
      relatedTags: string[],
      tags: [{
          count: number,
          tag: string
      }]
  },
  searchScore: number,
  searchTag: string,
}

const trendingTags = writable<TeePublicTrending[]>([]);

// Function to fetch logs from Firestore
async function fetchLogs() {
  try {
    console.log('This is a request for Tags')

    const querySnapshot = await doc(db, "/tricouri/teepublic/trending/keywords");
    const keywords = (await getDoc(querySnapshot)).data()
    if (keywords != undefined) trendingTags.set(keywords.data);
    
  } catch (error) {
    console.error('Error fetching logs:', error);
  }
}

// Fetch logs immediately when the store is imported
fetchLogs();

// Export the logs store and the fetchLogs function
export { trendingTags, fetchLogs };
