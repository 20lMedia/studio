import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        {/* Top Row: Main visual and headline */}
        <div className="grid md:grid-cols-5 gap-8 items-center mb-12 md:mb-20">
          {/* Left Column: Large Image - spans 3 columns */}
          <div className="md:col-span-3 relative h-[350px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden">
            <Image
              src="https://placehold.co/800x1000.png" 
              alt="Modern interior workspace with chairs and desk"
              layout="fill"
              objectFit="cover"
              data-ai-hint="modern office interior"
            />
          </div>

          {/* Right Column: Text Content & Button - spans 2 columns */}
          <div className="md:col-span-2 text-left md:pl-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline mb-6 text-foreground leading-tight">
              Modern Interior<br />Design Studio
            </h1>
            <p className="text-base text-muted-foreground mb-8 max-w-md">
              Make the most of compact spaces with space saving furniture that are ingenuous and innovative. Transform your living spaces with interior designs.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-sm font-semibold rounded-none">
              <Link href="/portfolio">EXPLORE NOW</Link>
            </Button>
          </div>
        </div>

        {/* Bottom Row: Sub-text and smaller images */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-headline font-semibold text-foreground leading-snug max-w-lg">
              We will make these unique tastes of yours a design reality!
            </h2>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-accent mt-3 inline-block underline">
              Continue with Py Interiors
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:mt-0 mt-6">
            <div className="relative aspect-square rounded-md overflow-hidden">
              <Image src="https://placehold.co/300x300.png" alt="Interior detail with lamp" layout="fill" objectFit="cover" data-ai-hint="desk lamp" />
            </div>
            <div className="relative aspect-square rounded-md overflow-hidden">
              <Image src="https://placehold.co/300x300.png" alt="Interior detail with plants" layout="fill" objectFit="cover" data-ai-hint="potted plants shelf" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
