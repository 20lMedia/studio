
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { heroPageData } from '@/lib/data';

export function HeroSection() {
  return (
    <section className="py-10 md:py-12"> {/* Adjusted padding */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-center mb-16 md:mb-24"> {/* Increased gap and bottom margin */}
          <div className="md:col-span-3 relative h-[350px] sm:h-[500px] md:h-[600px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg"> {/* Added shadow, updated lg height */}
            <Image
              src={heroPageData.mainImage.src}
              alt={heroPageData.mainImage.alt}
              layout="fill"
              objectFit="cover"
              data-ai-hint={heroPageData.mainImage.dataAiHint}
              priority
            />
          </div>
          <div className="md:col-span-2 text-left md:pl-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-headline mb-6 text-foreground leading-tight">
              {heroPageData.mainHeadline.line1}<br />{heroPageData.mainHeadline.line2}
            </h1>
            <p className="text-base text-muted-foreground mb-8 max-w-prose">
              {heroPageData.mainParagraph}
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-3 text-base font-semibold rounded-md"><Link href={heroPageData.mainCta.href}>{heroPageData.mainCta.text}</Link></Button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-headline font-semibold text-foreground leading-snug max-w-lg">
              {heroPageData.secondaryHeadline}
            </h2>
            <Link href={heroPageData.secondaryLink.href} className="text-sm text-accent hover:text-accent/80 mt-4 inline-block underline underline-offset-4 transition-colors duration-300 ease-in-out">
              {heroPageData.secondaryLink.text}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:mt-0 mt-8"> {/* Increased gap and mt */}
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-md"> {/* Added shadow */}
              <Image src={heroPageData.smallImage1.src} alt={heroPageData.smallImage1.alt} layout="fill" objectFit="cover" data-ai-hint={heroPageData.smallImage1.dataAiHint} />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-md"> {/* Added shadow */}
              <Image src={heroPageData.smallImage2.src} alt={heroPageData.smallImage2.alt} layout="fill" objectFit="cover" data-ai-hint={heroPageData.smallImage2.dataAiHint} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

    
