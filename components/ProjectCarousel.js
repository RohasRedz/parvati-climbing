import Carousel from './Carousel';
import config from '../lib/config/env';

export default function ProjectCarousel({ limit = null, className = '' }) {
  const displayedProjects = limit ? config.projects.slice(0, limit) : config.projects;

  return (
    <div className={`project-carousel ${className}`}>
      <Carousel
        slidesToShow={Math.min(3, displayedProjects.length)}
        gap={24}
        autoPlay={displayedProjects.length > 3}
        autoPlayInterval={4000}
        className="projects-carousel"
        showArrows={displayedProjects.length > 3}
        responsive={{
          mobile: { slidesToShow: Math.min(2, displayedProjects.length), gap: 16 },
          tablet: { slidesToShow: Math.min(2, displayedProjects.length), gap: 20 },
          desktop: { slidesToShow: Math.min(3, displayedProjects.length), gap: 24 }
        }}
      >
        {displayedProjects.map((project) => (
          <div key={project.id} className="project-card">
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
      </Carousel>
    </div>
  );
}
