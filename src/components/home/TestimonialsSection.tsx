
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { testimonialsData, type Testimonial } from "@/lib/data";
import { Quote } from "lucide-react";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="pb-4">
        <Quote className="h-8 w-8 text-accent/50 mb-2" />
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground italic leading-relaxed">&quot;{testimonial.quote}&quot;</p>
      </CardContent>
      <CardFooter className="pt-4 mt-auto">
        <div className="flex items-center space-x-3">
          {testimonial.imageUrl && (
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-accent/30">
              <Image
                src={testimonial.imageUrl}
                alt={testimonial.author}
                layout="fill"
                objectFit="cover"
                data-ai-hint={testimonial.dataAiHint || 'person'}
              />
            </div>
          )}
          <div>
            <p className="font-semibold text-sm text-foreground">{testimonial.author}</p>
            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-4">
          What Our Clients Say
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Hear from those who have experienced the Py Interiors difference.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
