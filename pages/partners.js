import Head from 'next/head';
import Nav from '../components/Nav';
import PartnersCarousel from '../components/PartnersCarousel';
import config from '../lib/config/env';

export default function Partners() {
  return (
    <div className="page-wrapper">
      <Head>
        <title>{`Partners | ${config.site.name}`}</title>
        <meta name="description" content="Meet the organizations and businesses that collaborate with Parvati Climbing NGO" />
      </Head>
      
      <Nav />
      
      <main className="main-content">
        <section className="partners-hero">
          <div className="container">
            <h1>Our Partners</h1>
            <p className="lead">We collaborate with organizations around the world to maximize our impact.</p>
          </div>
        </section>
        
        <section className="partners-grid">
          <div className="container">
            <PartnersCarousel />
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
