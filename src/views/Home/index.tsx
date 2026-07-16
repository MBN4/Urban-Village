'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Truck, Recycle, Plus } from 'lucide-react';
import Link from 'next/link';
import { heroData, heroSlides, marqueeItems, productCategories, storyData, products, testimonials, benefits, farmLogos } from './data';
import { useCart } from '../../context/CartContext';

// A product is buyable only if it has a real PKR price; otherwise it's enquiry-only.
const isPriced = (price: string) => price.startsWith('Rs');

export default function Home() {
  const { addToCart } = useCart();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[activeSlide];
  return (
    <div className="flex flex-col text-stone-900 selection:bg-lime selection:text-white">
      {/* 1. Hero Section - Immersive Layout */}
      <section className="relative min-h-screen flex flex-col pt-28 px-6 bg-linear-to-br from-[#E9F0E1] via-[#DEE8D4] to-lime/10 overflow-hidden">
        <main className="grid grid-cols-12 gap-6 items-center max-w-7xl mx-auto w-full pt-8 pb-12">
          {/* Vertical Metadata Sidebar */}
          <div className="col-span-1 hidden lg:flex flex-col justify-between gap-12 py-4 border-l border-stone-900/5 pl-4 self-stretch">
            <div className="vertical-text text-[10px] tracking-[0.6em] opacity-30 font-bold uppercase whitespace-nowrap">
EST. 2024 — PURE &amp; DESI
            </div>
            <div className="flex flex-col space-y-4 items-center">
              <div className="w-2 h-2 rounded-full bg-lime" />
              <div className="w-2 h-2 rounded-full bg-stone-900/10" />
              <div className="w-2 h-2 rounded-full bg-stone-900/10" />
            </div>
          </div>

          {/* Main Hero Text */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block px-4 py-1.5 bg-lime/10 text-lime border border-lime/20 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase w-fit"
            >
              Pure • Handmade • Desi
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-7xl font-serif leading-[0.95] tracking-tighter text-stone-900"
            >
              <span className="italic">Where taste</span> <br />
              <span className="font-bold not-italic">meets</span> <span className="font-bold not-italic text-lime">tradition.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-stone-600 max-w-md leading-relaxed"
            >
              Wood-churned desi ghee, hand-cut achaar, and stone-ground spices — made in small batches, the honest way.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <Link href="/shop" className="px-8 py-4 bg-lime text-white rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-lime/20 flex items-center justify-center">
                Shop Now
              </Link>
              <button className="px-8 py-4 bg-stone-900/5 border border-stone-900/10 text-stone-900 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-stone-900/10 transition-all">
                Our Story
              </button>
            </motion.div>
          </div>

          {/* Featured Ghee Slider */}
          <div className="col-span-12 lg:col-span-5 flex items-center justify-center relative pb-12">
            {/* soft radial glow behind the jars */}
            <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-lime/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative w-full max-w-sm flex items-center justify-center">
              {/* floating image stage — the jar is the element that lines up with the headline;
                  the name/price/indicators float just beneath it so they don't shift the jar off-axis */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full aspect-square"
              >
                <AnimatePresence>
                  <motion.img
                    key={activeSlide}
                    src={slide.image}
                    alt={slide.name}
                    initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.08, rotate: 6 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
                  />
                </AnimatePresence>

                <div className="absolute top-full inset-x-0 mt-6 flex flex-col items-center gap-6">
                  {/* name / price / add */}
                  <motion.div
                    key={`meta-${activeSlide}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-between w-full gap-4"
                  >
                    <div>
                      <h3 className="text-2xl font-serif font-bold italic text-stone-900">{slide.name}</h3>
                      <span className="text-lg font-bold text-lime">{slide.price}</span>
                    </div>
                    <button
                      onClick={() => addToCart(slide)}
                      className="w-12 h-12 shrink-0 rounded-full bg-stone-900 text-white flex items-center justify-center cursor-pointer hover:bg-lime transition-all duration-300 shadow-lg shadow-stone-900/10"
                      aria-label={`Add ${slide.name} to cart`}
                    >
                      <Plus size={20} />
                    </button>
                  </motion.div>

                  {/* slide indicators */}
                  <div className="flex gap-2.5">
                    {heroSlides.map((s, i) => (
                      <button
                        key={s.id}
                        onClick={() => setActiveSlide(i)}
                        aria-label={`Show ${s.name}`}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          i === activeSlide ? 'w-8 bg-lime' : 'w-1.5 bg-stone-900/20 hover:bg-stone-900/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </section>

      {/* 2. Marquee Section - Product Showcase */}
      <section className="marquee-container py-12 overflow-hidden whitespace-nowrap border-y border-stone-900/5 bg-stone-900/[0.02]">
        <div className="flex">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 items-center pr-12"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex gap-12 items-center">
                {products.map((product) => (
                  <div key={product.id} className="flex items-center gap-8 group">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border border-stone-900/10 glass-card">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl md:text-3xl font-serif italic text-stone-900 tracking-tighter group-hover:text-lime transition-colors">
                        {product.name}
                      </span>
                      <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">{product.tag}</span>
                    </div>
                    <span className="text-4xl opacity-10 font-light mx-4">—</span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Grid Display Section */}
      <section className="section-padding max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-lime mb-4 block">CATEGORIES</span>
            <h2 className="text-6xl md:text-8xl font-serif font-bold italic text-stone-900 leading-[0.9]">Seasonal <br /> <span className="not-italic">Purity.</span></h2>
          </div>
          <p className="text-stone-400 max-w-xs text-sm leading-relaxed mb-4 lg:mb-10 uppercase tracking-widest font-bold">
            CURATED ASSORTMENTS THAT FOLLOW THE DRUMBEAT OF NATURE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {productCategories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group cursor-pointer glass-card p-6"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-[#DEE8D4]/50 mb-8 relative">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-3xl font-serif font-bold italic text-stone-900">{category.title}</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-lime">{category.count}</span>
              </div>
              <p className="text-sm text-stone-500 leading-relaxed font-medium">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Philosophy Section */}
      <section className="bg-[#DEE8D4]/30 border-y border-stone-900/5 section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            {[
              { label: 'Soil Vitality', value: '88%', sub: 'BIOME SCORE', icon: '01' },
              { label: 'Biodynamic', value: 'Waxing', sub: 'LUNAR PHASE', icon: '02' },
              { label: 'Mineral Density', value: '14.2x', sub: 'NUTRIENT RATIO', icon: '03' },
              { label: 'Carbon Sink', value: '-2.4t', sub: 'NET OFFSET', icon: '04' }
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="glass-card p-8 flex flex-col justify-between aspect-square group hover:bg-lime hover:text-white transition-all duration-500 cursor-help"
              >
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold tracking-widest opacity-40 group-hover:opacity-100 italic transition-opacity">{metric.icon}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-lime group-hover:bg-white transition-colors" />
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-serif font-bold italic mb-2 tracking-tighter">{metric.value}</div>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">{metric.sub}</div>
                  <div className="text-sm font-bold uppercase tracking-widest mt-4">{metric.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-lime mb-8 block">
              {storyData.subtitle}
            </span>
            <h2 className="text-6xl md:text-8xl font-serif font-bold text-stone-900 mb-10 leading-tight italic">
              {storyData.title}
            </h2>
            <p className="text-2xl md:text-3xl text-stone-700 leading-relaxed mb-12 font-serif italic border-l-2 border-lime pl-8">
              "{storyData.description}"
            </p>
            <button className="text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-4 text-lime hover:translate-x-2 transition-transform">
              EXPLORE OUR PROTOCOLS <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Benefits Summary */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-12 flex flex-col items-center text-center group hover:border-lime/30 transition-colors"
            >
              <div className="w-20 h-20 bg-lime/10 rounded-3xl mb-10 flex items-center justify-center text-lime group-hover:scale-110 transition-transform duration-500">
                {i === 0 && <ShieldCheck size={40} />}
                {i === 1 && <Recycle size={40} />}
                {i === 2 && <Truck size={40} />}
              </div>
              <h3 className="text-2xl font-serif font-bold italic mb-6 text-stone-900">{benefit.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed max-w-[240px]">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Products Grid */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-lime mb-6 block">CURATED PANTRY</span>
            <h2 className="text-6xl md:text-8xl font-serif font-bold text-stone-900 italic">Artisan <span className="not-italic">Selection.</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 glass-card hover:bg-stone-900/[0.04] transition-all duration-500"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl mb-8 border border-stone-900/5">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-lime text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg shadow-lime/20">
                    {product.tag}
                  </span>
                </div>
                <h4 className="text-xl font-serif font-bold mb-2 italic text-stone-900">{product.name}</h4>
                <div className="flex justify-between items-center">
                  {isPriced(product.price) ? (
                    <>
                      <span className="text-lime font-bold text-lg">{product.price}</span>
                      <button
                        onClick={() => addToCart(product)}
                        className="text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-lime transition-all"
                      >
                        Add to Box +
                      </button>
                    </>
                  ) : (
                    <>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-lime">Call for Query</span>
                      <Link
                        href="/contact"
                        className="text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-lime transition-all"
                      >
                        Call to Order
                      </Link>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter Section */}
      <section className="section-padding bg-lime/10 text-stone-900 border-y border-stone-900/5">
        <div className="max-w-5xl mx-auto text-center py-12">
            <h2 className="text-5xl md:text-8xl font-serif font-bold leading-tight mb-12">
              Join the <br /> <span className="italic">Harvest Circle.</span>
            </h2>
            <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4 mb-10">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="flex-1 bg-stone-900/5 px-8 py-5 rounded-full border-2 border-stone-900/10 focus:outline-none focus:border-lime transition-colors font-bold text-xs"
              />
              <button className="bg-lime text-white px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-lime/90 transition-colors shadow-lg shadow-lime/20">
                Subscribe
              </button>
            </div>
            <p className="text-[10px] opacity-60 tracking-[0.3em] font-bold uppercase">
              NO SPAM. ONLY SEASONAL UPDATES.
            </p>
        </div>
      </section>

      {/* 8. Living Systems Section */}
      <section className="section-padding bg-[#DEE8D4]/40 overflow-hidden border-t border-stone-900/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="text-[10px] font-bold tracking-[0.4em] text-lime uppercase mb-8 block">THE LIVING ENGINE</span>
              <h2 className="text-6xl md:text-8xl font-serif font-bold text-stone-900 leading-[0.85] italic mb-10">
                Responsive <br /> <span className="not-italic text-stone-900/40">Ecology.</span>
              </h2>
              <div className="space-y-8">
                {[
                  { label: 'Photosynthetic Efficiency', value: 92, unit: '%' },
                  { label: 'Microbial Activity', value: 3.4, unit: 'x' },
                  { label: 'Carbon Sequestration', value: 1240, unit: 'kg' }
                ].map((stat, i) => (
                  <div key={stat.label} className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{stat.label}</span>
                      <span className="text-xl font-serif italic text-stone-900">{stat.value}{stat.unit}</span>
                    </div>
                    <div className="h-0.5 w-full bg-stone-900/5 relative overflow-hidden">
                      <motion.div 
                        initial={{ x: '-100%' }}
                        whileInView={{ x: '0%' }}
                        transition={{ duration: 1.5, delay: i * 0.2 }}
                        className="absolute inset-0 bg-lime"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative aspect-square">
              {/* Biological Node Grid */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2 opacity-50">
                {[...Array(36)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ 
                      opacity: [0.1, 0.5, 0.1],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 3 + Math.random() * 4, 
                      repeat: Infinity,
                      delay: Math.random() * 5
                    }}
                    className="w-1 h-1 bg-lime rounded-full"
                  />
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center px-6"
              >
                <div className="relative w-full h-full">
                  {/* Floating Data Bubbles */}
                  {[
                    { label: 'pH', value: '6.4', x: '10%', y: '20%' },
                    { label: 'NITROGEN', value: '42ppm', x: '80%', y: '15%' },
                    { label: 'MOISTURE', value: '18%', x: '5%', y: '75%' },
                    { label: 'TEMP', value: '22°C', x: '85%', y: '80%' },
                  ].map((data, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4 + i, repeat: Infinity }}
                      className="absolute glass-card px-4 py-2 flex flex-col items-start min-w-[80px]"
                      style={{ left: data.x, top: data.y }}
                    >
                      <span className="text-[7px] font-bold opacity-30 tracking-[0.2em] uppercase">{data.label}</span>
                      <span className="text-xs font-serif font-bold italic text-lime">{data.value}</span>
                    </motion.div>
                  ))}

                  {/* Central Bio-Core */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ duration: 10, repeat: Infinity }}
                      className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-lime/20 flex flex-col items-center justify-center text-center p-12 relative"
                    >
                      <div className="absolute inset-0 bg-lime/10 blur-3xl rounded-full" />
                      <div className="relative z-10 px-4">
                        <div className="text-[10px] font-bold tracking-[0.4em] uppercase text-lime mb-3">DYNAMIC CORE</div>
                        <div className="text-5xl md:text-6xl font-serif font-bold italic text-stone-900 mb-6">Pulse.</div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 leading-relaxed max-w-[200px]">
                          Real-time soil health metrics synchronized with the circadian rhythm.
                        </p>
                      </div>
                      
                      {/* Rotating Outer Rings */}
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-[10px] border-t border-r border-stone-900/10 rounded-full"
                      />
                      <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-[30px] border-b border-l border-stone-900/10 rounded-full"
                      />
                      
                      {/* Pulse Ring */}
                      <motion.div 
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 border border-lime rounded-full"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
