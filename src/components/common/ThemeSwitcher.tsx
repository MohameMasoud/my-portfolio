import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { playSound } from './AudioToggle';

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    playSound('click');
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-lg bg-slate-800/40 hover:bg-slate-700/60 border border-slate-700/50 text-slate-300 hover:text-white transition-all duration-200"
      title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 text-indigo-400" />
      )}
    </button>
  );
};
