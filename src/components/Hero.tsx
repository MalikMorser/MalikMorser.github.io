import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const AnimatedText = ({ text, className }: { text: string, className?: string }) => (
  <span className={className}>{text}</span>
);

const StaggeredName = ({ name, delay = 0, outline = false }: { name: string, delay?: number, outline?: boolean }) => {
  return (
    <span className={cn("inline-flex flex-wrap", outline && "text-outline-vthick")} style={{ perspective: "1000px" }}>
      {name.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0, filter: "blur(10px)", rotateX: 90 }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)", rotateX: 0 }}
          transition={{
            duration: 1.2,
            delay: delay + i * 0.05,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="inline-block origin-bottom"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export const Hero = ({ t }: { t: any }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);
  const rotate = useTransform(scrollY, [0, 500], [0, -2]);

  return (
    <section id="hero" className="relative flex flex-col justify-end px-6 md:px-12 min-h-screen pb-16 overflow-hidden bg-transparent">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      
      {/* Decorative Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5 hidden md:block" />

      <motion.div style={{ opacity, scale, rotate }} className="relative z-10 w-full">
        <div>
          {/* Top Meta Info */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-1"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 block">
                STATUS: {t.activeUplink}
              </span>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white uppercase italic">
                {t.role}
              </h2>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-[10px] text-white/20 uppercase tracking-widest text-right hidden md:block"
            >
              EST. 2015 // DIGITAL_ARCHITECT
            </motion.div>
          </div>

          {/* Massive Typography */}
          <div className="relative">
            <motion.h1 
              style={{ y: y1 }}
              className="text-[16vw] md:text-[22vw] font-black leading-[0.7] tracking-tighter uppercase text-white mb-4"
            >
              <StaggeredName name="MALIK" />
            </motion.h1>
            <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-8">
              <motion.h1 
                style={{ y: y2 }}
                className="text-[16vw] md:text-[22vw] font-black leading-[0.7] tracking-tighter uppercase"
              >
                <StaggeredName name="BOBOEV" outline />
              </motion.h1>
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-[2px] flex-grow bg-cyber-amber hidden lg:block origin-left"
              />
            </div>
          </div>

          {/* Bottom Description */}
          <div className="mt-8 md:mt-10 max-w-4xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-lg md:text-4xl font-light text-white/60 leading-[1.2] md:leading-[1.1] tracking-tight"
            >
              {t.desc}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">Scroll</span>
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-cyber-amber"
          />
        </div>
      </motion.div>
    </section>
  );
};

