import { useEffect, useRef } from 'react';
import anime from 'animejs';
import config from '../lib/config/env';

export default function StripPartners({ limit = 4 }) {
  const stripRef = useRef(null);
  
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReduced = typeof window !== 'undefined' && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReduced) return; // Skip animations if reduced motion is preferred
    
    if (stripRef.current) {
      // Simple subtle animation for the partner logos
      anime({
        targets: stripRef.current.querySelectorAll('.partner-logo'),
        translateY: [
          { value: -5, duration: 1500 },
          { value: 0, duration: 1500 }
        ],
        delay: anime.stagger(200),
        loop: true,
        easing: 'easeInOutSine'
      });
    }
  }, []);

  // Display only the specified number of partners
  const displayedPartners = config.partners.slice(0, limit);

  return (
    <div className="partners-strip" ref={stripRef}>
      {displayedPartners.map((partner) => (
        <a 
          key={partner.id} 
          href={partner.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="partner-logo"
        >
          {/* Placeholder logo until actual partner logos are available */}
          <div className="placeholder-logo" style={{ 
            backgroundColor: '#f0f0f0', 
            height: '80px', 
            width: '160px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            borderRadius: '4px'
          }}>
            <span>{partner.name}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
