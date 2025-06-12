
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HomeCtaSection() {
  return (
    <section className="py-16 md:py-24 bg-primary/90 text-primary-foreground rounded-lg my-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
          Ready to Transform Your Space?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/80">
          Let&apos;s discuss your vision and how Py Interiors can bring it to life. Schedule a consultation with our expert designers today.
        </p>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="bg-background text-foreground hover:bg-background/90 border-transparent px-10 py-3 text-base"
        >
          <Link href="/contact">Get In Touch</Link>
        </Button>
      </div>
    </section>
  );
}
