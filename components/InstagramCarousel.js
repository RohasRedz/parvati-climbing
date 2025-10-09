import Carousel from './Carousel';
import InstagramEmbedPost from './InstagramEmbedPost';
// Instagram posts now come from environment configuration
import config from '../lib/config/env';

export default function InstagramCarousel({ className = '', title = "Follow Our Journey" }) {
  // Check if we have posts to display
  if (!config.instagram.posts || config.instagram.posts.length === 0) {
    return (
      <section className={`instagram-section ${className}`}>
        <div className="container">
          <h2>{title}</h2>
          <p className="section-intro">
            Stay updated with our latest adventures on Instagram.
          </p>
          <div className="section-cta">
            <a 
              href={config.social.instagram.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Follow {config.social.instagram.handle}
            </a>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className={`instagram-section ${className}`}>
      <div className="container">
        <h2>{title}</h2>
        <p className="section-intro">
          Stay updated with our latest adventures, community projects, and inspiring stories on Instagram.
        </p>
        <div className="instagram-carousel">
          <Carousel
            slidesToShow={2}
            gap={20}
            autoPlay={false}
            className="instagram-carousel-inner"
            responsive={{
              mobile: { slidesToShow: 1, gap: 16 },
              tablet: { slidesToShow: 2, gap: 20 },
              desktop: { slidesToShow: 2, gap: 24 }
            }}
          >
            {config.instagram.posts.map((post) => (
              <InstagramEmbedPost 
                key={post.id} 
                postUrl={post.url}
                className="carousel-instagram-post"
              />
            ))}
          </Carousel>
        </div>
        <div className="section-cta">
          <a 
            href={config.social.instagram.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Follow {config.social.instagram.handle}
          </a>
        </div>
      </div>
    </section>
  );
}
