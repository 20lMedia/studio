
import Image from 'next/image';
import { teamMembers, companyInfoDetails, testimonialsData, companyInfo } from '@/lib/data';
import { TeamMemberCard } from '@/components/about/TeamMemberCard';
import { TestimonialAboutCard } from '@/components/about/TestimonialAboutCard';
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
            <p className="text-sm text-primary font-semibold uppercase tracking-wider">01/ About Py Interiors</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline text-foreground">
              The Perfect Partner For Your Interior Needs
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Py Interiors, we believe that finding your dream space is more than a transaction; it’s a journey. With over a decade of experience, our team of dedicated professionals is committed to providing you with unparalleled service. That’s why we cater to your unique needs, whether you’re looking to design a new home or revamp an existing one.
            </p>
          </div>
          <div className="relative w-full h-80 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxpbnRlcmlvciUyMGRlc2lnbiUyMG9mZmljZXxlbnwwfHx8fDE3MTY0NzU4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Py Interiors modern office space"
              layout="fill"
              objectFit="cover"
              data-ai-hint="modern office interior"
              priority
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <hr className="border-border/50" />

      {/* Section 2: Benefits - Which are your benefits? */}
      <section>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start mb-12">
            <div className="md:col-span-1">
                 <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-2">02/ Our Philosophy</p>
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
                    Why Choose Py Interiors?
                </h2>
            </div>
            <div className="md:col-span-2">
                <p className="text-lg text-muted-foreground leading-relaxed mt-2 md:mt-9">
                Our philosophy is built on a foundation of creativity, dedication, and a deep understanding of our clients&apos; aspirations. We are committed to delivering exceptional design that is both aesthetically pleasing and perfectly functional.
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

      {/* Section 3: Team - Team and Agents */}
      <section>
        <SectionHeading number="03/ Our Experts" title="Meet Our Talented Team" />
        <div className="space-y-10 md:space-y-12">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      <hr className="border-border/50" />

      {/* Section 4: Reviews - Reviews from our happy clients */}
      <section>
        <SectionHeading number="04/ Testimonials" title="Reviews From Our Happy Clients" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonialsData.slice(0,3).map((testimonial) => (
            <TestimonialAboutCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </div>
  );
}
