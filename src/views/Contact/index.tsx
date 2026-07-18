'use client';

import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { contactInfo } from './data';

export default function Contact() {
  return (
    <div className="pt-40 text-stone-900 min-h-screen">
      <section className="section-padding max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2 min-w-0">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-bold tracking-[0.4em] uppercase text-lime mb-8 block"
          >
            {contactInfo.subtitle}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-12 whitespace-pre-line leading-[0.95] italic break-words"
          >
            {contactInfo.title}
          </motion.h1>
          <p className="text-xl text-stone-500 mb-16 max-w-md leading-relaxed">
            {contactInfo.description}
          </p>

          <div className="space-y-10">
            {contactInfo.details.map((detail) => (
              <div key={detail.label}>
                <div className="text-[10px] font-bold uppercase tracking-widest text-stone-300 mb-2">{detail.label}</div>
                <a href={`mailto:${detail.value}`} className="text-2xl font-serif font-bold text-stone-900 border-b border-stone-900/10 hover:border-lime transition-colors pb-1 italic">
                  {detail.value}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-stone-900/5 flex flex-col sm:flex-row gap-12">
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-lime mt-1" />
              <div className="text-sm text-stone-400 leading-relaxed max-w-[180px]">
                {contactInfo.office.address}
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={20} className="text-lime mt-1" />
              <div className="text-sm text-stone-400">
                {contactInfo.office.phone}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 bg-white/40 glass-card p-10 md:p-20 shadow-2xl shadow-stone-900/5 border border-stone-900/5">
          <form className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group relative">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-300 group-focus-within:text-lime transition-colors mb-2 block">First Name</label>
                <input type="text" className="w-full bg-transparent border-b-2 border-stone-900/10 focus:border-lime focus:outline-none py-2 text-lg transition-colors text-stone-900" />
              </div>
              <div className="group relative">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-300 group-focus-within:text-lime transition-colors mb-2 block">Last Name</label>
                <input type="text" className="w-full bg-transparent border-b-2 border-stone-900/10 focus:border-lime focus:outline-none py-2 text-lg transition-colors text-stone-900" />
              </div>
            </div>
            <div className="group relative">
              <label className="text-[10px] uppercase tracking-widest font-bold text-stone-300 group-focus-within:text-lime transition-colors mb-2 block">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b-2 border-stone-900/10 focus:border-lime focus:outline-none py-2 text-lg transition-colors text-stone-900" />
            </div>
            <div className="group relative">
              <label className="text-[10px] uppercase tracking-widest font-bold text-stone-300 group-focus-within:text-lime transition-colors mb-2 block">Subject</label>
              <select className="w-full bg-transparent border-b-2 border-stone-900/10 focus:border-lime focus:outline-none py-2 text-lg transition-colors appearance-none text-stone-900 cursor-pointer">
                <option className="bg-white">General Inquiry</option>
                <option className="bg-white">Wholesale</option>
                <option className="bg-white">Partnership</option>
              </select>
            </div>
            <div className="group relative">
              <label className="text-[10px] uppercase tracking-widest font-bold text-stone-300 group-focus-within:text-lime transition-colors mb-2 block">Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b-2 border-stone-900/10 focus:border-lime focus:outline-none py-2 text-lg transition-colors resize-none overflow-hidden text-stone-900" />
            </div>
            <button className="w-full bg-stone-900 text-white py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 hover:bg-lime transition-all duration-500 group shadow-lg shadow-stone-900/20">
              Send Message <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className="section-padding max-w-7xl mx-auto border-t border-stone-900/5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1">
             <span className="text-[10px] font-bold tracking-[0.4em] text-lime uppercase mb-6 block">SUPPORT</span>
             <h2 className="text-5xl font-serif font-bold text-stone-900 italic leading-tight">Common <br /> <span className="not-italic">Questions.</span></h2>
          </div>
          <div className="lg:col-span-2 space-y-12">
            {[
              { q: 'How do I place an order?', a: 'Browse the shop and add priced items to your basket, or use the "Call to Order" button on any product for prices and orders — we\'ll guide you through the rest.' },
              { q: 'How should I store your products?', a: 'Store in a cool, dry place away from direct sunlight, and always use a clean, dry spoon for pickles, chutneys, honey, and ghee. White butter is best kept in the freezer.' },
              { q: 'What makes your food special?', a: 'Everything is 100% natural, made in small batches from premium ingredients using traditional recipes — with no artificial colours, flavours, or preservatives.' },
               { q: 'Do you offer wholesale?', a: 'Yes. For bulk and wholesale enquiries, reach out to us by phone or email and we\'ll be happy to help.' }
            ].map((faq, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group"
              >
                <div className="text-lg font-serif font-bold text-stone-900 mb-4 group-hover:text-lime transition-colors italic">0{i+1}. {faq.q}</div>
                <p className="text-stone-500 text-sm leading-relaxed max-w-xl pl-8 border-l border-stone-900/10 group-hover:border-lime transition-colors">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Map Placeholder */}
      <section className="px-6 pb-20">
        <div className="w-full h-[500px] bg-[#DEE8D4]/50 rounded-[60px] overflow-hidden transition-all duration-700 cursor-help flex items-center justify-center relative">
           <img loading="lazy" decoding="async" src="/assets/images/products/spices/pink-himalayan-salt.png" className="w-full h-full object-cover" alt="Pink Himalayan salt" />
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3">
               <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
               <span className="text-xs font-bold uppercase tracking-widest">Our Head Office</span>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
