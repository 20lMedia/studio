import Image from 'next/image';
import { ContactForm } from '@/components/contact/ContactForm';
import { companyInfo } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <section>
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://placehold.co/1200x400.png"
            alt="Contact Py Interiors - Modern office view"
            layout="fill"
            objectFit="cover"
            data-ai-hint="office cityscape"
          />
        </div>
      </section>

      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-6">Get In Touch</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We&apos;d love to hear about your project or answer any questions you may have. Reach out to us using the form below or through our contact details.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form and we&apos;ll respond as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="shadow-lg h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Contact Information</CardTitle>
              <CardDescription>Alternatively, you can reach us directly.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Our Office</h3>
                  <p className="text-sm text-muted-foreground">{companyInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <Link href={`mailto:${companyInfo.email}`} className="text-sm text-accent hover:underline">
                    {companyInfo.email}
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <Link href={`tel:${companyInfo.phone}`} className="text-sm text-accent hover:underline">
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
