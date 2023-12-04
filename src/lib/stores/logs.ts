// src/stores/logsStore.ts
import { writable } from 'svelte/store';
import { collection, getDocs, query, orderBy, type Timestamp } from 'firebase/firestore';
import { db } from "$lib/firebase/client";

export interface LogEntry {
    function: string;
    message: string;
    time: Timestamp
    type: string;
}

const logs = writable<LogEntry[]>([]);

// Function to fetch logs from Firestore
async function fetchLogs() {
  try {
    const querySnapshot = await getDocs(query(collection(db, 'logs'), orderBy('time', 'desc')));
    const fetchedLogs: LogEntry[] = [];

    querySnapshot.forEach((doc) => {
      fetchedLogs.push(doc.data() as LogEntry);
    });

    logs.set(fetchedLogs);
  } catch (error) {
    console.error('Error fetching logs:', error);
  }
}

// Fetch logs immediately when the store is imported
fetchLogs();

// Export the logs store and the fetchLogs function
export { logs, fetchLogs };
