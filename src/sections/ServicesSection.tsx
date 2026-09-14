import React from 'react';
import { Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge } from '../components/ui/SectionBadge';
import { servicesData } from '../data/portfolioData';
import { ServiceCard } from '../components/cards/ServiceCard';
import { playSound } from '../components/common/AudioToggle';

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const handleSelectService = (serviceTitle: string) => {
    playSound('click');
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const serviceSelect = document.getElementById('serviceInterestInput') as HTMLInputElement;
      if (serviceSelect) {
        serviceSelect.value = serviceTitle;
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge icon={<Layers className="w-4 h-4" />}>
            {t('services.sectionBadge')}
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
            {t('services.title')}
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={handleSelectService}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
