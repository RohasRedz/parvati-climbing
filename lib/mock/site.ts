import { SiteConfig } from '../../types';

const siteConfig: SiteConfig = {
  title: 'Parvati Climbing Foundation',
  description: 'Empowering marginalized communities through sustainable outdoor sports, education, healthcare, and environmental conservation in the Parvati Valley.',
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
    copyright: `© ${new Date().getFullYear()} Parvati Climbing Foundation. All rights reserved.`
  },
  social: {
    instagram: '@parvaticlimbing',
    instagramUrl: 'https://www.instagram.com/parvaticlimbing/'
  }
};

// Mission and vision content for hero and about sections
export const missionVision = {
  mission: 'To empower marginalized communities in the Parvati Valley through sustainable outdoor sports, advancing education, healthcare, poverty relief, and environmental conservation.',
  vision: 'A thriving Parvati Valley where outdoor sports serve as a catalyst for holistic community development, sustainable tourism, and environmental stewardship.',
  impact: 'Climb. Empower. Transform.',
  heroTagline: 'Using climbing and outdoor sports to advance education, healthcare, poverty relief, and environmental sustainability in marginalized communities.'
};

export default siteConfig;
