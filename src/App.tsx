import React, { useState, useRef, useMemo, Suspense, useEffect } from 'react';
import { motion, AnimatePresence, useTransform, useScroll } from 'framer-motion';
import Lenis from 'lenis';
import { 
  ChevronLeft,
  Command,
  Heart,
  Menu,
  X
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

import CinematicBackground from './components/CinematicBackground';
import Preloader from './components/Preloader';
import { AnimatedText } from './components/Typography';
import HomePage from './pages/HomePage';
import ToolsPage from './pages/ToolsPage';
import SoftwarePage from './pages/SoftwarePage';
import SupportPage from './pages/SupportPage';

import ScrollToTop from './components/ScrollToTop';

import { Logo } from './components/Logo';

// --- Utils ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Language Dictionary ---
type Language = 'en' | 'ru';

const dict = {
  en: {
    role: "3D ART & DIGITAL ENGINEERING",
    desc: "Crafting immersive digital experiences at the intersection of 3D Art, Animation, and Advanced Software Engineering.",
    sysStatus: "SYSTEM STATUS",
    activeUplink: "ACTIVE / ONLINE",
    mod1: "01",
    vidCinema1: "VIDEO",
    vidCinema2: "PRODUCTION",
    mod2: "02",
    visArchives1: "VISUAL",
    visArchives2: "ARCHIVES",
    mod3: "03",
    opHistory1: "OPERATIONAL",
    opHistory2: "HISTORY",
    mod4: "04",
    devLab1: "DEVELOPMENT",
    devLab2: "LAB",
    mod5: "05",
    scripts1: "SCRIPTS",
    scripts2: "TOOLS",
    uplink: "COMMS ARRAY",
    allSys: "All Systems Operational // AES-256_ACTIVE",
    localTime: "Local_Time",
    coords: "Coordinates",
    navArchives: "Archives",
    navCinema: "Production",
    navTerminal: "Lab",
    navHistory: "History",
    navScripts: "Tools",
    navSoftware: "Software",
    navSupport: "Support",
    prismaStatus: "ACTIVE / ROADMAP",
    prismaDesc: "A high-performance infinite canvas and reference board for Windows, designed as a professional alternative to Miro and PureRef.",
    load: "Load"
  },
  ru: {
    role: "3D-АРТ И ЦИФРОВАЯ ИНЖЕНЕРИЯ",
    desc: "Создание иммерсивных цифровых пространств на стыке 3D-графики, анимации и передовой программной инженерии.",
    sysStatus: "СОСТОЯНИЕ СИСТЕМЫ",
    activeUplink: "ОНЛАЙН / АКТИВЕН",
    mod1: "01",
    vidCinema1: "ВИДЕО",
    vidCinema2: "ПРОДАКШН",
    mod2: "02",
    visArchives1: "ВИЗУАЛЬНЫЕ",
    visArchives2: "АРХИВЫ",
    mod3: "03",
    opHistory1: "ОПЫТ",
    opHistory2: "РАБОТЫ",
    mod4: "04",
    devLab1: "ЛАБОРАТОРИЯ",
    devLab2: "РАЗРАБОТКИ",
    mod5: "05",
    scripts1: "СКРИПТЫ",
    scripts2: "ИНСТРУМЕНТЫ",
    uplink: "КОНТАКТЫ",
    allSys: "Все системы в норме // AES-256_ACTIVE",
    localTime: "Местное_Время",
    coords: "Координаты",
    navArchives: "Архивы",
    navCinema: "Продакшн",
    navTerminal: "Лаборатория",
    navHistory: "История",
    navScripts: "Инструменты",
    navSoftware: "Программы",
    navSupport: "Поддержка",
    prismaStatus: "АКТИВНО / ПЛАНЫ",
    prismaDesc: "Высокопроизводительный бесконечный холст и доска референсов для Windows — профессиональная альтернатива Miro и PureRef.",
    load: "Нагрузка"
  }
};

const LanguageContext = React.createContext<{lang: Language, setLang: (l: Language) => void}>({lang: 'en', setLang: () => {}});

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-[2px] bg-cyber-amber origin-left z-[110]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsVisible(latest > 500);
    });
  }, [scrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-10 left-10 z-[100] p-4 border border-white/20 bg-black/50 text-white backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 rotate-90" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const Navigation = ({ lang, setLang, t }: { lang: Language, setLang: (l: Language) => void, t: any }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isOpen, setIsOpen] = useState(false);

  const navItems = isHome ? [
    { key: 'Terminal', label: t.navTerminal, path: '#terminal' },
    { key: 'Cinema', label: t.navCinema, path: '#cinema' },
    { key: 'Archives', label: t.navArchives, path: '#archives' },
    { key: 'History', label: t.navHistory, path: '#history' },
    { key: 'Software', label: t.navSoftware, path: '/software' },
    { key: 'Scripts', label: t.navScripts, path: '/tools' }
  ] : [
    { key: 'Home', label: lang === 'en' ? 'Back to Home' : 'На главную', path: '/' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-6 py-3 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-ghost-silver/5">
        <Link to="/" className="group flex items-center gap-4" onClick={() => setIsOpen(false)}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <Logo />
          </motion.div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item, i) => (
            item.path.startsWith('#') ? (
              <motion.a
                key={item.key}
                href={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-[13px] font-black uppercase tracking-[0.2em] text-ghost-silver/60 hover:text-cyber-amber transition-all duration-300 relative group"
              >
                <AnimatedText text={item.label} />
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyber-amber transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ) : (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={item.path}
                  className="text-[13px] font-black uppercase tracking-[0.2em] text-ghost-silver/60 hover:text-cyber-amber transition-all duration-300 relative group"
                >
                  <AnimatedText text={item.label} />
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyber-amber transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            )
          ))}
          
          {/* Language Toggle */}
          <div className="flex items-center gap-3 ml-4 border-l border-ghost-silver/10 pl-6">
            <button 
              onClick={() => setLang('en')}
              className={cn(
                "text-[12px] font-black tracking-widest transition-colors",
                lang === 'en' ? "text-cyber-amber" : "text-ghost-silver/30 hover:text-ghost-silver"
              )}
            >
              EN
            </button>
            <span className="text-ghost-silver/10 font-light">/</span>
            <button 
              onClick={() => setLang('ru')}
              className={cn(
                "text-[12px] font-black tracking-widest transition-colors",
                lang === 'ru' ? "text-cyber-amber" : "text-ghost-silver/30 hover:text-ghost-silver"
              )}
            >
              RU
            </button>
          </div>

          {/* Support Button */}
          <Link
            to="/support"
            className="ml-6 px-8 py-3 bg-cyber-amber text-black rounded-full text-[11px] font-black uppercase tracking-[0.25em] hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-[0_0_25px_-5px_rgba(255,184,0,0.4)]"
          >
            <Heart className="w-4 h-4 fill-current" />
            <span>{t.navSupport}</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-ghost-silver p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-[#050505] pt-24 px-8 flex flex-col lg:hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>

            <div className="relative z-10 flex flex-col gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item.path.startsWith('#') ? (
                    <a
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-black uppercase tracking-tighter text-ghost-silver/50 hover:text-cyber-amber transition-colors flex items-center justify-between group"
                    >
                      <span>{item.label}</span>
                      <ChevronLeft className="w-8 h-8 rotate-180 opacity-0 group-hover:opacity-100 transition-all" />
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-black uppercase tracking-tighter text-ghost-silver/50 hover:text-cyber-amber transition-colors flex items-center justify-between group"
                    >
                      <span>{item.label}</span>
                      <ChevronLeft className="w-8 h-8 rotate-180 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="relative z-10 mt-auto pb-12 flex flex-col gap-8">
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => { setLang('en'); setIsOpen(false); }}
                  className={cn(
                    "text-lg font-black tracking-widest transition-colors",
                    lang === 'en' ? "text-cyber-amber" : "text-ghost-silver/30"
                  )}
                >
                  ENGLISH
                </button>
                <span className="text-ghost-silver/20 text-xl">//</span>
                <button 
                  onClick={() => { setLang('ru'); setIsOpen(false); }}
                  className={cn(
                    "text-lg font-black tracking-widest transition-colors",
                    lang === 'ru' ? "text-cyber-amber" : "text-ghost-silver/30"
                  )}
                >
                  РУССКИЙ
                </button>
              </div>

              <Link
                to="/support"
                onClick={() => setIsOpen(false)}
                className="w-full py-6 bg-cyber-amber text-black rounded-2xl text-center text-sm font-black uppercase tracking-[0.3em] hover:bg-white transition-all shadow-[0_0_40px_-10px_rgba(255,184,0,0.5)]"
              >
                {t.navSupport}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- Main App ---
export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('lang');
    return (saved as Language) || 'en';
  });
  const [loading, setLoading] = useState(true);
  const t = dict[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
    window.dispatchEvent(new CustomEvent('langChange', { detail: lang }));
  }, [lang]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <LanguageContext.Provider value={{ lang, setLang }}>
        <div className="bg-[#050505] text-ghost-silver selection:bg-cyber-amber/30 selection:text-cyber-amber min-h-screen overflow-x-hidden max-w-[100vw]">
          <AnimatePresence mode="wait">
            {loading && <Preloader onComplete={() => setLoading(false)} lang={lang} />}
          </AnimatePresence>
          
          <ScrollProgress />
          <BackToTop />
          <CinematicBackground />

          <Navigation lang={lang} setLang={setLang} t={t} />

          <Routes>
            <Route path="/" element={<HomePage lang={lang} t={t} />} />
            <Route path="/tools" element={<ToolsPage lang={lang} />} />
            <Route path="/software" element={<SoftwarePage lang={lang} t={t} />} />
            <Route path="/support" element={<SupportPage lang={lang} />} />
          </Routes>
        </div>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}
