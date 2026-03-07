import React from 'react';
import { motion } from 'framer-motion';

export const FacialRiggingCover = () => {
  return (
    <div className="w-full h-full bg-[#060605] flex items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 1920 1080"
        className="w-full h-full opacity-90"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Technical Grid Background */}
        <g className="opacity-10">
          <defs>
            <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </g>

        <g transform="translate(960, 540) scale(1.2)">
          {/* Face Contour */}
          <motion.path
            d="M -200 -250 C -300 -250 -350 -100 -350 50 C -350 250 -200 400 0 450 C 200 400 350 250 350 50 C 350 -100 300 -250 200 -250"
            stroke="#FDFEFD"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Topology / Mesh Lines */}
          <motion.g
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Vertical Center Line */}
            <path d="M 0 -250 L 0 450" stroke="#FDFEFD" strokeWidth="1" strokeDasharray="5 5" />
            
            {/* Horizontal Eye Line */}
            <path d="M -350 0 L 350 0" stroke="#FDFEFD" strokeWidth="1" strokeDasharray="5 5" />
            
            {/* Cheek Curves */}
            <path d="M -300 100 Q -150 150 0 150 Q 150 150 300 100" stroke="#FDFEFD" strokeWidth="1" fill="none" />
            <path d="M -280 -100 Q -140 -50 0 -50 Q 140 -50 280 -100" stroke="#FDFEFD" strokeWidth="1" fill="none" />
          </motion.g>

          {/* Eyes */}
          <g transform="translate(-120, -20)">
            <motion.path
              d="M -80 0 Q 0 -60 80 0 Q 0 60 -80 0"
              stroke="#FDFEFD"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            <circle cx="0" cy="0" r="30" stroke="#FDFEFD" strokeWidth="1" fill="none" />
            {/* Iris Control */}
            <circle cx="0" cy="0" r="5" fill="#FF3E00" />
            <motion.line x1="0" y1="0" x2="50" y2="-50" stroke="#FF3E00" strokeWidth="1" 
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 1 }} 
            />
          </g>
          
          <g transform="translate(120, -20)">
            <motion.path
              d="M -80 0 Q 0 -60 80 0 Q 0 60 -80 0"
              stroke="#FDFEFD"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            <circle cx="0" cy="0" r="30" stroke="#FDFEFD" strokeWidth="1" fill="none" />
             {/* Iris Control */}
             <circle cx="0" cy="0" r="5" fill="#FF3E00" />
             <motion.line x1="0" y1="0" x2="50" y2="-50" stroke="#FF3E00" strokeWidth="1" 
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 1 }} 
            />
          </g>

          {/* Nose Structure */}
          <motion.path
            d="M -40 100 L 0 180 L 40 100"
            stroke="#FDFEFD"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
          <circle cx="0" cy="180" r="4" fill="#FF3E00" />

          {/* Mouth Rig */}
          <g transform="translate(0, 250)">
            <motion.path
              d="M -100 0 Q 0 50 100 0"
              stroke="#FDFEFD"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            />
            <motion.path
              d="M -100 0 Q 0 -30 100 0"
              stroke="#FDFEFD"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            />
            
            {/* Mouth Controls */}
            <circle cx="-100" cy="0" r="6" stroke="#FF3E00" strokeWidth="2" fill="#060605" />
            <circle cx="100" cy="0" r="6" stroke="#FF3E00" strokeWidth="2" fill="#060605" />
            <circle cx="0" cy="-15" r="4" fill="#FF3E00" />
            <circle cx="0" cy="25" r="4" fill="#FF3E00" />
            
            {/* Spline Handles */}
            <motion.line x1="-100" y1="0" x2="-140" y2="-20" stroke="#FF3E00" strokeWidth="1" strokeDasharray="2 2"
               initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 1.5 }}
            />
             <motion.line x1="100" y1="0" x2="140" y2="-20" stroke="#FF3E00" strokeWidth="1" strokeDasharray="2 2"
               initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 1.5 }}
            />
          </g>

          {/* Jaw Bone Structure */}
          <motion.path
            d="M -180 150 L -150 350 L 0 450 L 150 350 L 180 150"
            stroke="#FDFEFD"
            strokeWidth="1"
            strokeDasharray="4 4"
            fill="none"
            opacity="0.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
          />

          {/* Control Splines (Brows) */}
          <motion.path
            d="M -180 -80 Q -120 -120 -60 -80"
            stroke="#FF3E00"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          />
          <motion.path
            d="M 60 -80 Q 120 -120 180 -80"
            stroke="#FF3E00"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          />
          
          {/* Connection Lines (Technical Schematic Feel) */}
          <g opacity="0.4">
             <line x1="-200" y1="-250" x2="-250" y2="-300" stroke="#FDFEFD" strokeWidth="1" />
             <text x="-260" y="-310" fill="#FDFEFD" fontSize="12" fontFamily="monospace" textAnchor="end">CRANIAL_NODE_01</text>
             
             <line x1="200" y1="400" x2="250" y2="450" stroke="#FDFEFD" strokeWidth="1" />
             <text x="260" y="460" fill="#FDFEFD" fontSize="12" fontFamily="monospace">MANDIBLE_AXIS</text>
          </g>

        </g>
      </svg>
    </div>
  );
};
