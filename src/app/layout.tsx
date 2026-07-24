import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@/index.css';
import { CartProvider } from '@/context/CartContext';
import { ModalProvider } from '@/context/ModalContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingIcons from '@/components/ui/FloatingIcons';
import Preloader from '@/components/ui/Preloader';

export const metadata: Metadata = {
  title: 'Urban Village',
  description: 'The Urban Village brings authentic, traditionally crafted foods — pure desi ghee, natural honey, handmade pickles, chutneys, and stone-ground spices — from rural farms to modern homes.',
  icons: {
    icon: [
      {
        url: '/assets/images/urban-village-logo.png',
        href: '/assets/images/urban-village-logo.png',
      },
    ],
    shortcut: '/assets/images/urban-village-logo.png',
    apple: '/assets/images/urban-village-logo.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#E9F0E1] text-stone-900 antialiased">
        <CartProvider>
          <ModalProvider>
            <Preloader />
            <FloatingIcons />
            <Navbar />
            <main className="relative z-10">{children}</main>
            <Footer />
          </ModalProvider>
        </CartProvider>
      </body>
    </html>
  );
}