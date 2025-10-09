import { useEffect, useRef } from 'react';

/**
 * Custom hook for parallax scrolling effects using GSAP ScrollTrigger
 * @param {Object} options - Parallax configuration options
 * @param {number} options.speed - Parallax speed multiplier (0.1 to 2.0)
 * @param {string} options.direction - 'up' or 'down' for parallax direction
 * @param {string} options.trigger - CSS selector for scroll trigger element
 * @param {boolean} options.respectReducedMotion - Honor prefers-reduced-motion
 */
export const useParallax = (options = {}) => {
  const elementRef = useRef(null);
  const mountedRef = useRef(true);
  const {
    speed = 0.5,
    direction = 'up',
    trigger = null,
    respectReducedMotion = true
  } = options;

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    // Check for reduced motion preference
    if (respectReducedMotion && typeof window !== 'undefined') {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return;
    }

    // Dynamic import to avoid SSR issues
    const loadGSAP = async () => {
      if (typeof window === 'undefined') return;
      
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);

        const element = elementRef.current;
        if (!element || !mountedRef.current) return;

        // Calculate parallax movement
        const yPercent = direction === 'up' ? -100 * speed : 100 * speed;
        
        // Create parallax animation
        const animation = gsap.fromTo(element, 
          {
            yPercent: direction === 'up' ? 0 : -yPercent
          },
          {
            yPercent: yPercent,
            ease: "none",
            scrollTrigger: {
              trigger: trigger || element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true
            }
          }
        );

        // Cleanup function
        return () => {
          try {
            if (animation) {
              animation.kill();
            }
            // Clean up ScrollTrigger instances associated with this element
            ScrollTrigger.getAll().forEach(st => {
              if (st.trigger === element) {
                st.kill();
              }
            });
          } catch (error) {
            console.warn('Error during parallax cleanup:', error);
          }
        };
      } catch (error) {
        console.warn('GSAP not available for parallax effects:', error);
      }
    };

    let cleanupFn = null;
    
    loadGSAP().then(fn => {
      if (mountedRef.current) {
        cleanupFn = fn;
      }
    }).catch(error => {
      console.warn('Error loading GSAP for parallax:', error);
    });
    
    return () => {
      mountedRef.current = false;
      if (cleanupFn && typeof cleanupFn === 'function') {
        try {
          cleanupFn();
        } catch (error) {
          console.warn('Error during parallax cleanup:', error);
        }
      }
    };
  }, [speed, direction, trigger, respectReducedMotion]);

  return elementRef;
};

/**
 * Hook for background parallax effects (slower, subtle movement)
 */
export const useBackgroundParallax = (speed = 0.3) => {
  return useParallax({ 
    speed, 
    direction: 'up',
    respectReducedMotion: true 
  });
};

/**
 * Hook for foreground parallax effects (faster, more noticeable movement)
 */
export const useForegroundParallax = (speed = 0.8) => {
  return useParallax({ 
    speed, 
    direction: 'down',
    respectReducedMotion: true 
  });
};
