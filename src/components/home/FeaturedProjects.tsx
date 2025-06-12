import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function FeaturedProjects() {
  const featured = projects.slice(0, 3); // Show first 3 projects as featured

  return (
    <section className="py-16 md:py-24 bg-secondary/30 rounded-lg my-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-4">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Discover a selection of our finest work, showcasing our dedication to quality and innovative design.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link href="/portfolio">Explore All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
