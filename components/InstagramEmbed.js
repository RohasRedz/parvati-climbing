import InstagramEmbedPost from './InstagramEmbedPost';
// Instagram posts now come from environment configuration
import config from '../lib/config/env';

/**
 * Instagram Embed component that displays a single Instagram post
 * Uses the official Instagram embed script
 */
export default function InstagramEmbed({ postIndex = 0 }) {
  // Get the post to display (default to first post)
  const post = config.instagram.posts[postIndex] || config.instagram.posts[0];
  
  if (!post) {
    return (
      <div className="instagram-embed-container">
        <div className="instagram-placeholder">
          <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
            <h3>Instagram Feed</h3>
            <p>
              Follow us on Instagram: {' '}
              <a 
                href={config.social.instagram.url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#E1306C', textDecoration: 'none' }}
              >
                {config.social.instagram.handle}
              </a>
            </p>
            <p><small>No Instagram posts available to display.</small></p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="instagram-embed-container">
      <InstagramEmbedPost postUrl={post.url} />
    </div>
  );
}
