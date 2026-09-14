import React from 'react';
import { motion } from 'motion/react';
import { Layers, Monitor, Server, GraduationCap, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface ServiceCardProps {
  service: ServiceItem;
  onSelectService: (serviceTitle: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Monitor,
  Server,
  GraduationCap,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelectService }) => {
  const { t } = useLanguage();
  const IconComponent = iconMap[service.iconName] || Layers;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -6 }}
      className="flex flex-col h-full rounded-2xl glass-panel border border-slate-700/60 p-6 md:p-8 bg-slate-900/80 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all group"
    >
      <div className="p-3.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 w-fit mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md">
        <IconComponent className="w-6 h-6" />
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
        {t(service.titleKey)}
      </h3>

      <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-6 flex-1">
        {t(service.descriptionKey)}
      </p>

      {/* Feature Bullet points */}
      <ul className="space-y-2.5 mb-8 border-t border-slate-800/80 pt-4">
        {service.featuresKey.map((fKey, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>{t(fKey)}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onSelectService(t(service.titleKey))}
        className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-blue-600 text-xs font-semibold text-slate-200 hover:text-white border border-slate-700 transition-all shadow-sm"
      >
        Inquire About Service
      </button>
    </motion.div>
  );
};
