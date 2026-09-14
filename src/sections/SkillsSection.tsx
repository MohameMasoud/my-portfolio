import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Code2, Server, Database, Wrench, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge } from '../components/ui/SectionBadge';
import { skillsData } from '../data/portfolioData';
import { playSound } from '../components/common/AudioToggle';

export const SkillsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categoryIcons: Record<number, React.ElementType> = {
    0: Code2,
    1: Server,
    2: Database,
    3: Wrench,
    4: Users,
  };

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge icon={<Cpu className="w-4 h-4" />}>
            {t('skills.sectionBadge')}
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
            {t('skills.title')}
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillsData.map((cat, idx) => {
            const IconComp = categoryIcons[idx] || Code2;
            const isActive = activeCategory === idx;
            return (
              <button
                key={idx}
                onClick={() => { playSound('click'); setActiveCategory(idx); }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-500'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{t(cat.titleKey)}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {skillsData[activeCategory].skills.map((skill, sIdx) => (
            <div
              key={sIdx}
              className="p-5 rounded-2xl glass-panel border border-slate-700/60 bg-slate-900/80 shadow-md space-y-2 hover:border-blue-500/40 transition-all"
            >
              <div className="flex items-center justify-between text-sm font-bold text-white">
                <span>{skill.name}</span>
                <span className="font-mono text-xs text-cyan-400">{skill.level}%</span>
              </div>

              {/* Skill Progress Bar */}
              <div className="h-2.5 w-full rounded-full bg-slate-950 overflow-hidden p-0.5 border border-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: sIdx * 0.05 }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
