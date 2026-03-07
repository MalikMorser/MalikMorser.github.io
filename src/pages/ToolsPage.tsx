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
  Youtube,
  Coffee
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CinematicBackground from '../components/CinematicBackground';

// --- Types ---
type ToolType = 'moho' | 'blender';

interface Tool {
  id: string;
  title: string;
  description: { en: string, ru: string };
  shortDescription: { en: string, ru: string };
  link: string;
  repo: string;
  youtube?: string;
  type: ToolType;
  features: { en: string[], ru: string[] };
  version: string;
  language: string;
  codeSnippet: string;
}

// --- Constants & Data ---
const BLENDER_LOGO = "https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg";
const MOHO_LOGO = "https://yt3.googleusercontent.com/IFTazpjmi70HZVh8kygfe5ejuwAh73Qd2x5ZyDhGRMMapk2TAyg-c28CUpWT8AM7g4hFeTPoUw=s160-c-k-c0x00ffffff-no-rj"; 

const TOOLS: Tool[] = [
  {
    id: "moho-layers",
    title: "Show All Layers",
    shortDescription: {
      en: "Instant layer visibility toggle for complex rigs.",
      ru: "Мгновенное переключение видимости слоев для сложных ригов."
    },
    description: {
      en: "A powerful utility script for Moho that instantly reveals all hidden layers across your entire project. Essential for complex rigs and large-scale animation scenes where managing visibility becomes tedious. Built with performance in mind, it scans recursively without lagging the software.",
      ru: "Мощный скрипт-утилита для Moho, который мгновенно показывает все скрытые слои во всем проекте. Незаменим для сложных ригов и масштабных анимационных сцен, где управление видимостью становится утомительным. Создан с учетом производительности, сканирует рекурсивно, не замедляя работу программы."
    },
    link: "https://github.com/Maxi000001/Show-All-Layers-Moho/archive/refs/heads/main.zip",
    repo: "https://github.com/Maxi000001/Show-All-Layers-Moho",
    type: "moho",
    features: {
      en: [
        "One-click visibility toggle", 
        "Recursive layer scanning", 
        "Optimized for Moho 13.5+", 
        "Zero performance impact"
      ],
      ru: [
        "Переключение видимости в один клик",
        "Рекурсивное сканирование слоев",
        "Оптимизировано для Moho 13.5+",
        "Нулевое влияние на производительность"
      ]
    },
    version: "1.0.0",
    language: "Lua",
    codeSnippet: `<span class="text-pink-500">function</span> <span class="text-blue-400">ShowAllLayers</span>:Run(moho)
  <span class="text-pink-500">local</span> doc = moho.document
  <span class="text-pink-500">local</span> count = <span class="text-purple-400">0</span>
  
  <span class="text-ghost-silver/40">-- Recursive scan</span>
  <span class="text-pink-500">for</span> i = <span class="text-purple-400">0</span>, doc:CountLayers() - <span class="text-purple-400">1</span> <span class="text-pink-500">do</span>
    <span class="text-pink-500">local</span> layer = doc:Layer(i)
    <span class="text-pink-500">if</span> <span class="text-pink-500">not</span> layer:IsVisible() <span class="text-pink-500">then</span>
      layer:SetVisible(<span class="text-orange-400">true</span>)
      count = count + <span class="text-purple-400">1</span>
    <span class="text-pink-500">end</span>
  <span class="text-pink-500">end</span>
  
  <span class="text-yellow-300">print</span>(<span class="text-green-400">"Revealed "</span> .. count .. <span class="text-green-400">" layers"</span>)
<span class="text-pink-500">end</span>`
  },
  {
    id: "blender-bone",
    title: "Magic Bone",
    shortDescription: {
      en: "Geometry-based bone generation for rapid rigging.",
      ru: "Генерация костей на основе геометрии для быстрого риггинга."
    },
    description: {
      en: "A professional tool for rapid rigging in Blender. Generate bones directly from mesh geometry with mathematical precision. Automate routine armature creation processes, calculate exact normals, and save hours of manual weight painting and bone alignment.",
      ru: "Профессиональный инструмент для быстрого риггинга в Blender. Генерируйте кости прямо из геометрии меша с математической точностью. Автоматизируйте рутинные процессы создания арматуры, вычисляйте точные нормали и экономьте часы на ручной развесовке и выравнивании костей."
    },
    link: "https://github.com/Maxi000001/Magic-Bone-Blender/archive/refs/heads/main.zip",
    repo: "https://github.com/Maxi000001/Magic-Bone-Blender",
    type: "blender",
    features: {
      en: [
        "Bones from Normals", 
        "Bones by World Axis", 
        "Bone Between 2 Vertices", 
        "Mathematical precision"
      ],
      ru: [
        "Кости по нормалям",
        "Кости по мировым осям",
        "Кость между 2 вершинами",
        "Математическая точность"
      ]
    },
    version: "1.0.0",
    language: "Python",
    codeSnippet: `<span class="text-pink-500">import</span> bpy
<span class="text-pink-500">import</span> mathutils

<span class="text-pink-500">class</span> <span class="text-blue-400">MAGIC_BONE_OT_create</span>(bpy.types.Operator):
    <span class="text-ghost-silver/40">"""Generate bone from selected vertices"""</span>
    bl_idname = <span class="text-green-400">"armature.magic_bone"</span>
    bl_label = <span class="text-green-400">"Create Magic Bone"</span>

    <span class="text-pink-500">def</span> <span class="text-yellow-300">execute</span>(<span class="text-orange-400">self</span>, context):
        obj = context.active_object
        <span class="text-pink-500">if</span> obj.mode != <span class="text-green-400">'EDIT'</span>:
            <span class="text-pink-500">return</span> {<span class="text-green-400">'CANCELLED'</span>}
            
        <span class="text-ghost-silver/40"># Calculate normal vector</span>
        normal = <span class="text-yellow-300">get_selection_normal</span>(obj)
        <span class="text-yellow-300">create_bone_along_vector</span>(normal)
        
        <span class="text-pink-500">return</span> {<span class="text-green-400">'FINISHED'</span>}`
  },
  {
    id: "blender-piano-rig-pro",
    title: "Piano Rig Pro",
    shortDescription: {
      en: "Automated piano rigging and mechanics generation.",
      ru: "Автоматический риггинг пианино и генерация механики."
    },
    description: {
      en: "A comprehensive solution for Blender designed to fully automate the process of creating a skeleton and setting up piano mechanics. The addon transfers all the routine work of setting bones and constraints into one click, allowing you to focus entirely on creativity and animation.",
      ru: "Комплексное решение для Blender, разработанное для полной автоматизации процесса создания скелета и настройки механики пианино. Аддон переносит всю рутинную работу по настройке костей и ограничений в один клик, позволяя вам полностью сосредоточиться на творчестве и анимации."
    },
    link: "https://github.com/Maxi000001/Piano-Rig-Pro-Blender/releases/download/v1.0/Piano.Rig.Pro.v.0.14.zip",
    repo: "https://github.com/Maxi000001/Piano-Rig-Pro-Blender",
    youtube: "https://youtu.be/HVE_EVkQ3ec",
    type: "blender",
    features: {
      en: [
        "Instant Auto-Rig Generation",
        "Mathematical Precision",
        "Pre-configured Constraints",
        "Realistic Mechanical Response",
        "Dedicated N-Panel UI",
        "Visual Control"
      ],
      ru: [
        "Мгновенная генерация авто-рига",
        "Математическая точность",
        "Преднастроенные ограничения",
        "Реалистичный механический отклик",
        "Специальный UI в N-панели",
        "Визуальный контроль"
      ]
    },
    version: "1.0.0",
    language: "Python",
    codeSnippet: `<span class="text-pink-500">import</span> bpy
<span class="text-pink-500">import</span> math

<span class="text-pink-500">class</span> <span class="text-blue-400">PIANO_RIG_OT_generate</span>(bpy.types.Operator):
    <span class="text-ghost-silver/40">"""Generate Piano Rig from selected keys"""</span>
    bl_idname = <span class="text-green-400">"armature.piano_rig_generate"</span>
    bl_label = <span class="text-green-400">"Generate Piano Rig"</span>

    <span class="text-pink-500">def</span> <span class="text-yellow-300">execute</span>(<span class="text-orange-400">self</span>, context):
        keys = context.selected_objects
        <span class="text-pink-500">if</span> <span class="text-pink-500">not</span> keys:
            <span class="text-pink-500">return</span> {<span class="text-green-400">'CANCELLED'</span>}
            
        <span class="text-ghost-silver/40"># Create armature and bones</span>
        armature = <span class="text-yellow-300">create_piano_armature</span>()
        <span class="text-pink-500">for</span> key <span class="text-pink-500">in</span> keys:
            bone = <span class="text-yellow-300">add_bone_for_key</span>(armature, key)
            <span class="text-yellow-300">setup_key_constraints</span>(bone, key)
            
        <span class="text-pink-500">return</span> {<span class="text-green-400">'FINISHED'</span>}`
  },
  {
    id: "blender-mrm-metrics",
    title: "MRM Metrics Pro",
    shortDescription: {
      en: "Professional analytical tool for absolute control over proportions and dimensions.",
      ru: "Профессиональный аналитический инструмент для полного контроля над пропорциями и размерами."
    },
    description: {
      en: "MRM Metrics Pro is a professional analytical tool for Blender designed for absolute control over proportions and dimensions in your scene. Forget standard, cluttered measuring tools. This addon takes the measurement process to a new level, providing clean, intuitive, and instant visual feedback directly in the 3D viewport.",
      ru: "MRM Metrics Pro — это профессиональный аналитический инструмент для Blender, разработанный для абсолютного контроля над пропорциями и размерами в вашей сцене. Забудьте о стандартных, загроможденных инструментах измерения. Этот аддон выводит процесс измерения на новый уровень, предоставляя чистую, интуитивно понятную и мгновенную визуальную обратную связь прямо в 3D-вьюпорте."
    },
    link: "https://github.com/Maxi000001/MRM-Metrics-Blender/archive/refs/heads/main.zip",
    repo: "https://github.com/Maxi000001/MRM-Metrics-Blender",
    youtube: "https://youtu.be/jzIKiHBdppc",
    type: "blender",
    features: {
      en: [
        "Precision Tools (Distance, Angle, Diameter)",
        "Real-Time HUD Visualization",
        "Custom Aesthetics & Colors",
        "Clean Workspace (N-panel toggle)"
      ],
      ru: [
        "Точные инструменты (Расстояние, Угол, Диаметр)",
        "Визуализация HUD в реальном времени",
        "Настраиваемая эстетика и цвета",
        "Чистое рабочее пространство (переключатель N-панели)"
      ]
    },
    version: "1.0.0",
    language: "Python",
    codeSnippet: `<span class="text-pink-500">import</span> bpy
<span class="text-pink-500">import</span> gpu
<span class="text-pink-500">from</span> gpu_extras.batch <span class="text-pink-500">import</span> batch_for_shader

<span class="text-pink-500">class</span> <span class="text-blue-400">MRM_METRICS_OT_draw</span>(bpy.types.Operator):
    <span class="text-ghost-silver/40">"""Draw real-time metrics in viewport"""</span>
    bl_idname = <span class="text-green-400">"view3d.mrm_metrics_draw"</span>
    bl_label = <span class="text-green-400">"Draw Metrics"</span>

    <span class="text-pink-500">def</span> <span class="text-yellow-300">execute</span>(<span class="text-orange-400">self</span>, context):
        <span class="text-ghost-silver/40"># Setup HUD rendering</span>
        shader = gpu.shader.<span class="text-yellow-300">from_builtin</span>(<span class="text-green-400">'3D_UNIFORM_COLOR'</span>)
        batch = <span class="text-yellow-300">batch_for_shader</span>(shader, <span class="text-green-400">'LINES'</span>, {<span class="text-green-400">"pos"</span>: coords})
        
        <span class="text-ghost-silver/40"># Draw with custom aesthetics</span>
        shader.<span class="text-yellow-300">bind</span>()
        shader.<span class="text-yellow-300">uniform_float</span>(<span class="text-green-400">"color"</span>, (1.0, 0.2, 0.2, 1.0))
        batch.<span class="text-yellow-300">draw</span>(shader)
        
        <span class="text-pink-500">return</span> {<span class="text-green-400">'FINISHED'</span>}`
  }
];

