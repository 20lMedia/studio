import { projects } from '@/lib/data';
import { ProjectGrid } from '@/components/portfolio/ProjectGrid';

export default function PortfolioPage() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-6">Our Portfolio</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore a curated collection of our projects, each telling a unique story of transformation and bespoke design.
        </p>
      </section>

      <section>
        <ProjectGrid projects={projects} />
      </section>
    </div>
  );
}
