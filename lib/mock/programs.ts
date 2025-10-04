import { Program } from '../../types';

export const programs: Program[] = [
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
];

export default programs;
