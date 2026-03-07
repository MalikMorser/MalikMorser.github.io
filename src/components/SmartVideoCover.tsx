import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

interface SmartVideoCoverProps {
  title: string;
  embedUrl: string;
  theme: string;
  glowColor: 'teal' | 'amber';
  coverArt?: React.ReactNode;
  lang?: 'en' | 'ru';
}

export const SmartVideoCover: React.FC<SmartVideoCoverProps> = ({ title, embedUrl, theme, glowColor, coverArt, lang = 'en' }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const t = {
    en: {
      archive: "ARCHIVE_V4",
      init: "Initialize",
      seq: "Sequence"
    },
    ru: {
      archive: "АРХИВ_V4",
      init: "Инициализация",
      seq: "Последовательность"
    }
  }[lang];

  const accentColor = {
    teal: 'bg-white',
    amber: 'bg-cyber-amber'
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative w-full aspect-video group/cinema border border-white/10 bg-black overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {!isPlaying ? (
          <motion.div
            key="cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            className="absolute inset-0 z-10 cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            {/* Custom Cover Art */}
            {coverArt && (
              <div className="absolute inset-0 z-0 opacity-60 group-hover/cinema:opacity-80 transition-opacity duration-500">
                {coverArt}
              </div>
            )}

            {/* Grid Overlay */}
            <div className="absolute inset-0 grid-bg opacity-10 z-10" />

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-start justify-end p-6 md:p-16">
              <div className="w-full flex flex-col md:flex-row justify-between items-end gap-6 md:gap-8">
                <div className="space-y-4 max-w-3xl">
                  <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/40">
                    {theme} // {t.archive}
                  </span>
                  <h3 className="text-3xl md:text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.8] text-white group-hover/cinema:translate-x-4 transition-transform duration-500">
                    {title}
                  </h3>
                </div>

                {/* Play Button - Brutalist Style */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group/play flex items-center gap-4"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 border border-white/20 flex items-center justify-center bg-white/5 group-hover/play:bg-white group-hover/play:text-black transition-all duration-300">
                    <Play className="w-6 h-6 md:w-8 md:h-8 fill-current" />
                  </div>
                  <div className="hidden md:block">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">{t.init}</span>
                    <span className="block font-bold text-sm uppercase tracking-widest text-white">{t.seq}</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Technical Accents */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />
            <div className="absolute top-0 left-0 w-[1px] h-full bg-white/10" />
            <div className="absolute top-0 right-0 w-[1px] h-full bg-white/10" />
            
            <div className={`absolute top-0 left-0 w-12 h-[2px] ${accentColor[glowColor]}`} />
            <div className={`absolute bottom-0 right-0 w-12 h-[2px] ${accentColor[glowColor]}`} />
          </motion.div>
        ) : (
          <motion.div
            key="iframe"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-0 bg-black"
          >
            <button 
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-50 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src={`${embedUrl}?autoplay=1&modestbranding=1&rel=0&controls=1&showinfo=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
