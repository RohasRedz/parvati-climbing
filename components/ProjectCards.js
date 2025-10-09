import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import config from '../lib/config/env';

export default function ProjectCards({ limit = 3 }) {
  // refs to each project card so we can animate them
  const cardRefs = useRef([]);
  
  // Set up the refs array
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, Math.min(limit, config.projects.length));
  }, [limit]);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReduced = typeof window !== 'undefined' && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReduced) return; // Skip animations if reduced motion is preferred
    
    // Dynamically import ScrollTrigger only on the client side
    import('gsap/dist/ScrollTrigger').then((module) => {
      const ScrollTrigger = module.ScrollTrigger || module.default;
      if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        cardRefs.current.forEach((ref, index) => {
          if (!ref) return;
          gsap.from(ref, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2, // stagger the animations
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          });
        });
      }
    });
  }, []);

  // Display only the specified number of projects
  const displayedProjects = config.projects.slice(0, limit);

  return (
    <div className="project-cards">
      {displayedProjects.map((project, index) => (
        <div 
          key={project.id} 
          className="project-card"
          ref={el => cardRefs.current[index] = el}
        >
          <div className="project-image">
            {/* Placeholder image until actual project images are available */}
            <div className="placeholder-image" style={{ backgroundColor: '#f0f0f0', height: '200px' }}></div>
          </div>
          <div className="project-content">
            <span className="project-region">{project.region}</span>
            <h3>{project.title}</h3>
            <p>{project.excerpt}</p>
            <span className={`project-status status-${project.status}`}>{project.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
