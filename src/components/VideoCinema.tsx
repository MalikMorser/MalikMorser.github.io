import React from 'react';
import { SmartVideoCover } from './SmartVideoCover';
import { DinosaurCover } from './covers/DinosaurCover';
import { FacialRiggingCover } from './covers/FacialRiggingCover';
import { MohoCover } from './covers/MohoCover';

const videoItems = [
  {
    title: {
      en: "Dinosaur Muscle Physics",
      ru: "Физика мышц динозавра"
    },
    embedUrl: "https://www.youtube.com/embed/1vF_r26le1o",
    theme: {
      en: "Paleontology & Biomechanical Muscle Systems",
      ru: "Палеонтология и биомеханические мышечные системы"
    },
    glowColor: "teal" as const,
    coverArt: <DinosaurCover />
  },
  {
    title: {
      en: "Advanced Facial Rigging",
      ru: "Продвинутый лицевой риггинг"
    },
    embedUrl: "https://www.youtube.com/embed/ON63As-oap4",
    theme: {
      en: "Advanced Human Anatomy & Digital Character Rigging",
      ru: "Продвинутая анатомия человека и риггинг цифровых персонажей"
    },
    glowColor: "amber" as const,
    coverArt: <FacialRiggingCover />
  },
  {
    title: {
      en: "Moho Character Rigging",
      ru: "Риггинг персонажа в Moho"
    },
    embedUrl: "https://www.youtube.com/embed/wqY_CTPTYd0",
    theme: {
      en: "Professional 2D Puppet Mechanics & Character Rigging",
      ru: "Профессиональная механика 2D-марионеток и риггинг персонажей"
    },
    glowColor: "teal" as const,
    coverArt: <MohoCover />
  }
];

export const VideoCinema = ({ lang }: { lang: 'en' | 'ru' }) => {
  return (
    <div className="w-full space-y-16">
      {videoItems.map((video, i) => (
        <SmartVideoCover 
          key={i} 
          {...video} 
          title={video.title[lang]}
          theme={video.theme[lang]}
          lang={lang}
        />
      ))}
    </div>
  );
};
