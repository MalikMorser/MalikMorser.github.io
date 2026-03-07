import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { OperationalHistory } from '../components/OperationalHistory';
import CinematicBackground from '../components/CinematicBackground';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { CinematicGallery } from '../components/CinematicGallery';
import { VideoCinema } from '../components/VideoCinema';
import { GiantButtons } from '../components/GiantButtons';
import { SectionHeader } from '../components/SectionHeader';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Section = ({ id, children, className }: { id: string, children: React.ReactNode, className?: string }) => (
  <section id={id} className={cn("relative flex flex-col justify-center px-4 md:px-12 py-12 md:py-24", className)}>
    {children}
  </section>
);

export const HomePage = ({ lang, t }: { lang: 'en' | 'ru', t: any }) => {
  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-emerald-500/30">
      {/* Hero Section */}
      <Hero t={t} />

      {/* Video Cinema */}
      <Section id="cinema" className="bg-[#050505] pt-0 md:pt-0">
        <SectionHeader number={t.mod1 || "01"} title1={t.vidCinema1 || "VIDEO"} title2={t.vidCinema2 || "CINEMA"} />
        <VideoCinema lang={lang} />
      </Section>

      {/* Cinematic Gallery */}
      <Section id="archives" className="bg-[#050505]">
        <SectionHeader number={t.mod2 || "02"} title1={t.visArchives1 || "VISUAL"} title2={t.visArchives2 || "ARCHIVES"} />
        <CinematicGallery lang={lang} />
      </Section>

      {/* Operational History */}
      <Section id="history" className="bg-[#050505]">
        <SectionHeader number={t.mod3 || "03"} title1={t.opHistory1 || "OPERATIONAL"} title2={t.opHistory2 || "HISTORY"} />
        <OperationalHistory lang={lang} />
      </Section>

      {/* Giant Buttons (Software & Plugins) */}
      <section id="explore" className="w-full bg-[#050505] border-t border-white/10">
        <GiantButtons lang={lang} />
      </section>

      <Footer t={t} />
    </div>
  );
};

export default HomePage;
