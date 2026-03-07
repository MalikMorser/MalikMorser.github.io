import React from 'react';
import { motion } from 'framer-motion';

export const MohoCover = () => {
  return (
    <div className="w-full h-full bg-[#010101] flex items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 1920 1080"
        className="w-full h-full opacity-90"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Background Pattern */}
        <defs>
          <pattern id="dotGrid" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#333" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotGrid)" opacity="0.3" />

        <g transform="translate(960, 540)">
          
          {/* "MOHO" Text - Geometric Block Style */}
          <g transform="translate(-600, -150) scale(1.5)">
            {/* M */}
            <motion.path
              d="M 0 200 L 0 0 L 50 100 L 100 0 L 100 200"
              stroke="#FDFDFD"
              strokeWidth="15"
              strokeLinecap="square"
              strokeLinejoin="miter"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {/* O */}
            <motion.rect
              x="140" y="0" width="100" height="200" rx="20"
              stroke="#FDFDFD"
              strokeWidth="15"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            />
            {/* H */}
            <motion.path
              d="M 280 0 L 280 200 M 280 100 L 380 100 M 380 0 L 380 200"
              stroke="#FDFDFD"
              strokeWidth="15"
              strokeLinecap="square"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
            />
            {/* O */}
            <motion.rect
              x="420" y="0" width="100" height="200" rx="20"
              stroke="#FDFDFD"
              strokeWidth="15"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
            />
          </g>

          {/* Stylized Characters / Rigging Visualization */}
          
          {/* Character 1: Idle Pose (Left) */}
          <g transform="translate(-400, 150) scale(0.8)">
             {/* Body Outline */}
             <motion.path
               d="M 0 -100 L 0 50 L -40 150 M 0 50 L 40 150 M -50 -50 L 50 -50"
               stroke="#FDFDFD"
               strokeWidth="8"
               strokeLinecap="round"
               fill="none"
               initial={{ pathLength: 0 }}
               whileInView={{ pathLength: 1 }}
               transition={{ duration: 1.2, delay: 0.8 }}
             />
             <circle cx="0" cy="-130" r="30" stroke="#FDFDFD" strokeWidth="8" fill="none" />
             
             {/* Bones (Orange) */}
             <motion.line x1="0" y1="-100" x2="0" y2="50" stroke="#FF3E00" strokeWidth="4" 
               initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 1.5 }} />
             <circle cx="0" cy="-100" r="4" fill="#FF3E00" />
             <circle cx="0" cy="50" r="4" fill="#FF3E00" />
          </g>

          {/* Character 2: Action/Jump Pose (Center-Right) */}
          <g transform="translate(200, 100) scale(0.9)">
             {/* Body Outline */}
             <motion.path
               d="M 0 -80 Q 20 -40 40 0 L 80 80 M 40 0 L 0 100 M -40 -60 L 60 -80"
               stroke="#FDFDFD"
               strokeWidth="8"
               strokeLinecap="round"
               fill="none"
               initial={{ pathLength: 0 }}
               whileInView={{ pathLength: 1 }}
               transition={{ duration: 1.2, delay: 1.0 }}
             />
             <circle cx="-10" cy="-110" r="30" stroke="#FDFDFD" strokeWidth="8" fill="none" />

             {/* Bones (Orange) */}
             <motion.path d="M 0 -80 L 40 0" stroke="#FF3E00" strokeWidth="4" fill="none"
               initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 1.7 }} />
             <circle cx="40" cy="0" r="4" fill="#FF3E00" />
          </g>

          {/* Character 3: Running Pose (Far Right) */}
          <g transform="translate(550, 150) scale(0.8)">
             <motion.path
               d="M 20 -80 L -20 20 L -60 80 M -20 20 L 40 60 L 80 40 M -40 -60 L 60 -40"
               stroke="#FDFDFD"
               strokeWidth="8"
               strokeLinecap="round"
               fill="none"
               initial={{ pathLength: 0 }}
               whileInView={{ pathLength: 1 }}
               transition={{ duration: 1.2, delay: 1.2 }}
             />
             <circle cx="40" cy="-110" r="30" stroke="#FDFDFD" strokeWidth="8" fill="none" />
             
             {/* Bones (Orange) */}
             <motion.line x1="20" y1="-80" x2="-20" y2="20" stroke="#FF3E00" strokeWidth="4"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 1.9 }} />
             <circle cx="-20" cy="20" r="4" fill="#FF3E00" />
          </g>

          {/* Connection Lines / Rigging Nodes */}
          <g opacity="0.5">
            <motion.path
              d="M -400 150 C -200 300 0 0 200 100 S 550 0 550 150"
              stroke="#FF3E00"
              strokeWidth="2"
              strokeDasharray="10 10"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 2 }}
            />
            <circle cx="-400" cy="150" r="5" fill="#FF3E00" />
            <circle cx="200" cy="100" r="5" fill="#FF3E00" />
            <circle cx="550" cy="150" r="5" fill="#FF3E00" />
          </g>

        </g>
      </svg>
    </div>
  );
};
