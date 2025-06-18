
import type { Icon } from 'lucide-react';
import { Home, Briefcase, Sofa, Wrench, Users, Palette, Landmark, Sparkles, ShieldCheck, Lightbulb, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
  icon?: Icon;
};

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
];

export type ImageObject = {
  src: string;
  alt: string;
  dataAiHint?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: ImageObject;
  category: string;
  year: number;
  client?: string;
  location?: string;
  images?: ImageObject[];
};

export const projects: Project[] = [
  {
    id: 'modern-loft-conversion',
    title: 'Modern Loft Conversion',
    description: 'Transforming an industrial loft into a chic, contemporary living space.',
    longDescription: 'This project involved a full-scale renovation of an old industrial loft. We focused on open-plan living, maximizing natural light, and incorporating custom-built furniture. The design features a neutral palette with bold accents, polished concrete floors, and exposed brickwork, creating a sophisticated urban retreat.',
    imageUrl: {
      src: '/py1.jpg',
      alt: 'Modern loft conversion by Py Interiors',
      dataAiHint: 'modern loft',
    },
    category: 'Residential',
    year: 2023,
    client: 'Private Residence',
    location: 'Downtown Metropolis',
    images: [
      { src: '/py2.jpg', alt: 'View of loft kitchen area', dataAiHint: 'loft kitchen' },
      { src: '/py3.jpg', alt: 'Loft bedroom with minimalist design', dataAiHint: 'minimalist bedroom' },
      { src: '/py4.jpg', alt: 'Detail of exposed brickwork in loft', dataAiHint: 'exposed brick' },
      { src: '/py5.jpg', alt: 'View of loft living space', dataAiHint: 'loft living' },
    ]
  },
  {
    id: 'luxury-boutique-hotel-lobby',
    title: 'Luxury Boutique Hotel Lobby',
    description: 'Elegant and inviting lobby design for a high-end boutique hotel.',
    longDescription: 'The goal for this boutique hotel lobby was to create a memorable first impression. We blended classic elegance with modern luxury, using plush velvet seating, marble accents, and statement lighting. A bespoke reception desk and curated art pieces complete the opulent yet welcoming atmosphere.',
    imageUrl: {
      src: '/py2.jpg',
      alt: 'Luxury boutique hotel lobby designed by Py Interiors',
      dataAiHint: 'hotel lobby',
    },
    category: 'Commercial',
    year: 2022,
    client: 'The Velvet Orchid Hotel',
    location: 'City Center',
     images: [
      { src: 'https://placehold.co/600x400.png', alt: 'Hotel reception desk detail', dataAiHint: 'reception desk' },
      { src: 'https://placehold.co/600x400.png', alt: 'Statement lighting in hotel lobby', dataAiHint: 'statement lighting' },
    ]
  },
  {
    id: 'serene-minimalist-apartment',
    title: 'Serene Minimalist Apartment',
    description: 'A calming and clutter-free apartment embracing minimalist principles.',
    longDescription: 'This apartment design focuses on simplicity, functionality, and tranquility. We used a light color palette, natural materials like wood and linen, and clever storage solutions to maintain a clutter-free environment. The result is a peaceful haven that promotes relaxation and mindfulness.',
    imageUrl: {
      src: '/py3.jpg',
      alt: 'Serene minimalist apartment by Py Interiors',
      dataAiHint: 'minimalist apartment',
    },
    category: 'Residential',
    year: 2023,
    client: 'Ms. Anya Sharma',
    location: 'Riverside District',
    images: [
      { src: 'https://placehold.co/600x400.png', alt: 'Minimalist kitchen with light wood cabinets', dataAiHint: 'minimalist kitchen' },
      { src: 'https://placehold.co/600x400.png', alt: 'Bedroom with natural light and simple decor', dataAiHint: 'simple bedroom' },
      { src: 'https://placehold.co/600x400.png', alt: 'Close-up of natural textures in apartment', dataAiHint: 'natural textures' },
      { src: 'https://placehold.co/600x400.png', alt: 'View of minimalist apartment balcony', dataAiHint: 'apartment balcony' },
    ]
  },
  {
    id: 'vibrant-co-working-space',
    title: 'Vibrant Co-working Space',
    description: 'Dynamic and inspiring design for a modern co-working hub.',
    longDescription: 'This co-working space was designed to foster creativity and collaboration. It features a mix of private offices, open-plan work areas, and comfortable breakout zones. Bold colors, ergonomic furniture, and biophilic design elements contribute to a productive and energizing atmosphere.',
    imageUrl: {
      src: '/py4.jpg',
      alt: 'Vibrant co-working space design by Py Interiors',
      dataAiHint: 'coworking space',
    },
    category: 'Commercial',
    year: 2022,
    client: 'Innovate Hub',
    location: 'Tech Park',
    images: [
      { src: 'https://placehold.co/600x400.png', alt: 'Breakout area in co-working space', dataAiHint: 'office breakout' },
    ]
  },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: Icon;
  startingPrice?: string;
};

