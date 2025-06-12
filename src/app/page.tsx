
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { KeyServicesHome } from '@/components/home/KeyServicesHome';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { HomeCtaSection } from '@/components/home/HomeCtaSection';

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-20">
      <HeroSection />
      <FeaturedProjects />
      <KeyServicesHome />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <HomeCtaSection />
    </div>
  );
}
