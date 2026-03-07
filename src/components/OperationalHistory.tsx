import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const timelineData = {
  en: [
    {
      era: "2021 - Present",
      title: "RA Zvezda",
      description: "Lead Digital Artist and 2D Animator. Specialized in developing custom Moho 12 scripts to streamline and optimize studio production pipelines.",
      projects: [
        { name: "Личный дневник", url: "https://www.youtube.com/@lichnyj.dnevnik" },
        { name: "SCP: Хроники", url: "https://www.youtube.com/@scp9608" },
        { name: "АНОН ПЛИЗ", url: "https://www.youtube.com/@%D0%90%D0%9D%D0%9E%D0%9D%D0%9F%D0%9B%D0%98%D0%97" },
        { name: "Moho 12 Workflow Scripts", url: null }
      ],
      roles: ["2D Animator", "Moho Scripting", "Motion Designer", "3D Modeler", "VFX"]
    },
    {
      era: "2020",
      title: "Fardo Studio®",
      description: "A creative studio focused on high-end animation and digital content production.",
      projects: [
        { name: "YouTube Channel", url: "https://www.youtube.com/@fardostudio" }
      ],
      roles: ["Concept Artist", "2D Animator", "Rigger", "VFX"]
    },
    {
      era: "2017 - 2019",
      title: "Tajikfilm",
      description: "The national film studio of Tajikistan, dedicated to cinematic excellence.",
      projects: [
        { name: "Official Website", url: "https://tojikfilm.tj/ru/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F-2/" }
      ],
      roles: ["Character Artist", "Concept Artist", "Animator", "3D Modeler", "Rigger"]
    }
  ],
  ru: [
    {
      era: "2021 - Сейчас",
      title: "RA Zvezda",
      description: "Ведущий цифровой художник и 2D-аниматор. Специализировался на разработке кастомных скриптов для Moho 12 для оптимизации и ускорения студийного пайплайна.",
      projects: [
        { name: "Личный дневник", url: "https://www.youtube.com/@lichnyj.dnevnik" },
        { name: "SCP: Хроники", url: "https://www.youtube.com/@scp9608" },
        { name: "АНОН ПЛИЗ", url: "https://www.youtube.com/@%D0%90%D0%9D%D0%9E%D0%9D%D0%9F%D0%9B%D0%98%D0%97" },
        { name: "Скрипты для Moho 12", url: null }
      ],
      roles: ["2D Аниматор", "Скриптинг Moho", "Моушн-дизайнер", "3D Моделлер", "VFX"]
    },
    {
      era: "2020",
      title: "Fardo Studio®",
      description: "Креативная студия, специализирующаяся на создании высококачественной анимации и цифрового контента.",
      projects: [
        { name: "YouTube Канал", url: "https://www.youtube.com/@fardostudio" }
      ],
      roles: ["Концепт-художник", "2D Аниматор", "Риггер", "VFX"]
    },
    {
      era: "2017 - 2019",
      title: "Tajikfilm",
      description: "Государственная киностудия Таджикистана, центр национального кинопроизводства.",
      projects: [
        { name: "Официальный сайт", url: "https://tojikfilm.tj/ru/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F-2/" }
      ],
      roles: ["Художник персонажей", "Концепт-художник", "Аниматор", "3D Моделлер", "Риггер"]
    }
  ]
};

const technicalArsenal = {
  en: [
    {
      category: "3D Pipeline",
      skills: ["ZBrush", "Blender", "Autodesk Maya", "Substance Painter"]
    },
    {
      category: "2D & Animation",
      skills: ["Moho (Anime Studio)", "TV Paint", "After Effects", "Premiere Pro", "Photoshop"]
    },
    {
      category: "Software Engineering",
      skills: ["React", "Tailwind CSS", "Python", "C++"]
    }
  ],
  ru: [
    {
      category: "3D Пайплайн",
      skills: ["ZBrush", "Blender", "Autodesk Maya", "Substance Painter"]
    },
    {
      category: "2D и Анимация",
      skills: ["Moho (Anime Studio)", "TV Paint", "After Effects", "Premiere Pro", "Photoshop"]
    },
    {
      category: "Software Engineering",
      skills: ["React", "Tailwind CSS", "Python", "C++"]
    }
  ]
};

