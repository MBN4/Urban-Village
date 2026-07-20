'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Search, ChevronDown, Plus } from 'lucide-react';
import { shopHero, shopProducts, filters, bundles } from './data';
import { useCart } from '../../context/CartContext';
import ProductCard from './ProductCard';
import ProductDetailsModal from './ProductDetailsModal';

// A product is buyable only if it has a real PKR price; otherwise it's enquiry-only.
const isPriced = (price: string) => price.startsWith('Rs');

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const { addToCart } = useCart();

  const filteredProducts = activeFilter === 'All' 
    ? shopProducts 
    : shopProducts.filter(p => p.category === activeFilter);

  return (
    <div className="pt-40 text-stone-900 min-h-screen">
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] font-bold tracking-[0.4em] uppercase text-lime mb-6 block"
        >
          {shopHero.subtitle}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-serif font-bold text-stone-900 mb-8"
        >
          {shopHero.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-stone-500 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          {shopHero.description}
        </motion.p>
      </section>

      {/* Filters & Tools */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-16 border-y border-stone-900/10 py-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                activeFilter === filter 
                ? 'bg-lime text-white shadow-lg shadow-lime/20' 
                : 'bg-stone-900/5 text-stone-400 hover:bg-stone-900/10 hover:text-stone-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-8">
          <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-lime transition-colors">
            Sort By <ChevronDown size={14} />
          </button>
          <div className="w-px h-6 bg-stone-900/10 hidden md:block" />
          <div className="flex items-center gap-2 text-stone-200">
            <Search size={18} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent text-[10px] font-bold uppercase tracking-widest focus:outline-none text-stone-900 placeholder:text-stone-200"
            />
          </div>
        </div>
      </section>

      {/* 4. Featured Bundle Section */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <span className="text-[10px] font-bold tracking-[0.4em] text-lime uppercase">CURATED BUNDLES</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 italic">The Ghee <br /> <span className="not-italic">Selection.</span></h2>
              <p className="text-stone-500 text-lg leading-relaxed max-w-md italic">
                Our wood-churned desi ghee, made from premium buffalo milk using traditional methods — bundled so you never run out.
              </p>
              <div className="flex flex-col gap-4">
                {['100% Natural Ingredients', 'Traditional Recipes', 'Preservative-Free'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-lime" />
                    <span className="text-xs font-bold tracking-widest uppercase text-stone-400">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bundles.map((bundle, i) => (
                <motion.div 
                  key={bundle.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="glass-card p-6 group cursor-pointer hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-stone-900/5"
                >
                  <div className="aspect-[4/5] rounded-[24px] overflow-hidden mb-6 relative">
                    <img loading="lazy" decoding="async" src={bundle.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={bundle.title} />
                    <div className="absolute top-4 right-4 bg-lime text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-lime/20">{bundle.price}</div>
                  </div>
                  <h4 className="text-xl font-serif font-bold italic text-stone-900 mb-4">{bundle.title}</h4>
                  <ul className="space-y-2 mb-6">
                    {bundle.items.map(item => (
                      <li key={item} className="text-[10px] uppercase tracking-widest text-stone-400">{item}</li>
                    ))}
                  </ul>
                  {isPriced(bundle.price) ? (
                    <button
                      onClick={() => addToCart({
                        id: bundle.title,
                        name: bundle.title,
                        price: bundle.price,
                        image: bundle.image,
                        category: 'Bundle'
                      })}
                      className="w-full py-4 bg-stone-900/5 border border-stone-900/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-colors"
                    >
                      Add to Basket
                    </button>
                  ) : (
                    <Link
                      href="/contact"
                      className="block text-center w-full py-4 border border-lime/40 text-lime rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-lime hover:text-white transition-colors"
                    >
                      Call to Order
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process Section */}
      <section className="section-padding bg-lime/10 text-stone-900 border-y border-stone-900/5 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
             <h2 className="text-6xl md:text-8xl font-serif font-bold leading-[0.85] tracking-tighter mb-12 italic">From soil <br /> <span className="not-italic opacity-40">to table.</span></h2>
             <div className="space-y-12">
               {[
                 { step: '01', title: 'Carefully Sourced', desc: 'Premium ingredients selected from trusted local farmers and producers.' },
                 { step: '02', title: 'Traditionally Made', desc: 'Prepared in small batches using time-honoured family recipes and methods.' },
                 { step: '03', title: 'Pure & Preservative-Free', desc: 'No artificial colours, flavours, or preservatives — just natural goodness.' }
               ].map(s => (
                 <div key={s.step} className="flex gap-8 group">
                   <div className="text-3xl font-serif font-bold italic text-stone-300 group-hover:text-lime transition-colors">{s.step}</div>
                   <div>
                     <h4 className="text-xl font-bold uppercase tracking-widest mb-2">{s.title}</h4>
                     <p className="text-stone-500 max-w-sm font-medium">{s.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="rounded-[60px] overflow-hidden aspect-square border-8 border-stone-900/5 shadow-2xl">
               <img loading="lazy" decoding="async" src="/assets/images/products/ghee/desi-ghee-both.jpeg" className="w-full h-full object-cover" alt="Wood-churned desi ghee" />
             </div>
          </div>
        </div>
      </section>

      {/* 6. Gift Section */}
      <section className="section-padding">
        <div className="glass-card max-w-5xl mx-auto p-12 md:p-24 text-center relative overflow-hidden bg-white shadow-xl shadow-stone-900/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <span className="text-[10px] font-bold tracking-[0.4em] text-lime uppercase mb-8 block">GIFTING</span>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 italic mb-10">Share the taste <br /> <span className="not-italic">of tradition.</span></h2>
          <p className="text-stone-500 max-w-xl mx-auto mb-12 leading-relaxed">Give the gift of pure, homemade goodness. Our gift cards let your loved ones choose their favourite desi ghee, honey, pickles, and more.</p>
          <button className="bg-stone-900 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-lime transition-all duration-300 shadow-lg shadow-stone-900/20">
            Explorer Gift Cards
          </button>
        </div>
      </section>

      {/* 7. Product Grid Section */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pb-32">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} onOpenDetails={setSelectedProduct} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-40">
            <h3 className="text-2xl font-serif text-stone-200 italic">Nothing found in this season...</h3>
          </div>
        )}
      </section>

      <ProductDetailsModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        addToCart={addToCart}
      />
    </div>
  );
}
