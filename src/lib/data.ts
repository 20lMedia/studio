
import type { Icon } from 'lucide-react';
import { Home, Briefcase, Sofa, Wrench, Users, Palette, Landmark, Sparkles, ShieldCheck, Lightbulb, ArrowRight, MapPin, Phone, Mail, Clock, BookOpen, Target, Gem, Workflow, Building } from 'lucide-react';

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
      src: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMXx8aW50ZXJpb3J8ZW58MHx8fHwxNzUwMjM1NDEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Stylish modern loft interior design by Aadhi Constructions and Interiors',
      dataAiHint: 'modern loft',
    },
    category: 'Residential',
    year: 2023,
    client: 'Private Residence',
    location: 'Downtown Metropolis',
    images: [
      { src: 'https://placehold.co/600x400.png', alt: 'View of loft kitchen area', dataAiHint: 'loft kitchen' },
      { src: 'https://placehold.co/600x400.png', alt: 'Loft bedroom with minimalist design', dataAiHint: 'minimalist bedroom' },
      { src: 'https://placehold.co/600x400.png', alt: 'Detail of exposed brickwork in loft', dataAiHint: 'exposed brick' },
      { src: 'https://placehold.co/600x400.png', alt: 'View of loft living space', dataAiHint: 'loft living' },
    ]
  },
  {
    id: 'luxury-boutique-hotel-lobby',
    title: 'Luxury Boutique Hotel Lobby',
    description: 'Elegant and inviting lobby design for a high-end boutique hotel.',
    longDescription: 'The goal for this boutique hotel lobby was to create a memorable first impression. We blended classic elegance with modern luxury, using plush velvet seating, marble accents, and statement lighting. A bespoke reception desk and curated art pieces complete the opulent yet welcoming atmosphere.',
    imageUrl: {
      src: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNHx8aW50ZXJpb3IlMjB8ZW58MHx8fHwxNzUwMjM1NDk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Luxury boutique hotel lobby designed by Aadhi Constructions and Interiors',
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
      src: 'https://images.unsplash.com/photo-1501876725168-00c445821c9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxNaW5pbWFsaXN0JTIwQXBhcnRtZW50fGVufDB8fHx8MTc1MDIzNTQ2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Serene minimalist apartment by Aadhi Constructions and Interiors',
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
      src: 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8aW50ZXJpb3J8ZW58MHx8fHwxNzUwMjM1NDEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Vibrant co-working space design by Aadhi Constructions and Interiors',
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
    id: 'full-construction',
    title: 'Full Construction',
    description: 'Complete construction services from foundation to finishing, ensuring quality and durability.',
    icon: Building,
    startingPrice: 'Contact for quote',
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    description: 'Designing inspiring and productive environments for homes and businesses.',
    icon: Home,
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
    id: 'lead-engineer',
    name: 'Lead Engineer',
    role: 'Founder & Lead Engineer',
    bio: 'With over 15 years of experience, our founder brings a passion for robust construction and a keen eye for detail to every project. They believe great design enhances quality of life.',
    imageUrl: "https://placehold.co/300x300.png",
    dataAiHint: 'professional man',
  },
  {
    id: 'senior-designer',
    name: 'Senior Designer',
    role: 'Senior Interior Designer',
    bio: 'Our designer specializes in sustainable design and innovative material use. Their work is characterized by clean lines and a harmonious balance of form and function.',
    imageUrl: "https://placehold.co/300x300.png",
    dataAiHint: 'professional woman',
  },
  {
    id: 'project-manager',
    name: 'Project Manager',
    role: 'Project Manager',
    bio: 'Our PM ensures every project runs smoothly from concept to completion. Their organizational skills and client-focused approach are invaluable to the team.',
    imageUrl: "https://placehold.co/300x300.png",
    dataAiHint: 'smiling person',
  },
];

export type CompanyInfoDetail = {
  id: string;
  title: string;
  description: string;
  icon: Icon;
};

export const companyInfoDetails: CompanyInfoDetail[] = [
  {
    id: 'history',
    title: 'Our Story',
    description: "Aadhi Constructions and Interiors was founded with a vision to create spaces that are not only beautiful but also built to last. We've grown into a renowned design and construction studio, recognized for our commitment to quality, innovation, and client satisfaction. Our portfolio spans residential homes, dynamic commercial spaces, and everything in between.",
    icon: BookOpen,
  },
  {
    id: 'mission',
    title: 'Our Mission',
    description: "Our mission is to transform ordinary spaces into extraordinary experiences through robust construction and thoughtful design. We strive to understand our clients' visions and bring them to life with meticulous attention to detail.",
    icon: Target,
  },
  {
    id: 'values',
    title: 'Our Values',
    description: "Our core values are quality, integrity, and client-centricity. We believe in pushing design boundaries while maintaining the highest standards of construction and ethical practices.",
    icon: Gem,
  },
  {
    id: 'approach',
    title: 'Our Approach',
    description: "Our approach is holistic and collaborative. We manage projects with precision, from initial blueprints to the final coat of paint, ensuring they are delivered on time and within budget.",
    icon: Workflow,
  }
];