export const services: Service[] = [
  {
    id: 'residential-design',
    title: 'Residential Design',
    description: 'Creating personalized and functional living spaces that reflect your style.',
    icon: Home,
    startingPrice: '$5,000',
  },
  {
    id: 'commercial-design',
    title: 'Commercial Design',
    description: 'Designing inspiring and productive environments for businesses of all sizes.',
    icon: Briefcase,
    startingPrice: '$10,000',
  },
  {
    id: 'space-planning',
    title: 'Space Planning & Optimization',
    description: 'Maximizing the potential of your space with intelligent layout solutions.',
    icon: Users,
    startingPrice: '$2,000',
  },
  {
    id: 'custom-furniture-design',
    title: 'Custom Furniture Design',
    description: 'Bespoke furniture pieces designed to perfectly fit your space and needs.',
    icon: Sofa,
    startingPrice: '$1,500 per piece',
  },
  {
    id: 'renovation-projects',
    title: 'Renovation & Remodeling',
    description: 'Transforming existing spaces with thoughtful renovations and modern updates.',
    icon: Wrench,
    startingPrice: '$15,000',
  },
  {
    id: 'color-consultation',
    title: 'Color Consultation',
    description: 'Expert advice on color palettes to create the perfect mood and harmony.',
    icon: Palette,
    startingPrice: '$500',
  }
];

export const serviceOptionsForClient: Array<{ id: string; title: string; }> = services.map(
  (service) => ({
    id: service.id,
    title: service.title,
  })
);

// This ensures Zod's `enum` gets a non-empty array typed as [string, ...string[]]
const serviceIdsForZod = services.map(s => s.id);
export const zodServiceEnumValues: [string, ...string[]] = serviceIdsForZod.length > 0
  ? [serviceIdsForZod[0], ...serviceIdsForZod.slice(1)]
  : (() => { throw new Error("services array cannot be empty for Zod enum generation"); })();


export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  dataAiHint?: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: 'jane-doe',
    name: 'Jane Doe',
    role: 'Founder & Lead Designer',
    bio: 'With over 15 years of experience, Jane brings a passion for timeless design and a keen eye for detail to every project. She believes great design enhances quality of life.',
    imageUrl: "https://placehold.co/300x300.png",
    dataAiHint: 'professional woman',
  },
  {
    id: 'john-smith',
    name: 'John Smith',
    role: 'Senior Interior Designer',
    bio: 'John specializes in sustainable design and innovative material use. His work is characterized by clean lines and a harmonious balance of form and function.',
    imageUrl: "https://placehold.co/300x300.png",
    dataAiHint: 'professional man',
  },
  {
    id: 'alice-brown',
    name: 'Alice Brown',
    role: 'Project Manager',
    bio: 'Alice ensures every project runs smoothly from concept to completion. Her organizational skills and client-focused approach are invaluable to the team.',
    imageUrl: "https://placehold.co/300x300.png",
    dataAiHint: 'smiling woman',
  },
];

export const keyServicesSummary: Service[] = [
  {
    id: 'residential-key',
    title: 'Residential Spaces',
    description: 'Homes tailored to your lifestyle.',
    icon: Home,
  },
  {
    id: 'commercial-key',
    title: 'Commercial Venues',
    description: 'Designs that elevate your brand.',
    icon: Landmark,
  },
  {
    id: 'bespoke-key',
    title: 'Bespoke Solutions',
    description: 'Unique touches for unique spaces.',
    icon: Sparkles,
  },
];

export const companyInfo = {
  email: 'contact@pyinteriors.com',
  phone: '+91 91593 22233', // Updated from API
  address: 'Krishna Nagar, Puducherry, 605013, India', // Updated from API
  history: "Founded in 2010 by Jane Doe, Py Interiors began with a vision to create spaces that are not only beautiful but also deeply personal and functional. Over the past decade, we've grown into a renowned design studio, recognized for our commitment to quality, innovation, and client satisfaction. Our portfolio spans luxurious residences, dynamic commercial spaces, and everything in between.",
  mission: "Our mission is to transform ordinary spaces into extraordinary experiences. We strive to understand our clients' visions and bring them to life through thoughtful design, meticulous attention to detail, and a passion for creating environments that inspire and delight. We believe that good design has the power to enhance well-being and reflect individuality.",
  values: "Our core values are creativity, integrity, and client-centricity. We believe in pushing design boundaries while maintaining ethical practices and always putting our clients' needs first. Collaboration and open communication are key to our process.",
  approach: "Our design approach is holistic and collaborative. We start by deeply understanding your aspirations and lifestyle. Then, we meticulously plan every detail, from space optimization to material selection, ensuring a cohesive and harmonious result. We manage projects with precision, ensuring they are delivered on time and within budget."
};

