'use client';

import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Plus, Minus } from 'lucide-react';
import { aboutHero, pillars, team, practices, faqs } from './data';
import { useState } from 'react';

export default function About() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <div className="pt-40 text-stone-900 overflow-x-hidden">
      {/* 1. Hero */}
      <section className="section-padding max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] font-bold tracking-[0.4em] uppercase text-lime mb-8 block"
        >
          {aboutHero.subtitle}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-9xl font-serif font-bold text-stone-900 mb-12 max-w-4xl italic"
        >
          {aboutHero.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-stone-500 max-w-2xl text-xl leading-relaxed italic font-light"
        >
          "{aboutHero.description}"
        </motion.p>
      </section>

      {/* 2. Dynamic Split Story */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-y border-stone-900/5">
        <div className="relative h-[600px] lg:h-auto bg-[#DEE8D4]/10 flex items-center justify-center p-12 overflow-hidden">
          {/* Layered Visual Composition */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="relative w-full max-w-md aspect-square">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="absolute -top-12 -left-12 w-48 h-64 rounded-[32px] overflow-hidden shadow-2xl z-20 border border-white/20"
            >
              <img src="/assets/images/products/spices/red-chili-flakes.png" className="w-full h-full object-cover" alt="Stone-ground spices" />
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="absolute inset-0 rounded-[48px] overflow-hidden shadow-inner z-10 bg-white p-4"
            >
               <div className="w-full h-full rounded-[32px] overflow-hidden border border-stone-200">
                <img src="/assets/images/products/ghee/desi-ghee-both.jpeg" className="w-full h-full object-cover" alt="Desi ghee" />
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="absolute -bottom-12 -right-12 w-56 h-40 bg-stone-900 rounded-[32px] p-8 z-30 shadow-2xl flex flex-col justify-between"
            >
              <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-lime">METRIC CORE</div>
              <div className="text-3xl font-serif font-bold italic text-white leading-none">98.2% <br /><span className="text-xs uppercase tracking-widest opacity-40 not-italic">Purity</span></div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/2 -right-20 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-white z-40 shadow-lg"
            >
              <ArrowUpRight size={20} />
            </motion.div>
          </div>
        </div>
        <div className="bg-[#DEE8D4]/20 text-stone-900 p-12 md:p-24 lg:p-40 flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 italic">Where integrity meets the earth.</h2>
          <p className="text-stone-500 text-lg leading-relaxed mb-12 space-y-6">
            Industrial agriculture has systemically stripped our soils of vitality. At Urban Village, we’re doing more than just growing organic; we’re rebuilding ecosystems from the ground up.
            <br /><br />
            Our network of farmers utilizes methods that sequester carbon, retain water naturally, and foster a resilience that doesn’t require chemical intervention.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-serif font-bold mb-1 text-stone-900">12k+</div>
              <div className="text-[10px] uppercase tracking-widest text-lime font-bold">Acres Restored</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold mb-1 text-stone-900">2.4m</div>
              <div className="text-[10px] uppercase tracking-widest text-lime font-bold">Carbon Tons Sequestered</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Pillars */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-stone-900">Our Three Pillars</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-[40px] overflow-hidden mb-10 bg-[#DEE8D4]/40">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-6 italic text-stone-900">{pillar.title}</h3>
                <p className="text-stone-500 leading-relaxed text-sm">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Practices (Horizontal Scrolling effect area) */}
      <section className="py-20 bg-[#DEE8D4]/10 border-y border-stone-900/5">
        <div className="flex overflow-hidden whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -800] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 pr-12"
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex gap-12 items-center">
                {practices.map((p) => (
                  <div key={p.title} className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
                    <span className="text-sm font-bold uppercase tracking-[0.3em] text-stone-900">{p.title}</span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Team Section */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
          <div className="lg:w-1/3 sticky top-32">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-lime mb-6 block">KNOWLEDGE</span>
            <h2 className="text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">Guided by science and soul.</h2>
            <p className="text-stone-500 leading-relaxed max-w-sm">
              Our leadership blends advanced agronomy with generational wisdom to push the boundaries of what organic farming can achieve.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-[#DEE8D4]/20 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-900/5 group"
              >
                <h4 className="text-2xl font-serif font-bold text-stone-900 mb-2">{member.name}</h4>
                <div className="text-[10px] font-bold uppercase tracking-widest text-lime mb-8">{member.role}</div>
                <p className="text-sm text-stone-400 group-hover:text-stone-900 transition-colors leading-relaxed italic">"{member.bio}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Transparency Checklist */}
      <section className="section-padding bg-lime/10 text-stone-900 border-y border-stone-900/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="min-w-0">
            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight md:leading-[1.02] mb-12 italic break-words">Total System <br /> <span className="not-italic text-stone-900/40">Transparency.</span></h2>
            <p className="text-xl text-stone-500 font-light max-w-md">Our commitment to truth is baked into our business model, not our marketing.</p>
          </div>
          <div className="space-y-8">
            {[
              'Direct-from-farm supply chain tracking',
              'Open-source regenerative soil metrics',
              'Fair-Pay farm labor audits published yearly',
              'Compostable, plastic-free carbon-neutral shipping',
              'Zero-pesticide, non-GMO heritage seed sourcing'
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-12 h-12 rounded-full bg-stone-900/5 flex items-center justify-center group-hover:bg-lime group-hover:text-white transition-all duration-500 border border-stone-900/5">
                  <CheckCircle2 size={24} />
                </div>
                <span className="text-lg md:text-xl font-serif italic text-stone-900">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Gallery Section */}
      <section className="py-20 px-6 grid grid-cols-2 md:grid-cols-4 gap-6 h-[80vh]">
        <div className="rounded-[40px] overflow-hidden">
          <img src="/assets/images/products/ghee/desi-ghee-1kg.jpeg" className="w-full h-full object-cover" alt="Desi ghee 1kg" />
        </div>
        <div className="grid grid-rows-2 gap-6">
          <div className="rounded-[40px] overflow-hidden"><img src="/assets/images/products/pickles/garlic-pickle.png" className="w-full h-full object-cover" alt="Garlic pickle" /></div>
          <div className="rounded-[40px] overflow-hidden"><img src="/assets/images/products/spices/turmeric-powder.png" className="w-full h-full object-cover" alt="Turmeric powder" /></div>
        </div>
        <div className="rounded-[40px] overflow-hidden">
          <img src="/assets/images/products/poultry/desi-eggs.png" className="w-full h-full object-cover" alt="Desi eggs" />
        </div>
        <div className="grid grid-rows-2 gap-6">
          <div className="rounded-[40px] overflow-hidden bg-stone-900 flex items-center justify-center p-10 text-center">
            <span className="text-xl font-serif text-white italic leading-tight italic">Our mission is written in the earth.</span>
          </div>
          <div className="rounded-[40px] overflow-hidden"><img src="/assets/images/products/pickles/mango-boneless-pickle.png" className="w-full h-full object-cover" alt="Mango pickle" /></div>
        </div>
      </section>

      {/* 9. FAQ Section - Refined Accordion */}
      <section className="section-padding bg-white border-t border-stone-900/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-lime mb-8 block">SYSTEMS SUPPORT</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 leading-tight italic">Anticipating <br /><span className="not-italic text-stone-300">Inquiry.</span></h2>
            <p className="mt-8 text-stone-500 max-w-sm text-lg leading-relaxed">
              We believe in radical transparency. If your question remains unanswered, our agronomists are a message away.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group border-b border-stone-900/5 last:border-0"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full py-8 flex items-center justify-between group-hover:px-4 transition-all duration-500 ease-out text-left"
                >
                  <div className="flex items-center gap-8">
                    <span className="text-[10px] font-bold text-stone-300 font-mono">0{i + 1}</span>
                    <span className={`text-xl md:text-2xl font-serif font-bold transition-all duration-300 ${activeFaq === i ? 'text-lime italic scale-105 origin-left' : 'text-stone-900 group-hover:text-lime'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-2 rounded-full border transition-all duration-500 ${activeFaq === i ? 'bg-stone-900 border-stone-900 text-white rotate-180' : 'bg-transparent border-stone-200 text-stone-400 group-hover:border-lime group-hover:text-lime'}`}>
                    {activeFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 pl-16 pr-12 text-stone-500 leading-relaxed text-lg max-w-2xl italic border-l border-lime ml-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Call to visit */}
      <section className="section-padding text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-10">See it with your own eyes.</h2>
        <p className="text-stone-500 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
          We host weekly farm visits and seasonal harvest dinners. Experience the rhythm of the earth first-hand.
        </p>
        <button className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] border-b-2 border-lime pb-2 hover:text-lime transition-all">
          REQUEST A VISIT <ArrowUpRight size={16} />
        </button>
      </section>
    </div>
  );
}
