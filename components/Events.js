import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Events() {
  const markerRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    import('gsap/dist/ScrollTrigger').then((module) => {
      const ScrollTrigger = module.ScrollTrigger || module.default;
      if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        markerRefs.forEach((ref) => {
          const el = ref.current;
          if (!el) return;
          gsap.fromTo(
            el,
            { scale: 0.5, backgroundColor: '#e0e0e0' },
            {
              scale: 1.4,
              backgroundColor: '#ff5722',
              duration: 0.5,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                toggleActions: 'play reverse play reverse',
              },
            }
          );
        });
      }
    });
  }, []);

  return (
    <section className="events" id="events">
      <h2>Events</h2>
      <p>Join our upcoming festivals, clinics and community gatherings across the globe.</p>
      <div className="timeline">
        <div className="timeline-marker" ref={markerRefs[0]} style={{ left: '20%' }} />
        <div className="timeline-marker" ref={markerRefs[1]} style={{ left: '50%' }} />
        <div className="timeline-marker" ref={markerRefs[2]} style={{ left: '80%' }} />
      </div>
      <div style={{ maxWidth: '900px', marginTop: '30px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ width: '30%', minWidth: '250px', marginBottom: '20px' }}>
          <h4>Chowki Climbing Festival</h4>
          <p>Oct 10–14, Parvati Valley – A celebration of climbing, music and culture in the Himalayas.</p>
        </div>
        <div style={{ width: '30%', minWidth: '250px', marginBottom: '20px' }}>
          <h4>Jamrock Retreat</h4>
          <p>Dec 3–7, Jamaica – Retreat focused on inclusive climbing and community outreach.</p>
        </div>
        <div style={{ width: '30%', minWidth: '250px', marginBottom: '20px' }}>
          <h4>Intro to Trad Clinic</h4>
          <p>Feb 20, Virtual – Learn the basics of placing gear and building anchors with our guides.</p>
        </div>
      </div>
    </section>
  );
}