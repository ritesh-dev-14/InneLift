import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop/devices with a real pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const mouseMove = (e) => {
      setIsVisible(true);
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e) => {
      // Check if hovering over clickable elements
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const mouseLeave = () => {
      setIsVisible(false);
    };

    const mouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseleave', mouseLeave);
    window.addEventListener('mouseenter', mouseEnter);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseleave', mouseLeave);
      window.removeEventListener('mouseenter', mouseEnter);
    };
  }, []);

  // Hide the custom cursor completely on mobile devices or when it's off-screen
  if (window.matchMedia('(pointer: coarse)').matches || !isVisible) {
    return null;
  }

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: 'transparent',
      border: '2px solid rgba(6, 182, 212, 0.4)',
      height: 32,
      width: 32,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 800,
        damping: 35,
        mass: 0.5,
      },
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(6, 182, 212, 0.1)',
      border: '2px solid rgba(6, 182, 212, 0.8)',
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 800,
        damping: 35,
        mass: 0.5,
      },
    },
  };

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
      
      {/* Outer Circle (Trails smoothly via spring physics) */}
      <motion.div
        className="fixed top-0 left-0 z-[10000] rounded-full pointer-events-none mix-blend-screen shadow-[0_0_10px_rgba(6,182,212,0.3)] backdrop-blur-[1px]"
        variants={variants}
        animate={isHovering ? 'hover' : 'default'}
      />
      
      {/* Inner Dot (Instant tracking) */}
      <motion.div
        className="fixed top-0 left-0 z-[10001] w-2 h-2 bg-cyan-400 rounded-full pointer-events-none mix-blend-screen shadow-[0_0_10px_rgba(6,182,212,0.8)]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{
          type: 'tween',
          ease: 'linear',
          duration: 0.02
        }}
      />
    </>
  );
};

export default CustomCursor;
