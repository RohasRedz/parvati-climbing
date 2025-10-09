/**
 * Instagram Embed Script Loader
 * Ensures the Instagram embed script is loaded only once and handles multiple components
 */

let scriptLoaded = false;
let scriptLoading = false;
let loadPromise = null;

export const loadInstagramScript = () => {
  // Return existing promise if already loading
  if (loadPromise) {
    return loadPromise;
  }

  // Return resolved promise if already loaded
  if (scriptLoaded && window.instgrm) {
    return Promise.resolve();
  }

  // Create new loading promise
  loadPromise = new Promise((resolve, reject) => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="instagram.com/embed.js"]');
    
    if (existingScript) {
      if (window.instgrm) {
        scriptLoaded = true;
        resolve();
      } else {
        // Script exists but not loaded yet, wait for it
        existingScript.addEventListener('load', () => {
          scriptLoaded = true;
          resolve();
        });
        existingScript.addEventListener('error', reject);
      }
      return;
    }

    // Create and load the script
    scriptLoading = true;
    const script = document.createElement('script');
    script.async = true;
    script.src = '//www.instagram.com/embed.js';
    
    script.onload = () => {
      scriptLoaded = true;
      scriptLoading = false;
      resolve();
    };

    script.onerror = () => {
      scriptLoading = false;
      reject(new Error('Failed to load Instagram embed script'));
    };

    document.head.appendChild(script);
  });

  return loadPromise;
};

export const processInstagramEmbeds = () => {
  if (window.instgrm && window.instgrm.Embeds) {
    try {
      window.instgrm.Embeds.process();
    } catch (error) {
      console.warn('Error processing Instagram embeds:', error);
    }
  }
};

export const isInstagramScriptLoaded = () => {
  return scriptLoaded && window.instgrm;
};
