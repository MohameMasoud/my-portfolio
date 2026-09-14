import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, BarChart2 } from 'lucide-react';
import { ProjectItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel border border-slate-700/60 shadow-2xl bg-slate-900/95 text-slate-100 p-6 md:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 uppercase tracking-wider mb-2">
              {project.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {t(project.titleKey)}
            </h3>
          </div>

          {/* Project Image */}
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-6 border border-slate-800">
            <img
              src={project.image}
              alt={t(project.titleKey)}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          </div>

          {/* Metrics Pill */}
          {project.metricsKey && (
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-6">
              <BarChart2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{t(project.metricsKey)}</span>
            </div>
          )}

          {/* Long Description */}
          <div className="mb-6 space-y-3 text-slate-300 leading-relaxed text-sm md:text-base">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-400" /> System Architecture & Overview
            </h4>
            <p>{t(project.longDescriptionKey)}</p>
          </div>

          {/* Technologies Used */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-800 text-slate-200 border border-slate-700/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-500/25"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{t('projects.liveDemo')}</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-sm transition-all"
              >
                <Github className="w-4 h-4" />
                <span>{t('projects.viewGithub')}</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
