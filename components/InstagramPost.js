import { useEffect, useRef, useState } from 'react';

export default function InstagramPost({ postUrl, className = '' }) {
  const [showEmbed, setShowEmbed] = useState(false);
  const [embedError, setEmbedError] = useState(false);
  const embedContainerRef = useRef(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    // Delay showing embed to avoid conflicts with carousel transitions
    const timer = setTimeout(() => {
      if (mountedRef.current) {
        setShowEmbed(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [postUrl]);

  useEffect(() => {
    if (!showEmbed || !embedContainerRef.current || !mountedRef.current) return;

    let timeoutId;
    
    const loadInstagramEmbed = () => {
      try {
        // Clear any existing content to prevent conflicts
        if (embedContainerRef.current) {
          embedContainerRef.current.innerHTML = '';
        }

        if (window.instgrm && window.instgrm.Embeds) {
          // Instagram script already loaded
          if (mountedRef.current && embedContainerRef.current) {
            window.instgrm.Embeds.process();
          }
        } else {
          // Load Instagram script if not present
          const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
          if (!existingScript) {
            const script = document.createElement('script');
            script.src = 'https://www.instagram.com/embed.js';
            script.async = true;
            script.onload = () => {
              if (window.instgrm && window.instgrm.Embeds && mountedRef.current) {
                try {
                  window.instgrm.Embeds.process();
                } catch (error) {
                  console.warn('Instagram embed processing failed:', error);
                  if (mountedRef.current) setEmbedError(true);
                }
              }
            };
            script.onerror = () => {
              if (mountedRef.current) setEmbedError(true);
            };
            document.body.appendChild(script);
          }
        }

        // Fallback timeout
        timeoutId = setTimeout(() => {
          if (mountedRef.current) {
            setEmbedError(true);
          }
        }, 10000);

      } catch (error) {
        console.warn('Instagram embed setup failed:', error);
        if (mountedRef.current) setEmbedError(true);
      }
    };

    const delayedLoad = setTimeout(loadInstagramEmbed, 200);

    return () => {
      clearTimeout(delayedLoad);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [showEmbed, postUrl]);

  // Extract post ID from URL for embedding (handles both posts and reels)
  const getEmbedUrl = (url) => {
    try {
      // Handle both /p/ (posts) and /reel/ (reels) formats
      const postMatch = url.match(/instagram\.com\/p\/([a-zA-Z0-9_-]+)/);
      const reelMatch = url.match(/instagram\.com\/reel\/([a-zA-Z0-9_-]+)/);
      
      if (postMatch && postMatch[1]) {
        return `https://www.instagram.com/p/${postMatch[1]}/embed/`;
      } else if (reelMatch && reelMatch[1]) {
        return `https://www.instagram.com/reel/${reelMatch[1]}/embed/`;
      }
    } catch (error) {
      console.error('Error parsing Instagram URL:', error);
    }
    return null;
  };

  const embedUrl = getEmbedUrl(postUrl);

  // Show placeholder if URL is invalid, embed failed, or still loading
  if (!embedUrl || embedError || !showEmbed) {
    return (
      <div className={`instagram-post-placeholder ${className}`}>
        <div className="placeholder-content">
          <div className="placeholder-header">
            <div className="placeholder-avatar"></div>
            <div className="placeholder-info">
              <div className="placeholder-username">@parvaticlimbing</div>
              <div className="placeholder-location">Parvati Valley, India</div>
            </div>
          </div>
          <div className="placeholder-image"></div>
          <div className="placeholder-actions">
            <div className="placeholder-like">❤️</div>
            <div className="placeholder-comment">💬</div>
            <div className="placeholder-share">📤</div>
          </div>
          <div className="placeholder-caption">
            <strong>@parvaticlimbing</strong> Follow our climbing adventures in the Himalayas! 🏔️
          </div>
          <div className="placeholder-cta">
            <a 
              href={postUrl || "https://www.instagram.com/parvaticlimbing/"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="view-on-instagram"
            >
              View on Instagram →
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Render Instagram embed with isolated DOM container
  return (
    <div className={`instagram-post ${className}`}>
      <div 
        ref={embedContainerRef}
        style={{ 
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <blockquote 
          className="instagram-media" 
          data-instgrm-captioned 
          data-instgrm-permalink={postUrl}
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: 0,
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '1px',
            maxWidth: '540px',
            minWidth: '326px',
            padding: 0,
            width: '100%'
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
              View on Instagram
            </a>
          </div>
        </blockquote>
      </div>
    </div>
  );
}
