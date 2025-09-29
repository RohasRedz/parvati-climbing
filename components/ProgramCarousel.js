import Carousel from './Carousel';

export default function ProgramCarousel({ className = '' }) {
  const programs = [
    {
      id: 'program-1',
      title: 'Leadership Fund',
      description: 'Support initiatives that train local leaders to build sustainable climbing communities.',
      image: '/assets/story1.png'
    },
    {
      id: 'program-2',
      title: 'Training & Courses',
      description: 'Hands‑on courses that teach climbing skills, safety and environmental stewardship.',
      image: '/assets/story2.png'
    },
    {
      id: 'program-3',
      title: 'Gear Access',
      description: 'Providing gear libraries and equitable access to climbing equipment for all.',
      image: '/assets/story3.png'
    }
  ];

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
