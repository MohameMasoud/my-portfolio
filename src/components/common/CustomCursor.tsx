import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Check if touch device, disable custom cursor on touch
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (target) {
        const isInteractive = target.closest('a, button, input, textarea, select, [role="button"]');
        setIsPointer(!!isInteractive);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 border border-cyan-400/60 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 18,
          y: position.y - 18,
          scale: isPointer ? 1.8 : 1,
          borderColor: isPointer ? 'rgba(59, 130, 246, 0.9)' : 'rgba(6, 182, 212, 0.5)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.2 }}
      />
    </>
  );
};
