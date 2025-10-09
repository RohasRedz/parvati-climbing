/**
 * Environment Configuration for Parvati Climbing NGO
 * This file manages all environment variables and provides fallbacks
 */

// Helper function to parse comma-separated Instagram posts
const parseInstagramPosts = (postsString) => {
  if (!postsString) return [];
  
  return postsString.split(',').map((url, index) => {
    const trimmedUrl = url.trim();
    // Extract post ID from URL
    const postMatch = trimmedUrl.match(/\/p\/([a-zA-Z0-9_-]+)/);
    const reelMatch = trimmedUrl.match(/\/reel\/([a-zA-Z0-9_-]+)/);
    
    let id = `post_${index}`;
    if (postMatch && postMatch[1]) {
      id = postMatch[1];
    } else if (reelMatch && reelMatch[1]) {
      id = reelMatch[1];
    }
    
    return {
      id,
      url: trimmedUrl,
      timestamp: new Date(Date.now() - (index * 24 * 60 * 60 * 1000)).toISOString() // Stagger by days
    };
  });
};

// Environment configuration with fallbacks
export const config = {
  // Site Configuration
  site: {
    name: process.env.NEXT_PUBLIC_SITE_NAME || "Parvati Climbing Foundation",
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "Empowering communities through climbing in the Himalayas",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://parvaticlimbing.org"
  },

  // Social Media
  social: {
    instagram: {
      handle: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || "@parvaticlimbing",
      url: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/parvaticlimbing/"
    }
  },

  // Instagram Posts (parsed from environment variable)
  instagram: {
    posts: parseInstagramPosts(process.env.NEXT_PUBLIC_INSTAGRAM_POSTS) || [
      // Fallback posts if environment variable is not set
      {
        id: 'DO9BuaBkt1u',
        url: 'https://www.instagram.com/reel/DO9BuaBkt1u/',
        timestamp: '2024-12-20T10:30:00Z'
      },
      {
        id: 'DK9dhBUy4L0',
        url: 'https://www.instagram.com/reel/DK9dhBUy4L0/',
        timestamp: '2024-12-18T14:45:00Z'
      },
      {
        id: 'DKC_4RATjWE',
        url: 'https://www.instagram.com/reel/DKC_4RATjWE/',
        timestamp: '2024-12-12T16:20:00Z'
      },
      {
        id: 'DJb2hXfSJB0',
        url: 'https://www.instagram.com/reel/DJb2hXfSJB0/',
        timestamp: '2024-12-10T18:00:00Z'
      },
      {
        id: 'DJW8L_OTKrZ',
        url: 'https://www.instagram.com/reel/DJW8L_OTKrZ/',
        timestamp: '2024-12-08T17:30:00Z'
      },
      {
        id: 'DJWQLR_yhZ-',
        url: 'https://www.instagram.com/reel/DJWQLR_yhZ-/',
        timestamp: '2024-12-06T17:30:00Z'
      },
      {
        id: 'DII55wUy_Uj',
        url: 'https://www.instagram.com/p/DII55wUy_Uj/',
        timestamp: '2024-12-04T16:20:00Z'
      }
    ]
  },

  // Contact Information
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@parvaticlimbing.org",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91-XXXXXXXXXX",
    address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || "Parvati Valley, Himachal Pradesh, India"
  },

  // Donation Links
  donations: {
    gofundme: process.env.NEXT_PUBLIC_GOFUNDME_URL || "https://gofundme.com/parvati-climbing",
    paypal: process.env.NEXT_PUBLIC_PAYPAL_URL || ""
  },

  // Analytics & Tracking
  analytics: {
    googleAnalytics: process.env.NEXT_PUBLIC_GA_TRACKING_ID || "",
    facebookPixel: process.env.NEXT_PUBLIC_FB_PIXEL_ID || ""
  },

  // API Configuration (for future CMS integration)
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "",
    cmsApiKey: process.env.NEXT_PUBLIC_CMS_API_KEY || ""
  },

  // Feature Flags
  features: {
    animations: process.env.NEXT_PUBLIC_ENABLE_ANIMATIONS !== "false",
    parallax: process.env.NEXT_PUBLIC_ENABLE_PARALLAX !== "false",
    analytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true"
  },

  // Mission and Vision Content
  content: {
    mission: 'To empower marginalized communities in the Parvati Valley through sustainable outdoor sports, advancing education, healthcare, poverty relief, and environmental conservation.',
    vision: 'A thriving Parvati Valley where outdoor sports serve as a catalyst for holistic community development, sustainable tourism, and environmental stewardship.',
    impact: 'Climb. Empower. Transform.',
    heroTagline: 'Using climbing and outdoor sports to advance education, healthcare, poverty relief, and environmental sustainability in marginalized communities.'
  },

  // Navigation Items
  navigation: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Partners', path: '/partners' },
    { label: 'Donate', path: '/donate' },
    { label: 'Contact', path: '/contact' }
  ],

  // Programs Data
  programs: [
    {
      id: 'education-workshops',
      title: 'Education & Vocational Training',
      description: 'Supporting local schools and vocational training centers while educating communities about sustainable development and environmental preservation.',
      image: '/assets/story1.png',
      objective: 'education',
      category: 'Education'
    },
    {
      id: 'outdoor-sports-promotion',
      title: 'Outdoor Sports & Tourism',
      description: 'Promoting outdoor sports and active tourism while teaching environmental preservation and sustainable tourism practices to locals and visitors.',
      image: '/assets/story2.png',
      objective: 'sport',
      category: 'Sports'
    },
    {
      id: 'poverty-relief-livelihood',
      title: 'Poverty Relief & Livelihood',
      description: 'Providing financial assistance, vocational training, and livelihood support through sustainable tourism development based on outdoor sports.',
      image: '/assets/story3.png',
      objective: 'poverty-relief',
      category: 'Economic Development'
    },
    {
      id: 'healthcare-support',
      title: 'Healthcare & Wellness',
      description: 'Supporting local clinics and healthcare centers with funding, resources, health awareness campaigns, and medical supply distribution.',
      image: '/assets/hero.png',
      objective: 'healthcare',
      category: 'Healthcare'
    },
    {
      id: 'environmental-sustainability',
      title: 'Environmental Conservation',
      description: 'Leading conservation projects, reforestation efforts, clean-up drives, tree planting events, and wildlife protection initiatives.',
      image: '/assets/story1.png',
      objective: 'environment',
      category: 'Environment'
    }
  ],

  // Team Members Data
  team: [
    {
      id: 'team-1',
      name: 'Anita Sharma',
      role: 'Founder & Executive Director',
      headshot: '/assets/team/anita.jpg',
      bioShort: 'Professional climber with 15+ years of experience in community development across the Himalayas. Founded Parvati Climbing in 2018.'
    },
    {
      id: 'team-2',
      name: 'Raj Patel',
      role: 'Head of Programs',
      headshot: '/assets/team/raj.jpg',
      bioShort: 'Former national climbing champion with expertise in training and youth development. Leads our educational initiatives.'
    },
    {
      id: 'team-3',
      name: 'Sarah Johnson',
      role: 'International Partnerships',
      headshot: '/assets/team/sarah.jpg',
      bioShort: 'Coordinates our global partnerships and fundraising efforts. Background in nonprofit management and outdoor education.'
    },
    {
      id: 'team-4',
      name: 'Miguel Torres',
      role: 'Lead Instructor',
      headshot: '/assets/team/miguel.jpg',
      bioShort: 'AMGA-certified climbing instructor specializing in adaptive climbing techniques and inclusive outdoor education.'
    }
  ],

  // Partners Data
  partners: [
    {
      id: 'partner-1',
      name: 'ClimbAid International',
      logo: '/assets/partners/climbaid.png',
      url: 'https://climbaid.org',
      blurb: 'Global nonprofit focused on humanitarian climbing initiatives and development.'
    },
    {
      id: 'partner-2',
      name: 'Mountain Equipment Co-op',
      logo: '/assets/partners/mec.png',
      url: 'https://mec.ca',
      blurb: 'Provides gear support and funding for our training programs and gear libraries.'
    },
    {
      id: 'partner-3',
      name: 'Himalayan Climbing Association',
      logo: '/assets/partners/hca.png',
      url: 'https://himalayanclimbing.org',
      blurb: 'Regional partner supporting our work in the Parvati Valley and throughout the Himalayas.'
    },
    {
      id: 'partner-4',
      name: 'Jamaica Outdoor Sports Foundation',
      logo: '/assets/partners/josf.png',
      url: 'https://josf.org',
      blurb: 'Local partner organization for our Jamaica Youth Climbing Initiative.'
    },
    {
      id: 'partner-5',
      name: 'Access Fund',
      logo: '/assets/partners/accessfund.png',
      url: 'https://accessfund.org',
      blurb: 'Collaborator on our sustainable crag development and climbing stewardship projects.'
    },
    {
      id: 'partner-6',
      name: 'Climbing for Change',
      logo: '/assets/partners/c4c.png',
      url: 'https://climbingforchange.org',
      blurb: 'Partner in diversity and inclusion initiatives within the climbing community.'
    }
  ],

  // Projects Data
  projects: [
    {
      id: 'project-1',
      title: 'Parvati Valley Climbing School',
      region: 'Parvati Valley, India',
      excerpt: 'Our flagship project providing climbing education, guide training, and community development in the Himalayas.',
      images: ['/assets/projects/parvati-school.jpg'],
      status: 'active'
    },
    {
      id: 'project-2',
      title: 'Jamaica Youth Climbing Initiative',
      region: 'Kingston, Jamaica',
      excerpt: 'Introducing climbing as a positive outlet for at-risk youth, while developing local climbing infrastructure.',
      images: ['/assets/projects/jamaica-youth.jpg'],
      status: 'active'
    },
    {
      id: 'project-3',
      title: 'Women\'s Climbing Leadership',
      region: 'Multiple Locations',
      excerpt: 'Training program to develop women climbing leaders and instructors in underrepresented communities.',
      images: ['/assets/projects/women-leaders.jpg'],
      status: 'active'
    },
    {
      id: 'project-4',
      title: 'Sustainable Crag Development',
      region: 'Himachal Pradesh, India',
      excerpt: 'Working with local communities to develop climbing areas with environmental sustainability as a priority.',
      images: ['/assets/projects/sustainable-crag.jpg'],
      status: 'upcoming'
    },
    {
      id: 'project-5',
      title: 'Climbing Gear Library',
      region: 'Multiple Locations',
      excerpt: 'Providing access to climbing equipment for those who cannot afford it, reducing barriers to entry.',
      images: ['/assets/projects/gear-library.jpg'],
      status: 'active'
    }
  ]
};

export default config;
