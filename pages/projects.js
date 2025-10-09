import Head from 'next/head';
import Nav from '../components/Nav';
import ProjectCarousel from '../components/ProjectCarousel';
import config from '../lib/config/env';

export default function Projects() {
  return (
    <div className="page-wrapper">
      <Head>
        <title>{`Projects | ${config.site.name}`}</title>
        <meta name="description" content="Explore the climbing projects and initiatives of Parvati Climbing NGO around the world" />
      </Head>
      
      <Nav />
      
      <main className="main-content">
        <section className="projects-hero">
          <div className="container">
            <h1>Our Projects</h1>
            <p className="lead">Discover how we're using climbing to create positive change around the world.</p>
          </div>
        </section>
        
        <section className="projects-list">
          <div className="container">
            <ProjectCarousel />
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
