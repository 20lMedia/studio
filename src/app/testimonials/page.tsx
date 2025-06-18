
import { testimonialsData } from '@/lib/data';
import { TestimonialCard } from '@/components/shared/TestimonialCard';

export default function TestimonialsPage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-6">
          What Our Clients Say
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Hear from those who have experienced the Py Interiors difference and share their stories of transformation.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </div>
  );
}

    