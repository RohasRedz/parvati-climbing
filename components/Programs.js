import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useBackgroundParallax } from '../hooks/useParallax';

export default function Programs() {
  // refs to each program card so we can animate them
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  const sectionParallaxRef = useBackgroundParallax(0.2);

  useEffect(() => {
    // Dynamically import ScrollTrigger only on the client side
    import('gsap/dist/ScrollTrigger').then((module) => {
      const ScrollTrigger = module.ScrollTrigger || module.default;
      if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        cardRefs.forEach((ref) => {
          const el = ref.current;
          if (!el) return;
          gsap.from(el, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          });
        });
      }
    });
  }, []);

  return (
    <section className="programs parallax-section" id="programs">
      <div ref={sectionParallaxRef} className="section-bg-parallax" />
      <div className="parallax-content">
        <h2>Our Programs</h2>
        <div className="program-cards">
          <div className="program-card" ref={cardRefs[0]}>
            <img src="/assets/story1.png" alt="Leadership Fund" />
            <div className="card-body">
              <h3>Leadership Fund</h3>
              <p>Support initiatives that train local leaders to build sustainable climbing communities.</p>
            </div>
          </div>
          <div className="program-card" ref={cardRefs[1]}>
            <img src="/assets/story2.png" alt="Training & Courses" />
            <div className="card-body">
              <h3>Training &amp; Courses</h3>
              <p>Hands‑on courses that teach climbing skills, safety and environmental stewardship.</p>
            </div>
          </div>
          <div className="program-card" ref={cardRefs[2]}>
            <img src="/assets/story3.png" alt="Gear Access" />
            <div className="card-body">
              <h3>Gear Access</h3>
              <p>Providing gear libraries and equitable access to climbing equipment for all.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}