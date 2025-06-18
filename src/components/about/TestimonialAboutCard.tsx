
import Image from 'next/image';
import type { Testimonial } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

interface TestimonialAboutCardProps {
  testimonial: Testimonial;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-primary fill-primary' : 'text-muted-foreground/50'}`}
        />
      ))}
    </div>
  );
};

export function TestimonialAboutCard({ testimonial }: TestimonialAboutCardProps) {
  return (
    <Card className="bg-card rounded-lg shadow-lg overflow-hidden p-6 md:p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {testimonial.imageUrl && (
        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-6 border-4 border-primary/20 shadow-md">
          <Image
            src={testimonial.imageUrl}
            alt={testimonial.author}
            layout="fill"
            objectFit="cover"
            data-ai-hint={testimonial.dataAiHint || 'client photo'}
            className="rounded-full"
          />
        </div>
      )}
      <Quote className="h-12 w-12 text-primary/30 mb-4 transform -scale-x-100" />
      <p className="text-base md:text-lg text-muted-foreground italic leading-relaxed mb-6 flex-grow">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-auto">
        <StarRating rating={testimonial.rating} />
        <p className="font-headline text-xl text-foreground mt-3">{testimonial.author}</p>
        <p className="text-sm text-primary font-medium">{testimonial.role}</p>
      </div>
    </Card>
  );
}
