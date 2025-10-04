// Type definitions for Parvati Climbing NGO website

// Site metadata and configuration
export interface SiteConfig {
  title: string;
  description: string;
  siteUrl: string;
  logo: string;
  navItems: NavItem[];
  footerInfo: FooterInfo;
  social: SocialMedia;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface FooterInfo {
  address: string;
  email: string;
  copyright: string;
}

export interface SocialMedia {
  instagram: string;
  instagramUrl: string;
}

// Team members
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  headshot: string;
  bioShort: string;
}

// Projects
export interface Project {
  id: string;
  title: string;
  region: string;
  excerpt: string;
  images: string[];
  status: 'active' | 'completed' | 'upcoming';
}

// Partners/Collaborators
export interface Partner {
  id: string;
  name: string;
  logo: string;
  url: string;
  blurb: string;
}

// Programs/Impact Areas
export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  objective: 'education' | 'sport' | 'poverty-relief' | 'healthcare' | 'environment';
  category: string;
}