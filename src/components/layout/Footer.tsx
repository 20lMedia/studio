import Link from 'next/link';
import { navLinks, companyInfo } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-16 md:py-20 mt-16"> {/* Increased padding and margin-top */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12"> {/* Increased gap */}
          <div>
            <h3 className="text-xl lg:text-2xl font-headline font-semibold mb-6 text-foreground">Py Interiors</h3> {/* Use foreground, increased margin */}
            <p className="text-sm mb-3 text-muted-foreground">{companyInfo.address}</p>
            <p className="text-sm mb-1"><Link href={`mailto:${companyInfo.email}`} className="hover:text-primary transition-colors duration-300 ease-in-out text-muted-foreground hover:underline">{companyInfo.email}</Link></p>
            <p className="text-sm"><Link href={`tel:${companyInfo.phone}`} className="hover:text-primary transition-colors duration-300 ease-in-out text-muted-foreground hover:underline">{companyInfo.phone}</Link></p>
          </div>
          <div>
            <h4 className="text-lg lg:text-xl font-headline font-medium mb-6 text-foreground">Quick Links</h4> {/* Use foreground, increased margin */}
            <ul className="space-y-3"> {/* Increased spacing */}
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-colors duration-300 ease-in-out">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg lg:text-xl font-headline font-medium mb-6 text-foreground">Connect</h4> {/* Use foreground, increased margin */}
            <p className="text-sm text-muted-foreground">Follow us on social media for the latest updates and inspiration.</p>
            {/* Placeholder for actual social media icons/links */}
          </div>
        </div>
        <div className="mt-16 pt-10 border-t border-border text-center"> {/* Increased margins */}
          <p className="text-xs text-muted-foreground">&copy; {currentYear} Py Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
