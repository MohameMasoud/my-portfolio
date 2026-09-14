import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Search, Filter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge } from '../components/ui/SectionBadge';
import { projectsData } from '../data/portfolioData';
import { ProjectCard } from '../components/cards/ProjectCard';
import { ProjectItem } from '../types';
import { playSound } from '../components/common/AudioToggle';

interface ProjectsSectionProps {
  onOpenDetails: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenDetails }) => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'all', label: t('projects.filterAll') },
    { id: 'fullstack', label: t('projects.filterFullStack') },
    { id: 'frontend', label: t('projects.filterFrontend') },
    { id: 'backend', label: t('projects.filterBackend') },
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const projectTitle = t(project.titleKey).toLowerCase();
    const projectDesc = t(project.descriptionKey).toLowerCase();
    const query = searchQuery.toLowerCase();
    const matchesSearch = projectTitle.includes(query) || projectDesc.includes(query) || project.tags.some(t => t.toLowerCase().includes(query));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 bg-slate-950/90 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge icon={<Briefcase className="w-4 h-4" />}>
            {t('projects.sectionBadge')}
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
            {t('projects.title')}
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => { playSound('click'); setActiveFilter(tab.id); }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-500'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or tech..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + searchQuery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={onOpenDetails}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="py-16 text-center text-slate-400 text-sm">
            No projects matched your filter or search query.
          </div>
        )}
      </div>
    </section>
  );
};
