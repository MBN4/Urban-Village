'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { journalHero, articles } from './data';

export default function Journal() {
  return (
    <div className="pt-40 text-stone-900 min-h-screen">
      <section className="section-padding max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
          <div className="lg:w-2/3">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-lime mb-8 block">
              {journalHero.subtitle}
            </span>
            <h1 className="text-6xl md:text-9xl font-serif font-bold text-stone-900 leading-[0.85] whitespace-pre-line italic">
              {journalHero.title}
            </h1>
          </div>
          <div className="lg:w-1/3">
            <p className="text-xl text-stone-500 leading-relaxed font-light italic">
              "{journalHero.description}"
            </p>
          </div>
        </div>
      </section>

      {/* 3. Category Filter Section */}
      <section className="py-20 bg-[#DEE8D4]/30 border-y border-stone-900/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12">
          {['Agroecology', 'Chef Series', 'Soil Health', 'Farms', 'Future Food'].map((cat, i) => (
            <button key={cat} className="group flex flex-col items-center">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-200 group-hover:text-lime transition-colors mb-2">0{i+1}</span>
              <span className="text-lg font-serif font-bold italic text-stone-900 group-hover:translate-y-[-4px] transition-transform">{cat}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 4. Trending Section */}
      <section className="section-padding bg-[#DEE8D4]/20 border-b border-stone-900/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <span className="text-[10px] font-bold tracking-[0.4em] text-lime uppercase">TRENDING NOW</span>
            <div className="space-y-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-8 group cursor-pointer pb-8 border-b border-stone-900/5">
                  <div className="text-2xl font-serif font-bold italic text-stone-200 group-hover:text-lime transition-all">0{i}.</div>
                  <div>
                    <h4 className="text-xl font-serif font-bold text-stone-900 mb-2 group-hover:italic transition-all">The Future of Heirloom Seeds in Changing Climates.</h4>
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">5 MIN READ • FARMING</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-12 flex flex-col justify-center bg-white/40 shadow-xl shadow-stone-900/5 border border-stone-900/5">
            <h3 className="text-3xl font-serif font-bold italic text-stone-900 mb-8">Weekly Digest</h3>
            <p className="text-stone-500 mb-10 leading-relaxed italic font-light">
              "Every Friday, we send out a curated selection of farm updates, soil metrics, and seasonal recipes. No fluff, just the rhythm of the earth."
            </p>
            <div className="flex flex-col gap-4">
              <input type="email" placeholder="EMAIL ADDRESS" className="bg-stone-900/5 border border-stone-900/10 px-6 py-4 rounded-full focus:outline-none focus:border-lime transition-colors text-xs font-bold uppercase tracking-widest text-stone-900" />
              <button className="bg-stone-900 text-white py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-lime transition-colors shadow-lg shadow-stone-900/20">Join 12,000 Readers</button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Article Grid */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article, i) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer bg-white/40 glass-card p-8 shadow-sm hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-500 border border-transparent hover:border-stone-900/5"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-[40px] mb-8 relative border border-stone-900/5">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 border border-stone-900/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-lime shadow-sm">
                  {article.category}
                </span>
              </div>
              <div className="px-4">
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-stone-300 mb-4 font-mono">
                  <span>{article.date}</span>
                  <div className="w-1 h-1 bg-stone-300 rounded-full" />
                  <span>By {article.author}</span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-stone-900 mb-8 group-hover:text-lime transition-colors leading-tight italic">
                  {article.title}
                </h3>
                <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-lime hover:translate-x-2 transition-transform duration-300">
                  READ STORY <ArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Featured Big Article */}
      <section className="section-padding bg-[#DEE8D4]/40 text-stone-900 border-t border-stone-900/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
             <div className="rounded-[40px] overflow-hidden aspect-video lg:aspect-square border border-stone-900/5 shadow-2xl shadow-stone-900/5">
               <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" referrerPolicy="no-referrer" alt="Featured" />
             </div>
          </div>
          <div className="lg:w-1/2">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-lime mb-8 block">MAY FEATURE</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-10 leading-tight italic text-stone-900">Living Soil: The Hidden Engine of Health.</h2>
            <p className="text-stone-500 text-lg leading-relaxed mb-12 italic border-l border-lime pl-8">
              Understanding why traditional organic isn’t enough anymore, and why the future of flavor lies in the complex microbiology beneath our feet.
            </p>
            <button className="bg-stone-900 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-lime transition-all duration-300 shadow-lg shadow-stone-900/20">
              Read Deep Dive
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
