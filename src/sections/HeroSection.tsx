import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileText, Sparkles, MapPin, Github, Linkedin, Mail, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Hero3DCanvas } from '../components/common/Hero3DCanvas';
import { personalDetails } from '../data/portfolioData';
import { playSound } from '../components/common/AudioToggle';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenAI: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onOpenAI }) => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-950">
      {/* 3D Canvas Background */}
      <Hero3DCanvas />

      {/* Radial Gradient Ambient Overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-blue-500/30 text-blue-400 text-xs font-semibold shadow-xl backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{t('hero.badge')}</span>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <span className="text-sm font-semibold tracking-wider text-cyan-400 uppercase font-mono block">
                {t('hero.greeting')}
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                {personalDetails.name}
              </h1>
              <div className="h-12 flex items-center justify-center md:justify-start">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  {t('hero.role')}
                </h2>
              </div>
            </motion.div>

            {/* Secondary Roles Pill */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs sm:text-sm font-medium text-slate-400 font-mono"
            >
              {t('hero.secondaryRoles')}
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              {t('hero.tagline')}
            </motion.p>

            {/* Location Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center justify-center md:justify-start gap-2 text-xs text-slate-400"
            >
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>{t('hero.location')}</span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
            >
              <a
                href="#projects"
                onClick={() => playSound('click')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/25 group"
              >
                <span>{t('hero.ctaProjects')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={() => playSound('click')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all shadow-md"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{t('hero.ctaContact')}</span>
              </a>

              <button
                onClick={() => { playSound('click'); onOpenResume(); }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 font-semibold text-sm transition-all"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>{t('hero.ctaResume')}</span>
              </button>
            </motion.div>
          </div>

          {/* Right Metrics & Profile Card */}
          <div className="lg:col-span-4 space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-2xl glass-panel border border-slate-700/60 bg-slate-900/80 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[2px] shadow-lg shrink-0">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-white font-extrabold text-xl">
                    MM
                  </div>
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-base">Mohamed Masoud</h3>
                  <p className="text-xs text-blue-400 font-mono">Full Stack Engineer</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">2+ Yrs Exp • 150+ Students</p>
                </div>
              </div>

              {/* Stats Grid inside Hero Card */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-left">
                  <span className="text-2xl font-extrabold text-white block">2+</span>
                  <span className="text-[10px] text-slate-400 font-medium">{t('hero.yearsExp')}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-left">
                  <span className="text-2xl font-extrabold text-cyan-400 block">150+</span>
                  <span className="text-[10px] text-slate-400 font-medium">{t('hero.studentsMentored')}</span>
                </div>
              </div>

              {/* AI Prompt Banner inside Card */}
              <button
                onClick={() => { playSound('click'); onOpenAI(); }}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold transition-all group"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Ask Mohamed's AI Assistant</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
