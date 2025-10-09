import Carousel from './Carousel';
import config from '../lib/config/env';

export default function TeamCarousel({ className = '' }) {
  return (
    <div className={`team-carousel ${className}`}>
      <Carousel
        slidesToShow={3}
        gap={24}
        autoPlay={true}
        autoPlayInterval={5000}
        className="team-carousel-inner"
      >
        {config.team.map((member) => (
          <div key={member.id} className="team-member">
            <div className="member-image">
              {/* Placeholder image until actual headshots are available */}
              <div className="placeholder-image" style={{ backgroundColor: '#f0f0f0', height: '200px' }}></div>
            </div>
            <h3>{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <p className="member-bio">{member.bioShort}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
