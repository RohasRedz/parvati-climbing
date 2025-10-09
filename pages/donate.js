import Head from 'next/head';
import Nav from '../components/Nav';
import config from '../lib/config/env';

// This would be replaced with the actual GoFundMe URL provided by the client
const GOFUNDME_URL = 'https://gofundme.com/parvati-climbing-ngo';

export default function Donate() {
  return (
    <div className="page-wrapper">
      <Head>
        <title>{`Donate | ${config.site.name}`}</title>
        <meta name="description" content="Support Parvati Climbing NGO's mission through donations" />
      </Head>
      
      <Nav />
      
      <main className="main-content">
        <section className="donate-hero">
          <div className="container">
            <h1>Support Our Mission</h1>
            <p className="lead">Your contribution helps us build accessible climbing infrastructure, provide training and gear, and empower communities around the world.</p>
          </div>
        </section>
        
        <section className="donate-content">
          <div className="container">
            <div className="donate-info">
              <h2>Why Donate?</h2>
              <p>
                Parvati Climbing NGO relies on the generosity of supporters like you to continue our work. 
                Your donations directly fund our projects around the world, from building climbing walls in underserved communities 
                to training local climbing instructors who can create sustainable livelihoods.
              </p>
              
              <h3>How Your Donation Helps</h3>
              <ul>
                <li><strong>$25</strong> provides a day of climbing instruction for a youth participant</li>
                <li><strong>$100</strong> supplies essential climbing gear for a local instructor</li>
                <li><strong>$500</strong> funds a week-long instructor training program</li>
                <li><strong>$1,000</strong> helps establish a new climbing area with proper equipment</li>
              </ul>
              
              <div className="donate-cta">
                <a 
                  href={GOFUNDME_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="donate-button"
                >
                  Donate via GoFundMe
                </a>
              </div>
              
              <div className="donate-note">
                <p>
                  <small>
                    Note: You will be redirected to our secure GoFundMe page to complete your donation. 
                    Parvati Climbing NGO is a registered nonprofit organization.
                  </small>
                </p>
              </div>
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
