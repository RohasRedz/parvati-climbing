import Carousel from './Carousel';
import projects from '../lib/mock/projects';

export default function ProjectCarousel({ limit = null, className = '' }) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className={`project-carousel ${className}`}>
      <Carousel
        slidesToShow={3}
        gap={24}
        autoPlay={true}
        autoPlayInterval={4000}
        className="projects-carousel"
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
