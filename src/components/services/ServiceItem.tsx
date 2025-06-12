import type { Service } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceItemProps {
  service: Service;
}

export function ServiceItem({ service }: ServiceItemProps) {
  const IconComponent = service.icon;
  return (
    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <CardHeader>
        <div className="mx-auto bg-accent/20 p-4 rounded-full w-fit mb-4">
          <IconComponent className="h-8 w-8 text-accent" />
        </div>
        <CardTitle className="text-xl font-headline">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{service.description}</CardDescription>
      </CardContent>
      {service.startingPrice && (
        <CardFooter className="justify-center">
          <p className="text-sm font-semibold text-foreground">Starting at: {service.startingPrice}</p>
        </CardFooter>
      )}
    </Card>
  );
}
