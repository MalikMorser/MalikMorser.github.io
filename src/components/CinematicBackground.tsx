import React from 'react';
import { motion } from 'framer-motion';

const CinematicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-transparent">
      {/* Base Grid */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      {/* Vertical Scanline */}
      <motion.div 
        animate={{ x: ["0%", "100%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-y-0 w-[1px] bg-white/10 shadow-[0_0_8px_rgba(255,255,255,0.2)]"
      />

      {/* Horizontal Scanline */}
      <motion.div 
        animate={{ y: ["0%", "100%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-[1px] bg-white/10 shadow-[0_0_8px_rgba(255,255,255,0.2)]"
      />

      {/* Subtle Radial Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/60" />

      {/* Technical Corner Markers */}
      <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/20" />
      <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20" />
      <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/20" />
      <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/20" />
    </div>
  );
};

export default CinematicBackground;
