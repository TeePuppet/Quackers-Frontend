// Import necessary Firebase and Svelte modules
import { derived, writable, type Writable } from "svelte/store";
import { collection, doc, getDoc, onSnapshot, type QuerySnapshot } from "firebase/firestore";
import { db } from "$lib/firebase/client";

import type { Timestamp } from "firebase/firestore";

export interface TeePublicTrending {
    data: {
        alsoSearch: string[],
        designs: [{
            title: string,
            designURL: string,
            imageURL: string,
            rank: number,
            tags: string[]
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

export interface TeePublicScrapeDate {
    added: Timestamp
}

export interface TrendingDataWithDate {
    date: TeePublicScrapeDate;
    data: TeePublicTrending[];
}

// Define the stores
const trendingData: Writable<TeePublicTrending[] | null> = writable(null);
const scrapeDate: Writable<TeePublicScrapeDate | null> = writable(null);

// Specify the ID of the date document
const dateDocId = "date"; // Replace with the actual ID of the date document

// Fetching the trending data
const trendingCollection = collection(db, "/tricouri/teepublic/trending");
const unsubscribeTrending = onSnapshot(trendingCollection, (snapshot) => {
    const data = snapshot.docs
        .filter(doc => doc.id !== dateDocId) // Filter out the date document
        .map(doc => doc.data() as TeePublicTrending);
    trendingData.set(data);
});

// Fetching the scrape date
const dateDocRef = doc(db, `/tricouri/teepublic/trending/${dateDocId}`);
getDoc(dateDocRef).then((doc) => {
    if (doc.exists()) {
        scrapeDate.set(doc.data() as TeePublicScrapeDate);
    } else {
        console.log("Date document not found");
    }
});

// Combine the two stores into one
const combinedData = derived(
    [trendingData, scrapeDate],
    ([$trendingData, $scrapeDate]) => {
        return {
            date: $scrapeDate,
            data: $trendingData
        };
    }
);

export default combinedData;
