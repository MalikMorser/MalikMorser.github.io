import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const TRAIL_COUNT = 12; // Number of segments in the tail

const TrailPoint = ({ mouseX, mouseY, index, isHovered }: { mouseX: any, mouseY: any, index: number, isHovered: boolean }) => {
  const stiffness = 1000 - index * 50;
  const damping = 40 + index * 2;
  const x = useSpring(mouseX, { stiffness, damping, mass: 0.1 });
  const y = useSpring(mouseY, { stiffness, damping, mass: 0.1 });

  return (
    <motion.div
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className="absolute rounded-full"
      animate={{
        width: isHovered ? 0 : Math.max(2, 12 - index),
        height: isHovered ? 0 : Math.max(2, 12 - index),
        backgroundColor: isHovered ? '#FF5500' : '#5EEAD4',
        opacity: (1 - index / TRAIL_COUNT) * 0.4,
      }}
      transition={{ duration: 0.2 }}
    />
  );
};

export const HolographicCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mouse position motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring config for the outer ring
  const ringX = useSpring(mouseX, { stiffness: 1000, damping: 40, mass: 0.1 });
  const ringY = useSpring(mouseY, { stiffness: 1000, damping: 40, mass: 0.1 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(!window.matchMedia('(pointer: fine)').matches);
    };
    checkMobile();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer');
      
      setIsHovered(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] mix-blend-difference">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Trail */}
            {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
              <TrailPoint 
                key={i} 
                mouseX={mouseX} 
                mouseY={mouseY} 
                index={i} 
                isHovered={isHovered} 
              />
            ))}

            {/* Outer Glowing Ring */}
            <motion.div
              style={{
                x: ringX,
                y: ringY,
                translateX: '-50%',
                translateY: '-50%',
              }}
              className="absolute rounded-full border"
              animate={{
                width: isHovered ? 72 : 24,
                height: isHovered ? 72 : 24,
                borderColor: isHovered ? '#FF5500' : '#5EEAD4',
                backgroundColor: isHovered ? 'rgba(255, 85, 0, 0.1)' : 'rgba(94, 234, 212, 0.05)',
                boxShadow: isHovered 
                  ? '0 0 30px rgba(255, 85, 0, 0.4)' 
                  : '0 0 15px rgba(94, 234, 212, 0.2)',
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 400, 
                damping: 30 
              }}
            >
              <div className="absolute inset-0 rounded-full blur-[2px] opacity-50" />
            </motion.div>

            {/* Inner Core */}
            <motion.div
              style={{
                x: mouseX,
                y: mouseY,
                translateX: '-50%',
                translateY: '-50%',
              }}
              className="absolute w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_10px_white]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HolographicCursor;