export const globalCtaContactInfo = {
  address: "Krishna Nagar, Puducherry, 605013, India", // Updated from API
  phoneNumbers: ["+91 91593 22233"], // Updated from API
  email: "fillers@example.com", // Keeping example email as API one might not be desired for public CTA
  businessHours: [ // Updated from API
    { day: "Monday - Saturday", time: "9:00 AM - 5:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  icons: {
    address: MapPin,
    phone: Phone,
    email: Mail,
    hours: Clock,
  }
};


export type WhyChooseUsItem = {
  id: string;
  title: string;
  description: string;
  icon: Icon;
};

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    id: 'expert-craftsmanship',
    title: 'Expert Craftsmanship',
    description: 'Our team of skilled designers and artisans bring years of experience and a meticulous eye for detail to every project, ensuring the highest quality results.',
    icon: ShieldCheck,
  },
  {
    id: 'innovative-solutions',
    title: 'Innovative Solutions',
    description: 'We blend creativity with practicality, offering innovative design solutions that are both beautiful and functional, tailored to your unique needs.',
    icon: Lightbulb,
  },
  {
    id: 'client-centric-approach',
    title: 'Client-Centric Approach',
    description: 'Your vision is our priority. We collaborate closely with you throughout the process, ensuring your preferences and lifestyle are at the heart of the design.',
    icon: Users,
  },
];


export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  imageUrl?: string;
  dataAiHint?: string;
};

// Updated testimonials from API data
export const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial-api-1',
    quote: "I recently gave order to PY Interior in Pondicherry for an entertainment unit and wash basin unit, and the experience was outstanding. The team is professional, creative, and attentive to detail. Both units are stylish, functional, and perfectly complement my home. The project was completed on time and within budget. I highly recommend PY Interior for their excellent design services and craftsmanship.",
    author: 'karthik michel',
    role: 'Client Review',
    imageUrl: "https://placehold.co/100x100/EBD7D0/4A3B34?text=KM", // Initials placeholder
    dataAiHint: 'person icon',
  },
  {
    id: 'testimonial-api-2',
    quote: "I had given them my new house kitchen interior works and they done a fabulous job and completed the project before the advised schedule at a more competitive cost. Mr. Arivan was great to work with! and explained clearly about the project and answered our queries patiently fom start to completion of the project! I would give them 5 stars and recommend to anyone for whole house interior works!",
    author: 'Bala Murugan',
    role: 'Client Review',
    imageUrl: "https://placehold.co/100x100/D0E0EB/344A4A?text=BM", // Initials placeholder
    dataAiHint: 'person icon',
  },
  {
    id: 'testimonial-api-3',
    quote: "Much recommended place to make your home look luxurious , the quality of work they provide is amazing , planning , giving more ideas and implementing as planned and handing over fully finished within the promised time !!",
    author: 'SHALINTH ADITHYAN',
    role: 'Client Review',
    imageUrl: "https://placehold.co/100x100/E0EBD0/4A4A34?text=SA", // Initials placeholder
    dataAiHint: 'person icon',
  },
];

export type HeroPageData = {
  tagline: {
    text: string;
    icon: Icon;
  };
  mainHeadline: {
    line1: string;
    line2: string;
  };
  mainParagraph: string;
  mainCta: {
    text: string;
    href: string;
    icon?: Icon;
  };
  mainImages: ImageObject[];
};

export const heroPageData: HeroPageData = {
  tagline: {
    text: 'Premium Interior Solutions',
    icon: Sparkles,
  },
  mainHeadline: {
    line1: 'Modern Interior',
    line2: 'Design Studio',
  },
  mainParagraph: 'Specialized in Modular Kitchens, Mica Works & Wardrobe Works. Transforming homes with contemporary design and premium craftsmanship in Puducherry.',
  mainCta: {
    text: 'View Our Work',
    href: '/portfolio',
    icon: ArrowRight,
  },
  mainImages: [
    {
      src: '/py6.webp',
      alt: 'Beautifully designed interior space by Py Interiors',
      dataAiHint: 'modern interior',
    },
    {
      src: '/py7.jpg',
      alt: 'Another stunning interior project by Py Interiors',
      dataAiHint: 'luxury design',
    },
  ],
};
    

    







