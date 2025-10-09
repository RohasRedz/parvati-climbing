import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import config from '../lib/config/env';

export default function Nav() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [router.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.nav-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="nav-container">
      <div className="nav-left">
        <Link href="/" className="nav-title">
          {config.site.name}
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <div className="nav-right desktop-nav">
        {config.navigation.map((item) => (
          <Link 
            href={item.path} 
            key={item.path}
            className={router.pathname === item.path ? 'active' : ''}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        className="mobile-menu-toggle"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          {config.navigation.map((item) => (
            <Link 
              href={item.path} 
              key={item.path}
              className={`mobile-nav-link ${router.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && <div className="mobile-nav-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>}
    </nav>
  );
}