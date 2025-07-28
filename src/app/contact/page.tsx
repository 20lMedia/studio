
import Image from 'next/image';
import { ContactForm } from '@/components/contact/ContactForm';
import { companyInfo } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="space-y-16 md:space-y-20"> {/* Consistent spacing */}
      <section>
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
          <Image
            src={`https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            alt="Contact Aadhi Constructions - Modern office building"
            layout="fill"
            objectFit="cover"
            data-ai-hint="office building exterior"
            priority
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-6">Get In Touch</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We&apos;d love to hear about your project or answer any questions you may have. Reach out to us using the form below or through our contact details.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"> {/* Increased gap */}
        <div>
          <Card className="shadow-lg rounded-lg bg-card"> {/* Ensured bg-card, rounded-lg */}
            <CardHeader className="p-6 md:p-8"> {/* Increased padding */}
              <CardTitle className="text-2xl font-headline">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form and we&apos;ll respond as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8 pt-0"> {/* Increased padding */}
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="shadow-lg h-full rounded-lg bg-card"> {/* Ensured bg-card, rounded-lg */}
            <CardHeader className="p-6 md:p-8"> {/* Increased padding */}
              <CardTitle className="text-2xl font-headline">Contact Information</CardTitle>
              <CardDescription>Alternatively, you can reach us directly.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-6 md:p-8 pt-0"> {/* Increased padding, space */}
              <div className="flex items-start space-x-4"> {/* Increased space */}
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" /> {/* Use primary color */}
                <div>
                  <h3 className="font-semibold text-foreground/90 text-lg mb-1">Our Office</h3> {/* Increased text size, margin */}
                  <p className="text-sm text-muted-foreground">{companyInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4"> {/* Increased space */}
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" /> {/* Use primary color */}
                <div>
                  <h3 className="font-semibold text-foreground/90 text-lg mb-1">Email Us</h3> {/* Increased text size, margin */}
                  <Link href={`mailto:${companyInfo.email}`} className="text-sm text-primary hover:underline hover:text-primary/80 transition-colors duration-300 ease-in-out">
                    {companyInfo.email}
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-4"> {/* Increased space */}
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" /> {/* Use primary color */}
                <div>
                  <h3 className="font-semibold text-foreground/90 text-lg mb-1">Call Us</h3> {/* Increased text size, margin */}
                  <Link href={`tel:${companyInfo.phone}`} className="text-sm text-primary hover:underline hover:text-primary/80 transition-colors duration-300 ease-in-out">
                    {companyInfo.phone}
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Find Us on the Map</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Visit us at our location or find us easily on Google Maps.
        </p>
        <div className="aspect-video max-w-5xl mx-auto bg-muted rounded-lg shadow-xl border border-border overflow-hidden">
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(companyInfo.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Company Location Map for ${companyInfo.name}`}
          ></iframe>
        </div>
      </section>
    </div>
  );
}
