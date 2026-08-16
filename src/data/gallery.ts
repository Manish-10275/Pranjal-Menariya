export interface GalleryItem {
  id: string;
  title: string;
  category: 'PERFORMANCES' | 'WORKSHOPS' | 'EVENTS' | 'TRAINING' | 'LIFESTYLE';
  image: string;
  caption: string;
  date: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
}

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Urban Hip Hop Studio Routine',
    category: 'TRAINING',
    image: '/images/about/pranjal_portrait.jpg',
    caption: 'High-energy studio rehearsal breakdown with the advance batch.',
    date: '2026',
    aspectRatio: 'portrait'
  },
  {
    id: 'g-2',
    title: 'Stage Showcase Performance',
    category: 'PERFORMANCES',
    image: '/images/hero/pranjal_action.jpg',
    caption: 'Live performance under cinematic neon lighting at annual dance showcase.',
    date: '2025',
    aspectRatio: 'landscape'
  },
  {
    id: 'g-3',
    title: 'City Masterclass Intensive',
    category: 'WORKSHOPS',
    image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=800&q=80',
    caption: '30+ dancers coming together for a 3-hour urban fusion masterclass.',
    date: '2026',
    aspectRatio: 'square'
  },
  {
    id: 'g-4',
    title: 'Group Choreography Sync',
    category: 'PERFORMANCES',
    image: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=800&q=80',
    caption: 'Precision group formations and synchronized execution.',
    date: '2025',
    aspectRatio: 'portrait'
  },
  {
    id: 'g-5',
    title: 'Dance Community Event',
    category: 'EVENTS',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    caption: 'Connecting with local dancers, mentors, and street choreographers.',
    date: '2025',
    aspectRatio: 'landscape'
  },
  {
    id: 'g-6',
    title: 'Behind The Scenes & Freestyle',
    category: 'LIFESTYLE',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    caption: 'Casual freestyle session and content shooting in the studio.',
    date: '2026',
    aspectRatio: 'square'
  }
];
