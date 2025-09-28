import { useEffect, useRef } from 'react';
import siteConfig from '../lib/mock/site';

export default function InstagramEmbed() {
  const embedContainerRef = useRef(null);
  
  useEffect(() => {
    // This is a simplified version - in a real implementation, we would use the Instagram API
    // or a proper embed component. This is just a placeholder.
    const loadInstagramEmbed = () => {
      if (typeof window !== 'undefined' && embedContainerRef.current) {
        // Placeholder for Instagram embed - in real implementation, this would be replaced
        // with actual Instagram embed code or a component like react-instagram-embed
        embedContainerRef.current.innerHTML = `
          <div class="instagram-placeholder">
            <div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px; text-align: center;">
              <h3>Instagram Feed</h3>
              <p>Follow us on Instagram: <a href="${siteConfig.social.instagramUrl}" target="_blank" rel="noopener noreferrer">
                ${siteConfig.social.instagram}
              </a></p>
              <p><small>Instagram feed will be embedded here with actual posts from our account.</small></p>
            </div>
          </div>
        `;
      }
    };
    
    loadInstagramEmbed();
  }, []);

  return (
    <div className="instagram-embed-container" ref={embedContainerRef}>
      {/* Instagram embed will be loaded here via useEffect */}
      <div className="instagram-loading">Loading Instagram feed...</div>
    </div>
  );
}
