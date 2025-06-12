import { projects } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, MapPin, User } from 'lucide-react';

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { projectId: string } }) {
  const project = projects.find((p) => p.id === params.projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-12">
      <section>
        <Button asChild variant="outline" className="mb-8">
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
        </Button>
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">{project.title}</h1>
        <p className="text-lg text-accent font-medium mb-6">{project.category}</p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden shadow-xl">
            <div className="aspect-video relative">
              <Image
                src={project.imageUrl} // Using main image, can be replaced with a carousel for project.images
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                data-ai-hint={project.dataAiHint || 'interior detail'}
              />
            </div>
            <CardContent className="p-6">
              <h2 className="text-2xl font-headline mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-headline">Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {project.client && (
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2 text-accent" />
                  <strong>Client:</strong>&nbsp;{project.client}
                </div>
              )}
              {project.location && (
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-accent" />
                  <strong>Location:</strong>&nbsp;{project.location}
                </div>
              )}
              <div className="flex items-center">
                <CalendarDays className="h-4 w-4 mr-2 text-accent" />
                <strong>Year:</strong>&nbsp;{project.year}
              </div>
            </CardContent>
          </Card>

          {project.images && project.images.length > 0 && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-headline">Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {project.images.slice(0,4).map((imgSrc, index) => ( // Show max 4 images for brevity
                    <div key={index} className="aspect-square relative rounded-md overflow-hidden">
                       <Image 
                        src={imgSrc} 
                        alt={`${project.title} - image ${index + 1}`} 
                        layout="fill" 
                        objectFit="cover" 
                        data-ai-hint="interior photo"
                        />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
