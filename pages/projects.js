import Head from 'next/head';
import Nav from '../components/Nav';
import ProjectCarousel from '../components/ProjectCarousel';
import siteConfig from '../lib/mock/site';

export default function Projects() {
  return (
    <div className="page-wrapper">
      <Head>
        <title>{`Projects | ${siteConfig.title}`}</title>
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
              <p>{siteConfig.footerInfo.address}</p>
              <p>Email: <a href={`mailto:${siteConfig.footerInfo.email}`}>{siteConfig.footerInfo.email}</a></p>
              <p>Follow us: <a href={siteConfig.social.instagramUrl} target="_blank" rel="noopener noreferrer">{siteConfig.social.instagram}</a></p>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright">{siteConfig.footerInfo.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