const labels = {
  en: {
    projects: "Active Projects",
    roles: "Designated Roles",
    capabilities: "System Capabilities",
    arsenal: "Technical Arsenal",
    foundation: "M. Olimov Art College (2015-2018) // Advanced CG Training (XYZ-School, AnimationSchool)"
  },
  ru: {
    projects: "Активные Проекты",
    roles: "Роли и Задачи",
    capabilities: "Системные Возможности",
    arsenal: "Технический Арсенал",
    foundation: "Художественное училище им. М. Олимова (2015-2018) // Продвинутые курсы CG (XYZ-School, AnimationSchool)"
  }
};

export const OperationalHistory = ({ lang }: { lang: 'en' | 'ru' }) => {
  const currentTimeline = timelineData[lang];
  const currentArsenal = technicalArsenal[lang];
  const l = labels[lang];

  return (
    <div className="w-full flex flex-col gap-32">
      {/* Career Timeline */}
      <div className="flex flex-col gap-16">
        {currentTimeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col lg:flex-row gap-8 lg:gap-16 p-6 md:p-10 lg:p-12 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden"
            >
              {/* Background Gradient Effect */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none",
                index % 2 === 0 
                  ? "bg-gradient-to-br from-emerald-500/40 via-transparent to-transparent" 
                  : "bg-gradient-to-br from-orange-500/40 via-transparent to-transparent"
              )} />

              {/* Left Column: Era & Title */}
              <div className="lg:w-1/3 flex flex-col gap-2 md:gap-4 z-10">
                <span className={cn(
                  "font-mono text-[10px] md:text-sm uppercase tracking-[0.2em] font-medium",
                  index % 2 === 0 ? "text-emerald-400" : "text-orange-400"
                )}>
                  {item.era}
                </span>
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white leading-[0.9]">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm md:text-base text-white/60 leading-relaxed mt-2 md:mt-4 max-w-sm font-light">
                    {item.description}
                  </p>
                )}
              </div>

            {/* Right Column: Projects & Roles */}
            <div className="lg:w-2/3 flex flex-col gap-6 md:gap-10 z-10">
              {item.projects && item.projects.length > 0 && (
                <div className="flex flex-col gap-3 md:gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">{l.projects}</span>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {item.projects.map((project, pIdx) => (
                      project.url ? (
                        <motion.a 
                          key={pIdx} 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          whileHover={{ y: -2 }}
                          className="flex items-center gap-2 text-xs md:text-sm font-medium text-white bg-white/5 hover:bg-white/20 transition-colors border border-white/10 rounded-full px-4 py-2 md:px-5 md:py-2.5"
                        >
                          {project.name}
                          <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-white/60" />
                        </motion.a>
                      ) : (
                        <span key={pIdx} className="flex items-center gap-2 text-xs md:text-sm font-medium text-white/40 bg-white/5 border border-white/5 rounded-full px-4 py-2 md:px-5 md:py-2.5">
                          {project.name}
                        </span>
                      )
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex flex-col gap-3 md:gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">{l.roles}</span>
                <div className="flex flex-wrap gap-2">
                  {item.roles.map((role, rIdx) => (
                    <span 
                      key={rIdx} 
                      className="font-mono text-[10px] uppercase tracking-wider text-white/70 bg-black/40 border border-white/10 rounded-lg px-2.5 py-1 md:px-3 md:py-1.5"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Technical Arsenal */}
      <div className="flex flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 text-center items-center"
        >
          <span className="font-mono text-sm text-emerald-400 uppercase tracking-[0.5em]">{l.capabilities}</span>
          <h3 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none">
            {l.arsenal}
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentArsenal.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col gap-8 p-10 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <h4 className={cn(
                "font-mono text-sm uppercase tracking-[0.3em] font-semibold",
                idx === 0 ? "text-emerald-400" : idx === 1 ? "text-orange-400" : "text-blue-400"
              )}>
                {category.category}
              </h4>
              <div className="flex flex-col gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="flex items-center justify-between group/skill cursor-default border-b border-white/5 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-lg md:text-xl font-medium text-white/70 group-hover/skill:text-white transition-colors tracking-tight">
                      {skill}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-white/0 group-hover/skill:text-white/40 transition-all transform -translate-x-4 group-hover/skill:translate-x-0" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Academic & Foundation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 max-w-2xl leading-relaxed">
          {l.foundation}
        </span>
        <div className="flex gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
        </div>
      </motion.div>
    </div>
  );
};
