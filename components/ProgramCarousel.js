import Carousel from './Carousel';
import programs from '../lib/mock/programs';

export default function ProgramCarousel({ className = '' }) {
  return (
    <div className={`program-carousel ${className}`}>
      <Carousel
        slidesToShow={3}
        gap={24}
        autoPlay={true}
        autoPlayInterval={4500}
        className="programs-carousel-inner"
        responsive={{
          mobile: { slidesToShow: 2, gap: 16 },
          tablet: { slidesToShow: 2, gap: 20 },
          desktop: { slidesToShow: 3, gap: 24 }
        }}
      >
        {programs.map((program) => (
          <div key={program.id} className="program-card">
            <img src={program.image} alt={program.title} />
            <div className="card-body">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
