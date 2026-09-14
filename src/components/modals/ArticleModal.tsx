import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Share2, Check, BookOpen, User } from 'lucide-react';
import { BlogPostItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { playSound } from '../common/AudioToggle';

interface ArticleModalProps {
  article: BlogPostItem | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const handleShare = () => {
    playSound('click');
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const fullContent = article.contentKey ? t(article.contentKey) : t(article.summaryKey);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel border border-slate-700/80 shadow-2xl bg-slate-900/95 text-slate-100 p-5 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={() => {
              playSound('click');
              onClose();
            }}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
            title={t('articles.closeModal')}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Cover Image */}
          {article.image && (
            <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden mb-6 border border-slate-800">
              <img
                src={article.image}
                alt={t(article.titleKey)}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>
          )}

          {/* Article Header */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-3">
              <span className="flex items-center gap-1 font-mono text-cyan-400 bg-cyan-950/50 px-2.5 py-1 rounded-md border border-cyan-800/40">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span className="flex items-center gap-1 font-medium text-slate-400">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                {t(article.readTimeKey)}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug mb-4">
              {t(article.titleKey)}
            </h2>

            {/* Author Info Card */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white">
                  {t('articles.authorTitle')}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-400">
                  {t('articles.authorRole')}
                </p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-800 text-cyan-300 border border-slate-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Article Body Content */}
          <div className="prose prose-invert max-w-none mb-8 text-slate-200 text-sm sm:text-base leading-relaxed space-y-4 border-t border-slate-800/80 pt-6">
            {fullContent.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-base sm:text-lg font-bold text-cyan-400 mt-6 mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-cyan-400 shrink-0" />
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              return <p key={idx} className="text-slate-300 leading-relaxed">{paragraph}</p>;
            })}
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-xs sm:text-sm transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4 text-cyan-400" />}
              <span>{copied ? t('contact.copySuccess') : t('articles.shareArticle')}</span>
            </button>

            <button
              onClick={() => {
                playSound('click');
                onClose();
              }}
              className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-600/20"
            >
              {t('articles.closeModal')}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
