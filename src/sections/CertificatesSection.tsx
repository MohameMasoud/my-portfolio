import React from 'react';
import { Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge } from '../components/ui/SectionBadge';
import { certificatesData } from '../data/portfolioData';
import { CertificateCard } from '../components/cards/CertificateCard';

export const CertificatesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="certificates" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge icon={<Award className="w-4 h-4 text-cyan-400" />}>
            {t('certificates.sectionBadge')}
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
            {t('certificates.title')}
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3">
            {t('certificates.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificatesData.map((cert, index) => (
            <CertificateCard key={cert.id} certificate={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
