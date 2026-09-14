import React from 'react';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge } from '../components/ui/SectionBadge';
import { AIAssistantWidget } from '../components/widgets/AIAssistantWidget';

export const AISection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="ai-assistant" className="py-24 bg-slate-950/90 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge icon={<Sparkles className="w-4 h-4 text-cyan-400" />}>
            {t('ai.badge')}
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
            {t('ai.title')}
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3">
            {t('ai.subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <AIAssistantWidget isFloating={false} />
        </div>
      </div>
    </section>
  );
};
