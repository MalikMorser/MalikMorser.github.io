import React from 'react';
import { motion } from 'framer-motion';
import { ScrollRevealText } from './Typography';

interface SectionHeaderProps {
  number: string;
  title1: string;
  title2: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title1, title2 }) => {
  return (
    <div className="mb-16 md:mb-24 relative z-10">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-6 mb-8"
      >
        <div className="h-[1px] w-24 bg-cyber-amber" />
        <span className="font-mono text-xs md:text-sm text-cyber-amber tracking-[0.5em] uppercase">{number} // SYSTEM_MODULE</span>
      </motion.div>
      <h2 className="text-[12vw] md:text-[14vw] font-black tracking-tighter uppercase leading-[0.75] text-white flex flex-col">
        <ScrollRevealText text={title1} />
        <ScrollRevealText text={title2} outline />
      </h2>
    </div>
  );
};
