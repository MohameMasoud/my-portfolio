import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, ShieldCheck, Trophy, ExternalLink, GraduationCap, Code2, BookOpen, Cpu, Calendar, Building2 } from 'lucide-react';
import { CertificateItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface CertificateCardProps {
  certificate: CertificateItem;
  index?: number;
}

const iconMap: Record<string, React.ElementType> = {
  Award,
  CheckCircle2,
  ShieldCheck,
  Trophy,
  GraduationCap,
  Code2,
  BookOpen,
  Cpu,
};

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, index = 0 }) => {
  const { t } = useLanguage();
  const IconComponent = iconMap[certificate.iconName] || Award;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group flex flex-col justify-between p-4 sm:p-6 rounded-2xl glass-panel border border-slate-800/90 bg-slate-900/70 backdrop-blur-md shadow-xl hover:border-cyan-500/50 hover:shadow-cyan-950/20 transition-all duration-300"
    >
      <div>
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2.5 sm:p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all shrink-0 mt-0.5">
            <IconComponent className="w-5 h-5" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
              <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                {t(certificate.titleKey)}
              </h4>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/40 shrink-0">
                <Calendar className="w-3 h-3" />
                {t(certificate.dateKey)}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-1">
              <Building2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span className="font-medium text-slate-300">{t(certificate.issuerKey)}</span>
            </div>
          </div>
        </div>

        {certificate.descriptionKey && (
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 mt-2">
            {t(certificate.descriptionKey)}
          </p>
        )}
      </div>

      <div>
        {certificate.skills && certificate.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/70">
            {certificate.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-[10px] sm:text-[11px] font-mono rounded bg-slate-800/80 text-slate-300 border border-slate-700/50 group-hover:border-cyan-500/30 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {certificate.credentialUrl && certificate.credentialUrl !== '#' && (
          <div className="mt-4 pt-2">
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium group/link"
            >
              <span>{t('certificates.verifyLink')}</span>
              <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};
