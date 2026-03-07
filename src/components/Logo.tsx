import React from 'react';
import { motion, Variants } from 'framer-motion';

export const Logo = () => {
  // Animation variants for the "Circle" (S3)
  // It will shoot out, spin rapidly, and glow
  const circleVariants: Variants = {
    idle: { 
      x: 0, 
      rotate: 0, 
      scale: 1,
      filter: "drop-shadow(0px 0px 0px rgba(255, 184, 0, 0))"
    },
    hover: { 
      x: -400, // Shoot out to the left
      rotate: -360, // Full spin
      scale: 1.1, // Slight expansion
      filter: "drop-shadow(0px 0px 20px rgba(255, 184, 0, 0.6))", // Glowing trail effect
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 15, // Low damping for "bounciness"
        mass: 1
      }
    }
  };

  // Animation for the "Body Part 1" (S1 - The Rectangle)
  const s1Variants: Variants = {
    idle: { 
      y: 0, 
      rotate: 0,
      filter: "drop-shadow(0px 0px 0px rgba(255, 255, 255, 0))"
    },
    hover: { 
      y: -150, // Slide up
      rotate: 5, // Slight tilt
      filter: "drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.4))",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 12,
        mass: 0.8
      }
    }
  };

  // Animation for the "Body Part 2" (S2 - The Middle Shape)
  const s2Variants: Variants = {
    idle: { 
      y: 0, 
      rotate: 0,
      filter: "drop-shadow(0px 0px 0px rgba(255, 255, 255, 0))"
    },
    hover: { 
      y: 150, // Slide down
      rotate: -5, // Tilt opposite
      filter: "drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.4))",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 12,
        mass: 0.8,
        delay: 0.02 // Tiny offset for organic feel
      }
    }
  };

  return (
    <motion.div 
      className="relative z-50 p-3 -ml-3 cursor-pointer" // Reduced padding
      initial="idle"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
    >
      <svg 
        id="morser-logo" 
        viewBox="150 700 2200 1200" 
        className="w-auto h-8 md:h-10 overflow-visible" // Reduced height
        style={{ overflow: 'visible' }}
      >
        <g id="Layer_3">
          {/* Shape 1 (Top/Right part) */}
          <motion.path 
            variants={s1Variants}
            id="S1" 
            fill="#FFFFFF" 
            fillRule="evenodd" 
            stroke="none" 
            d="M 1684.228 726.732 C 1684.293 726.732 2333.738 726.732 2333.802 726.732 C 2333.802 726.843 2333.802 1830.061 2333.802 1830.172 C 2333.738 1830.172 1684.293 1830.172 1684.228 1830.172 C 1684.228 1830.061 1684.228 726.843 1684.228 726.732 Z"
          />
          
          {/* Shape 2 (Middle part) */}
          <motion.path 
            variants={s2Variants}
            id="S2" 
            fill="#FFFFFF" 
            fillRule="evenodd" 
            stroke="none" 
            d="M 833.651 1132.156 C 829.856 1119.457 829.068 1105.494 829.068 1091.341 C 829.067 912.872 949.550 750.015 1157.470 727.252 C 1162.469 727.252 1370.444 727.252 1417.406 727.252 C 1429.424 758.281 1656.370 1351.216 1681.249 1414.790 C 1692.496 1445.055 1696.164 1567.469 1636.364 1660.808 C 1566.858 1769.296 1471.324 1814.271 1394.297 1827.015 C 1321.710 1833.333 1259.755 1831.353 1103.720 1831.764 C 1058.943 1715.245 860.087 1200.238 833.651 1132.156 Z"
          />
          
          {/* The Circle (S3) - The Dynamic Element */}
          <motion.path 
            variants={circleVariants}
            id="S3" 
            fill="#FFFFFF" 
            fillRule="evenodd" 
            stroke="none" 
            d="M 556.946 1078.866 C 766.715 1078.866 935.936 1248.089 935.935 1457.858 C 935.935 1667.625 766.714 1836.846 556.946 1836.846 C 347.179 1836.846 177.958 1667.625 177.958 1457.858 C 177.957 1248.089 347.178 1078.866 556.946 1078.866 Z"
          />
        </g>
      </svg>
    </motion.div>
  );
};
