import { motion } from 'motion/react';
import { Leaf, Apple, Cherry, Carrot, Soup, Sprout, Wheat } from 'lucide-react';

const icons = [
  { Icon: Leaf, size: 24, color: 'text-lime/20' },
  { Icon: Apple, size: 32, color: 'text-stone-900/10' },
  { Icon: Cherry, size: 20, color: 'text-lime/15' },
  { Icon: Carrot, size: 28, color: 'text-stone-900/5' },
  { Icon: Soup, size: 24, color: 'text-lime/12' },
  { Icon: Sprout, size: 22, color: 'text-lime/14' },
  { Icon: Wheat, size: 30, color: 'text-stone-900/8' },
];

export default function FloatingIcons() {
  const floatingElements = Array.from({ length: 40 }).map((_, i) => {
    const RandomIcon = icons[Math.floor(Math.random() * icons.length)];
    const left = `${Math.random() * 100}%`;
    const top = `${Math.random() * 100}%`;
    const delay = Math.random() * 20;
    const duration = 20 + Math.random() * 20;

    return (
      <motion.div
        key={i}
        className={`fixed overflow-hidden pointer-events-none ${RandomIcon.color}`}
        style={{ left, top }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          y: [0, -150],
          x: [0, (Math.random() - 0.5) * 100],
          rotate: [0, 180]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          delay: delay,
          ease: "linear"
        }}
      >
        <RandomIcon.Icon size={RandomIcon.size} strokeWidth={1} />
      </motion.div>
    );
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-[100]">
      {floatingElements}
    </div>
  );
}
