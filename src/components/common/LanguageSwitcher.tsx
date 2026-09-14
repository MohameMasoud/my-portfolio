import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';
import { playSound } from './AudioToggle';

export const LanguageSwitcher: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  const handleToggle = () => {
    playSound('click');
    toggleLanguage();
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/40 hover:bg-slate-700/60 border border-slate-700/50 text-slate-300 hover:text-white transition-all text-xs font-semibold"
      title="Switch Language (English / العربية)"
    >
      <Globe className="w-3.5 h-3.5 text-blue-400" />
      <span>{language === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
};
