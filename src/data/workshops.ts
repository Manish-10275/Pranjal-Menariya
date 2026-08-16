export interface Workshop {
  id: string;
  title: string;
  style: string;
  instructor: string;
  date: string;
  time: string;
  location: string;
  duration: string;
  seatsLeft: number;
  totalSeats: number;
  price: string;
  image: string;
  description: string;
  isUpcoming: boolean;
}

export const WORKSHOPS_DATA: Workshop[] = [
  {
    id: 'workshop-urban-summer',
    title: 'URBAN HIP-HOP MASTERCLASS 2026',
    style: 'Urban Dance & Execution',
    instructor: 'Pranjal',
    date: '28TH AUGUST 2026 [EDITABLE PLACEHOLDER]',
    time: '4:00 PM - 7:00 PM',
    location: 'Main Studio, Studio A [VERIFIED LOCATION PLACEHOLDER]',
    duration: '3 HOURS INTENSIVE',
    seatsLeft: 8,
    totalSeats: 30,
    price: '₹799 / Entry [EDITABLE]',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    description: 'An intense 3-hour masterclass covering intricate musicality breakdown, urban choreography, and a professional video shoot at the end of the session.',
    isUpcoming: true
  },
  {
    id: 'workshop-bolly-fusion',
    title: 'BOLLYWOOD CHOREO BOOTCAMP',
    style: 'Commercial Fusion',
    instructor: 'Pranjal',
    date: '15TH SEPTEMBER 2026 [EDITABLE PLACEHOLDER]',
    time: '5:00 PM - 7:30 PM',
    location: 'Creative Performance Hall [VERIFIED LOCATION PLACEHOLDER]',
    duration: '2.5 HOURS',
    seatsLeft: 12,
    totalSeats: 35,
    price: '₹699 / Entry [EDITABLE]',
    image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=800&q=80',
    description: 'Learn a viral high-energy commercial fusion routine with emphasis on facial expressions, stage confidence, and group sync dynamics.',
    isUpcoming: true
  }
];
