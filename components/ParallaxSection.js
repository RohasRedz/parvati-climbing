import { useBackgroundParallax, useForegroundParallax } from '../hooks/useParallax';

/**
 * ParallaxSection component for creating sections with parallax backgrounds
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Section content
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.backgroundImage - Background image URL
 * @param {number} props.parallaxSpeed - Parallax speed (0.1 to 2.0)
 * @param {string} props.overlayColor - Overlay color (optional)
 * @param {number} props.overlayOpacity - Overlay opacity (0 to 1)
 */
export default function ParallaxSection({
  children,
  className = '',
  backgroundImage,
  parallaxSpeed = 0.5,
  overlayColor = 'rgba(0, 0, 0, 0.4)',
  overlayOpacity = 0.4,
  ...props
}) {
  const parallaxRef = useBackgroundParallax(parallaxSpeed);

  return (
    <section className={`parallax-section ${className}`} {...props}>
      {backgroundImage && (
        <>
          <div ref={parallaxRef} className="parallax-bg">
            <div 
              className="parallax-bg-image"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
          </div>
          {overlayColor && (
            <div 
              className="parallax-overlay"
              style={{ 
                background: overlayColor,
                opacity: overlayOpacity 
              }}
            />
          )}
        </>
      )}
      <div className="parallax-content">
        {children}
      </div>
    </section>
  );
}
