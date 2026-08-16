export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  badge: string;
  image?: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    name: 'Aarav Sharma [EDITABLE PLACEHOLDER]',
    role: 'Student • Urban Dance Batch',
    comment: 'Pranjal is an incredible mentor. I joined with zero confidence and heavy hesitation, but within 2 months I was performing routines on stage! His breakdown of musicality is unmatched.',
    rating: 5,
    badge: 'STUDENT'
  },
  {
    id: 't-2',
    name: 'Sneha Patel [EDITABLE PLACEHOLDER]',
    role: 'Parent of Student',
    comment: 'We enrolled our 14-year-old daughter in Pranjal Dance Academy. The environment is extremely positive, safe, and professional. Her posture and stage confidence have skyrocketed!',
    rating: 5,
    badge: 'PARENT'
  },
  {
    id: 't-3',
    name: 'Rohan Verma [EDITABLE PLACEHOLDER]',
    role: 'Workshop Attendee',
    comment: 'Attended Pranjal’s 3-hour urban masterclass. The energy in the room was electric! He pays individual attention to footwork and body isolations. Worth every single rupee.',
    rating: 5,
    badge: 'WORKSHOP'
  }
];
