
import { teamMembers, companyInfo } from '@/lib/data';
import { TeamMemberCard } from '@/components/about/TeamMemberCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="space-y-16 md:space-y-24">

      <section className="text-center py-12 md:py-16 bg-secondary/30 rounded-lg shadow-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6 text-foreground">
            Ready to Start Your Dream Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how Py Interiors can transform your space. We&apos;re excited to learn about your ideas and help bring your vision to life.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-3 text-base font-semibold rounded-md">
            <Link href="/portfolio">Explore Our Work</Link>
          </Button>
        </div>
      </section>

      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-6">About Py Interiors</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover the story behind our passion for design and the values that drive us to create exceptional spaces.
        </p>
      </section>

      <section>
        <Card className="shadow-lg rounded-lg bg-card">
          <CardHeader className="p-6 md:p-8">
            <CardTitle className="text-2xl md:text-3xl font-headline">Our Story</CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8 pt-0">
            <p className="text-muted-foreground leading-relaxed">{companyInfo.history}</p>
          </CardContent>
        </Card>
      </section>

      <section>
         <Card className="shadow-lg rounded-lg bg-card">
          <CardHeader className="p-6 md:p-8">
            <CardTitle className="text-2xl md:text-3xl font-headline">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8 pt-0">
            <p className="text-muted-foreground leading-relaxed">{companyInfo.mission}</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="shadow-lg rounded-lg bg-card">
          <CardHeader className="p-6 md:p-8">
            <CardTitle className="text-2xl md:text-3xl font-headline">Our Values</CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8 pt-0">
            <p className="text-muted-foreground leading-relaxed">{companyInfo.values}</p>
          </CardContent>
        </Card>
      </section>

      <section>
         <Card className="shadow-lg rounded-lg bg-card">
          <CardHeader className="p-6 md:p-8">
            <CardTitle className="text-2xl md:text-3xl font-headline">Our Approach</CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8 pt-0">
            <p className="text-muted-foreground leading-relaxed">{companyInfo.approach}</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet Our Team</h2>
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
