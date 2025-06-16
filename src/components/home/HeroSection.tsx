
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { heroPageData } from '@/lib/data';
import { Badge } from '@/components/ui/badge'; 
import type { Icon } from 'lucide-react';

export function HeroSection() {
  const TaglineIcon = heroPageData.tagline.icon;
  const CtaIcon = heroPageData.mainCta.icon;

  return (
    <section className="pb-8 md:pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content Column */}
          <div className="flex flex-col items-start text-left space-y-6 md:space-y-8 order-first md:order-first">
            {heroPageData.tagline && (
              <Badge variant="outline" className="py-1 px-3 border-primary/30 text-primary bg-primary/5">
                <TaglineIcon className="mr-2 h-4 w-4" />
                {heroPageData.tagline.text}
              </Badge>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-headline text-foreground leading-tight">
              {heroPageData.mainHeadline.line1}
              <br />
              {heroPageData.mainHeadline.line2}
            </h1>

            <p className="text-base text-muted-foreground max-w-prose">
              {heroPageData.mainParagraph}
            </p>
            
            <Button asChild size="lg" className="bg-foreground hover:bg-foreground/80 text-background px-8 py-3 text-base font-semibold rounded-md mt-4">
              <Link href={heroPageData.mainCta.href}>
                {heroPageData.mainCta.text}
                {CtaIcon && <CtaIcon className="ml-2 h-5 w-5" />}
              </Link>
            </Button>
          </div>

          {/* Image Column */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[584px] lg:h-[584px] rounded-lg overflow-hidden shadow-xl order-last md:order-last">
            <Image
              src={heroPageData.mainImage.src}
              alt={heroPageData.mainImage.alt}
              layout="fill"
              objectFit="cover"
              data-ai-hint={heroPageData.mainImage.dataAiHint}
              priority
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