// --- Subcomponents ---

const TerminalWindow = ({ code, language, type }: { code: string, language: string, type: ToolType }) => (
  <div className="w-full h-full rounded-2xl bg-[#050505] border border-white/10 overflow-hidden flex flex-col shadow-2xl">
    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
      </div>
      <div className="flex items-center gap-2 text-ghost-silver/40 text-[10px] font-mono uppercase tracking-widest">
        <Terminal size={12} />
        {language}
      </div>
    </div>
    <div className="p-6 overflow-auto flex-1 custom-scrollbar relative">
      <div className={`absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none ${type === 'moho' ? 'bg-blue-500' : 'bg-orange-500'} blur-[100px]`} />
      <pre className="font-mono text-xs md:text-sm leading-relaxed relative z-10">
        <code dangerouslySetInnerHTML={{ __html: code }} />
      </pre>
    </div>
  </div>
);

// --- Main Page Component ---

export const ToolsPage = ({ lang }: { lang: 'en' | 'ru' }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'moho' | 'blender'>('all');
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedTool) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedTool]);

  const filteredTools = TOOLS.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description[lang].toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || tool.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  // Translations
  const t = {
    title: lang === 'en' ? 'DEVELOPER ARSENAL' : 'АРСЕНАЛ РАЗРАБОТЧИКА',
    subtitle: lang === 'en' ? 'Professional scripts and addons to accelerate your creative pipeline.' : 'Профессиональные скрипты и аддоны для ускорения вашего творческого процесса.',
    search: lang === 'en' ? 'Search tools...' : 'Поиск инструментов...',
    all: lang === 'en' ? 'All Tools' : 'Все',
    moho: 'Moho Scripts',
    blender: 'Blender Addons',
    download: lang === 'en' ? 'Download' : 'Скачать',
    source: lang === 'en' ? 'Source Code' : 'Исходный код',
    features: lang === 'en' ? 'Key Features' : 'Ключевые особенности',
    empty: lang === 'en' ? 'No tools found matching your criteria.' : 'Инструменты не найдены.',
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
              placeholder={t.search}
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
              System.Tools // v2.0
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6"
          >
            {t.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-ghost-silver/50 max-w-2xl leading-relaxed font-light"
          >
            {t.subtitle}
          </motion.p>
        </header>

        {/* Filters */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 no-scrollbar">
          <div className="inline-flex p-1.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
            {[
              { id: 'all', label: t.all, icon: Code2 },
              { id: 'moho', label: t.moho, icon: Layers },
              { id: 'blender', label: t.blender, icon: Box }
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
                      layoutId="activeFilter"
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

        {/* Tools Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTools.length > 0 ? (
              filteredTools.map((tool) => (
                <motion.div
                  key={tool.id}
                  layoutId={`card-container-${tool.id}`}
                  onClick={() => setSelectedTool(tool)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer relative flex flex-col h-[340px] bg-white/5 border border-white/10 hover:border-cyber-amber/50 rounded-3xl overflow-hidden backdrop-blur-md transition-colors duration-500"
                >
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl pointer-events-none ${tool.type === 'moho' ? 'bg-blue-500' : 'bg-orange-500'} `} />
                  
                  <div className="p-8 flex flex-col h-full relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <motion.div layoutId={`logo-${tool.id}`} className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center overflow-hidden shadow-lg">
                        <img 
                          src={tool.type === 'moho' ? MOHO_LOGO : BLENDER_LOGO} 
                          alt={tool.type} 
                          className={tool.type === 'moho' ? "w-12 h-12 object-cover rounded-full scale-125" : "w-10 h-10 object-contain"}
                        />
                      </motion.div>
                      <div className={`px-3 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${tool.type === 'moho' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-orange-500/10 border-orange-500/20 text-orange-400'}`}>
                        {tool.type === 'moho' ? <Layers size={12} /> : <Box size={12} />}
                        {tool.type}
                      </div>
                    </div>

                    <motion.h3 layoutId={`title-${tool.id}`} className="text-2xl font-black text-white tracking-tight mb-3 group-hover:text-cyber-amber transition-colors">
                      {tool.title}
                    </motion.h3>
                    
                    <motion.p layoutId={`desc-${tool.id}`} className="text-ghost-silver/60 text-sm leading-relaxed mb-auto line-clamp-3">
                      {tool.shortDescription[lang]}
                    </motion.p>

                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-ghost-silver/40">
                          <Terminal size={14} />
                          <span className="text-[10px] font-bold uppercase tracking-widest">{tool.language}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-ghost-silver/40">
                          <Cpu size={14} />
                          <span className="text-[10px] font-bold uppercase tracking-widest">v{tool.version}</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyber-amber group-hover:text-black transition-colors">
                        <ExternalLink size={14} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full py-32 text-center border border-dashed border-white/10 rounded-3xl bg-white/5"
              >
                <Code2 className="w-16 h-16 text-ghost-silver/20 mx-auto mb-6" />
                <p className="text-ghost-silver/40 text-xl font-light">{t.empty}</p>
              </motion.div>
            )}
            
            {/* Support Card */}
            <Link
              to="/support"
              className="group relative flex flex-col h-[340px] bg-gradient-to-br from-cyber-amber/10 to-transparent border border-cyber-amber/20 hover:border-cyber-amber/50 rounded-3xl overflow-hidden backdrop-blur-md transition-colors duration-500 justify-center items-center text-center p-8"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                className="w-full h-full flex flex-col items-center justify-center"
              >
              <div className="w-20 h-20 rounded-full bg-cyber-amber/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Coffee className="w-8 h-8 text-cyber-amber" />
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight mb-3">
                {lang === 'en' ? 'Buy me a Coffee' : 'Купить мне кофе'}
              </h3>
              <p className="text-ghost-silver/60 text-sm leading-relaxed mb-8 max-w-xs">
                {lang === 'en' 
                  ? "Support the creation of more free tools and scripts for the community." 
                  : "Поддержите создание новых бесплатных инструментов и скриптов для сообщества."}
              </p>
              <span className="px-6 py-3 rounded-full border border-cyber-amber/30 text-cyber-amber text-xs font-bold uppercase tracking-widest group-hover:bg-cyber-amber group-hover:text-black transition-all">
                {lang === 'en' ? 'Donate' : 'Поддержать'}
              </span>
              </motion.div>
            </Link>
          </AnimatePresence>
        </motion.div>
      </main>

      {/* Expanded Tool Modal */}
      <AnimatePresence>
        {selectedTool && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTool(null)}
              className="fixed inset-0 z-[50] bg-black/80 backdrop-blur-xl"
            />
            
            {/* Modal Content */}
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10 pointer-events-none">
              <motion.div
                layoutId={`card-container-${selectedTool.id}`}
                className="w-full max-w-6xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col pointer-events-auto relative"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedTool(null)}
                  className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-ghost-silver hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="flex flex-col lg:flex-row h-full overflow-y-auto lg:overflow-hidden custom-scrollbar">
                  
                  {/* Left Column: Info */}
                  <div className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col relative">
                    {/* Background Glow */}
                    <div className={`absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none ${selectedTool.type === 'moho' ? 'bg-blue-500' : 'bg-orange-500'} blur-[120px]`} />
                    
                    <div className="relative z-10 flex-1">
                      <motion.div layoutId={`logo-${selectedTool.id}`} className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center overflow-hidden shadow-lg mb-6">
                        <img 
                          src={selectedTool.type === 'moho' ? MOHO_LOGO : BLENDER_LOGO} 
                          alt={selectedTool.type} 
                          className={selectedTool.type === 'moho' ? "w-10 h-10 md:w-14 md:h-14 object-cover rounded-full scale-125" : "w-10 h-10 md:w-12 md:h-12 object-contain"}
                        />
                      </motion.div>

                      <motion.h2 layoutId={`title-${selectedTool.id}`} className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
                        {selectedTool.title}
                      </motion.h2>

                      <motion.p layoutId={`desc-${selectedTool.id}`} className="text-sm md:text-base text-ghost-silver/70 leading-relaxed font-light mb-8">
                        {selectedTool.description[lang]}
                      </motion.p>

                      <div className="mb-8">
                        <h4 className="text-xs font-black tracking-widest uppercase text-ghost-silver/40 mb-6 flex items-center gap-2">
                          <Sparkles size={14} className="text-cyber-amber" />
                          {t.features}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {selectedTool.features[lang].map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                              <Zap className="w-4 h-4 text-cyber-amber shrink-0 mt-0.5" />
                              <span className="text-sm text-ghost-silver/80">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="relative z-10 flex flex-col sm:flex-row flex-wrap gap-4 mt-auto pt-8 border-t border-white/10">
                      <a 
                        href={selectedTool.link}
                        className="flex-1 px-6 md:px-8 py-3 md:py-4 rounded-xl bg-cyber-amber text-black font-black uppercase tracking-widest text-xs md:text-sm flex items-center justify-center gap-3 hover:bg-white transition-colors"
                      >
                        <Download size={18} />
                        {t.download}
                      </a>
                      <a 
                        href={selectedTool.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 md:px-8 py-3 md:py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold uppercase tracking-widest text-xs md:text-sm flex items-center justify-center gap-3 transition-colors"
                      >
                        <Github size={18} />
                        {t.source}
                      </a>
                      {selectedTool.youtube && (
                        <a 
                          href={selectedTool.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-6 md:px-8 py-3 md:py-4 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 font-bold uppercase tracking-widest text-xs md:text-sm flex items-center justify-center gap-3 transition-colors"
                        >
                          <Youtube size={18} />
                          Tutorial
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Code Window */}
                  <div className="w-full lg:w-1/2 bg-[#050505] border-l border-white/10 p-6 md:p-12 lg:h-full">
                    <TerminalWindow 
                      code={selectedTool.codeSnippet} 
                      language={selectedTool.language} 
                      type={selectedTool.type} 
                    />
                  </div>

                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-10 border-t border-white/5 bg-[#050505]/80 backdrop-blur-xl relative z-20">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-black tracking-[0.4em] uppercase text-ghost-silver/30">
            © 2024 Malik Boboev // SYSTEM.ONLINE
          </div>
          <div className="flex gap-8">
            {['Github', 'ArtStation', 'LinkedIn'].map(social => (
              <a key={social} href="#" className="text-[10px] font-black tracking-[0.2em] uppercase text-ghost-silver/40 hover:text-cyber-amber transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ToolsPage;
