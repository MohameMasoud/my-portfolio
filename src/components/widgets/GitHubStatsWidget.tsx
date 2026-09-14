import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Github, GitCommit, GitBranch, Star, Zap, Code2, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { GitHubStats } from '../../types';
import { personalDetails } from '../../data/portfolioData';

export const GitHubStatsWidget: React.FC = () => {
  const { t } = useLanguage();
  const [stats, setStats] = useState<GitHubStats>({
    publicRepos: 28,
    totalCommits: 842,
    contributionsThisYear: 412,
    streakDays: 14,
    starsCount: 65,
    topLanguages: [
      { name: 'TypeScript', percentage: 42, color: '#3178c6' },
      { name: 'JavaScript', percentage: 35, color: '#f7df1e' },
      { name: 'HTML / CSS', percentage: 15, color: '#e34c26' },
      { name: 'Other', percentage: 8, color: '#6e7681' },
    ],
  });

  useEffect(() => {
    fetch('/api/github-stats')
      .then(res => res.json())
      .then(data => {
        if (data && data.publicRepos) {
          setStats(data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="w-full rounded-2xl glass-panel border border-slate-700/60 p-6 md:p-8 bg-slate-900/90 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-slate-800 text-white border border-slate-700 shadow-inner">
            <Github className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span>{t('github.title')}</span>
            </h3>
            <p className="text-xs text-slate-400">{t('github.subtitle')}</p>
          </div>
        </div>
        <a
          href={personalDetails.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all"
        >
          <span>{t('github.viewProfile')}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold mb-1">
            <GitBranch className="w-4 h-4" />
            <span>{t('github.publicRepos')}</span>
          </div>
          <p className="text-2xl font-extrabold text-white">{stats.publicRepos}</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1">
            <GitCommit className="w-4 h-4" />
            <span>{t('github.totalCommits')}</span>
          </div>
          <p className="text-2xl font-extrabold text-white">{stats.totalCommits}+</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold mb-1">
            <Zap className="w-4 h-4" />
            <span>{t('github.contributions')}</span>
          </div>
          <p className="text-2xl font-extrabold text-white">{stats.contributionsThisYear}</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-1">
            <Star className="w-4 h-4" />
            <span>{t('github.streak')}</span>
          </div>
          <p className="text-2xl font-extrabold text-white">{stats.streakDays} Days</p>
        </div>
      </div>

      {/* Language Breakdown Bar */}
      <div>
        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <Code2 className="w-4 h-4 text-blue-400" />
          <span>{t('github.topLangs')}</span>
        </h4>

        {/* Multi-colored Progress bar */}
        <div className="h-3 w-full rounded-full bg-slate-800 overflow-hidden flex mb-4">
          {stats.topLanguages.map((lang, idx) => (
            <div
              key={idx}
              style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
              className="h-full first:rounded-l-full last:rounded-r-full transition-all duration-500"
              title={`${lang.name}: ${lang.percentage}%`}
            />
          ))}
        </div>

        {/* Language Legend */}
        <div className="flex flex-wrap items-center gap-4 text-xs">
          {stats.topLanguages.map((lang, idx) => (
            <div key={idx} className="flex items-center gap-2 text-slate-300">
              <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: lang.color }} />
              <span className="font-medium">{lang.name}</span>
              <span className="text-slate-500 text-[11px]">({lang.percentage}%)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
