import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import ProgramCarousel from '../components/ProgramCarousel';
import ProjectCarousel from '../components/ProjectCarousel';
import PartnersCarousel from '../components/PartnersCarousel';
import InstagramCarousel from '../components/InstagramCarousel';
import Footer from '../components/Footer';
import siteConfig, { missionVision } from '../lib/mock/site';

export default function Home() {
  return (
    <div className="page-wrapper">
      <Head>
        <title>{`${siteConfig.title} | Climbing for Community Impact`}</title>
        <meta name="description" content={siteConfig.description} />
      </Head>
      
      <Nav />
      <Hero />
      
      <main className="main-content">
        {/* Program Highlights Section */}
        <section className="programs" id="programs">
          <div className="container">
            <h2>Our Programs</h2>
            <p className="section-intro">
              We use climbing as a tool for community development, leadership training, and cultural exchange.
            </p>
            
            <ProgramCarousel />
          </div>
        </section>
        
        {/* Project Teaser Section */}
        <section className="projects-teaser" id="projects-teaser">
          <div className="container">
            <h2>Our Projects</h2>
            <p className="section-intro">
              Discover how we're using climbing to create positive change around the world.
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
              We collaborate with organizations around the world to maximize our impact.
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
              Your contribution helps us build accessible climbing infrastructure, provide training and gear, and empower communities around the world.
            </p>
            
            <div className="cta-buttons">
              <Link href="/donate" className="btn-primary btn-large">
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