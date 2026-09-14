import React, { useState } from 'react';
import { Newspaper, BookOpen, Sparkles } from 'lucide-react';
import { SectionBadge } from '../components/ui/SectionBadge';
import { ArticleCard } from '../components/cards/ArticleCard';
import { blogPostsData } from '../data/portfolioData';
import { BlogPostItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { playSound } from '../components/common/AudioToggle';

interface ArticlesSectionProps {
  onOpenArticle: (article: BlogPostItem) => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ onOpenArticle }) => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t('articles.filterAll') },
    { id: 'React.js', label: 'React.js' },
    { id: 'Node.js', label: 'Node.js' },
    { id: 'MongoDB', label: 'MongoDB' },
    { id: 'Architecture', label: 'Architecture' },
  ];

  const filteredArticles = activeCategory === 'all'
    ? blogPostsData
    : blogPostsData.filter(art => art.tags.includes(activeCategory));

  return (
    <section id="articles" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionBadge icon={<Newspaper className="w-4 h-4 text-cyan-400" />}>
            {t('articles.sectionBadge')}
          </SectionBadge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
            {t('articles.title')}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            {t('articles.subtitle')}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                playSound('click');
                setActiveCategory(cat.id);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {filteredArticles.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              index={index}
              onOpen={onOpenArticle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
