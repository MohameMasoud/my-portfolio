import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Sparkles, Building2 } from 'lucide-react';
import { ExperienceItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  const { t, isRTL } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-6 sm:pl-10 rtl:pl-0 rtl:pr-6 sm:rtl:pr-10 border-l-2 rtl:border-l-0 rtl:border-r-2 border-slate-800 hover:border-cyan-500/80 transition-colors py-4 group"
    >
      {/* Timeline Bullet Node */}
      <div
        className={`absolute top-6 w-5 h-5 rounded-full bg-slate-950 border-2 transition-all duration-300 z-10 flex items-center justify-center ${
          experience.isCurrent
            ? 'border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] -left-[11px] rtl:left-auto rtl:-right-[11px]'
            : 'border-slate-700 group-hover:border-blue-400 -left-[11px] rtl:left-auto rtl:-right-[11px]'
        }`}
      >
        {experience.isCurrent ? (
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        ) : (
          <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-blue-400" />
        )}
      </div>

      <div className="rounded-2xl glass-panel border border-slate-800/80 group-hover:border-slate-700 p-4 sm:p-6 bg-slate-900/70 backdrop-blur-md shadow-xl hover:shadow-cyan-950/20 transition-all duration-300">
        {/* Card Header: Role & Status */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Briefcase className="w-4 h-4 text-cyan-400 shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {t(experience.roleKey)}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 mt-2">
              <span className="flex items-center gap-1.5 font-medium text-slate-200">
                <Building2 className="w-3.5 h-3.5 text-blue-400" />
                {t(experience.companyKey)}
              </span>
              <span className="flex items-center gap-1 font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                <Calendar className="w-3.5 h-3.5" />
                {t(experience.periodKey)}
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {t(experience.locationKey)}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
              {t(experience.typeKey)}
            </span>
            {experience.isCurrent && (
              <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                {t('experience.currentRoleBadge')}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          {t(experience.descriptionKey)}
        </p>

        {/* Impact Highlights Grid / Pills */}
        {experience.impactMetricsKey && experience.impactMetricsKey.length > 0 && (
          <div className="mb-5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 mb-2">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Key Impact Metrics</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.impactMetricsKey.map((mKey, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-medium rounded-lg bg-cyan-950/30 text-cyan-200 border border-cyan-500/20 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  {t(mKey)}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Achievements */}
        <div className="space-y-2.5 mb-5">
          {experience.achievementsKey.map((achKey, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span className="leading-snug">{t(achKey)}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-4 border-t border-slate-800/80">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Technologies & Tools Used:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {experience.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-slate-800/80 text-slate-200 border border-slate-700/60 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
