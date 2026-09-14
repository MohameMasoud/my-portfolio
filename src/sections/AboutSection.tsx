import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, CheckCircle2, ShieldCheck, Heart, Sparkles, GraduationCap, Code } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge } from '../components/ui/SectionBadge';

export const AboutSection: React.FC = () => {
  const { t, translations } = useLanguage();

  return (
    <section id="about" className="py-24 bg-slate-950/90 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge icon={<UserCheck className="w-4 h-4" />}>
            {t('about.sectionBadge')}
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
            {t('about.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Story & Bios */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 text-slate-300 text-sm md:text-base leading-relaxed"
          >
            <p className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
              {t('about.bio1')}
            </p>
            <p className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
              {t('about.bio2')}
            </p>
            <p className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 flex items-start gap-3">
              <GraduationCap className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
              <span>{t('about.bio3')}</span>
            </p>

            {/* Core Architectural Strengths Grid */}
            <div className="pt-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-4 flex items-center gap-2">
                <Code className="w-4 h-4" /> {t('about.strengthsTitle')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {translations.about.strengths.map((str, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{str}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Values Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> {t('about.valuesTitle')}
            </h3>

            {translations.about.values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-panel border border-slate-700/60 bg-slate-900/80 shadow-lg hover:border-cyan-500/40 transition-all"
              >
                <h4 className="text-base font-bold text-white mb-1.5 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  {val.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
