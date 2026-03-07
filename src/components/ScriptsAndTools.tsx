import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  ExternalLink, 
  Coffee,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Logos
const BLENDER_LOGO = "https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg";
const MOHO_LOGO = "https://yt3.googleusercontent.com/IFTazpjmi70HZVh8kygfe5ejuwAh73Qd2x5ZyDhGRMMapk2TAyg-c28CUpWT8AM7g4hFeTPoUw=s160-c-k-c0x00ffffff-no-rj";

interface ToolItemProps {
  title: string;
  description: string;
  link: string;
  type: 'moho' | 'blender';
  lang: 'en' | 'ru';
}

const ToolItem = ({ title, description, link, type, lang }: ToolItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative p-8 border border-ghost-silver/10 bg-black/40 backdrop-blur-sm hover:border-cyber-amber/50 transition-all duration-500 overflow-hidden rounded-2xl"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyber-amber/5 blur-3xl group-hover:bg-cyber-amber/10 transition-all duration-700 rounded-full" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl border border-white/5 group-hover:border-cyber-amber/20 bg-transparent group-hover:bg-cyber-amber/10 flex items-center justify-center transition-all duration-500 overflow-hidden">
              <img 
                src={type === 'moho' ? MOHO_LOGO : BLENDER_LOGO} 
                alt={type} 
                className={`${type === 'moho' ? 'w-9 h-9 object-cover rounded-full scale-125' : 'w-8 h-8 object-contain'}`}
              />
            </div>
            <div>
              <div className="text-[10px] font-black tracking-[0.2em] text-cyber-amber uppercase mb-1 opacity-60">
                {type === 'moho' ? 'Moho Script' : 'Blender Addon'}
              </div>
              <h3 className="text-xl font-black tracking-tight text-ghost-silver group-hover:text-cyber-amber transition-colors">
                {title}
              </h3>
            </div>
          </div>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white/5 hover:bg-cyber-amber text-ghost-silver/50 hover:text-black rounded-xl transition-all duration-300 border border-white/5"
          >
            <Download className="w-5 h-5" />
          </a>
        </div>
        
        <p className="text-sm text-ghost-silver/60 leading-relaxed mb-8 min-h-[3rem]">
          {description}
        </p>
        
        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <div className="flex gap-4">
            <div className="text-[10px] font-bold text-ghost-silver/30 uppercase tracking-widest">
              v1.0.0
            </div>
            <div className="text-[10px] font-bold text-ghost-silver/30 uppercase tracking-widest">
              Open Source
            </div>
          </div>
          <a 
            href={link}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-cyber-amber hover:text-white transition-colors flex items-center gap-2"
          >
            {lang === 'en' ? 'Repository' : 'Репозиторий'}
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const ScriptsAndTools = ({ lang }: { lang: 'en' | 'ru' }) => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ToolItem 
          title="Show All Layers"
          description={lang === 'en' 
            ? "Instantly reveal all hidden layers in your Moho project. Essential for complex rigs."
            : "Мгновенно отображает все скрытые слои в проекте Moho. Незаменим для сложных ригов."}
          link="https://github.com/Maxi000001/Show-All-Layers-Moho/archive/refs/heads/main.zip"
          type="moho"
          lang={lang}
        />
        <ToolItem 
          title="Magic Bone"
          description={lang === 'en'
            ? "Professional rigging tool for Blender. Generate bones from mesh geometry with mathematical precision."
            : "Профессиональный инструмент для риггинга в Blender. Генерируйте кости из геометрии меша с математической точностью."}
          link="https://github.com/Maxi000001/Magic-Bone-Blender/archive/refs/heads/main.zip"
          type="blender"
          lang={lang}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
        {/* Support Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 p-8 border border-cyber-amber/20 bg-cyber-amber/5 rounded-2xl flex flex-col md:flex-row items-center gap-8"
        >
          <div className="p-4 bg-cyber-amber/10 rounded-full">
            <Coffee className="w-8 h-8 text-cyber-amber" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-lg font-black text-ghost-silver mb-1 uppercase tracking-tight">
              {lang === 'en' ? 'Support the Development' : 'Поддержать разработку'}
            </h4>
            <p className="text-sm text-ghost-silver/50">
              {lang === 'en' ? 'Fuel the laboratory with a coffee.' : 'Поддержите лабораторию чашечкой кофе.'}
            </p>
          </div>
          <a 
            href="https://buymeacoffee.com/maxbobi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-cyber-amber text-black font-black uppercase tracking-widest rounded-xl hover:bg-white transition-all flex items-center gap-2 group"
          >
            <span>Fuel the Lab</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* View All Tools Button */}
        <Link 
          to="/tools"
          className="w-full md:w-auto px-12 py-8 border border-white/10 hover:border-cyber-amber/50 bg-white/5 hover:bg-cyber-amber/10 transition-all rounded-2xl flex flex-col items-center justify-center gap-2 group"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-cyber-amber">
            {lang === 'en' ? 'Access Full' : 'Открыть полный'}
          </span>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black text-white group-hover:text-cyber-amber transition-colors">
              {lang === 'en' ? 'LABORATORY' : 'ЛАБОРАТОРИЮ'}
            </span>
            <ArrowRight className="w-6 h-6 text-cyber-amber group-hover:translate-x-2 transition-transform" />
          </div>
        </Link>
      </div>
    </div>
  );
};
