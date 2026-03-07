import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const AnimatedText = ({ text, className }: { text: string, className?: string }) => (
  <span className={cn("relative inline-grid", className)}>
    <span className="col-start-1 row-start-1">
      {text}
    </span>
  </span>
);

const SolidFillLink = ({ children, href, hoverColor }: { children: React.ReactNode, href: string, hoverColor: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block py-6 md:py-10 group/link z-50 pointer-events-auto overflow-hidden"
      style={{ '--hover-color': hoverColor } as React.CSSProperties}
    >
      <h2 
        className="text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter leading-[0.85] text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-4 md:group-hover/link:translate-x-10 group-hover/link:-skew-x-6 group-hover/link:text-[var(--hover-color)]"
      >
        {children}
      </h2>
      
      <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
        <div 
          className="h-full origin-left w-0 group-hover/link:w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ backgroundColor: hoverColor, boxShadow: `0 0 25px ${hoverColor}` }}
        />
      </div>
    </a>
  );
};

const comms = [
  { name: "TELEGRAM", link: "https://t.me/Malik_anim", hoverColor: "#5EEAD4" },
  { name: "INSTAGRAM", link: "https://www.instagram.com/mr.myorser.art?igsh=aXBrZjFkcG8yeGRo", hoverColor: "#FB923C" },
  { name: "ARTSTATION", link: "https://www.artstation.com/maxbobi66", hoverColor: "#F1F5F9" },
  { name: "YOUTUBE", link: "https://www.youtube.com/@maxart8531", hoverColor: "#FB923C" }
];

export const Footer = ({ t }: { t: any }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, timeZoneName: 'short' }).replace(' ', '_'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="pt-16 md:pt-24 pb-12 px-6 md:px-12 bg-[#050505] relative overflow-hidden border-t border-white/10">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ghost-silver/10 to-transparent" />
      
      <div className="mb-16 md:mb-32">
        <span className="font-mono text-xs md:text-sm uppercase tracking-[1em] md:tracking-[1.5em] text-ghost-silver/40 mb-8 md:mb-16 block">
          {t.uplink}
        </span>
        <div className="flex flex-col">
          {comms.map((comm, i) => (
            <SolidFillLink key={i} href={comm.link} hoverColor={comm.hoverColor}>
              {comm.name}
            </SolidFillLink>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-16 border-t border-white/5 pt-12 md:pt-16">
        <div className="flex flex-col gap-2 md:gap-4">
          <span className="font-mono text-[10px] md:text-sm uppercase tracking-[0.3em] md:tracking-[0.5em] text-white/40">© 2026 Malik Boboev</span>
          <span className="font-mono text-[10px] md:text-sm uppercase tracking-[0.3em] md:tracking-[0.5em] text-white/40">
            {t.allSys}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-8 md:gap-16">
          <div className="flex flex-col items-start md:items-end">
            <span className="font-mono text-[10px] md:text-sm uppercase tracking-widest text-white/40 mb-1">
              {t.localTime}
            </span>
            <span className="font-mono text-sm md:text-base text-cyber-amber">{time || "18:38:55_PST"}</span>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <span className="font-mono text-[10px] md:text-sm uppercase tracking-widest text-white/40 mb-1">
              {t.coords}
            </span>
            <span className="font-mono text-sm md:text-base text-white/60">38.5358° N, 68.7791° E</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
