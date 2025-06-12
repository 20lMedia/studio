
import type { Icon } from 'lucide-react';
import { Home, Briefcase, LayoutGrid, Sofa, Wrench, Users, Info, Mail, Palette, Landmark, Sparkles, ShieldCheck, Lightbulb, Quote } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
  icon?: Icon;
};

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  category: string;
  year: number;
  client?: string;
  location?: string;
  images?: string[];
  dataAiHint?: string;
};

export const projects: Project[] = [
  {
    id: 'modern-loft-conversion',
    title: 'Modern Loft Conversion',
    description: 'Transforming an industrial loft into a chic, contemporary living space.',
    longDescription: 'This project involved a full-scale renovation of an old industrial loft. We focused on open-plan living, maximizing natural light, and incorporating custom-built furniture. The design features a neutral palette with bold accents, polished concrete floors, and exposed brickwork, creating a sophisticated urban retreat.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'modern loft',
    category: 'Residential',
    year: 2023,
    client: 'Private Residence',
    location: 'Downtown Metropolis',
    images: [
      'https://placehold.co/800x600.png?a=1',
      'https://placehold.co/800x600.png?a=2',
      'https://placehold.co/800x600.png?a=3',
    ]
  },
  {
    id: 'luxury-boutique-hotel-lobby',
    title: 'Luxury Boutique Hotel Lobby',
    description: 'Elegant and inviting lobby design for a high-end boutique hotel.',
    longDescription: 'The goal for this boutique hotel lobby was to create a memorable first impression. We blended classic elegance with modern luxury, using plush velvet seating, marble accents, and statement lighting. A bespoke reception desk and curated art pieces complete the opulent yet welcoming atmosphere.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'hotel lobby',
    category: 'Commercial',
    year: 2022,
    client: 'The Velvet Orchid Hotel',
    location: 'City Center',
     images: [
      'https://placehold.co/800x600.png?b=1',
      'https://placehold.co/800x600.png?b=2',
    ]
  },
  {
    id: 'serene-minimalist-apartment',
    title: 'Serene Minimalist Apartment',
    description: 'A calming and clutter-free apartment embracing minimalist principles.',
    longDescription: 'This apartment design focuses on simplicity, functionality, and tranquility. We used a light color palette, natural materials like wood and linen, and clever storage solutions to maintain a clutter-free environment. The result is a peaceful haven that promotes relaxation and mindfulness.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'minimalist apartment',
    category: 'Residential',
    year: 2023,
    client: 'Ms. Anya Sharma',
    location: 'Riverside District',
    images: [
      'https://placehold.co/800x600.png?c=1',
      'https://placehold.co/800x600.png?c=2',
      'https://placehold.co/800x600.png?c=3',
      'https://placehold.co/800x600.png?c=4',
    ]
  },
  {
    id: 'vibrant-co-working-space',
    title: 'Vibrant Co-working Space',
    description: 'Dynamic and inspiring design for a modern co-working hub.',
    longDescription: 'This co-working space was designed to foster creativity and collaboration. It features a mix of private offices, open-plan work areas, and comfortable breakout zones. Bold colors, ergonomic furniture, and biophilic design elements contribute to a productive and energizing atmosphere.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'coworking space',
    category: 'Commercial',
    year: 2022,
    client: 'Innovate Hub',
    location: 'Tech Park',
    images: [
      'https://placehold.co/800x600.png?d=1',
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
    icon: LayoutGrid,
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
    imageUrl: `https://source.unsplash.com/featured/300x300/?${encodeURIComponent('professional woman')}`,
    dataAiHint: 'professional woman',
  },
  {
    id: 'john-smith',
    name: 'John Smith',
    role: 'Senior Interior Designer',
    bio: 'John specializes in sustainable design and innovative material use. His work is characterized by clean lines and a harmonious balance of form and function.',
    imageUrl: `https://source.unsplash.com/featured/300x300/?${encodeURIComponent('professional man')}`,
    dataAiHint: 'professional man',
  },
  {
    id: 'alice-brown',
    name: 'Alice Brown',
    role: 'Project Manager',
    bio: 'Alice ensures every project runs smoothly from concept to completion. Her organizational skills and client-focused approach are invaluable to the team.',
    imageUrl: `https://source.unsplash.com/featured/300x300/?${encodeURIComponent('smiling woman')}`,
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
  phone: '+1 (555) 123-4567',
  address: '123 Design Avenue, Suite 400, Metropolis, NY 10001',
  history: "Founded in 2010 by Jane Doe, Py Interiors began with a vision to create spaces that are not only beautiful but also deeply personal and functional. Over the past decade, we've grown into a renowned design studio, recognized for our commitment to quality, innovation, and client satisfaction. Our portfolio spans luxurious residences, dynamic commercial spaces, and everything in between.",
  mission: "Our mission is to transform ordinary spaces into extraordinary experiences. We strive to understand our clients' visions and bring them to life through thoughtful design, meticulous attention to detail, and a passion for creating environments that inspire and delight. We believe that good design has the power to enhance well-being and reflect individuality.",
  values: "Our core values are creativity, integrity, and client-centricity. We believe in pushing design boundaries while maintaining ethical practices and always putting our clients' needs first. Collaboration and open communication are key to our process.",
  approach: "Our design approach is holistic and collaborative. We start by deeply understanding your aspirations and lifestyle. Then, we meticulously plan every detail, from space optimization to material selection, ensuring a cohesive and harmonious result. We manage projects with precision, ensuring they are delivered on time and within budget."
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

export const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: "Py Interiors transformed our outdated living room into a modern masterpiece. Their attention to detail and creative vision were outstanding. We couldn't be happier!",
    author: 'Alex & Jamie P.',
    role: 'Homeowners, Willow Creek',
    imageUrl: `https://source.unsplash.com/featured/100x100/?${encodeURIComponent('happy couple')}`,
    dataAiHint: 'happy couple',
  },
  {
    id: 'testimonial-2',
    quote: "The team at Py Interiors was incredibly professional and brought our boutique's concept to life perfectly. Our customers love the new ambiance!",
    author: 'Sarah L.',
    role: 'Owner, The Chic Boutique',
    imageUrl: `https://source.unsplash.com/featured/100x100/?${encodeURIComponent('business woman')}`,
    dataAiHint: 'business woman',
  },
  {
    id: 'testimonial-3',
    quote: "Working with Py Interiors was a seamless experience. They understood our needs for a functional yet inspiring office space and delivered beyond our expectations.",
    author: 'Michael B.',
    role: 'CEO, Tech Solutions Inc.',
    imageUrl: `https://source.unsplash.com/featured/100x100/?${encodeURIComponent('ceo portrait')}`,
    dataAiHint: 'ceo portrait',
  },
];

export type HeroPageData = {
  mainHeadline: {
    line1: string;
    line2: string;
  };
  mainParagraph: string;
  mainCta: {
    text: string;
    href: string;
  };
  mainImage: {
    src: string;
    alt: string;
    dataAiHint: string;
  };
  secondaryHeadline: string;
  secondaryLink: {
    text: string;
    href: string;
  };
  smallImage1: {
    src: string;
    alt: string;
    dataAiHint: string;
  };
  smallImage2: {
    src: string;
    alt: string;
    dataAiHint: string;
  };
};

export const heroPageData: HeroPageData = {
  mainHeadline: {
    line1: 'Modern Interior',
    line2: 'Design Studio',
  },
  mainParagraph: 'Make the most of compact spaces with space saving furniture that are ingenuous and innovative. Transform your living spaces with interior designs.',
  mainCta: {
    text: 'EXPLORE NOW',
    href: '/portfolio',
  },
  mainImage: {
    src: 'https://placehold.co/800x1000.png',
    alt: 'Modern interior workspace with chairs and desk',
    dataAiHint: 'modern office interior',
  },
  secondaryHeadline: 'We will make these unique tastes of yours a design reality!',
  secondaryLink: {
    text: 'Continue with Py Interiors',
    href: '/contact',
  },
  smallImage1: {
    src: 'https://placehold.co/300x300.png',
    alt: 'Interior detail with lamp',
    dataAiHint: 'desk lamp',
  },
  smallImage2: {
    src: 'https://placehold.co/300x300.png',
    alt: 'Interior detail with plants',
    dataAiHint: 'potted plants shelf',
  },
};

    