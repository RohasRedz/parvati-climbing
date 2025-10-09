import Head from 'next/head';
import Nav from '../components/Nav';
import TeamCarousel from '../components/TeamCarousel';
import InstagramCarousel from '../components/InstagramCarousel';
import config from '../lib/config/env';

export default function About() {
  return (
    <div className="page-wrapper">
      <Head>
        <title>{`About Us | ${config.site.name}`}</title>
        <meta name="description" content="Learn about the history and team behind Parvati Climbing NGO" />
      </Head>
      
      <Nav />
      
      <main className="main-content">
        <section className="about-hero">
          <div className="container">
            <h1>About Parvati Climbing</h1>
            <p className="lead">{config.content.mission}</p>
          </div>
        </section>
        
        <section className="history">
          <div className="container">
            <h2>Our History</h2>
            <p>
              Founded in 2018, Parvati Climbing NGO began with a simple idea: that climbing could be a powerful tool for community development and cultural exchange. What started as informal climbing lessons in the Parvati Valley has grown into an international organization with projects across multiple continents.
            </p>
            <p>
              Our approach combines climbing education with community engagement, ensuring that local communities benefit directly from climbing tourism and development. We believe in sustainable growth that respects local cultures and environments.
            </p>
            
            {/* Theory of Change section - hidden until content exists */}
            <div style={{ display: 'none' }}>
              <h2>Theory of Change</h2>
              <p>Content coming soon...</p>
            </div>
          </div>
        </section>
        
        <section className="team">
          <div className="container">
            <h2>Our Team</h2>
            <TeamCarousel />
          </div>
        </section>
        
        {/* Follow Our Journey Section */}
        <InstagramCarousel title="Follow Our Journey" />
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
