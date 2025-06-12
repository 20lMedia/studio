
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
    <div className="space-y-12 md:space-y-16"> {/* Consistent spacing */}
      <section>
        <Button asChild variant="outline" className="mb-8 md:mb-10 shadow-sm hover:shadow-md"><Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link></Button>
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">{project.title}</h1>
        <p className="text-lg text-primary font-medium mb-6 md:mb-8">{project.category}</p> {/* Use primary for category color */}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12"> {/* Increased gap */}
        <div className="lg:col-span-2">
          <Card className="overflow-hidden shadow-xl rounded-lg bg-card"> {/* Ensured bg-card, rounded-lg */}
            <div className="aspect-video relative">
              <Image
                src={project.imageUrl.src}
                alt={project.imageUrl.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                data-ai-hint={project.imageUrl.dataAiHint || 'interior detail'}
                priority
              />
            </div>
            <CardContent className="p-6 md:p-8"> {/* Increased padding */}
              <h2 className="text-2xl font-headline mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1 space-y-6 md:space-y-8"> {/* Increased space */}
          <Card className="shadow-lg rounded-lg bg-card"> {/* Ensured bg-card, rounded-lg */}
            <CardHeader className="pb-4 pt-6"> {/* Adjusted padding */}
              <CardTitle className="text-xl font-headline">Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm pb-6"> {/* Increased space, adjusted padding */}
              {project.client && (
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-3 text-primary" /> {/* Use primary for icon color */}
                  <strong className="text-foreground/80 mr-1">Client:</strong>&nbsp;{project.client}
                </div>
              )}
              {project.location && (
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-primary" /> {/* Use primary for icon color */}
                  <strong className="text-foreground/80 mr-1">Location:</strong>&nbsp;{project.location}
                </div>
              )}
              <div className="flex items-center">
                <CalendarDays className="h-5 w-5 mr-3 text-primary" /> {/* Use primary for icon color */}
                <strong className="text-foreground/80 mr-1">Year:</strong>&nbsp;{project.year}
              </div>
            </CardContent>
          </Card>

          {project.images && project.images.length > 0 && (
            <Card className="shadow-lg rounded-lg bg-card"> {/* Ensured bg-card, rounded-lg */}
              <CardHeader className="pb-4 pt-6"> {/* Adjusted padding */}
                <CardTitle className="text-xl font-headline">Gallery</CardTitle>
              </CardHeader>
              <CardContent className="pb-6"> {/* Adjusted padding */}
                <div className="grid grid-cols-2 gap-4">
                  {project.images.slice(0,4).map((img, index) => (
                    <div key={index} className="aspect-square relative rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"> {/* Added shadow and hover effect */}
                       <Image
                        src={img.src}
                        alt={img.alt}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={img.dataAiHint || 'interior photo'}
                        className="rounded-md"
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
