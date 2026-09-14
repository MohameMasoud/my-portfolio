import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge } from '../components/ui/SectionBadge';
import { testimonialsData } from '../data/portfolioData';
import { TestimonialCard } from '../components/cards/TestimonialCard';
import { playSound } from '../components/common/AudioToggle';

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'student' | 'client'>('all');

  const filtered = testimonialsData.filter(item => activeTab === 'all' || item.type === activeTab);

  return (
    <section id="testimonials" className="py-24 bg-slate-950/90 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge icon={<MessageSquare className="w-4 h-4" />}>
            {t('testimonials.sectionBadge')}
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
            {t('testimonials.title')}
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          <button
            onClick={() => { playSound('click'); setActiveTab('all'); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {t('testimonials.tabAll')}
          </button>
          <button
            onClick={() => { playSound('click'); setActiveTab('student'); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'student'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {t('testimonials.tabStudents')}
          </button>
          <button
            onClick={() => { playSound('click'); setActiveTab('client'); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'client'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {t('testimonials.tabClients')}
          </button>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {filtered.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
