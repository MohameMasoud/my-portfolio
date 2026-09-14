import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, ArrowLeft, BookOpen, Star } from 'lucide-react';
import { BlogPostItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { playSound } from '../common/AudioToggle';

interface ArticleCardProps {
  article: BlogPostItem;
  index?: number;
  onOpen: (article: BlogPostItem) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, index = 0, onOpen }) => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group flex flex-col justify-between rounded-2xl glass-panel border border-slate-800/90 bg-slate-900/70 backdrop-blur-md overflow-hidden shadow-xl hover:border-cyan-500/50 hover:shadow-cyan-950/20 transition-all duration-300"
    >
      <div>
        {/* Cover Image & Badges */}
        {article.image && (
          <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-950">
            <img
              src={article.image}
              alt={t(article.titleKey)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

            {/* Featured Badge */}
            {article.featured && (
              <div className="absolute top-3 left-3 sm:left-4 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[11px] font-semibold backdrop-blur-md shadow-lg">
                <Star className="w-3 h-3 text-cyan-400 fill-cyan-400" />
                <span>{t('articles.featuredBadge')}</span>
              </div>
            )}
          </div>
        )}

        {/* Card Main Body */}
        <div className="p-4 sm:p-6">
          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-3">
            <span className="flex items-center gap-1 font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-800/40">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span className="flex items-center gap-1 font-medium text-slate-400">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              {t(article.readTimeKey)}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug mb-2.5 line-clamp-2">
            {t(article.titleKey)}
          </h3>

          {/* Summary */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
            {t(article.summaryKey)}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-slate-800/80">
          {article.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 text-[10px] sm:text-[11px] font-mono rounded bg-slate-800/90 text-slate-300 border border-slate-700/50 group-hover:border-cyan-500/30 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={() => {
            playSound('click');
            onOpen(article);
          }}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 border border-slate-700/80 hover:border-cyan-500/40 font-semibold text-xs transition-all duration-200 group/btn"
        >
          <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
          <span>{t('articles.readMore')}</span>
          <ArrowIcon className="w-3.5 h-3.5 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.article>
  );
};
