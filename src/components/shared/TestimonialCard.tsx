
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { Testimonial } from "@/lib/data";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out h-full flex flex-col bg-card rounded-lg p-2">
      <CardHeader className="pb-4 pt-6">
        <Quote className="h-10 w-10 text-primary/70 mb-3" />
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground italic leading-relaxed">&quot;{testimonial.quote}&quot;</p>
      </CardContent>
      <CardFooter className="pt-6 pb-6 mt-auto">
        <div className="flex items-center space-x-4">
          {testimonial.imageUrl && (
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30 shadow-sm">
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
            <p className="font-semibold text-base text-foreground">{testimonial.author}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

    