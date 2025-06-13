
import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/portfolio/ProjectCard';

export function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  if (featured.length === 0) {
    return null; // Don't render the section if there are no featured projects
  }

  return (
    <section className="py-16 md:py-24 bg-secondary/50 rounded-lg my-12 md:my-16"> {/* Adjusted bg, added md:my-16 */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16"> {/* Added wrapper for text and increased margin */}
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover a selection of our finest work, showcasing our dedication to quality and innovative design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"> {/* Increased gap */}
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {/* "Explore All Projects" button removed as portfolio page is deleted */}
      </div>
    </section>
  );
}
