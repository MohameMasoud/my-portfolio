import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Compass, Sun, Moon, Globe, FileText, Sparkles, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import confetti from 'canvas-confetti';
import { playSound } from '../common/AudioToggle';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenAI: () => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenAI,
}) => {
  const { t, toggleLanguage, language } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        playSound('click');
        if (isOpen) onClose();
        else {
          // Trigger open via parent or window event
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const navItems = [
    { label: t('nav.home'), href: '#hero', icon: Compass },
    { label: t('nav.about'), href: '#about', icon: Compass },
    { label: t('nav.skills'), href: '#skills', icon: Compass },
    { label: t('nav.projects'), href: '#projects', icon: Compass },
    { label: t('nav.services'), href: '#services', icon: Compass },
    { label: t('nav.experience'), href: '#experience', icon: Compass },
    { label: t('nav.certificates'), href: '#certificates', icon: Compass },
    { label: t('nav.articles'), href: '#articles', icon: Compass },
    { label: t('nav.testimonials'), href: '#testimonials', icon: Compass },
    { label: t('nav.contact'), href: '#contact', icon: Compass },
  ];

  const actions = [
    {
      label: `Switch to ${language === 'en' ? 'Arabic (العربية)' : 'English'}`,
      action: () => { toggleLanguage(); onClose(); },
      icon: Globe,
    },
    {
      label: `Switch Theme to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      action: () => { toggleTheme(); onClose(); },
      icon: theme === 'dark' ? Sun : Moon,
    },
    {
      label: t('nav.resume'),
      action: () => { onOpenResume(); onClose(); },
      icon: FileText,
    },
    {
      label: t('nav.aiAssistant'),
      action: () => { onOpenAI(); onClose(); },
      icon: Sparkles,
    },
    {
      label: 'Celebrate with Confetti 🎉',
      action: () => { triggerConfetti(); onClose(); },
      icon: Sparkles,
    },
  ];

  const filteredNav = navItems.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );
  const filteredActions = actions.filter(action =>
    action.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="relative w-full max-w-xl rounded-2xl glass-panel border border-slate-700/60 shadow-2xl bg-slate-900/95 text-slate-100 overflow-hidden"
        >
          {/* Search Input */}
          <div className="flex items-center px-4 py-3.5 border-b border-slate-800">
            <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={t('cmd.placeholder')}
              className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
            />
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono font-medium rounded bg-slate-800 text-slate-400 border border-slate-700">
              ESC
            </kbd>
          </div>

          {/* List of Commands */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-4">
            {/* Navigation Commands */}
            {filteredNav.length > 0 && (
              <div>
                <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  {t('cmd.navigation')}
                </div>
                {filteredNav.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => { playSound('click'); onClose(); }}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-800/80 text-sm text-slate-200 hover:text-white transition-colors"
                  >
                    <item.icon className="w-4 h-4 text-blue-400" />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            )}

            {/* Actions */}
            {filteredActions.length > 0 && (
              <div>
                <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  {t('cmd.actions')}
                </div>
                {filteredActions.map((act, idx) => (
                  <button
                    key={idx}
                    onClick={() => { playSound('click'); act.action(); }}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-800/80 text-sm text-slate-200 hover:text-white transition-colors text-left"
                  >
                    <act.icon className="w-4 h-4 text-cyan-400" />
                    <span>{act.label}</span>
                  </button>
                ))}
              </div>
            )}

            {filteredNav.length === 0 && filteredActions.length === 0 && (
              <div className="py-8 text-center text-sm text-slate-400">
                {t('cmd.noResults')}
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-t border-slate-800 bg-slate-950/60 text-[11px] text-slate-400">
            <span>Mohamed Mahmoud Masoud • Full Stack Portfolio</span>
            <div className="flex items-center gap-2">
              <a href="https://github.com/mohamed-masoud" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Github className="w-3.5 h-3.5" />
              </a>
              <a href="https://linkedin.com/in/mohamed-masoud" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
