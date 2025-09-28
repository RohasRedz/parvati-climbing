import { SiteConfig } from '../../types';

const siteConfig: SiteConfig = {
  title: 'Parvati Climbing NGO',
  description: 'Empowering climbers and building bridges between cultures through shared passion and adventure.',
  siteUrl: 'https://parvaticlimbing.org',
  logo: '/assets/logo.png', // Placeholder - will need actual logo
  navItems: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Partners', path: '/partners' },
    { label: 'Donate', path: '/donate' },
    { label: 'Contact', path: '/contact' }
  ],
  footerInfo: {
    address: 'Parvati Valley, Himachal Pradesh, India',
    email: 'info@parvaticlimbing.org',
    copyright: `© ${new Date().getFullYear()} Parvati Climbing NGO. All rights reserved.`
  },
  social: {
    instagram: '@parvaticlimbing',
    instagramUrl: 'https://www.instagram.com/parvaticlimbing/'
  }
};

// Mission and vision content for hero and about sections
export const missionVision = {
  mission: 'To empower communities through climbing, fostering cultural exchange and environmental stewardship.',
  vision: 'A world where climbing serves as a bridge between cultures, creating sustainable opportunities for growth and connection.',
  impact: 'Climb together. Lift communities.',
  heroTagline: 'Empowering climbers and building bridges between cultures through shared passion and adventure.'
};

export default siteConfig;
