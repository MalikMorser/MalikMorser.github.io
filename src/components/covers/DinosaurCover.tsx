import React from 'react';
import { motion } from 'framer-motion';

export const DinosaurCover = () => {
  return (
    <div className="w-full h-full bg-[#010101] flex items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 1920 1080"
        className="w-full h-full opacity-80"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Grid Lines for Technical Feel */}
        <g className="opacity-10">
          <line x1="0" y1="540" x2="1920" y2="540" stroke="white" strokeWidth="1" />
          <line x1="960" y1="0" x2="960" y2="1080" stroke="white" strokeWidth="1" />
          <circle cx="960" cy="540" r="400" stroke="white" strokeWidth="1" fill="none" />
        </g>

        {/* T-Rex Skeleton / Structure (White Lines) */}
        <g transform="translate(400, 200) scale(0.8)">
          {/* Skull */}
          <motion.path
            d="M 800 150 L 1000 150 L 1050 250 L 950 350 L 850 300 L 800 150"
            stroke="#FAFAFA"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          {/* Spine / Neck / Tail */}
          <motion.path
            d="M 800 200 Q 600 250 500 400 T 200 600 M 500 400 Q 600 500 800 500 T 1200 450"
            stroke="#FAFAFA"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          {/* Ribcage */}
          <motion.path
            d="M 600 450 Q 650 600 800 600 Q 900 600 950 450"
            stroke="#FAFAFA"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          {/* Leg (Femur, Tibia, Foot) */}
          <motion.path
            d="M 800 500 L 850 700 L 750 900 L 850 950"
            stroke="#FAFAFA"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          />
           {/* Arm */}
           <motion.path
            d="M 650 500 L 680 550 L 720 540"
            stroke="#FAFAFA"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          />
        </g>

        {/* Muscle Groups (Orange Highlights) */}
        <g transform="translate(400, 200) scale(0.8)">
          {/* Jaw Muscle */}
          <motion.path
            d="M 850 200 Q 900 250 920 300"
            stroke="#FF3E00"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          />
          {/* Neck Muscle */}
          <motion.path
            d="M 750 220 Q 650 300 600 400"
            stroke="#FF3E00"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.7 }}
          />
          {/* Thigh Muscle */}
          <motion.path
            d="M 800 500 Q 900 600 850 700"
            stroke="#FF3E00"
            strokeWidth="5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.9 }}
          />
           {/* Tail Muscle */}
           <motion.path
            d="M 500 420 Q 400 500 250 580"
            stroke="#FF3E00"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 2.1 }}
          />
        </g>

        {/* Data Points / Annotations */}
        <g transform="translate(400, 200) scale(0.8)">
            <circle cx="920" cy="300" r="4" fill="#FF3E00" />
            <line x1="920" y1="300" x2="1000" y2="250" stroke="#FF3E00" strokeWidth="1" />
            <text x="1010" y="250" fill="#FF3E00" fontSize="14" fontFamily="monospace">MASSETER_TENSION</text>

            <circle cx="850" cy="600" r="4" fill="#FF3E00" />
            <line x1="850" y1="600" x2="950" y2="650" stroke="#FF3E00" strokeWidth="1" />
            <text x="960" y="650" fill="#FF3E00" fontSize="14" fontFamily="monospace">FEMORAL_LOAD</text>
        </g>
      </svg>
    </div>
  );
};
