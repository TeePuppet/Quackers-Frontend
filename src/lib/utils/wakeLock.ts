// src/lib/wakeLock.ts

export async function requestWakeLock(): Promise<void> {
    try {
      if ('wakeLock' in navigator && 'request' in navigator.wakeLock) {
        const wakeLock = await navigator.wakeLock.request('screen');
  
        wakeLock.addEventListener('release', () => {
          console.log('Wake Lock was released');
        });
  
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'hidden') {
            wakeLock.release();
          }
        });
  
        console.log('Wake Lock is active');
      } else {
        console.log('Wake Lock API is not supported');
      }
    } catch (error:any) {
      console.error(`Failed to acquire wake lock: ${error.name}, ${error.message}`);
    }
  }
  
  