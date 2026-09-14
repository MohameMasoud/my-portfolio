import React from 'react';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge } from '../components/ui/SectionBadge';
import { experienceData } from '../data/portfolioData';
import { ExperienceCard } from '../components/cards/ExperienceCard';

export const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-slate-950/90 relative overflow-hidden border-t border-slate-900">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge icon={<Briefcase className="w-4 h-4 text-cyan-400" />}>
            {t('experience.sectionBadge')}
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
            {t('experience.title')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experienceData.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
