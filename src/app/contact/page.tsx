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
            src={`https://source.unsplash.com/featured/1200x400/?${encodeURIComponent('office cityscape')}`}
            alt="Contact Py Interiors - Modern office view"
            layout="fill"
            objectFit="cover"
            data-ai-hint="office cityscape"
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
    </div>
  );
}
