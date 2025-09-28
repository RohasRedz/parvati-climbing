import Carousel from './Carousel';
import InstagramPostSafe from './InstagramPostSafe';
import instagramPosts from '../lib/mock/instagram.js';
import siteConfig from '../lib/mock/site';

export default function InstagramCarousel({ className = '', title = "Follow Our Journey" }) {
  // Check if we have posts to display
  if (!instagramPosts || instagramPosts.length === 0) {
    return (
      <section className={`instagram-section ${className}`}>
        <div className="container">
          <h2>{title}</h2>
          <p className="section-intro">
            Stay updated with our latest adventures on Instagram.
          </p>
          <div className="section-cta">
            <a 
              href={siteConfig.social.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Follow {siteConfig.social.instagram}
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
            slidesToShow={3}
            gap={24}
            autoPlay={true}
            autoPlayInterval={6000}
            className="instagram-carousel-inner"
          >
            {instagramPosts.map((post) => (
              <InstagramPostSafe 
                key={post.id} 
                postUrl={post.url}
                caption={post.caption}
                className="carousel-instagram-post"
              />
            ))}
          </Carousel>
        </div>
        <div className="section-cta">
          <a 
            href={siteConfig.social.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Follow {siteConfig.social.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}
