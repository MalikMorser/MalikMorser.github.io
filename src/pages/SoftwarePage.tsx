import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  Download, 
  Terminal,
  Cpu,
  Zap,
  Github,
  Search,
  Layers,
  Box,
  X,
  Code2,
  Sparkles,
  ExternalLink,
  Target,
  Clock,
  Code,
  Heart,
  Coffee
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CinematicBackground from '../components/CinematicBackground';

// --- Types ---
type SoftwareStatus = 'released' | 'development';

interface Software {
  id: string;
  title: string;
  description: { en: string, ru: string };
  shortDescription: { en: string, ru: string };
  link?: string;
  repo?: string;
  status: SoftwareStatus;
  features: { en: string[], ru: string[] };
  version: string;
  language: string;
  icon: any;
  color: string;
  category: { en: string, ru: string };
  customContent?: (lang: 'en' | 'ru') => React.ReactNode;
}

// --- Data ---
const SOFTWARE: Software[] = [
  {
    id: "prisma",
    title: "Prisma",
    shortDescription: {
      en: "Infinite canvas & reference board.",
      ru: "Бесконечный холст и доска референсов."
    },
    description: {
      en: "A high-performance, local-first infinite canvas designed for professional artists and designers. Engineered as a robust alternative to Miro and PureRef, it features a streamlined interface with Blender-inspired hotkeys for maximum creative efficiency.",
      ru: "Высокопроизводительный локальный бесконечный холст, созданный для профессиональных художников и дизайнеров. Разработан как надежная альтернатива Miro и PureRef, предлагая оптимизированный интерфейс с горячими клавишами в стиле Blender для максимальной эффективности."
    },
    link: "https://github.com/Maxi000001/prisma-desktop/releases/download/v1.0.0/Prisma_Setup_v1.0.0.exe",
    repo: "https://github.com/Maxi000001/prisma-desktop",
    status: "released",
    features: {
      en: [
        "Local & Secure (No tracking)",
        "Pro Drawing Engine",
        "Advanced Layout & Hierarchy",
        "GPU Acceleration (60fps 8K)"
      ],
      ru: [
        "Локальность & Безопасность",
        "Про-движок рисования",
        "Продвинутая компоновка",
        "GPU-ускорение (60fps 8K)"
      ]
    },
    version: "1.0.0",
    language: "React / Electron",
    icon: Layers,
    color: "emerald",
    category: { en: "Creative Workspace", ru: "Творческое пространство" },
    customContent: (lang) => (
      <div className="mt-8">
        <h4 className="text-xs font-black tracking-widest uppercase text-ghost-silver/40 mb-6 flex items-center gap-2">
          <Zap size={14} className="text-emerald-400" />
          {lang === 'en' ? 'Speed & Muscle Memory' : 'Скорость и мышечная память'}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-white/5 rounded-lg border border-white/10">
            <div className="text-2xl font-black text-white mb-2">G</div>
            <div className="text-sm text-white/50 uppercase tracking-wider">{lang === 'en' ? 'Grab / Move' : 'Перемещение'}</div>
          </div>
          <div className="p-4 bg-white/5 rounded-lg border border-white/10">
            <div className="text-2xl font-black text-white mb-2">R</div>
            <div className="text-sm text-white/50 uppercase tracking-wider">{lang === 'en' ? 'Rotate' : 'Вращение'}</div>
          </div>
          <div className="p-4 bg-white/5 rounded-lg border border-white/10">
            <div className="text-2xl font-black text-white mb-2">S</div>
            <div className="text-sm text-white/50 uppercase tracking-wider">{lang === 'en' ? 'Scale' : 'Масштабирование'}</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "niceshoots",
    title: "NiceShoots",
    shortDescription: {
      en: "Custom Crosshair Overlay for gamers. Zero latency.",
      ru: "Настраиваемый прицел поверх всех окон для геймеров. Нулевая задержка."
    },
    description: {
      en: "A professional-grade customizable crosshair overlay designed for competitive gaming. Featuring an aggressive visual style and zero-latency performance, it provides the precision required for high-stakes environments.",
      ru: "Профессиональный настраиваемый оверлей-прицел, разработанный для соревновательного гейминга. Агрессивный дизайн и нулевая задержка обеспечивают точность, необходимую в самых динамичных игровых ситуациях."
    },
    link: "https://github.com/Maxi000001/NiceShoots/releases/download/v1.0.0/NiceShoot.Setup.1.0.0.exe",
    repo: "https://github.com/Maxi000001/NiceShoots",
    status: "released",
    features: {
      en: [
        "Custom Crosshair Designs",
        "Zero Latency Overlay",
        "Global Hotkeys",
        "Minimal Resource Usage"
      ],
      ru: [
        "Кастомные дизайны прицелов",
        "Оверлей без задержек",
        "Глобальные хоткеи",
        "Минимальное потребление ресурсов"
      ]
    },
    version: "1.0.0",
    language: "C# / WPF",
    icon: Target,
    color: "orange",
    category: { en: "Gamer Utility", ru: "Игровая утилита" }
  },
  {
    id: "playtime-pro",
    title: "PlayTime Pro",
    shortDescription: {
      en: "Professional time tracking system for billiard clubs.",
      ru: "Профессиональная система учета времени для бильярдных клубов."
    },
    description: {
      en: "A comprehensive management and time-tracking system specifically designed for billiard clubs. Automates table occupancy tracking, dynamic cost calculation, and financial reporting with professional-grade accuracy.",
      ru: "Комплексная система управления и учета времени, специально разработанная для бильярдных клубов. Автоматизирует контроль занятости столов, динамический расчет стоимости и финансовую отчетность."
    },
    status: "released",
    features: {
      en: [
        "Automated Time Tracking",
        "Dynamic Pricing",
        "Table Management",
        "Financial Reports"
      ],
      ru: [
        "Автоматический учет времени",
        "Динамическое ценообразование",
        "Управление столами",
        "Финансовые отчеты"
      ]
    },
    version: "2.0.0",
    language: "C# / .NET",
    icon: Clock,
    color: "zinc",
    category: { en: "Commercial Software", ru: "Коммерческое ПО" }
  },
  {
    id: "stb-studio",
    title: "STB Studio",
    shortDescription: {
      en: "Ultimate 3-in-1 tool: Storyboarding, Drawing, 2D Animation.",
      ru: "Ультимативный 3-в-1 инструмент: Сторибординг, Рисование, 2D Анимация."
    },
    description: {
      en: "The ultimate creative suite integrating storyboarding, professional digital drawing, and 2D animation into a single seamless pipeline. Designed to empower 2D artists with a unified workflow from concept to final frame.",
      ru: "Ультимативный творческий пакет, объединяющий сторибординг, профессиональное цифровое рисование и 2D-анимацию в единый бесшовный пайплайн для художников и аниматоров."
    },
    status: "development",
    features: {
      en: [
        "Integrated Storyboarding",
        "Pro Drawing Engine",
        "Timeline & Animation",
        "Export to standard formats"
      ],
      ru: [
        "Интегрированный сторибординг",
        "Про-движок рисования",
        "Таймлайн и анимация",
        "Экспорт в стандартные форматы"
      ]
    },
    version: "Alpha",
    language: "C++ / Qt",
    icon: Layers,
    color: "emerald",
    category: { en: "Creative Suite", ru: "Творческий пакет" }
  },
  {
    id: "tjobs",
    title: "TJOBS",
    shortDescription: {
      en: "Next-generation job search platform and application.",
      ru: "Платформа и приложение для поиска работы нового поколения."
    },
    description: {
      en: "A next-generation employment platform and mobile application. Utilizes advanced matching algorithms to connect high-tier professionals with optimal career opportunities in real-time.",
      ru: "Платформа и мобильное приложение для поиска работы нового поколения. Использует продвинутые алгоритмы подбора для соединения профессионалов с оптимальными карьерными возможностями."
    },
    status: "development",
    features: {
      en: [
        "Smart Matching",
        "Video Resumes",
        "Real-time Chat",
        "Skill Verification"
      ],
      ru: [
        "Умный подбор",
        "Видео-резюме",
        "Чат в реальном времени",
        "Верификация навыков"
      ]
    },
    version: "Beta",
    language: "React Native",
    icon: Code,
    color: "blue",
    category: { en: "Platform", ru: "Платформа" }
  },
  {
    id: "time-out",
    title: "Time OUT",
    shortDescription: {
      en: "Smart PC shutdown timer with an interactive robot companion.",
      ru: "Умный таймер выключения ПК с интерактивным роботом-компаньоном."
    },
    description: {
      en: "An intelligent PC shutdown timer featuring an interactive AI companion with dynamic emotional responses. Designed to make digital wellness and screen-time management an engaging and personalized experience.",
      ru: "Интеллектуальный таймер выключения ПК с интерактивным AI-компаньоном, обладающим динамическими эмоциями. Превращает контроль экранного времени в увлекательный и персонализированный процесс."
    },
    status: "development",
    features: {
      en: [
        "Interactive Robot UI",
        "Customizable Timers",
        "Force Shutdown Options",
        "Usage Statistics"
      ],
      ru: [
        "Интерактивный робот-интерфейс",
        "Настраиваемые таймеры",
        "Опции принудительного выключения",
        "Статистика использования"
      ]
    },
    version: "Alpha",
    language: "Electron",
    icon: Zap,
    color: "orange",
    category: { en: "Utility", ru: "Утилита" }
  }
];

// --- Helper for Colors ---
const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string, text: string, border: string, shadow: string }> = {
    emerald: { bg: 'bg-emerald-500', text: 'text-emerald-400', border: 'border-emerald-500', shadow: 'shadow-emerald-500/50' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-400', border: 'border-orange-500', shadow: 'shadow-orange-500/50' },
    zinc: { bg: 'bg-zinc-500', text: 'text-zinc-400', border: 'border-zinc-500', shadow: 'shadow-zinc-500/50' },
    blue: { bg: 'bg-blue-500', text: 'text-blue-400', border: 'border-blue-500', shadow: 'shadow-blue-500/50' },
  };
  return colors[color] || colors.emerald;
};

