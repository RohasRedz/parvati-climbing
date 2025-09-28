import { Project } from '../../types';

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Parvati Valley Climbing School',
    region: 'Parvati Valley, India',
    excerpt: 'Our flagship project providing climbing education, guide training, and community development in the Himalayas.',
    images: ['/assets/projects/parvati-school.jpg'], // Placeholder
    status: 'active'
  },
  {
    id: 'project-2',
    title: 'Jamaica Youth Climbing Initiative',
    region: 'Kingston, Jamaica',
    excerpt: 'Introducing climbing as a positive outlet for at-risk youth, while developing local climbing infrastructure.',
    images: ['/assets/projects/jamaica-youth.jpg'], // Placeholder
    status: 'active'
  },
  {
    id: 'project-3',
    title: 'Women\'s Climbing Leadership',
    region: 'Multiple Locations',
    excerpt: 'Training program to develop women climbing leaders and instructors in underrepresented communities.',
    images: ['/assets/projects/women-leaders.jpg'], // Placeholder
    status: 'active'
  },
  {
    id: 'project-4',
    title: 'Sustainable Crag Development',
    region: 'Himachal Pradesh, India',
    excerpt: 'Working with local communities to develop climbing areas with environmental sustainability as a priority.',
    images: ['/assets/projects/sustainable-crag.jpg'], // Placeholder
    status: 'upcoming'
  },
  {
    id: 'project-5',
    title: 'Climbing Gear Library',
    region: 'Multiple Locations',
    excerpt: 'Providing access to climbing equipment for those who cannot afford it, reducing barriers to entry.',
    images: ['/assets/projects/gear-library.jpg'], // Placeholder
    status: 'active'
  }
];

export default projects;
