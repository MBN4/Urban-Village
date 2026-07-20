'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { navLinks, siteName } from './data';
import { useCart } from '../../../context/CartContext';
import { useModal } from '../../../context/ModalContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const { cartCount } = useCart();
  const { isAnyModalOpen } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: (!visible || isAnyModalOpen) ? -140 : 0 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className={`fixed top-0 left-0 w-full z-150 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#E9F0E1]/90 backdrop-blur-md shadow-sm border-b border-stone-900/5' 
          : 'bg-transparent'
      }`}
    >
      <motion.div
        animate={{ 
          height: scrolled ? 0 : 'auto', 
          opacity: scrolled ? 0 : 1 
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="w-full bg-stone-900 text-stone-100 overflow-hidden relative z-50 flex items-center shrink-0"
      >
        <div className="flex whitespace-nowrap py-2.5 min-w-full">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex gap-16 text-[10px] font-bold tracking-[0.3em] uppercase items-center shrink-0 pr-16"
          >
            <span>Free delivery for orders above Rs 5,000</span>
            <span>★</span>
            <span>Pure &amp; Traditional</span>
            <span>★</span>
            <span>Handcrafted in small batches</span>
            <span>★</span>
            <span>Free delivery for orders above Rs 5,000</span>
            <span>★</span>
            <span>Pure &amp; Traditional</span>
            <span>★</span>
            <span>Handcrafted in small batches</span>
            <span>★</span>
            <span>Free delivery for orders above Rs 5,000</span>
            <span>★</span>
            <span>Pure &amp; Traditional</span>
            <span>★</span>
            <span>Handcrafted in small batches</span>
          </motion.div>
        </div>
      </motion.div>

      <div className={`max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}>
        <Link href="/" className="flex items-center gap-3 group">
          <img loading="lazy" decoding="async" 
            src="/assets/images/urban-village-logo.png" 
            alt="Urban Village Logo" 
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-xl font-extrabold tracking-tight uppercase text-stone-900">
            {siteName}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`group relative text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:text-lime ${
                pathname === link.path ? 'text-lime' : 'text-stone-900/80'
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1.5 left-0 h-0.5 bg-lime rounded-full transition-all duration-300 ${
                  pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link href="/cart" className="relative p-2.5 hover:bg-stone-900/5 rounded-full transition-colors text-stone-900">
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-lime text-white text-[9px] font-extrabold flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <Link href="/shop" className="hidden lg:block px-6 py-2.5 bg-stone-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-lime transition-all duration-300 hover:shadow-lg hover:shadow-lime/15">
            Get the basket
          </Link>
          <button 
            className="md:hidden p-2 hover:bg-stone-900/5 rounded-full text-stone-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#E9F0E1] border-b border-stone-900/10 md:hidden shadow-lg"
          >
            <div className="flex flex-col p-8 gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-lg font-bold uppercase tracking-[0.1em] ${
                    pathname === link.path ? 'text-lime' : 'text-stone-900'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/shop"
                className="mt-4 w-full py-3 bg-stone-900 text-white text-center rounded-full text-xs font-bold uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                Get the basket
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}