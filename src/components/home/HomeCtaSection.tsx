
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HomeCtaSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground rounded-lg my-12 md:my-16 shadow-xl"> {/* Updated colors, added shadow and md:my-16 */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
          Ready to Build Your Dream?
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-primary-foreground/90"> {/* Increased bottom margin, adjusted opacity */}
          Let&apos;s discuss your vision and how Aadhi Constructions can bring it to life. Learn more about our process and commitment to quality.
        </p>
        <Button
          asChild
          size="lg"
          // variant="outline" // Removed to ensure explicit classes take precedence for styling
          className="bg-background text-foreground hover:bg-background/90 border-transparent px-12 py-3 text-base font-semibold rounded-md shadow-sm hover:shadow-lg" /* Ensured explicit light bg, dark text, and shadows */
        ><Link href="/about">Learn About Us</Link></Button> 
      </div>
    </section>
  );
}
