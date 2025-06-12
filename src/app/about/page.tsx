
import { teamMembers, companyInfo } from '@/lib/data';
import { TeamMemberCard } from '@/components/about/TeamMemberCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-6">About Py Interiors</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover the story behind our passion for design and the values that drive us to create exceptional spaces.
        </p>
      </section>

      <section>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-headline">Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{companyInfo.history}</p>
          </CardContent>
        </Card>
      </section>

      <section>
         <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-headline">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{companyInfo.mission}</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-headline">Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{companyInfo.values}</p>
          </CardContent>
        </Card>
      </section>

      <section>
         <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-headline">Our Approach</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{companyInfo.approach}</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}
