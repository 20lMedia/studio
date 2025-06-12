import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { KeyServicesHome } from '@/components/home/KeyServicesHome';

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-20">
      <HeroSection />
      <FeaturedProjects />
      <KeyServicesHome />
    </div>
  );
}
