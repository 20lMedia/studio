
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { whyChooseUsItems, type WhyChooseUsItem } from "@/lib/data";
import type { Icon } from "lucide-react";

function BenefitCard({ item }: { item: WhyChooseUsItem }) {
  const IconComponent = item.icon;
  return (
    <div className="flex items-start space-x-3 md:space-x-6"> {/* Changed space-x-4 to space-x-3 for mobile */}
      <div className="flex-shrink-0 bg-primary/10 p-3 md:p-4 rounded-full w-fit border border-primary/20 mt-1">
        <IconComponent className="h-6 w-6 md:h-7 md:w-7 text-primary" />
      </div>
      <div className="flex-grow">
        <h3 className="text-lg md:text-xl font-headline font-semibold mb-1 text-foreground">{item.title}</h3>
        <p className="text-sm text-muted-foreground leading-normal">{item.description}</p> {/* Changed leading-relaxed to leading-normal */}
      </div>
    </div>
  );
}

export function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            Why Choose Py Interiors?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We are dedicated to creating spaces that are not just beautiful, but also reflect your personality and enhance your lifestyle.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-8 md:space-y-10"> {/* This provides vertical spacing */}
          {whyChooseUsItems.map((item) => (
            <BenefitCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
