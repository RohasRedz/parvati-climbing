import { useState, useEffect, useRef } from 'react';

export default function Carousel({ 
  children, 
  className = '', 
  autoPlay = false, 
  autoPlayInterval = 3000,
  showDots = true,
  showArrows = true,
  slidesToShow = 1,
  gap = 20,
  responsive = {}
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentSlidesToShow, setCurrentSlidesToShow] = useState(slidesToShow);
  const [currentGap, setCurrentGap] = useState(gap);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  const totalSlides = children.length;
  const maxIndex = Math.max(0, totalSlides - currentSlidesToShow);

  // Handle responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newSlidesToShow = slidesToShow;
      let newGap = gap;

      // Check breakpoints in order from smallest to largest
      if (responsive.mobile && width <= 480) {
        newSlidesToShow = responsive.mobile.slidesToShow || slidesToShow;
        newGap = responsive.mobile.gap || gap;
      } else if (responsive.tablet && width > 480 && width <= 768) {
        newSlidesToShow = responsive.tablet.slidesToShow || slidesToShow;
        newGap = responsive.tablet.gap || gap;
      } else if (responsive.desktop && width > 768) {
        newSlidesToShow = responsive.desktop.slidesToShow || slidesToShow;
        newGap = responsive.desktop.gap || gap;
      }

      setCurrentSlidesToShow(newSlidesToShow);
      setCurrentGap(newGap);
    };

    // Set initial values only if responsive config exists
    if (responsive && Object.keys(responsive).length > 0) {
      handleResize();
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [slidesToShow, gap, responsive]);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && totalSlides > currentSlidesToShow) {
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
  }, [autoPlay, autoPlayInterval, currentIndex, totalSlides, currentSlidesToShow]);

  const goToSlide = (index) => {
    if (isAnimating || !carouselRef.current) return;
    
    const newIndex = Math.max(0, Math.min(index, maxIndex));
    if (newIndex !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(newIndex);
      
      // Reset auto-play timer
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        if (autoPlay && totalSlides > currentSlidesToShow) {
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
    if (autoPlay && totalSlides > currentSlidesToShow) {
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
            transform: `translateX(-${currentIndex * (100 / currentSlidesToShow)}%)`,
            transition: isAnimating ? 'transform 0.3s ease-in-out' : 'none',
            width: `calc(100% + ${(totalSlides - 1) * currentGap}px)`
          }}
        >
          {children.map((child, index) => (
            <div 
              key={index} 
              className="carousel-slide"
              style={{
                width: `calc((100% - ${(currentSlidesToShow - 1) * currentGap}px) / ${currentSlidesToShow})`,
                marginRight: index < totalSlides - 1 ? `${currentGap}px` : '0',
                flexShrink: 0
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && totalSlides > currentSlidesToShow && (
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

      {showDots && totalSlides > currentSlidesToShow && (
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
