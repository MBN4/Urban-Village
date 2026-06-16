'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Sprout } from 'lucide-react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-col items-center">
            {/* Ground Line */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-lime/30 z-0"
            />

            <div className="relative">
              <motion.div
                initial={{ 
                  clipPath: 'inset(100% 0% 0% 0%)',
                  scale: 0.8,
                  y: 20
                }}
                animate={{ 
                  clipPath: 'inset(0% 0% 0% 0%)',
                  scale: 1,
                  y: 0
                }}
                transition={{ 
                  duration: 1.5, 
                  ease: [0.16, 1, 0.3, 1], // Custom curve
                  delay: 0.2
                }}
                className="relative z-10 text-lime"
              >
                <Sprout size={64} strokeWidth={1} />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 3, opacity: 0.1 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute inset-0 bg-lime rounded-full blur-3xl -z-10"
              />
            </div>
          </div>

          <div className="mt-12 overflow-hidden h-6">
            <motion.div
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-3">
                <img 
                  src="/assets/images/urban-village-logo.png" 
                  alt="Urban Village Logo" 
                  className="h-8 w-auto object-contain grayscale opacity-60"
                />
                <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-stone-400">Urban Village</span>
              </div>
              <div className="mt-4 flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scaleY: [1, 2, 1],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{ 
                      duration: 1, 
                      repeat: Infinity, 
                      delay: i * 0.2 
                    }}
                    className="w-0.5 h-3 bg-lime"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
