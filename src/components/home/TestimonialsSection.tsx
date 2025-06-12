
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { testimonialsData, type Testimonial } from "@/lib/data";
import { Quote } from "lucide-react";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out h-full flex flex-col bg-card rounded-lg p-2"> {/* Ensured bg-card, rounded-lg, added slight p-2 for internal spacing from card edge */}
      <CardHeader className="pb-4 pt-6"> {/* Adjusted padding */}
        <Quote className="h-10 w-10 text-primary/70 mb-3" /> {/* Updated icon styling */}
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground italic leading-relaxed">&quot;{testimonial.quote}&quot;</p>
      </CardContent>
      <CardFooter className="pt-6 pb-6 mt-auto"> {/* Adjusted padding */}
        <div className="flex items-center space-x-4"> {/* Increased space */}
          {testimonial.imageUrl && (
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30 shadow-sm"> {/* Increased size, added shadow */}
              <Image
                src={testimonial.imageUrl}
                alt={testimonial.author}
                layout="fill"
                objectFit="cover"
                data-ai-hint={testimonial.dataAiHint || 'person'}
                className="rounded-full"
              />
            </div>
          )}
          <div>
            <p className="font-semibold text-base text-foreground">{testimonial.author}</p> {/* Increased text size */}
            <p className="text-sm text-muted-foreground">{testimonial.role}</p> {/* Increased text size */}
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
        <div className="text-center mb-12 md:mb-16"> {/* Added wrapper for text and increased margin */}
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hear from those who have experienced the Py Interiors difference.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"> {/* Increased gap */}
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