// --- Main Page Component ---
export default function SoftwarePage({ lang, t }: { lang: 'en' | 'ru', t: any }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'released' | 'development'>('all');
  const [selectedSoftware, setSelectedSoftware] = useState<Software | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedSoftware) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedSoftware]);

  const filteredSoftware = SOFTWARE.filter(sw => {
    const matchesSearch = sw.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          sw.description[lang].toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || sw.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const pageT = {
    title: lang === 'en' ? 'SOFTWARE & APPS' : 'ПРОГРАММЫ И ПРИЛОЖЕНИЯ',
    subtitle: lang === 'en' ? 'Standalone applications, utilities, and platforms.' : 'Самостоятельные приложения, утилиты и платформы.',
    search: lang === 'en' ? 'Search software...' : 'Поиск программ...',
    all: lang === 'en' ? 'All Software' : 'Все',
    released: lang === 'en' ? 'Released' : 'Выпущенные',
    development: lang === 'en' ? 'In Development' : 'В разработке',
    download: lang === 'en' ? 'Download' : 'Скачать',
    source: lang === 'en' ? 'Source Code' : 'Исходный код',
    features: lang === 'en' ? 'Key Features' : 'Ключевые особенности',
    empty: lang === 'en' ? 'No software found matching your criteria.' : 'Программы не найдены.',
  };

  return (
    <div className="bg-[#050505] text-ghost-silver min-h-screen selection:bg-cyber-amber/30 selection:text-cyber-amber font-sans">
      <CinematicBackground />
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-[40] px-4 md:px-10 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <Link to="/" className="flex items-center gap-4 group self-start md:self-auto">
          <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-cyber-amber/50 group-hover:bg-cyber-amber/10 transition-all">
            <ChevronLeft className="w-5 h-5 text-ghost-silver group-hover:text-cyber-amber transition-colors" />
          </div>
          <span className="hidden md:block text-xs font-black tracking-[0.3em] uppercase text-ghost-silver group-hover:text-cyber-amber transition-colors">
            {lang === 'en' ? 'Terminal' : 'Терминал'}
          </span>
        </Link>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative group w-full md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ghost-silver/30 group-focus-within:text-cyber-amber transition-colors" />
            <input 
              type="text" 
              placeholder={pageT.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 md:py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-ghost-silver focus:outline-none focus:border-cyber-amber/50 focus:bg-white/10 transition-all"
            />
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        
        {/* Hero Section */}
        <header className="mb-12 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-cyber-amber/10 border border-cyber-amber/20 mb-8 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-cyber-amber" />
            <span className="text-[10px] font-black tracking-[0.3em] text-cyber-amber uppercase">
              System.Software // v2.0
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6"
          >
            {pageT.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-ghost-silver/50 max-w-2xl leading-relaxed font-light"
          >
            {pageT.subtitle}
          </motion.p>
        </header>

        {/* Filters */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 no-scrollbar">
          <div className="inline-flex p-1.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
            {[
              { id: 'all', label: pageT.all, icon: Code2 },
              { id: 'released', label: pageT.released, icon: Box },
              { id: 'development', label: pageT.development, icon: Layers }
            ].map((filter) => {
              const Icon = filter.icon;
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id as any)}
                  className={`relative px-4 md:px-6 py-2 md:py-3 rounded-xl flex items-center gap-3 transition-all duration-300 ${isActive ? 'text-black' : 'text-ghost-silver hover:text-white'}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterSoftware"
                      className="absolute inset-0 bg-cyber-amber rounded-xl shadow-[0_0_20px_-5px_rgba(255,184,0,0.5)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon className={`w-4 h-4 relative z-10 ${isActive ? 'text-black' : ''}`} />
                  <span className={`text-[10px] md:text-xs font-black tracking-widest uppercase relative z-10 ${isActive ? 'text-black' : ''}`}>
                    {filter.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Software Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredSoftware.length > 0 ? (
              filteredSoftware.map((sw) => {
                const colors = getColorClasses(sw.color);
                const Icon = sw.icon;
                return (
                  <motion.div
                    key={sw.id}
                    layoutId={`sw-card-${sw.id}`}
                    onClick={() => setSelectedSoftware(sw)}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer relative flex flex-col h-[340px] bg-white/5 border border-white/10 hover:border-white/30 rounded-3xl overflow-hidden backdrop-blur-md transition-colors duration-500"
                  >
                    {/* Hover Glow */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl pointer-events-none ${colors.bg}`} />
                    
                    {/* Status Badge */}
                    <div className="absolute top-0 right-0 px-4 py-2 bg-white/5 border-b border-l border-white/10 text-[10px] font-black uppercase tracking-widest text-ghost-silver/60 rounded-bl-2xl backdrop-blur-md">
                      {sw.status === 'development' ? pageT.development : pageT.released}
                    </div>

                    <div className="p-8 flex flex-col h-full relative z-10 mt-4">
                      <div className="flex justify-between items-start mb-8">
                        <motion.div layoutId={`sw-logo-${sw.id}`} className={`w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                          <Icon className={`w-8 h-8 ${colors.text}`} />
                        </motion.div>
                        <div className={`px-3 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest flex items-center gap-2 bg-white/5 border-white/10 text-ghost-silver/80`}>
                          {sw.category[lang]}
                        </div>
                      </div>

                      <motion.h3 layoutId={`sw-title-${sw.id}`} className="text-2xl font-black text-white tracking-tight mb-3 group-hover:text-white transition-colors">
                        {sw.title}
                      </motion.h3>
                      
                      <motion.p layoutId={`sw-desc-${sw.id}`} className="text-ghost-silver/60 text-sm leading-relaxed mb-auto line-clamp-3">
                        {sw.shortDescription[lang]}
                      </motion.p>

                      <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1.5 text-ghost-silver/40">
                            <Terminal size={14} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">{sw.language}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-ghost-silver/40">
                            <Cpu size={14} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">v{sw.version}</span>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                          <ExternalLink size={14} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full py-32 text-center border border-dashed border-white/10 rounded-3xl bg-white/5"
              >
                <Code2 className="w-16 h-16 text-ghost-silver/20 mx-auto mb-6" />
                <p className="text-ghost-silver/40 text-xl font-light">{pageT.empty}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        {/* Support Section */}
        <section className="mt-32 mb-12 border-t border-white/10 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-8">
              <Heart className="w-6 h-6 text-cyber-amber" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-6">
              {lang === 'en' ? 'Fuel the Innovation' : 'Поддержите Инновации'}
            </h2>
            <p className="text-lg text-ghost-silver/60 leading-relaxed mb-10 max-w-2xl mx-auto">
              {lang === 'en' 
                ? "STB Studio, PlayTime Pro, and other tools are free and open-source. Your support helps keep them evolving, bug-free, and accessible to everyone."
                : "STB Studio, PlayTime Pro и другие инструменты бесплатны и имеют открытый исходный код. Ваша поддержка помогает развивать их, исправлять ошибки и оставлять доступными для всех."}
            </p>
            <Link 
              to="/support"
              className="inline-flex items-center gap-3 px-8 py-4 bg-cyber-amber text-black font-black uppercase tracking-widest text-sm rounded-xl hover:bg-white transition-all transform hover:scale-105"
            >
              <Coffee className="w-4 h-4" />
              <span>{lang === 'en' ? 'Support Project' : 'Поддержать Проект'}</span>
            </Link>
          </div>
        </section>
      </main>

      {/* Expanded Software Modal */}
      <AnimatePresence>
        {selectedSoftware && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSoftware(null)}
              className="fixed inset-0 z-[50] bg-black/80 backdrop-blur-xl"
            />
            
            {/* Modal Content */}
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10 pointer-events-none">
              <motion.div
                layoutId={`sw-card-${selectedSoftware.id}`}
                className="w-full max-w-4xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col pointer-events-auto relative"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedSoftware(null)}
                  className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-ghost-silver hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="flex flex-col h-full overflow-y-auto custom-scrollbar">
                  
                  {/* Content Area */}
                  <div className="w-full p-6 md:p-12 flex flex-col relative">
                    {/* Background Glow */}
                    <div className={`absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none ${getColorClasses(selectedSoftware.color).bg} blur-[120px]`} />
                    
                    <div className="relative z-10 flex-1">
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                        <motion.div layoutId={`sw-logo-${selectedSoftware.id}`} className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center overflow-hidden shadow-lg">
                          {React.createElement(selectedSoftware.icon, { className: `w-8 h-8 md:w-10 md:h-10 ${getColorClasses(selectedSoftware.color).text}` })}
                        </motion.div>
                        <div>
                          <motion.h2 layoutId={`sw-title-${selectedSoftware.id}`} className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-2">
                            {selectedSoftware.title}
                          </motion.h2>
                          <div className="flex items-center gap-3">
                            <span className={`px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest bg-white/5 border-white/10 text-ghost-silver/80`}>
                              {selectedSoftware.category[lang]}
                            </span>
                            <span className="text-xs font-mono text-ghost-silver/40">v{selectedSoftware.version}</span>
                          </div>
                        </div>
                      </div>

                      <motion.p layoutId={`sw-desc-${selectedSoftware.id}`} className="text-base md:text-lg text-ghost-silver/80 leading-relaxed font-light mb-10 max-w-3xl">
                        {selectedSoftware.description[lang]}
                      </motion.p>

                      <div className="mb-10">
                        <h4 className="text-xs font-black tracking-widest uppercase text-ghost-silver/40 mb-6 flex items-center gap-2">
                          <Sparkles size={14} className="text-cyber-amber" />
                          {pageT.features}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {selectedSoftware.features[lang].map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                              <Zap className={`w-4 h-4 shrink-0 mt-0.5 ${getColorClasses(selectedSoftware.color).text}`} />
                              <span className="text-sm text-ghost-silver/80">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {selectedSoftware.customContent && selectedSoftware.customContent(lang)}
                    </div>

                    {/* Actions */}
                    <div className="relative z-10 flex flex-col sm:flex-row flex-wrap gap-4 mt-12 pt-8 border-t border-white/10">
                      {selectedSoftware.link && (
                        <a 
                          href={selectedSoftware.link}
                          className={`inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold tracking-widest uppercase text-xs md:text-sm transition-all ${getColorClasses(selectedSoftware.color).bg} text-black hover:opacity-90 hover:scale-105`}
                        >
                          <Download size={18} />
                          {pageT.download}
                        </a>
                      )}
                      
                      {selectedSoftware.repo && (
                        <a 
                          href={selectedSoftware.repo}
                          target="_blank" rel="noreferrer"
                          className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm transition-all hover:scale-105"
                        >
                          <Github size={18} />
                          {pageT.source}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
