import type { Service } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceItemProps {
  service: Service;
}

export function ServiceItem({ service }: ServiceItemProps) {
  const IconComponent = service.icon;
  return (
    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out h-full flex flex-col bg-card rounded-lg p-2"> {/* Ensured bg-card, rounded-lg, added p-2 */}
      <CardHeader className="pt-8 pb-4"> {/* Adjusted padding */}
        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-6 border border-primary/30"> {/* Increased margin bottom */}
          <IconComponent className="h-10 w-10 text-primary" /> {/* Increased icon size, use primary color */}
        </div>
        <CardTitle className="text-xl lg:text-2xl font-headline">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow pb-4"> {/* Adjusted padding */}
        <CardDescription className="leading-relaxed text-muted-foreground">{service.description}</CardDescription>
      </CardContent>
      {service.startingPrice && (
        <CardFooter className="justify-center pt-2 pb-8"> {/* Adjusted padding */}
          <p className="text-sm font-semibold text-foreground">{service.startingPrice}</p>
        </CardFooter>
      )}
    </Card>
  );
}
