'use client';

import Link from 'next/link';
import { Leaf } from 'lucide-react';
import { footerLinks, socialLinks } from './data';

export default function Footer() {
  return (
    <footer className="bg-[#DEE8D4] text-stone-900 py-20 px-6 md:px-12 lg:px-20 mt-20 border-t border-stone-900/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-3 mb-8">
            <img 
              src="/assets/images/urban-village-logo.png" 
              alt="Urban Village Logo" 
              className="h-12 w-auto object-contain"
            />
            <span className="text-2xl font-bold tracking-tighter uppercase">Urban Village</span>
          </Link>
          <p className="text-stone-500 max-w-sm mb-8 leading-relaxed text-sm">
            Reimaging our relationship with food. We partner with local regenerative farms to bring you the highest quality, most nutrient-dense produce directly to your doorstep.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                className="text-[10px] uppercase tracking-widest hover:text-lime transition-colors opacity-40 hover:opacity-100 font-bold"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {footerLinks.map((group) => (
          <div key={group.title}>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-stone-900/20">
              {group.title}
            </h4>
            <ul className="flex flex-col gap-4">
              {group.links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path} 
                    className="text-sm hover:text-lime transition-colors font-medium text-stone-900/70"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-stone-900/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">
          © {new Date().getFullYear()} Urban Village • Pure Harvest | Designed & Developed by TopTrending
        </p>
        <div className="flex gap-8 text-[10px] text-stone-400 uppercase tracking-widest font-bold">
          <a href="#" className="hover:text-stone-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
