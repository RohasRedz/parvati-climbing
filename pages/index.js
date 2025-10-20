import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';
import MultiLayerParallaxHero from '../components/MultiLayerParallaxHero';
import ProgramCarousel from '../components/ProgramCarousel';
import ProjectCarousel from '../components/ProjectCarousel';
import PartnersCarousel from '../components/PartnersCarousel';
import InstagramCarousel from '../components/InstagramCarousel';
import Footer from '../components/Footer';
import config from '../lib/config/env';

export default function Home() {
  return (
    <div className="page-wrapper">
      <Head>
        <title>{`${config.site.name} | Climbing for Community Impact`}</title>
        <meta name="description" content={config.site.description} />
      </Head>
      
      <Nav />
      <MultiLayerParallaxHero />
      
      <main className="main-content">
        {/* Program Highlights Section */}
        <section className="programs" id="programs">
          <div className="container">
            <h2>Our Impact Areas</h2>
            <p className="section-intro">
              We use outdoor sports as a catalyst for holistic community development, focusing on education, healthcare, poverty relief, and environmental sustainability.
            </p>
            
            <ProgramCarousel />
          </div>
        </section>
        
        {/* Project Teaser Section */}
        <section className="projects-teaser" id="projects-teaser">
          <div className="container">
            <h2>Our Projects</h2>
            <p className="section-intro">
              From educational workshops to healthcare initiatives, discover how we're creating positive change in the Parvati Valley through sustainable outdoor sports.
            </p>
            
            <ProjectCarousel limit={3} />
            
            <div className="section-cta">
              <Link href="/projects" className="btn-primary">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
        
        {/* Partners Strip Section */}
        <section className="partners-section" id="partners-section">
          <div className="container">
            <h2>Our Partners</h2>
            <p className="section-intro">
              We collaborate with local and international organizations to maximize our impact in education, healthcare, environmental conservation, and sustainable tourism.
            </p>
            
            <PartnersCarousel />
            
            <div className="section-cta">
              <Link href="/partners" className="btn-secondary">
                Meet All Partners
              </Link>
            </div>
          </div>
        </section>
        
        {/* Donate CTA Section */}
        <section className="donate-cta" id="donate-cta">
          <div className="container">
            <h2>Support Our Mission</h2>
            <p className="section-intro">
              Your contribution helps us advance education, improve healthcare access, provide poverty relief, promote environmental sustainability, and develop sustainable tourism in marginalized communities.
            </p>
            
            <div className="cta-buttons">
              <Link href="/donate" className="donate-btn-primary btn-primary btn-large">
                Donate Now
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
        
        {/* Instagram Follow Section */}
        <InstagramCarousel />
      </main>
      
      <Footer />
    </div>
  );
}