export const keyServicesSummary: Service[] = [
  {
    id: 'residential-key',
    title: 'Residential Homes',
    description: 'Homes tailored to your lifestyle.',
    icon: Home,
  },
  {
    id: 'construction-key',
    title: 'Quality Construction',
    description: 'Buildings that are made to last.',
    icon: Building,
  },
  {
    id: 'bespoke-key',
    title: 'Bespoke Interiors',
    description: 'Unique touches for unique spaces.',
    icon: Sparkles,
  },
];

export const companyInfo = {
  name: 'Aadhi Constructions and Interiors',
  email: 'contact@aadhiconstructions.com',
  phone: '+91 97891 16186',
  address: '99-A, Pudupalayam Rd, Pudupalayam, Cuddalore, Tamil Nadu 607001, India',
  history: "Aadhi Constructions and Interiors was founded with a vision to create spaces that are not only beautiful but also built to last. We've grown into a renowned design and construction studio, recognized for our commitment to quality, innovation, and client satisfaction. Our portfolio spans residential homes, dynamic commercial spaces, and everything in between.",
  mission: "Our mission is to transform ordinary spaces into extraordinary experiences through robust construction and thoughtful design. We strive to understand our clients' visions and bring them to life with meticulous attention to detail.",
  values: "Our core values are quality, integrity, and client-centricity. We believe in pushing design boundaries while maintaining the highest standards of construction and ethical practices.",
  approach: "Our approach is holistic and collaborative. We manage projects with precision, from initial blueprints to the final coat of paint, ensuring they are delivered on time and within budget."
};

export const globalCtaContactInfo = {
  address: "99-A, Pudupalayam Rd, Pudupalayam, Cuddalore, Tamil Nadu 607001, India",
  phoneNumbers: ["+91 97891 16186"],
  email: "contact@aadhiconstructions.com",
  businessHours: [
    { day: "Monday - Saturday", time: "9:00 AM - 9:00 PM" },
    { day: "Sunday", time: "9:00 AM - 1:00 PM" },
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
    description: 'Our team of skilled builders and artisans bring years of experience and a meticulous eye for detail to every project, ensuring the highest quality results.',
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
  rating: number; // Added rating
};

export const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: "Aadhi Constructions transformed our house. Their attention to detail and commitment to quality was evident from start to finish. The project was completed on time and exceeded our expectations. Highly recommended!",
    author: 'Priya S.',
    role: 'Homeowner',
    imageUrl: "https://placehold.co/100x100/EBD7D0/4A3B34?text=PS",
    dataAiHint: 'person icon',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    quote: "Working with the Aadhi team was a great experience. They are professional, creative, and truly listen to their clients. Our new office interior is both beautiful and functional. A job well done.",
    author: 'Ravi Kumar',
    role: 'Business Owner',
    imageUrl: "https://placehold.co/100x100/D0E0EB/344A4A?text=RK",
    dataAiHint: 'person icon',
    rating: 4,
  },
  {
    id: 'testimonial-3',
    quote: "They handled our renovation project with utmost professionalism. The quality of materials and the craftsmanship are top-notch. We're very happy with the final result.",
    author: 'Anjali M.',
    role: 'Client',
    imageUrl: "https://placehold.co/100x100/E0EBD0/4A4A34?text=AM",
    dataAiHint: 'person icon',
    rating: 4,
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
    text: 'Quality Construction & Interiors',
    icon: Sparkles,
  },
  mainHeadline: {
    line1: 'Aadhi Constructions',
    line2: '& Interiors',
  },
  mainParagraph: 'Your trusted partner in Cuddalore for building beautiful, functional spaces. From new constructions to bespoke interiors, we bring your vision to life with quality and care.',
  mainCta: {
    text: 'View Our Work',
    href: '/portfolio',
    icon: ArrowRight,
  },
  mainImages: [
    {
      src: 'https://images.unsplash.com/photo-1581092448342-571707a42aa0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Professional construction site with engineers',
      dataAiHint: 'construction engineer',
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Modern and luxurious home interior',
      dataAiHint: 'luxury interior',
    },
  ],
};
