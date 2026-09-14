import React from 'react';
import { Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge } from '../components/ui/SectionBadge';
import { GitHubStatsWidget } from '../components/widgets/GitHubStatsWidget';

export const GitHubSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="github" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge icon={<Github className="w-4 h-4" />}>
            {t('github.sectionBadge')}
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
            {t('github.title')}
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <GitHubStatsWidget />
        </div>
      </div>
    </section>
  );
};
