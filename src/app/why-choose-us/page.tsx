
import { whyChooseUsItems } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function WhyChooseUsPage() {
  return (
    <div className="space-y-16 md:space-y-24 py-8 md:py-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-6">
          Why Choose Py Interiors?
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover what sets us apart and why we are the trusted choice for discerning clients
          seeking exceptional interior design and a seamless, collaborative experience.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
        {whyChooseUsItems.map((item) => (
          <Card key={item.id} className="shadow-xl rounded-lg bg-card flex flex-col text-center hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <CardHeader className="pt-8 pb-4">
              <div className="mx-auto bg-primary/10 p-5 rounded-full w-fit mb-6 border-2 border-primary/20 shadow-md">
                <item.icon className="h-10 w-10 md:h-12 md:w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-headline">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 pb-8 flex-grow">
              <p className="text-muted-foreground leading-relaxed text-base">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
      
      <section className="relative py-16 md:py-24 mt-12 md:mt-16 rounded-lg overflow-hidden bg-secondary/30">
         <div className="absolute inset-0 z-0 opacity-30">
            <Image
                src="/cta-background-image.png"
                alt="CTA background image"
                layout="fill"
                objectFit="cover"
                className="pointer-events-none"
            />
         </div>
        <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6 text-foreground">
            Ready to Begin Your Transformation?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss your vision and how Py Interiors can bring it to life. 
            Explore our services or get in touch for a personal consultation.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-3 text-base font-semibold rounded-md">
                <Link href="/about">Learn More About Our Approach</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
