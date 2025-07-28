
import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { GlobalCtaSection } from '@/components/layout/GlobalCtaSection';

export const metadata: Metadata = {
  title: 'Aadhi Constructions and Interiors',
  description: 'Top-quality construction and interior design services in Cuddalore, Tamil Nadu. We build your dreams.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Updated Google Fonts: Poppins for headlines, Inter for body */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 pt-20 pb-12 md:pt-24 md:pb-16">
            {children}
          </main>
          <GlobalCtaSection />
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
