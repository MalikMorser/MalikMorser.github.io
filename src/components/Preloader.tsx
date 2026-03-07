import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete, lang = 'en' }: { onComplete: () => void, lang?: 'en' | 'ru' }) {
  useEffect(() => {
    // Total duration before exit
    const timeout = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, [onComplete]);

  const pathVariants: any = {
    hidden: { pathLength: 0, fillOpacity: 0 },
    visible: {
      pathLength: 1,
      fillOpacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: "easeInOut" },
        fillOpacity: { duration: 0.4, delay: 1.4 }
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center px-4"
    >
      {/* Logo Container - Responsive sizing */}
      <div className="relative w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] max-w-[800px] max-h-[800px] mb-8 md:mb-12">
        <svg
          viewBox="150 700 2200 1200"
          className="w-full h-full drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Layer_3">
            {/* S1 - Vertical Bar - White */}
            <motion.path
              d="M 1684.228 726.732 C 1684.293 726.732 2333.738 726.732 2333.802 726.732 C 2333.802 726.843 2333.802 1830.061 2333.802 1830.172 C 2333.738 1830.172 1684.293 1830.172 1684.228 1830.172 C 1684.228 1830.061 1684.228 726.843 1684.228 726.732 Z"
              stroke="#FFFFFF"
              strokeWidth="5"
              fill="#FFFFFF"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            {/* S2 - Arch - White */}
            <motion.path
              d="M 833.651 1132.156 C 829.856 1119.457 829.068 1105.494 829.068 1091.341 C 829.067 912.872 949.550 750.015 1157.470 727.252 C 1162.469 727.252 1370.444 727.252 1417.406 727.252 C 1429.424 758.281 1656.370 1351.216 1681.249 1414.790 C 1692.496 1445.055 1696.164 1567.469 1636.364 1660.808 C 1566.858 1769.296 1471.324 1814.271 1394.297 1827.015 C 1321.710 1833.333 1259.755 1831.353 1103.720 1831.764 C 1058.943 1715.245 860.087 1200.238 833.651 1132.156 Z"
              stroke="#FFFFFF"
              strokeWidth="5"
              fill="#FFFFFF"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            {/* S3 - Circle - White */}
            <motion.path
              d="M 556.946 1078.866 C 766.715 1078.866 935.936 1248.089 935.935 1457.858 C 935.935 1667.625 766.714 1836.846 556.946 1836.846 C 347.179 1836.846 177.958 1667.625 177.958 1457.858 C 177.957 1248.089 347.178 1078.866 556.946 1078.866 Z"
              stroke="#FFFFFF"
              strokeWidth="5"
              fill="#FFFFFF"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
          </g>
        </svg>
      </div>

      {/* Text */}
      <div className="font-mono text-white text-xs md:text-sm tracking-[0.3em] font-medium text-center mb-6 opacity-80">
        {lang === 'en' ? 'INITIALIZING SYSTEM...' : 'ИНИЦИАЛИЗАЦИЯ СИСТЕМЫ...'}
      </div>
      
      {/* Loading Bar Container - Thicker and Wider */}
      <div className="w-[92vw] md:w-[80vw] max-w-7xl h-[3px] bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.6)] rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
