export interface SiteConfig {
  academyName: string;
  ownerName: string;
  title: string;
  subtitle: string;
  eyebrow: string;
  heroHeading: string;
  heroSubheading: string;
  instagram: {
    handle: string;
    url: string;
    followers: string;
    posts: string;
  };
  whatsapp: {
    number: string;
    displayNumber: string;
    defaultMessage: string;
  };
  email: string;
  location: {
    city: string;
    address: string;
    googleMapsUrl: string;
  };
  stats: Array<{
    value: number;
    suffix: string;
    label: string;
    note: string;
  }>;
  credibility: {
    performedAt: string[];
    featuredIn: string[];
    certifications: string[];
  };
}

export const SITE_CONFIG: SiteConfig = {
  academyName: "PRANJAL DANCE ACADEMY",
  ownerName: "Pranjal",
  title: "PRANJAL DANCE ACADEMY",
  subtitle: "Professional Dancer • Choreographer • Mentor",
  eyebrow: "DANCE • EXPRESS • INSPIRE",
  heroHeading: "WE DON'T JUST TEACH DANCE. WE BUILD CONFIDENCE.",
  heroSubheading: "Join Pranjal Dance Academy and become part of an energetic community where passion meets performance. Master Urban, Hip-Hop, Bollywood, and Choreography routines.",
  
  instagram: {
    handle: "@pranjal_menaria08",
    url: "https://www.instagram.com/pranjal_menaria08/",
    followers: "2K+",
    posts: "90+"
  },
  
  whatsapp: {
    number: "919876543210", // EDITABLE CENTRAL NUMBER
    displayNumber: "+91 98765 43210",
    defaultMessage: "Hi Pranjal! I would like to enquire about dance classes at Pranjal Dance Academy."
  },
  
  email: "contact@pranjaldance.com", // EDITABLE PLACEHOLDER
  
  location: {
    city: "[ADD VERIFIED CITY]", // EDITABLE PLACEHOLDER
    address: "Pranjal Dance Studio, Main Studio Hub [ADD VERIFIED ADDRESS]", // EDITABLE PLACEHOLDER
    googleMapsUrl: "https://maps.google.com"
  },
  
  stats: [
    { value: 500, suffix: "+", label: "STUDENTS TRAINED", note: "Beginner to advanced level dancers [VERIFIED PLACEHOLDER]" },
    { value: 100, suffix: "+", label: "PERFORMANCES", note: "Stage, events & digital productions [VERIFIED PLACEHOLDER]" },
    { value: 25, suffix: "+", label: "WORKSHOPS", note: "Intensive choreo masterclasses [VERIFIED PLACEHOLDER]" },
    { value: 5, suffix: "+", label: "YEARS EXPERIENCE", note: "Professional mentoring & choreography [VERIFIED PLACEHOLDER]" }
  ],
  
  credibility: {
    performedAt: [
      "National Dance Gala [VERIFIED PLACEHOLDER]",
      "Urban Street Culture Festival [VERIFIED PLACEHOLDER]",
      "Regional Cultural Showcase [VERIFIED PLACEHOLDER]"
    ],
    featuredIn: [
      "Dance India Portal [VERIFIED PLACEHOLDER]",
      "Choreographers Monthly [VERIFIED PLACEHOLDER]"
    ],
    certifications: [
      "Certified Hip-Hop Master Instructor",
      "Professional Urban Choreographer & Performer"
    ]
  }
};

export const createWhatsAppUrl = (data?: { name?: string; age?: string; style?: string; experience?: string; batch?: string; city?: string; message?: string }) => {
  if (!data || (!data.name && !data.style)) {
    return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(SITE_CONFIG.whatsapp.defaultMessage)}`;
  }
  
  const text = `Hi Pranjal! I am interested in joining Pranjal Dance Academy.

*Details:*
• *Name:* ${data.name || 'Not provided'}
• *Age:* ${data.age || 'N/A'}
• *Preferred Style:* ${data.style || 'General'}
• *Experience:* ${data.experience || 'Beginner'}
• *Preferred Batch:* ${data.batch || 'Flexible'}
• *City:* ${data.city || 'Local'}
• *Message:* ${data.message || 'I would like to request a trial class.'}`;

  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(text)}`;
};
