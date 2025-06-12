
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { whyChooseUsItems, type WhyChooseUsItem } from "@/lib/data";

function BenefitCard({ item }: { item: WhyChooseUsItem }) {
  const IconComponent = item.icon;
  return (
    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out h-full bg-card rounded-lg"> {/* Ensured bg-card and rounded-lg */}
      <CardHeader className="pt-8"> {/* Increased padding top */}
        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4 border border-primary/30">
          <IconComponent className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-xl font-headline">{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-8"> {/* Increased padding bottom */}
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </CardContent>
    </Card>
  );
}

export function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50 rounded-lg my-12 md:my-16"> {/* Adjusted bg, added md:my-16 */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16"> {/* Added wrapper for text and increased margin */}
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            Why Choose Py Interiors?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We are dedicated to creating spaces that are not just beautiful, but also reflect your personality and enhance your lifestyle.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"> {/* Increased gap */}
          {whyChooseUsItems.map((item) => (
            <BenefitCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
