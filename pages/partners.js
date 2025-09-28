import Head from 'next/head';
import Nav from '../components/Nav';
import PartnersCarousel from '../components/PartnersCarousel';
import siteConfig from '../lib/mock/site';

export default function Partners() {
  return (
    <div className="page-wrapper">
      <Head>
        <title>{`Partners | ${siteConfig.title}`}</title>
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
