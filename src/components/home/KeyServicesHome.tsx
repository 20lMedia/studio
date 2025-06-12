import { keyServicesSummary } from '@/lib/data';
import { ServiceItem } from '@/components/services/ServiceItem';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function KeyServicesHome() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-4">Our Expertise</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          We offer a comprehensive range of interior design services to bring your vision to life, from concept to completion.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {keyServicesSummary.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/services">Discover All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
