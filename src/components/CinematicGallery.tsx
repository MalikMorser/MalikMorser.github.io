import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const galleryItems = [
  {
    title: "XENOMORPH PRIME",
    subtitle: { en: "3D Sculpt | Mudbox", ru: "3D Скульпт | Mudbox" },
    description: { en: "High-fidelity cinematic character design focusing on intricate surface details and anatomical accuracy.", ru: "Высокодетализированный дизайн кинематографического персонажа с акцентом на сложные текстуры и анатомическую точность." },
    url: "https://i.ibb.co/1YN1p7FP/alien-sculpt.jpg",
    position: "top"
  },
  {
    title: "THE PATRIARCH",
    subtitle: { en: "Concept Art | Photoshop", ru: "Концепт-арт | Photoshop" },
    description: { en: "An in-depth study of an elegant leader character, exploring personality through form and silhouette.", ru: "Глубокое исследование образа элегантного лидера через форму и силуэт." },
    url: "https://i.ibb.co/Z6c96KpS/hippo-boss.jpg",
    position: "50% 20%"
  },
  {
    title: "THE GUARDIAN",
    subtitle: { en: "Digital Art | Photoshop", ru: "Цифровой арт | Photoshop" },
    description: { en: "A stylized character illustration merging feline aesthetics with high-tech elements.", ru: "Стилизованная иллюстрация персонажа, объединяющая кошачью эстетику с высокотехнологичными элементами." },
    url: "https://i.ibb.co/twGHZvJ1/cat-art.jpg",
    position: "center"
  },
  {
    title: "NORDIC SHELTER",
    subtitle: { en: "3D Modeling | Blender", ru: "3D Моделирование | Blender" },
    description: { en: "Comprehensive stylized environment design and modular prop development.", ru: "Комплексный дизайн стилизованного окружения и разработка модульных пропсов." },
    url: "https://i.ibb.co/5hZRkfLb/house-3d.jpg",
    position: "center"
  },
  {
    title: "NEON MUSE",
    subtitle: { en: "Digital Portrait", ru: "Цифровой портрет" },
    description: { en: "A vibrant character study exploring stylized form and expressive digital painting techniques.", ru: "Яркий этюд персонажа, исследующий стилизованные формы и экспрессивные техники цифровой живописи." },
    url: "https://i.ibb.co/HDp3NrPR/cyber-girl-1.jpg",
    position: "center"
  },
  {
    title: "GOTHAM NOIR",
    subtitle: { en: "Fan Art | Concept", ru: "Фан-арт | Концепт" },
    description: { en: "An atmospheric noir study of iconic characters, focusing on dramatic lighting and cinematic composition.", ru: "Атмосферный нуарный этюд культовых персонажей с акцентом на драматическое освещение и композицию." },
    url: "https://i.ibb.co/CsVhwHGJ/batman-noir.jpg",
    position: "center"
  },
  {
    title: "WARLORD ASPECT",
    subtitle: { en: "3D Sculpt | ZBrush", ru: "3D Скульпт | ZBrush" },
    description: { en: "Advanced high-poly organic anatomy study focusing on muscular structure and skin deformation.", ru: "Продвинутое изучение высокополигональной органической анатомии с акцентом на мышечную структуру." },
    url: "https://i.ibb.co/pBwqy5CB/orc-sculpt.jpg",
    position: "center"
  },
  {
    title: "FUTURE ECHO",
    subtitle: { en: "Digital Painting", ru: "Цифровая живопись" },
    description: { en: "Experimental sci-fi portraiture exploring futuristic aesthetics and digital lighting.", ru: "Экспериментальный научно-фантастический портрет, исследующий футуристическую эстетику и цифровой свет." },
    url: "https://i.ibb.co/99jk6YNM/cyber-girl-2.jpg",
    position: "center"
  },
  {
    title: "SHINOBI PROTOCOL",
    subtitle: { en: "Action Keyframe", ru: "Экшн-кадр" },
    description: { en: "Dynamic keyframe illustration of an epic combat sequence between a stylized protagonist and autonomous drones.", ru: "Динамичная ключевая сцена эпического сражения стилизованного героя с автономными дронами." },
    url: "https://i.ibb.co/sJC7F44h/ninja-cat.jpg",
    position: "center"
  },
  {
    title: "MORNING INTERVAL",
    subtitle: { en: "Painterly Art", ru: "Живописный арт" },
    description: { en: "An atmospheric slice-of-life portrait capturing a quiet moment through soft lighting and painterly textures.", ru: "Атмосферный портрет в жанре повседневности, запечатлевший тихий момент через мягкий свет и живописные текстуры." },
    url: "https://i.ibb.co/cS6Bk8ND/coffee-girl.jpg",
    position: "center"
  },
  {
    title: "OPTIC VISION",
    subtitle: { en: "Fashion Concept", ru: "Фэшн-концепт" },
    description: { en: "A sleek character design study focusing on modern fashion and accessory integration.", ru: "Изящный дизайн персонажа, фокусирующийся на современной моде и интеграции аксессуаров." },
    url: "https://i.ibb.co/pBhnrYQY/glass-girl.jpg",
    position: "center"
  },
  {
    title: "GHOST AGENT",
    subtitle: { en: "Techwear Concept", ru: "Techwear концепт" },
    description: { en: "Urban character concept featuring aggressive mask design and high-tech street aesthetics.", ru: "Концепт городского персонажа с агрессивным дизайном маски и эстетикой хай-тек стритвира." },
    url: "https://i.ibb.co/hJVQfsS5/mask-guy.jpg",
    position: "center"
  },
  {
    title: "ANCIENT TITAN",
    subtitle: { en: "ZBrush | Hyper-Realism", ru: "ZBrush | Гиперреализм" },
    description: { en: "Hyper-realistic anatomical study of an ancient horned giant - Frontal perspective.", ru: "Гиперреалистичный анатомический этюд древнего рогатого гиганта - Фронтальный вид." },
    url: "https://i.ibb.co/WNmCh5bz/giant-horn-1.jpg",
    position: "center"
  },
  {
    title: "ANCIENT TITAN",
    subtitle: { en: "Anatomy Study", ru: "Изучение анатомии" },
    description: { en: "Hyper-realistic anatomical study of an ancient horned giant - Lateral profile.", ru: "Гиперреалистичный анатомический этюд древнего рогатого гиганта - Вид в профиль." },
    url: "https://i.ibb.co/5Wqs54ZW/giant-horn-2.jpg",
    position: "center"
  },
  {
    title: "ANCIENT TITAN",
    subtitle: { en: "Texture Detail", ru: "Детализация текстур" },
    description: { en: "Macro-scale texture rendering focusing on weathered skin details and realistic surface imperfections.", ru: "Макро-рендер текстур с акцентом на детали обветренной кожи и реалистичные несовершенства поверхности." },
    url: "https://i.ibb.co/xq0Phnm5/giant-horn-3.jpg",
    position: "center"
  }
];

