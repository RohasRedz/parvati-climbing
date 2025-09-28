import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function Stories() {
  // Create refs for underline paths
  const underlineRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    // Initialise dash offsets
    underlineRefs.forEach((ref) => {
      const path = ref.current;
      if (!path) return;
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });
  }, []);

  const handleEnter = (index) => {
    const path = underlineRefs[index].current;
    if (!path) return;
    const length = path.getTotalLength();
    anime({
      targets: path,
      strokeDashoffset: [length, 0],
      duration: 600,
      easing: 'easeOutQuad',
    });
  };

  const handleLeave = (index) => {
    const path = underlineRefs[index].current;
    if (!path) return;
    const length = path.getTotalLength();
    anime({
      targets: path,
      strokeDashoffset: length,
      duration: 600,
      easing: 'easeOutQuad',
    });
  };

  const titles = ['Community Bonding', 'Inclusive Training', 'Gear & Safety'];
  const imagePaths = ['/assets/story1.png', '/assets/story2.png', '/assets/story3.png'];

  return (
    <section className="stories" id="stories">
      <h2>Stories</h2>
      <p style={{ maxWidth: '800px', textAlign: 'center' }}>
        Discover inspiring stories of how climbing transforms lives, bridges cultures and inspires youth around the world.
      </p>
      <div className="stories-grid">
        {titles.map((title, idx) => (
          <div
            key={idx}
            className="story-card"
            onMouseEnter={() => handleEnter(idx)}
            onMouseLeave={() => handleLeave(idx)}
          >
            <img src={imagePaths[idx]} alt={title} />
            <div className="story-overlay">{title}</div>
            <svg
              style={{ position: 'absolute', bottom: 10, left: 10, width: '80%', height: '10px' }}
              viewBox="0 0 200 10"
            >
              <path
                ref={underlineRefs[idx]}
                d="M0 5 Q50 0 100 5 T200 5"
                stroke="#f4a460"
                strokeWidth="4"
                fill="none"
              />
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
}