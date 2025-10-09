import { useBackgroundParallax } from '../hooks/useParallax';

/**
 * PageHero component with parallax background
 * @param {Object} props - Component props
 * @param {string} props.title - Hero title
 * @param {string} props.subtitle - Hero subtitle/description
 * @param {string} props.backgroundImage - Background image URL
 * @param {string} props.className - Additional CSS classes
 */
export default function PageHero({
  title,
  subtitle,
  backgroundImage = '/assets/hero.png',
  className = '',
  ...props
}) {
  const parallaxRef = useBackgroundParallax(0.3);

  return (
    <section className={`page-hero ${className}`} {...props}>
      <div ref={parallaxRef} className="page-hero-bg">
        <div 
          className="page-hero-image"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      </div>
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <h1>{title}</h1>
        {subtitle && <p className="lead">{subtitle}</p>}
      </div>
    </section>
  );
}
