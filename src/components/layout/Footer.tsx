import Link from 'next/link';
import { navLinks, companyInfo } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-headline font-semibold mb-4">Py Interiors</h3>
            <p className="text-sm mb-2">{companyInfo.address}</p>
            <p className="text-sm"><Link href={`mailto:${companyInfo.email}`} className="hover:text-accent transition-colors">{companyInfo.email}</Link></p>
            <p className="text-sm"><Link href={`tel:${companyInfo.phone}`} className="hover:text-accent transition-colors">{companyInfo.phone}</Link></p>
          </div>
          <div>
            <h4 className="text-lg font-headline font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-headline font-medium mb-4">Connect</h4>
            {/* Placeholder for social media icons */}
            <p className="text-sm">Follow us on social media for the latest updates and inspiration.</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs">&copy; {currentYear} Py Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
