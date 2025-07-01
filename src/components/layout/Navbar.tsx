
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react'; // Removed X as it's handled by SheetClose
import { useState, useEffect } from 'react';
import { navLinks, companyInfo } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Logo } from './Logo'; // Import the new Logo component

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-background/90 backdrop-blur-lg shadow-lg' : 'bg-background/90 backdrop-blur-md'}`}>
      <div className="container mx-auto px-4">
        <div className="flex h-20 md:h-24 items-center justify-between">
          <Link href="/" aria-label={`${companyInfo.name} Home`} className="hover:opacity-80 transition-opacity duration-300 ease-in-out">
            <Logo className="h-10 md:h-12 w-auto" />
          </Link>

          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm lg:text-base font-medium transition-colors duration-300 ease-in-out hover:text-primary ${
                  pathname === link.href ? 'text-primary font-semibold' : 'text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                  <Menu className="h-7 w-7" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-6 shadow-xl">
                <div className="flex flex-col space-y-8">
                  <div className="flex justify-between items-center">
                     <Link href="/" aria-label={`${companyInfo.name} Home`} onClick={closeMobileMenu}>
                        <Logo className="h-10 w-auto" />
                      </Link>
                    {/* Default SheetClose (X button) is provided by SheetContent */}
                  </div>
                  <nav className="flex flex-col space-y-5">
                    {navLinks.map((link) => (
                       <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          onClick={closeMobileMenu} // Ensure menu closes on link click
                          className={`text-lg font-medium transition-colors duration-300 ease-in-out hover:text-primary ${
                            pathname === link.href ? 'text-primary font-semibold' : 'text-foreground/80'
                          }`}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
