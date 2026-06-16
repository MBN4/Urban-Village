'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { navLinks, siteName } from './data';
import { useCart } from '../../../context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled enough to change background
      setScrolled(currentScrollY > 50);

      // Determine visibility based on scroll direction
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
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 w-full z-150 transition-colors duration-500 ${
        scrolled ? 'bg-[#E9F0E1]/90 backdrop-blur-md py-4 border-b border-stone-900/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="/assets/images/urban-village-logo.png" 
            alt="Urban Village Logo" 
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-2xl font-bold tracking-tighter uppercase text-stone-900">
            {siteName}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors hover:text-lime ${
                pathname === link.path ? 'text-lime' : 'text-stone-900/60'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link href="/cart" className="relative p-2 hover:bg-stone-900/5 rounded-full transition-colors text-stone-900">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-lime text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <Link href="/shop" className="hidden lg:block px-6 py-2 bg-stone-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-lime transition-colors">
            Get the basket
          </Link>
          <button 
            className="md:hidden p-2 hover:bg-stone-900/5 rounded-full text-stone-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-stone-900/10 md:hidden"
          >
            <div className="flex flex-col p-8 gap-6 text-stone-900">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-xl font-serif font-medium text-stone-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
