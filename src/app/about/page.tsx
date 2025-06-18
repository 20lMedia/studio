
import Image from 'next/image';
import { teamMembers, companyInfo } from '@/lib/data';
import { TeamMemberCard } from '@/components/about/TeamMemberCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="space-y-16 md:space-y-24 py-8 md:py-12">

      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-6">About Py Interiors</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover the story behind our passion for design and the values that drive us to create exceptional spaces.
        </p>
      </section>

      <section>
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl mb-16 md:mb-24">
          <Image
            src={`https://source.unsplash.com/featured/1200x400/?${encodeURIComponent('modern office design team')}`}
            alt="Py Interiors team collaborating in a modern office"
            layout="fill"
            objectFit="cover"
            data-ai-hint="office team"
            priority
            className="rounded-lg"
          />
        </div>
      </section>

      <section>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">The Heart of Py Interiors</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Our philosophy is built on a foundation of creativity, dedication, and a deep understanding of our clients' aspirations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <Card className="shadow-lg rounded-lg bg-card hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-6 md:p-8">
              <CardTitle className="text-2xl font-headline">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8 pt-0">
              <p className="text-muted-foreground leading-relaxed">{companyInfo.history}</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg rounded-lg bg-card hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-6 md:p-8">
              <CardTitle className="text-2xl font-headline">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8 pt-0">
              <p className="text-muted-foreground leading-relaxed">{companyInfo.mission}</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg rounded-lg bg-card hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-6 md:p-8">
              <CardTitle className="text-2xl font-headline">Our Values</CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8 pt-0">
              <p className="text-muted-foreground leading-relaxed">{companyInfo.values}</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg rounded-lg bg-card hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-6 md:p-8">
              <CardTitle className="text-2xl font-headline">Our Approach</CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8 pt-0">
              <p className="text-muted-foreground leading-relaxed">{companyInfo.approach}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet Our Talented Team</h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            The creative minds and dedicated professionals behind your dream interiors.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}
