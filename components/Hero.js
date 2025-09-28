import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { missionVision } from '../lib/mock/site';

export default function Hero() {
  const ropeRef = useRef(null);
  const carabinerRef = useRef(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReduced = typeof window !== 'undefined' && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReduced) return; // Skip animations if reduced motion is preferred
    
    // Dynamically import ScrollTrigger only on the client to avoid SSR issues
    let ScrollTriggerModule;
    import('gsap/dist/ScrollTrigger').then((module) => {
      ScrollTriggerModule = module.ScrollTrigger || module.default;
      if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTriggerModule);
        const rope = ropeRef.current;
        const carabiner = carabinerRef.current;
        if (rope) {
          const length = rope.getTotalLength();
          gsap.set(rope, { strokeDasharray: length, strokeDashoffset: length });
          const tl = gsap.timeline();
          tl.to(rope, { strokeDashoffset: 0, duration: 2, ease: 'power2.out' });
          tl.fromTo(
            carabiner,
            { y: -10, rotation: -15 },
            { y: 0, rotation: 0, duration: 0.8, ease: 'bounce.out' },
            '-=1.0'
          );
        }
      }
    });
  }, []);

  return (
    <section className="hero" id="hero">
      <img className="hero-bg" src="/assets/hero.png" alt="Mountain valley with climbing routes" />
      <div className="overlay" />
      <div className="svg-container">
        <svg width="100%" height="100%" viewBox="0 0 1440 800">
          <path
            ref={ropeRef}
            d="M 0 600 C 300 500 600 700 900 500 C 1100 400 1300 500 1440 400"
            stroke="#f4a460"
            strokeWidth="6"
            fill="none"
          />
          <circle ref={carabinerRef} cx="1440" cy="400" r="14" fill="#f4a460" />
        </svg>
      </div>
      <div className="hero-content">
        <h1>{missionVision.impact}</h1>
        <p>{missionVision.heroTagline}</p>
        <Link href="/donate" className="hero-button">
          Join / Donate
        </Link>
      </div>
    </section>
  );
}