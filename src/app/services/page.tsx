import { services } from '@/lib/data';
import { ServiceItem } from '@/components/services/ServiceItem';

export default function ServicesPage() {
  return (
    <div className="space-y-16 md:space-y-20"> {/* Consistent spacing */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-6">Our Services</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We offer a comprehensive suite of interior design services tailored to meet your specific needs and aspirations. Explore how we can bring your vision to life.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"> {/* Increased gap */}
          {services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
