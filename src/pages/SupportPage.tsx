import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Zap, 
  Code, 
  Shield, 
  Rocket,
  Sparkles
} from 'lucide-react';
import CinematicBackground from '../components/CinematicBackground';
import { DonationWidget } from '../components/DonationWidget';

const SupportPage = ({ lang }: { lang: 'en' | 'ru' }) => {
  const currentAmount = 0;
  const goalAmount = 1000;
  const progress = (currentAmount / goalAmount) * 100;

  const t = {
    heroTitle: lang === 'en' ? 'Fuel the' : 'Поддержите',
    heroHighlight: lang === 'en' ? 'Innovation' : 'Инновации',
    heroDesc: lang === 'en' 
      ? "Directly support the development of free, open-source tools for the animation community. Your contribution keeps the code flowing."
      : "Прямая поддержка разработки бесплатных инструментов с открытым исходным кодом для анимационного сообщества. Ваш вклад помогает проекту жить.",
    monthlyGoal: lang === 'en' ? "Monthly Goal" : "Ежемесячная цель",
    current: lang === 'en' ? "Raised" : "Собрано",
    whySupport: lang === 'en' ? "Impact of your support" : "Влияние вашей поддержки",
    reasons: [
      {
        title: lang === 'en' ? "Accelerated Development" : "Ускорение Разработки",
        desc: lang === 'en' 
          ? "More time dedicated to coding, bug fixing, and feature implementation."
          : "Больше времени на написание кода, исправление ошибок и внедрение новых функций.",
        icon: Rocket,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
      },
      {
        title: lang === 'en' ? "Quality & Stability" : "Качество и Стабильность",
        desc: lang === 'en'
          ? "Resources to maintain high standards and ensure long-term stability."
          : "Ресурсы для поддержания высоких стандартов и обеспечения долгосрочной стабильности.",
        icon: Shield,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
      },
      {
        title: lang === 'en' ? "Open Source Forever" : "Open Source Навсегда",
        desc: lang === 'en'
          ? "Keeping core tools free for the entire community to benefit from."
          : "Сохранение основных инструментов бесплатными для пользы всего сообщества.",
        icon: Code,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
      }
    ]
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 relative overflow-hidden bg-[#050505]">
      <CinematicBackground />
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center mb-16 relative z-10"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 1.5 }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-cyber-amber/5 border border-cyber-amber/20 mb-10 shadow-[0_0_50px_-10px_rgba(255,184,0,0.2)]"
        >
          <Heart className="w-10 h-10 text-cyber-amber" fill="currentColor" fillOpacity={0.2} />
        </motion.div>
        
        <h1 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-white mb-8 leading-[0.9]">
          {t.heroTitle} <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-amber to-white">{t.heroHighlight}</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-ghost-silver/60 max-w-2xl mx-auto leading-relaxed font-light">
          {t.heroDesc}
        </p>
      </motion.div>

      {/* Progress Bar */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-24 relative z-10"
      >
        <div className="flex justify-between items-end mb-4 font-mono text-xs uppercase tracking-[0.2em]">
          <span className="text-white/60 flex items-center gap-2">
            <Sparkles size={12} className="text-cyber-amber" />
            {t.monthlyGoal}
          </span>
          <span className="text-white font-bold">
            ${currentAmount} <span className="text-white/30 font-normal">/ ${goalAmount}</span>
          </span>
        </div>
        
        <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/10 relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-cyber-amber/5 blur-md" />
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${Math.max(progress, 2)}%` }} // Minimum width for visibility
            transition={{ duration: 1.5, ease: "circOut" }}
            className="h-full bg-gradient-to-r from-cyber-amber to-white relative"
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
          </motion.div>
        </div>
      </motion.div>

      {/* Donation Widget */}
      <div className="mb-32 relative z-20">
        <DonationWidget lang={lang} />
      </div>

      {/* Why Support Cards */}
      <div className="max-w-7xl mx-auto mb-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-black text-white uppercase tracking-tight flex items-center justify-center gap-3">
            <Zap className="w-8 h-8 text-cyber-amber" />
            {t.whySupport}
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {t.reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group p-6 md:p-8 rounded-3xl border ${reason.border} ${reason.bg} backdrop-blur-sm hover:bg-opacity-20 transition-all duration-500`}
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${reason.bg} border ${reason.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <reason.icon className={`w-6 h-6 md:w-7 md:h-7 ${reason.color}`} />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide mb-4">{reason.title}</h4>
              <p className="text-ghost-silver/70 leading-relaxed text-xs md:text-sm">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SupportPage;
