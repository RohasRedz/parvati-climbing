import Carousel from './Carousel';
import partners from '../lib/mock/partners';

export default function PartnersCarousel({ className = '' }) {
  return (
    <div className={`partners-carousel ${className}`}>
      <Carousel
        slidesToShow={4}
        gap={24}
        autoPlay={true}
        autoPlayInterval={3000}
        showDots={false}
        className="partners-carousel-inner"
      >
        {partners.map((partner) => (
          <div key={partner.id} className="partner-card">
            <a href={partner.url} target="_blank" rel="noopener noreferrer" className="partner-logo">
              {/* Placeholder logo until actual partner logos are available */}
              <div className="placeholder-logo" style={{ 
                backgroundColor: '#f0f0f0', 
                height: '120px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '4px'
              }}>
                <span>{partner.name}</span>
              </div>
            </a>
            <div className="partner-info">
              <h3>{partner.name}</h3>
              <p>{partner.blurb}</p>
              <a href={partner.url} target="_blank" rel="noopener noreferrer" className="partner-link">
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
