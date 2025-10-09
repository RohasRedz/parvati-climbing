import Head from 'next/head';
import { useEffect, useRef } from 'react';
import Nav from '../components/Nav';
import config from '../lib/config/env';

export default function Contact() {
  const instagramEmbedRef = useRef(null);
  
  // Function to load Instagram embed script
  useEffect(() => {
    // This is a simplified version - in a real implementation, we would use the Instagram API
    // or a proper embed component. This is just a placeholder.
    const loadInstagramEmbed = () => {
      if (typeof window !== 'undefined' && instagramEmbedRef.current) {
        // Placeholder for Instagram embed - in real implementation, this would be replaced
        // with actual Instagram embed code or a component like react-instagram-embed
        instagramEmbedRef.current.innerHTML = `
          <div class="instagram-placeholder">
            <div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px; text-align: center;">
              <h3>Instagram Feed</h3>
              <p>Follow us on Instagram: <a href="${config.social.instagram.url}" target="_blank" rel="noopener noreferrer">
                ${config.social.instagram.handle}
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
    <div className="page-wrapper">
      <Head>
        <title>{`Contact Us | ${config.site.name}`}</title>
        <meta name="description" content="Get in touch with Parvati Climbing NGO and follow our latest updates" />
      </Head>
      
      <Nav />
      
      <main className="main-content">
        <section className="contact-hero">
          <div className="container">
            <h1>Contact Us</h1>
            <p className="lead">Get in touch with our team and follow our latest adventures.</p>
          </div>
        </section>
        
        <section className="contact-info">
          <div className="container">
            <div className="contact-details">
              <div className="contact-card">
                <h3>Email</h3>
                <p><a href={`mailto:${config.contact.email}`}>{config.contact.email}</a></p>
              </div>
              
              <div className="contact-card">
                <h3>Location</h3>
                <p>{config.contact.address}</p>
              </div>
              
              <div className="contact-card">
                <h3>Social Media</h3>
                <p>Instagram: <a href={config.social.instagram.url} target="_blank" rel="noopener noreferrer">
                  {config.social.instagram.handle}
                </a></p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="instagram-feed">
          <div className="container">
            <h2>Follow Our Journey</h2>
            <div ref={instagramEmbedRef} className="instagram-embed-container">
              {/* Instagram embed will be loaded here via useEffect */}
            </div>
          </div>
        </section>
      </main>
      
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <p>{config.contact.address}</p>
              <p>Email: <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a></p>
              <p>Follow us: <a href={config.social.instagram.url} target="_blank" rel="noopener noreferrer">{config.social.instagram.handle}</a></p>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright">© {new Date().getFullYear()} {config.site.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
