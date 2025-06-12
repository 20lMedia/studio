
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HomeCtaSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground rounded-lg my-12 md:my-16 shadow-xl"> {/* Updated colors, added shadow and md:my-16 */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
          Ready to Transform Your Space?
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-primary-foreground/90"> {/* Increased bottom margin, adjusted opacity */}
          Let&apos;s discuss your vision and how Py Interiors can bring it to life. Schedule a consultation with our expert designers today.
        </p>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="bg-background text-foreground hover:bg-background/90 border-transparent px-12 py-3 text-base font-semibold rounded-md hover:shadow-lg" /* Adjusted px, rounded, added hover shadow */
        ><Link href="/contact">Get In Touch</Link></Button>
      </div>
    </section>
  );
}
