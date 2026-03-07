import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GiantButtons = ({ lang }: { lang: 'en' | 'ru' }) => {
  const t = {
    en: {
      software: "SOFTWARE & APPS",
      softwareSub: "Standalone applications & tools",
      plugins: "PLUGINS & ADDONS",
      pluginsSub: "Custom scripts for 3D & Animation",
      explore: "Slide to explore"
    },
    ru: {
      software: "ПРОГРАММЫ И СОФТ",
      softwareSub: "Автономные приложения и утилиты",
      plugins: "ПЛАГИНЫ И АДДОНЫ",
      pluginsSub: "Кастомные скрипты для 3D и анимации",
      explore: "Нажмите для перехода"
    }
  }[lang];

  return (
    <div className="w-full flex flex-col md:flex-row min-h-[80vh]">
      {/* Software Button */}
      <Link 
        to="/software" 
        className="group relative flex-1 flex flex-col justify-center overflow-hidden bg-[#050505] border-b md:border-b-0 md:border-r border-white/10 p-6 md:p-20 cursor-pointer"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-12"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">01 //</span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">{t.softwareSub}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[10vw] md:text-[6vw] font-black uppercase tracking-tighter leading-[0.85] text-white group-hover:text-emerald-400 transition-colors duration-500"
          >
            {t.software.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </motion.h2>

          <div className="mt-8 md:mt-20 flex items-center justify-between">
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-white/40 group-hover:text-white transition-colors duration-300">
              {t.explore}
            </span>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-emerald-400 group-hover:border-emerald-400 group-hover:text-black transition-all duration-500 transform group-hover:translate-x-4">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </Link>

      {/* Plugins Button */}
      <Link 
        to="/tools" 
        className="group relative flex-1 flex flex-col justify-center overflow-hidden bg-[#050505] p-6 md:p-20 cursor-pointer"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-bl from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8 md:mb-12"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-orange-500">02 //</span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">{t.pluginsSub}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[10vw] md:text-[6vw] font-black uppercase tracking-tighter leading-[0.85] text-white group-hover:text-orange-500 transition-colors duration-500"
          >
            {t.plugins.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </motion.h2>

          <div className="mt-8 md:mt-20 flex items-center justify-between">
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-white/40 group-hover:text-white transition-colors duration-300">
              {t.explore}
            </span>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-black transition-all duration-500 transform group-hover:translate-x-4">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
