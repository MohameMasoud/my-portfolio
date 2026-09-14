import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Command, Menu, X, Sparkles, FileText, Code2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';
import { AudioToggle, playSound } from './AudioToggle';

interface NavbarProps {
  onOpenCmd: () => void;
  onOpenResume: () => void;
  onOpenAI: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCmd, onOpenResume, onOpenAI }) => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.articles'), href: '#articles' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Emblem */}
        <a
          href="#hero"
          onClick={() => playSound('click')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center text-white font-extrabold text-sm tracking-wider">
              MM
            </div>
          </div>
          <div className="hidden sm:block">
            <span className="font-extrabold text-base tracking-tight text-white block group-hover:text-blue-400 transition-colors">
              Mohamed Masoud
            </span>
            <span className="text-[10px] font-mono text-cyan-400 block -mt-0.5">
              Full Stack MERN
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => playSound('hover')}
              className="text-xs font-semibold text-slate-300 hover:text-white transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Cmd+K trigger */}
          <button
            onClick={() => { playSound('click'); onOpenCmd(); }}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 text-xs transition-all"
            title="Open Command Palette (Cmd + K)"
          >
            <Command className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-mono text-[11px]">{t('nav.cmdPalette')}</span>
          </button>

          {/* AI Assistant Quick Trigger */}
          <button
            onClick={() => { playSound('click'); onOpenAI(); }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 text-xs font-semibold transition-all shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span className="hidden sm:inline">{t('nav.aiAssistant')}</span>
          </button>

          {/* Resume Trigger */}
          <button
            onClick={() => { playSound('click'); onOpenResume(); }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t('nav.resume')}</span>
          </button>

          {/* Audio, Language & Theme Toggles */}
          <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l border-slate-800">
            <AudioToggle />
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => { playSound('click'); setMobileMenuOpen(!mobileMenuOpen); }}
            className="lg:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-6 space-y-4"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => { playSound('click'); setMobileMenuOpen(false); }}
                  className="text-sm font-semibold text-slate-200 hover:text-blue-400 py-1.5 border-b border-slate-900"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <LanguageSwitcher />
                <ThemeSwitcher />
                <AudioToggle />
              </div>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{t('nav.resume')}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
