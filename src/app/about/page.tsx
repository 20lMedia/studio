
import Image from 'next/image';
import { teamMembers, companyInfoDetails } from '@/lib/data';
import { TeamMemberCard } from '@/components/about/TeamMemberCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Icon } from 'lucide-react';

const SectionHeading = ({ number, title }: { number: string; title: string }) => (
  <div className="mb-8 md:mb-12">
    <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-1">{number}</p>
    <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">{title}</h2>
  </div>
);

const BenefitCard = ({ title, description, icon: IconComponent }: { title: string; description: string; icon: Icon }) => (
  <Card className="bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center">
    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4 border border-primary/20">
      <IconComponent className="h-8 w-8 text-primary" />
    </div>
    <CardTitle className="text-xl font-headline mb-2">{title}</CardTitle>
    <CardContent className="p-0">
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

export default function AboutPage() {
  return (
    <div className="space-y-20 md:space-y-28 py-8 md:py-12">

      {/* Section 1: Intro - The Perfect Partner */}
      <section>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-6">
            <p className="text-sm text-primary font-semibold uppercase tracking-wider">01/ About Aadhi Constructions</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline text-foreground">
              Building Your Vision, Creating Reality
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Aadhi Constructions and Interiors, we believe that great spaces are born from a combination of strong foundations and beautiful design. With years of experience, our team of dedicated professionals is committed to providing you with unparalleled service, from initial concept to final construction.
            </p>
          </div>
          <div className="relative w-full h-80 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Aadhi Constructions modern building exterior"
              layout="fill"
              objectFit="cover"
              data-ai-hint="modern house exterior"
              priority
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <hr className="border-border/50" />

      {/* Section 2: Benefits - Why Choose Us? */}
      <section>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start mb-12">
            <div className="md:col-span-1">
                 <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-2">02/ Our Philosophy</p>
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
                    Why Choose Aadhi?
                </h2>
            </div>
            <div className="md:col-span-2">
                <p className="text-lg text-muted-foreground leading-relaxed mt-2 md:mt-9">
                Our philosophy is built on a foundation of quality, dedication, and a deep understanding of our clients' aspirations. We are committed to delivering exceptional work that is both aesthetically pleasing and perfectly functional.
                </p>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {companyInfoDetails.map((item) => (
            <BenefitCard key={item.id} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </div>
      </section>

      <hr className="border-border/50" />

      {/* Section 3: Team - Our Experts */}
      <section>
        <SectionHeading number="03/ Our Experts" title="Meet Our Talented Team" />
        <div className="space-y-10 md:space-y-12">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}
