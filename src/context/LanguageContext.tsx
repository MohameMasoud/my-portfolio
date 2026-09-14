import React, { createContext, useContext, useEffect, useState } from 'react';
import { LanguageMode } from '../types';
import { en } from '../locales/en';
import { ar } from '../locales/ar';

interface LanguageContextType {
  language: LanguageMode;
  toggleLanguage: () => void;
  setLanguage: (lang: LanguageMode) => void;
  isRTL: boolean;
  t: (path: string) => string;
  translations: typeof en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageMode>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return (saved === 'ar' || saved === 'en') ? saved : 'en';
  });

  const isRTL = language === 'ar';
  const translations = language === 'ar' ? ar : en;

  useEffect(() => {
    localStorage.setItem('portfolio_lang', language);
    const root = document.documentElement;
    root.setAttribute('lang', language);
    root.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState(prev => prev === 'en' ? 'ar' : 'en');
  };

  const setLanguage = (lang: LanguageMode) => {
    setLanguageState(lang);
  };

  // Nested translation helper: t('hero.greeting')
  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = translations;
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return path; // Fallback to path if key not found
      }
    }
    return typeof current === 'string' ? current : path;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, isRTL, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
