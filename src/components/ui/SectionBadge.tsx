import React from 'react';

interface SectionBadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({ children, icon }) => {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-500 border border-blue-500/20 shadow-sm backdrop-blur-md mb-3">
      {icon && <span className="text-blue-500">{icon}</span>}
      <span>{children}</span>
    </div>
  );
};
