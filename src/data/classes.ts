export interface DanceClass {
  id: string;
  name: string;
  tagline: string;
  category: 'HIP HOP' | 'URBAN' | 'BOLLYWOOD' | 'CONTEMPORARY' | 'CHOREOGRAPHY' | 'BEGINNER';
  level: string;
  duration: string;
  schedule: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  image: string;
  badge?: string;
}

export const CLASSES_DATA: DanceClass[] = [
  {
    id: 'hip-hop',
    name: 'HIP HOP FOUNDATION & GROOVE',
    tagline: 'Master bounce, isolation, rhythm and street musicality.',
    category: 'HIP HOP',
    level: 'BEGINNER → ADVANCED',
    duration: '60 MIN / CLASS',
    schedule: 'MON / WED / FRI • EVENING BATCH',
    description: 'Build core street foundation, body isolations, rhythm control, and authentic hip hop grooves.',
    fullDescription: 'Our Hip Hop program focuses on fundamental grooves, old school and new school bounce, body isolations, footwork, and musicality. Designed for both beginners wanting solid basics and intermediate dancers looking to improve execution.',
    highlights: [
      'Body isolation & rhythm drills',
      'Old school & new school bounce',
      'Freestyle confidence & cypher culture',
      'Performance routine choreography'
    ],
    image: '/images/about/pranjal_portrait.jpg',
    badge: 'MOST POPULAR'
  },
  {
    id: 'urban-choreography',
    name: 'URBAN DANCE & EXECUTION',
    tagline: 'Clean lines, intricate textures, and sharp performance execution.',
    category: 'URBAN',
    level: 'INTERMEDIATE → ADVANCED',
    duration: '75 MIN / CLASS',
    schedule: 'TUE / THU / SAT • NIGHT BATCH',
    description: 'Learn contemporary urban choreography blending popping, textures, dynamics, and musical speed changes.',
    fullDescription: 'Urban dance is about storytelling through movement. In this class, Pranjal breaks down intricate routine speed shifts, micro-textures, spatial awareness, and stage energy so you stand out in any crew or video.',
    highlights: [
      'Intricate choreo speed & texture training',
      'Stage presence & camera awareness',
      'Musicality breakdown & beat counting',
      'Video shoot opportunities for top performers'
    ],
    image: '/images/hero/pranjal_action.jpg',
    badge: 'FEATURED'
  },
  {
    id: 'commercial-bollywood',
    name: 'COMMERCIAL BOLLYWOOD FUSION',
    tagline: 'High-energy commercial beats, expressions, and stage performance.',
    category: 'BOLLYWOOD',
    level: 'ALL LEVELS',
    duration: '60 MIN / CLASS',
    schedule: 'WEEKEND SPECIAL • SAT / SUN',
    description: 'Combine Bollywood expressions with modern hip-hop power for weddings, events, and viral routines.',
    fullDescription: 'Experience the electric thrill of Bollywood combined with sharp modern choreography. Perfect for fitness, fun, stage confidence, or upcoming wedding & corporate performances.',
    highlights: [
      'High-burn energy & cardio workout',
      'Facial expressions & theatrical performance',
      'Trending choreography routines',
      'Open to absolute beginners & fitness enthusiasts'
    ],
    image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'contemporary-fusion',
    name: 'CONTEMPORARY STREET FLOW',
    tagline: 'Fluidity, floorwork, emotion, and dynamic momentum.',
    category: 'CONTEMPORARY',
    level: 'INTERMEDIATE',
    duration: '60 MIN / CLASS',
    schedule: 'TUE / THU • EVENING BATCH',
    description: 'Explore floor transitions, balance control, emotional storytelling, and expressive modern movement.',
    fullDescription: 'Blending soft flow with sudden street accents. Learn how to fall, glide, roll, and project raw emotion into movement without sacrificing power.',
    highlights: [
      'Floorwork safety & smooth transitions',
      'Weight transfer & momentum management',
      'Emotional projection & storytelling',
      'Improvisation & musical interpretation'
    ],
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'choreography-masterclass',
    name: 'ADVANCED CHOREOGRAPHY & MENTORSHIP',
    tagline: 'For aspiring professional choreographers and performers.',
    category: 'CHOREOGRAPHY',
    level: 'ADVANCED / DANCERS ONLY',
    duration: '90 MIN / CLASS',
    schedule: 'SUNDAY INTENSIVE',
    description: 'Deep dive into song structure, creation logic, teaching methodology, and professional performance training.',
    fullDescription: 'A direct mentorship class with Pranjal. Learn how to choreograph for groups, direct video shoots, edit dance concepts, and build a lasting personal career in the dance industry.',
    highlights: [
      'Song choice analysis & formation mapping',
      'Direct feedback & video performance review',
      'Mentorship on teaching & choreography business',
      'Priority access to backup dancer opportunities'
    ],
    image: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=800&q=80',
    badge: 'MENTORSHIP'
  },
  {
    id: 'beginner-bootcamp',
    name: 'ABSOLUTE BEGINNER FOUNDATION',
    tagline: 'Zero experience required. Overcome hesitation and build confidence.',
    category: 'BEGINNER',
    level: 'ABSOLUTE BEGINNER',
    duration: '60 MIN / CLASS',
    schedule: 'MON / WED • EVENING BATCH',
    description: 'Step-by-step guidance for anyone who feels they have two left feet. Welcoming and patient environment.',
    fullDescription: 'Never danced before? This is your safe space. Pranjal breaks down every step into simple, digestible counts so you leave every single session feeling confident and energised.',
    highlights: [
      'Zero judgment, supportive environment',
      'Basic rhythm counting (1-2-3-4-5-6-7-8)',
      'Simple body coordination exercises',
      'Gradual progression into fun short routines'
    ],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
  }
];
