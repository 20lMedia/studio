
"use client"; 

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { heroPageData } from '@/lib/data';
import { Badge } from '@/components/ui/badge'; 
import type { Icon } from 'lucide-react';
import { useState } from 'react'; 
import { ChevronLeft, ChevronRight } from 'lucide-react'; 

export function HeroSection() {
  const TaglineIcon = heroPageData.tagline.icon;
  const CtaIcon = heroPageData.mainCta.icon;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = heroPageData.mainImages || [];

  const nextImage = () => {
    if (images.length === 0) return;
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (images.length === 0) return;
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

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

          {/* Image Carousel Column */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[584px] lg:h-[584px] rounded-lg overflow-hidden shadow-xl order-last md:order-last group">
            {images.length > 0 ? (
              <>
                {images.map((image, index) => (
                  <div
                    key={image.src + index} 
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={image.dataAiHint}
                      priority={index === 0} 
                      className="rounded-lg"
                    />
                  </div>
                ))}
                
                {images.length > 1 && (
                  <>
                    <Button
                      onClick={prevImage}
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 focus:opacity-100"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      onClick={nextImage}
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 focus:opacity-100"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                    
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
                      {images.map((_, index) => (
                        <button
                          key={`dot-${index}`}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ease-in-out ${
                            index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="flex items-center justify-center h-full bg-muted rounded-lg">
                <p className="text-muted-foreground px-4 text-center">Hero images are currently unavailable.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
