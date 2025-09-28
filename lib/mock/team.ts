import { TeamMember } from '../../types';

const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Anita Sharma',
    role: 'Founder & Executive Director',
    headshot: '/assets/team/anita.jpg', // Placeholder - will need actual images
    bioShort: 'Professional climber with 15+ years of experience in community development across the Himalayas. Founded Parvati Climbing in 2018.'
  },
  {
    id: 'team-2',
    name: 'Raj Patel',
    role: 'Head of Programs',
    headshot: '/assets/team/raj.jpg', // Placeholder
    bioShort: 'Former national climbing champion with expertise in training and youth development. Leads our educational initiatives.'
  },
  {
    id: 'team-3',
    name: 'Sarah Johnson',
    role: 'International Partnerships',
    headshot: '/assets/team/sarah.jpg', // Placeholder
    bioShort: 'Coordinates our global partnerships and fundraising efforts. Background in nonprofit management and outdoor education.'
  },
  {
    id: 'team-4',
    name: 'Miguel Torres',
    role: 'Lead Instructor',
    headshot: '/assets/team/miguel.jpg', // Placeholder
    bioShort: 'AMGA-certified climbing instructor specializing in adaptive climbing techniques and inclusive outdoor education.'
  }
];

export default teamMembers;
