import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-slate-800/20 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 transition-all duration-150 ease-out shadow-[0_0_12px_rgba(59,130,246,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
