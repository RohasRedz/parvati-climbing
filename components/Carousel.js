import { useState, useEffect, useRef } from 'react';

export default function Carousel({ 
  children, 
  className = '', 
  autoPlay = false, 
  autoPlayInterval = 3000,
  showDots = true,
  showArrows = true,
  slidesToShow = 1,
  gap = 20
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  const totalSlides = children.length;
  const maxIndex = Math.max(0, totalSlides - slidesToShow);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && totalSlides > slidesToShow) {
      // Clear any existing interval
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
      
      autoPlayRef.current = setInterval(() => {
        goToNext();
      }, autoPlayInterval);

      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
          autoPlayRef.current = null;
        }
      };
    }
  }, [autoPlay, autoPlayInterval, currentIndex, totalSlides, slidesToShow]);

  const goToSlide = (index) => {
    if (isAnimating || !carouselRef.current) return;
    
    const newIndex = Math.max(0, Math.min(index, maxIndex));
    if (newIndex !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(newIndex);
      
      // Reset auto-play timer
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        if (autoPlay && totalSlides > slidesToShow) {
          autoPlayRef.current = setInterval(() => {
            goToNext();
          }, autoPlayInterval);
        }
      }
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }
  };

  const goToPrevious = () => {
    goToSlide(currentIndex - 1);
  };

  const goToNext = () => {
    if (currentIndex >= maxIndex) {
      goToSlide(0); // Loop back to start
    } else {
      goToSlide(currentIndex + 1);
    }
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const startAutoPlay = () => {
    if (autoPlay && totalSlides > slidesToShow) {
      autoPlayRef.current = setInterval(() => {
        goToNext();
      }, autoPlayInterval);
    }
  };

  // Cleanup effect to prevent memory leaks
  useEffect(() => {
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      className={`carousel ${className}`}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div className="carousel-container" ref={carouselRef}>
        <div 
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            transition: isAnimating ? 'transform 0.3s ease-in-out' : 'none'
          }}
        >
          {children.map((child, index) => (
            <div 
              key={index} 
              className="carousel-slide"
              style={{
                width: `calc(${100 / slidesToShow}% - ${(gap * (slidesToShow - 1)) / slidesToShow}px)`,
                marginRight: index < totalSlides - 1 ? `${gap}px` : '0'
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && totalSlides > slidesToShow && (
        <>
          <button 
            className="carousel-arrow carousel-arrow-prev"
            onClick={goToPrevious}
            disabled={currentIndex === 0 && !autoPlay}
          >
            ←
          </button>
          <button 
            className="carousel-arrow carousel-arrow-next"
            onClick={goToNext}
            disabled={currentIndex >= maxIndex && !autoPlay}
          >
            →
          </button>
        </>
      )}

      {showDots && totalSlides > slidesToShow && (
        <div className="carousel-dots">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
