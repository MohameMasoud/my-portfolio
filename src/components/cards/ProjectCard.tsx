import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, BarChart2 } from 'lucide-react';
import { ProjectItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { playSound } from '../common/AudioToggle';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col h-full rounded-2xl glass-panel border border-slate-700/60 bg-slate-900/80 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all"
    >
      {/* Thumbnail */}
      <div className="relative w-full h-52 overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={t(project.titleKey)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white shadow-md">
            Featured
          </div>
        )}

        {/* Action Overlay */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.stopPropagation(); playSound('click'); }}
              className="p-2 rounded-xl bg-slate-900/90 text-white hover:bg-blue-600 transition-colors shadow-md border border-slate-700"
              title={t('projects.liveDemo')}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.stopPropagation(); playSound('click'); }}
              className="p-2 rounded-xl bg-slate-900/90 text-slate-200 hover:bg-slate-800 transition-colors shadow-md border border-slate-700"
              title={t('projects.viewGithub')}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-6">
        <span className="text-[11px] font-mono font-semibold uppercase text-cyan-400 mb-1">
          {project.category}
        </span>
        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
          {t(project.titleKey)}
        </h3>
        <p className="text-xs md:text-sm text-slate-300 line-clamp-2 leading-relaxed mb-4 flex-1">
          {t(project.descriptionKey)}
        </p>

        {/* Metrics Pill if available */}
        {project.metricsKey && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-[11px] font-medium text-slate-400 mb-4">
            <BarChart2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="truncate">{t(project.metricsKey)}</span>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 text-[10px] font-medium rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Details button */}
        <button
          onClick={() => { playSound('click'); onOpenDetails(project); }}
          className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-800/50 hover:bg-blue-600/20 text-xs font-semibold text-slate-200 hover:text-blue-300 border border-slate-700/60 hover:border-blue-500/40 transition-all"
        >
          <span>{t('projects.modalDetails')}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
};
