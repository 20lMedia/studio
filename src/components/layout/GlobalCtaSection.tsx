
import Link from 'next/link';
import { globalCtaContactInfo, serviceOptionsForClient } from '@/lib/data'; // Changed import
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GlobalCtaForm } from './GlobalCtaForm';

export function GlobalCtaSection() {
  const AddressIcon = globalCtaContactInfo.icons.address;
  const PhoneIcon = globalCtaContactInfo.icons.phone;
  const EmailIcon = globalCtaContactInfo.icons.email;
  const HoursIcon = globalCtaContactInfo.icons.hours;

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-foreground mb-4">
            Start Your Project
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to build or transform your space? Contact us for a free consultation and let's discuss your dream project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-start">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-lg rounded-lg bg-card">
              <CardHeader className="flex flex-row items-center space-x-4 p-5">
                <AddressIcon className="h-8 w-8 text-primary flex-shrink-0" />
                <CardTitle className="text-xl font-headline text-foreground/90">Visit Our Office</CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0">
                <p className="text-muted-foreground">{globalCtaContactInfo.address}</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-lg bg-card">
              <CardHeader className="flex flex-row items-center space-x-4 p-5">
                <PhoneIcon className="h-8 w-8 text-primary flex-shrink-0" />
                <CardTitle className="text-xl font-headline text-foreground/90">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 space-y-1">
                {globalCtaContactInfo.phoneNumbers.map((phone, index) => (
                  <Link key={index} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-muted-foreground hover:text-primary transition-colors">
                    {phone}
                  </Link>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-lg bg-card">
              <CardHeader className="flex flex-row items-center space-x-4 p-5">
                <EmailIcon className="h-8 w-8 text-primary flex-shrink-0" />
                <CardTitle className="text-xl font-headline text-foreground/90">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0">
                <Link href={`mailto:${globalCtaContactInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors break-all">
                  {globalCtaContactInfo.email}
                </Link>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg rounded-lg bg-card">
                <CardHeader className="flex flex-row items-center space-x-4 p-5">
                    <HoursIcon className="h-8 w-8 text-primary flex-shrink-0" />
                    <CardTitle className="text-xl font-headline text-foreground/90">Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0">
                    {globalCtaContactInfo.businessHours.map((item, index) => (
                        <p key={index} className="text-muted-foreground">
                            <strong>{item.day}:</strong> {item.time}
                        </p>
                    ))}
                </CardContent>
            </Card>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-3">
            <Card className="shadow-xl rounded-lg bg-card p-6 md:p-8">
              <GlobalCtaForm availableServices={serviceOptionsForClient} />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
