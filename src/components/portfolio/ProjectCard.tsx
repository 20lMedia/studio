
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out h-full flex flex-col bg-card rounded-lg group"> {/* Ensured bg-card, rounded-lg, added group for potential group-hover */}
      <CardHeader className="p-0">
        <div className="aspect-video relative overflow-hidden rounded-t-lg"> {/* Added overflow-hidden and rounded-t-lg here for image */}
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={project.dataAiHint || 'interior design'}
            className="transition-transform duration-300 ease-in-out group-hover:scale-105" /* Added scale on hover */
          />
        </div>
      </CardHeader>
      <CardContent className="pt-6 pb-4 flex-grow"> {/* Adjusted padding */}
        <CardTitle className="text-xl lg:text-2xl font-headline mb-2 group-hover:text-primary transition-colors duration-300 ease-in-out">{project.title}</CardTitle> {/* Hover color change for title */}
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{project.description}</p>
      </CardContent>
      <CardFooter className="pt-2 pb-6"> {/* Adjusted padding */}
        <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80 font-medium group-hover:underline"><Link href={`/portfolio/${project.id}`}>
            View Project <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" /> {/* Arrow moves on hover */}
          </Link></Button>
      </CardFooter>
    </Card>
  );
}
