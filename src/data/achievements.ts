export interface Achievement {
  year: string;
  title: string;
  category: string;
  description: string;
  location: string;
  highlight: string;
}

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    year: '2026',
    title: 'Regional Choreography Director [VERIFIED PLACEHOLDER]',
    category: 'CHOREOGRAPHY',
    description: 'Directed choreography for major cultural showcases and mentored top competitive dance crews.',
    location: 'Regional Dance League',
    highlight: 'Directed 50+ stage dancers'
  },
  {
    year: '2025',
    title: 'Multi-City Masterclass Tour [VERIFIED PLACEHOLDER]',
    category: 'WORKSHOPS',
    description: 'Conducted sold-out urban hip-hop workshops inspiring over 300+ emerging dancers across cities.',
    location: '5+ Major Cities',
    highlight: 'Over 300+ workshop attendees'
  },
  {
    year: '2024',
    title: 'Best Urban Performance Award [VERIFIED PLACEHOLDER]',
    category: 'COMPETITION',
    description: 'Awarded top honors for original hip-hop concept choreography at the state dance convention.',
    location: 'State Dance Convention',
    highlight: '1st Place Urban Choreography'
  },
  {
    year: '2023',
    title: 'Pranjal Dance Academy Official Launch',
    category: 'ACADEMY',
    description: 'Founded Pranjal Dance Academy to empower students with confidence, rhythm, and performance mindset.',
    location: 'Main Academy Studio',
    highlight: 'Trained 100+ students in Year 1'
  }
];
