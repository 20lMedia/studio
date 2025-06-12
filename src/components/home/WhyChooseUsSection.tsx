
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { whyChooseUsItems, type WhyChooseUsItem } from "@/lib/data";

function BenefitCard({ item }: { item: WhyChooseUsItem }) {
  const IconComponent = item.icon;
  return (
    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader>
        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4 border border-primary/30">
          <IconComponent className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-xl font-headline">{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </CardContent>
    </Card>
  );
}

export function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50 rounded-lg my-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-4">
          Why Choose Py Interiors?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          We are dedicated to creating spaces that are not just beautiful, but also reflect your personality and enhance your lifestyle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUsItems.map((item) => (
            <BenefitCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
