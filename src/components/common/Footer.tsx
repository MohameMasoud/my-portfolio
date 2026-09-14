import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp, Heart, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { personalDetails } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Background glow ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-[1px] shadow-lg">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center text-white font-extrabold text-sm">
                  MM
                </div>
              </div>
              <div>
                <span className="font-extrabold text-lg text-white block">Mohamed Mahmoud Masoud</span>
                <span className="text-xs text-cyan-400 font-mono">Full Stack MERN Developer</span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-md">
              {t('hero.tagline')}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalDetails.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">About Mohamed</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills & Tech Stack</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Featured Projects</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Engineering Services</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Career Timeline</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Direct Contact</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" /> {personalDetails.locationEn}</p>
              <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" /> {personalDetails.email}</p>
              <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" /> {personalDetails.phone}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Mohamed Mahmoud Masoud. {t('footer.rights')}</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all"
          >
            <span>{t('footer.backToTop')}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
