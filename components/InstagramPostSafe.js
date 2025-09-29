import { useState } from 'react';

/**
 * Safe Instagram Post component that avoids DOM conflicts
 * Shows beautiful placeholders with real content instead of problematic embeds
 */
export default function InstagramPostSafe({ postUrl, caption, className = '' }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Extract post type and ID from URL
  const getPostInfo = (url) => {
    try {
      const postMatch = url.match(/instagram\.com\/parvaticlimbing\/p\/([a-zA-Z0-9_-]+)/);
      const reelMatch = url.match(/instagram\.com\/parvaticlimbing\/reel\/([a-zA-Z0-9_-]+)/);
      
      if (postMatch) {
        return { type: 'post', id: postMatch[1] };
      } else if (reelMatch) {
        return { type: 'reel', id: reelMatch[1] };
      }
    } catch (error) {
      console.error('Error parsing Instagram URL:', error);
    }
    return { type: 'post', id: 'unknown' };
  };

  const postInfo = getPostInfo(postUrl);
  
  // Get random climbing image
  const getClimbingImage = () => {
    const images = ['/assets/story1.png', '/assets/story2.png', '/assets/story3.png', '/assets/hero.png'];
    return images[Math.floor(Math.random() * images.length)];
  };

  const climbingImage = getClimbingImage();

  return (
    <div className={`instagram-post-safe ${className}`}>
      <div className="post-content">
        {/* Header */}
        <div className="post-header">
          <div className="profile-avatar">
            <div className="avatar-ring">
              <img 
                src="/assets/story1.png" 
                alt="Parvati Climbing" 
                className="avatar-image"
              />
            </div>
          </div>
          <div className="profile-info">
            <div className="username">@parvaticlimbing</div>
            <div className="location">Parvati Valley, Himachal Pradesh</div>
          </div>
          <div className="post-type-badge">
            {postInfo.type === 'reel' ? '🎥' : '📷'}
          </div>
        </div>

        {/* Image/Video */}
        <div className="post-media">
          <img 
            src={climbingImage}
            alt="Parvati Climbing Adventure"
            className={`media-image ${imageLoaded ? 'loaded' : ''}`}
            onLoad={() => setImageLoaded(true)}
          />
          {postInfo.type === 'reel' && (
            <div className="reel-overlay">
              <div className="play-icon">▶️</div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="post-actions">
          <div className="action-buttons">
            <button className="action-btn like">❤️</button>
            <button className="action-btn comment">💬</button>
            <button className="action-btn share">📤</button>
          </div>
          <div className="save-btn">🔖</div>
        </div>

        {/* Caption */}
        <div className="post-caption">
          <span className="username">@parvaticlimbing</span>
          <span className="caption-text">
            {caption || 'Follow our climbing adventures in the breathtaking Himalayas! 🏔️ Building communities through climbing. #ParvatiClimbing #Himalayas #Adventure'}
          </span>
        </div>

        {/* Call to action */}
        <div className="post-cta">
          <a 
            href={postUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-on-instagram"
          >
            <span className="button-text-full">View on Instagram</span>
            <span className="button-text-short">View</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
