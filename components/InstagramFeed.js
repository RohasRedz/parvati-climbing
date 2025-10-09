import { useState, useEffect } from 'react';
import InstagramPost from './InstagramPost';
import config from '../lib/config/env';

/**
 * InstagramFeed component - handles displaying Instagram posts
 * In production, this would connect to Instagram Basic Display API
 * For now, it uses mock data with real Instagram post structure
 */
export default function InstagramFeed({ 
  username = 'parvaticlimbing', 
  limit = 5, 
  className = '' 
}) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        // Simulate API loading delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // In production, this would be:
        // const response = await fetch(`/api/instagram/${username}`);
        // const data = await response.json();
        
        // For now, use mock data
        const limitedPosts = limit ? config.instagram.posts.slice(0, limit) : config.instagram.posts;
        setPosts(limitedPosts);
        setLoading(false);
      } catch (err) {
        console.error('Error loading Instagram posts:', err);
        setError(err);
        setLoading(false);
      }
    };

    loadPosts();
  }, [username, limit]);

  if (loading) {
    return (
      <div className={`instagram-feed loading ${className}`}>
        <div className="loading-message">
          <div className="loading-spinner"></div>
          <p>Loading Instagram posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`instagram-feed error ${className}`}>
        <div className="error-message">
          <p>Unable to load Instagram posts.</p>
          <a 
            href={`https://www.instagram.com/${username}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View on Instagram
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`instagram-feed ${className}`}>
      {posts.map((post) => (
        <InstagramPost
          key={post.id}
          postUrl={post.url}
          className="feed-post"
        />
      ))}
    </div>
  );
}