export const CinematicGallery = ({ lang }: { lang: 'en' | 'ru' }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div ref={containerRef} className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-[#050505] border-y border-white/10 group">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 200, damping: 25 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }}
          className="absolute inset-0 w-full h-full flex items-center justify-center"
        >
          <div className="relative w-full h-full overflow-hidden">
            <motion.img
              style={{ y: imageY, objectPosition: galleryItems[index].position }}
              src={galleryItems[index].url}
              alt={galleryItems[index].title}
              className="absolute inset-0 w-full h-[120%] object-cover filter grayscale contrast-[0.85] brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-[filter] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[filter]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
            
            <div className="absolute bottom-8 left-6 md:bottom-24 md:left-24 z-10 max-w-4xl pr-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-2 md:space-y-4"
              >
                <div className="flex flex-col gap-1 md:gap-2">
                  <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#FF3E00] group-hover:text-[#ff5e2b] group-hover:drop-shadow-[0_0_8px_rgba(255,62,0,0.6)] transition-all duration-700">
                    {galleryItems[index].subtitle[lang]}
                  </span>
                  <h3 className="text-[10vw] md:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] text-white group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-700">
                    {galleryItems[index].title}
                  </h3>
                  <p className="text-xs md:text-lg text-white/70 group-hover:text-white font-light max-w-xl leading-relaxed mt-2 border-l-2 border-[#FF3E00] pl-4 transition-colors duration-700">
                    {galleryItems[index].description[lang]}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-x-2 md:inset-x-12 flex justify-between items-center z-20 pointer-events-none">
        <button
          onClick={prevSlide}
          className="p-3 md:p-8 border border-white/20 bg-black/50 text-white pointer-events-auto hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
        >
          <ArrowLeft className="w-5 h-5 md:w-8 md:h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 md:p-8 border border-white/20 bg-black/50 text-white pointer-events-auto hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
        >
          <ArrowRight className="w-5 h-5 md:w-8 md:h-8" />
        </button>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-1 md:gap-2 z-20 max-w-[90vw] overflow-hidden">
        {galleryItems.map((_, i) => (
          <div
            key={i}
            className="h-[2px] w-8 md:w-16 bg-white/10 overflow-hidden"
          >
            {i === index && (
              <motion.div
                layoutId="progress"
                className="h-full bg-[#FF3E00]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
