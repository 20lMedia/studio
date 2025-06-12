
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { navLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30); // Increased scroll threshold slightly
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-background/90 backdrop-blur-lg shadow-lg' : 'bg-background/70 backdrop-blur-md'}`}> {/* Enhanced blur and shadow on scroll */}
      <div className="container mx-auto px-4">
        <div className="flex h-20 md:h-24 items-center justify-between"> {/* Increased height */}
          <Link href="/" className="text-2xl lg:text-3xl font-bold font-headline text-foreground hover:text-primary transition-colors duration-300 ease-in-out"> {/* Adjusted text color, hover to primary */}
            Py Interiors
          </Link>

          <nav className="hidden md:flex space-x-6 lg:space-x-8"> {/* Increased spacing */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm lg:text-base font-medium transition-colors duration-300 ease-in-out hover:text-primary ${
                  pathname === link.href ? 'text-primary font-semibold' : 'text-foreground/80' // Dimmer non-active links
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary"> {/* Adjusted text color */}
                  <Menu className="h-7 w-7" /> {/* Slightly larger icon */}
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-6 shadow-xl"> {/* Added shadow */}
                <div className="flex flex-col space-y-8"> {/* Increased spacing */}
                  <div className="flex justify-between items-center">
                     <Link href="/" className="text-xl font-bold font-headline text-foreground" onClick={closeMobileMenu}>
                        Py Interiors
                      </Link>
                    {/* The SheetContent component already provides a default close button (X) in the top right.
                        The custom SheetClose button below was removed to avoid duplication and styling conflicts.
                    <SheetClose asChild>
                       <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                        <X className="h-7 w-7" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetClose>
                    */}
                  </div>
                  <nav className="flex flex-col space-y-5"> {/* Increased spacing */}
                    {navLinks.map((link) => (
                       <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
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
