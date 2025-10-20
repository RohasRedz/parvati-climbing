import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/MultiLayerParallaxHero.module.css';
import config from '../lib/config/env';

/**
 * Multi‑layer parallax hero component.
 *
 * This component implements a three‑layer parallax effect. It places a
 * background image, two cloud images on the left and right, and a
 * foreground climber silhouette on top. As the user scrolls, each layer
 * moves at a different speed to create a depth effect. The content
 * container can be filled with any children passed to the component.
 */
export default function MultiLayerParallaxHero({ children }) {
  const bgRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const climberRef = useRef(null);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Check for reduced motion preference
    const prefersReducedMotion = typeof window !== 'undefined' && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let scrollCleanup = null;

    if (!prefersReducedMotion) {
      // Initial cloud animations - clouds start from center and animate to their positions
      const initCloudAnimations = () => {
        // Set initial positions for clouds only (clouds start from center, slightly scaled down)
        gsap.set(leftRef.current, {
          x: '40vw',
          y: '20vh',
          scale: 0.7,
          opacity: 0.5,
          rotation: 0
        });
        
        gsap.set(rightRef.current, {
          x: '-40vw',
          y: '20vh', 
          scale: 0.7,
          opacity: 0.5,
          rotation: 0
        });

        // Animate clouds to their final positions
        const tl = gsap.timeline({ delay: 0.5 });
        
        // Left cloud animation
        tl.to(leftRef.current, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          rotation: -1,
          duration: 2.5,
          ease: "power3.out"
        }, 0)
        // Right cloud animation  
        .to(rightRef.current, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          rotation: 1,
          duration: 2.5,
          ease: "power3.out"
        }, 0.2);
        
        // Add subtle floating animation after initial animation (only for clouds)
        // Use different properties to avoid conflicts with scroll parallax
        tl.to(leftRef.current, {
          scaleX: 1.02,
          scaleY: 0.98,
          duration: 4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        }, 3)
        .to(rightRef.current, {
          scaleX: 0.98,
          scaleY: 1.02,
          duration: 3.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        }, 3.2);
      };

      // Enhanced scroll parallax using GSAP ScrollTrigger for coordination
      const setupScrollParallax = () => {
         // Background parallax - slowest layer
         gsap.to(bgRef.current, {
           yPercent: -10,
           ease: "none",
           scrollTrigger: {
             trigger: bgRef.current,
             start: "top bottom",
             end: "bottom top",
             scrub: true,
             invalidateOnRefresh: true
           }
         });

         // Left cloud parallax - use transform properties that don't conflict
         gsap.to(leftRef.current, {
           yPercent: -20,
           xPercent: -3,
           rotationZ: -2,
           ease: "none",
           scrollTrigger: {
             trigger: leftRef.current,
             start: "top bottom",
             end: "bottom top",
             scrub: 1.5,
             invalidateOnRefresh: true
           }
         });

         // Right cloud parallax - use transform properties that don't conflict
         gsap.to(rightRef.current, {
           yPercent: -25,
           xPercent: 3,
           rotationZ: 2,
           ease: "none",
           scrollTrigger: {
             trigger: rightRef.current,
             start: "top bottom", 
             end: "bottom top",
             scrub: 1.2,
             invalidateOnRefresh: true
           }
         });

         // Climber - no scroll effect, stays in natural bottom position
         // Removed scroll parallax to ensure proper positioning
      };
      
      // Initialize animations
      initCloudAnimations();
      
      // Setup scroll parallax
      setupScrollParallax();
    } else {
      // Fallback for reduced motion - simple scroll handling
      const handleScroll = () => {
        const scrollY = window.scrollY;
        if (bgRef.current) {
          bgRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
        }
        if (leftRef.current) {
          leftRef.current.style.transform = `translateY(${scrollY * 0.25}px)`;
        }
        if (rightRef.current) {
          rightRef.current.style.transform = `translateY(${scrollY * 0.25}px)`;
        }
        // Climber removed from scroll effects to maintain proper bottom positioning
      };

      const onScroll = () => {
        requestAnimationFrame(handleScroll);
      };
      window.addEventListener('scroll', onScroll);
      
      scrollCleanup = () => {
        window.removeEventListener('scroll', onScroll);
      };
    }

    // Cleanup function for GSAP and scroll listeners
    return () => {
      if (scrollCleanup) {
        scrollCleanup();
      }
      ScrollTrigger.getAll().forEach(st => st.kill());
      gsap.killTweensOf([bgRef.current, leftRef.current, rightRef.current]);
      // Climber excluded from GSAP animations to maintain natural positioning
    };
  }, []);

  return (
    <section className={styles.heroWrapper} id="hero">
      {/* Background layer */}
      <div className={styles.layer} ref={bgRef}>
        {/* Using next/image to benefit from built in optimization */}
        <Image
          src="/assets/parallax/mountains-bg.jpg"
          alt="Mountain valley backdrop"
          fill
          priority
          unoptimized    
          className={styles.bgImage}
          style={{ objectFit: 'cover' }}
        />
      </div>
      {/* Middle clouds layers */}
      <div className={`${styles.layer} ${styles.cloudsLeft}`} ref={leftRef}>
        <Image
          src="/assets/parallax/clouds-left.png"
          alt="Clouds on left"
          width={1024}
          height={512}
          unoptimized
          priority
        />
      </div>
      <div className={`${styles.layer} ${styles.cloudsRight}`} ref={rightRef}>
        <Image
          src="/assets/parallax/cloud-right.png"
          alt="Clouds on right"
          width={1024}
          height={512}
          unoptimized
          priority
        />
      </div>
      {/* Foreground climber layer */}
      <div className={`${styles.layer} ${styles.climber}`} ref={climberRef}>
        <Image
          src="/assets/parallax/climber-silhouette.png"
          alt="Climber on rock"
          fill
          priority
          unoptimized   
          style={{
            objectFit: 'cover',
            transform: 'translateZ(0)', // GPU-accelerate to reduce blur
            imageRendering: 'high-quality',
            imageRendering: 'crisp-edges'
          }}
        />
      </div>
      {/* Content overlay. Pass any children to overlay on top of parallax. */}
      <div className={styles.contentWrapper}>
        {children || (
          <>
            <h1>{config.content.impact}</h1>
            <p>{config.content.heroTagline}</p>
            <Link href="/donate" className={styles.heroButton}>
              Join / Donate
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
