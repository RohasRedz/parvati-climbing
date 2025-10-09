import { useEffect, useRef, useState } from 'react';
import { loadInstagramScript, processInstagramEmbeds } from '../lib/instagramScript';

/**
 * Instagram Embed Post component using official Instagram embed script
 * Uses the exact format specified: blockquote + script approach
 */
export default function InstagramEmbedPost({ postUrl, className = '' }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!postUrl) {
      setHasError(true);
      return;
    }

    const loadInstagramEmbed = async () => {
      try {
        // Load the Instagram script using our utility
        await loadInstagramScript();
        
        // Process embeds after script is loaded
        if (mountedRef.current) {
          processInstagramEmbeds();
          setIsLoaded(true);
        }

      } catch (error) {
        console.error('Error loading Instagram embed:', error);
        if (mountedRef.current) {
          setHasError(true);
        }
      }
    };

    // Add a small delay to avoid conflicts with carousel transitions
    const timer = setTimeout(() => {
      if (mountedRef.current) {
        loadInstagramEmbed();
      }
    }, 300);

    // Set a timeout to show error state if embed doesn't load
    const errorTimer = setTimeout(() => {
      if (mountedRef.current && !isLoaded) {
        setHasError(true);
      }
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(errorTimer);
    };
  }, [postUrl, isLoaded]);

  // Show loading state initially
  if (!isLoaded && !hasError) {
    return (
      <div className={`instagram-embed-loading ${className}`}>
        <div className="loading-placeholder">
          <div className="loading-spinner"></div>
          <p>Loading Instagram post...</p>
        </div>
      </div>
    );
  }

  // Show error state if embed failed to load
  if (hasError) {
    return (
      <div className={`instagram-embed-error ${className}`}>
        <div className="error-placeholder">
          <p>Unable to load Instagram post</p>
          <a 
            href={postUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-on-instagram"
          >
            View on Instagram →
          </a>
        </div>
      </div>
    );
  }

  // Render the official Instagram embed using the exact format you specified
  return (
    <div className={`instagram-embed-post ${className}`} ref={containerRef}>
      <blockquote 
        className="instagram-media" 
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
        style={{
          width: '100%', 
          maxWidth: '540px', 
          margin: '0 auto'
        }}
      >
        <div style={{ padding: '16px' }}>
          <a 
            href={postUrl} 
            style={{
              background: '#FFFFFF',
              lineHeight: 0,
              padding: '0 0',
              textAlign: 'center',
              textDecoration: 'none',
              width: '100%'
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            View this post on Instagram
          </a>
        </div>
      </blockquote>
    </div>
  );
}
