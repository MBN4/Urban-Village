import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@/index.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingIcons from '@/components/ui/FloatingIcons';
import Preloader from '@/components/ui/Preloader';

export const metadata: Metadata = {
  title: 'Urban Village',
  description: 'Urban Village brings regenerative produce and sustainable farm-to-door delivery to discerning food lovers.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#E9F0E1] text-stone-900 antialiased">
        <CartProvider>
          <Preloader />
          <FloatingIcons />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
