export interface FAQ {
  question: string;
  answer: string;
  category: 'CLASSES' | 'BEGINNERS' | 'BOOKING' | 'LOCATION';
}

export const FAQS_DATA: FAQ[] = [
  {
    question: 'I have never danced before. Can I join Pranjal Dance Academy?',
    answer: 'Absolutely! We have dedicated Absolute Beginner Foundation batches where steps are broken down count-by-count in a very supportive, non-judgmental environment.',
    category: 'BEGINNERS'
  },
  {
    question: 'How do I register for a FREE trial class?',
    answer: 'Simply click any "JOIN CLASSES" or "ENQUIRE NOW" button on the website, fill out your basic details in our form, or send us a direct message on WhatsApp.',
    category: 'BOOKING'
  },
  {
    question: 'What dance styles are taught at the academy?',
    answer: 'We specialize in Urban Dance, Hip-Hop, Commercial Bollywood, Contemporary Fusion, and Advanced Choreography Mentorship.',
    category: 'CLASSES'
  },
  {
    question: 'What clothes and shoes should I wear to class?',
    answer: 'Wear comfortable loose clothing (track pants, oversized t-shirts) and clean, flat-soled sneakers or sports shoes for grip and ankle support.',
    category: 'BEGINNERS'
  },
  {
    question: 'Where is the studio located?',
    answer: 'Our main studio details can be configured directly in siteConfig.ts. Contact us on WhatsApp for exact batch timings and campus location pin.',
    category: 'LOCATION'
  }
];
