import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const AnimatedText = ({ text, className }: { text: string, className?: string }) => (
  <span className={cn("relative inline-grid", className)}>
    <AnimatePresence mode="popLayout">
      <motion.span
        key={text}
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(4px)" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="col-start-1 row-start-1"
      >
        {text}
      </motion.span>
    </AnimatePresence>
  </span>
);

export const ScrollRevealText = ({ text, className, delay = 0, outline = false }: { text: string, className?: string, delay?: number, outline?: boolean }) => {
  const letters = text.split("");
  return (
    <span className={cn("inline-flex flex-wrap", className)}>
      {letters.map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            initial={{ y: "100%", opacity: 0, rotateX: 45 }}
            whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 1,
              delay: delay + i * 0.03,
              ease: [0.215, 0.61, 0.355, 1]
            }}
            className={cn("inline-block origin-bottom", outline && "text-outline-vthick")}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
};
