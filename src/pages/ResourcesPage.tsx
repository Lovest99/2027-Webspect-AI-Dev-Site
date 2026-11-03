import React, { useState } from 'react';
import {
  FileText,
  Clock,
  ArrowRight,
  User,
  BookOpen,
} from 'lucide-react';
import { RESOURCE_ARTICLES, ResourceArticle } from '../data/resources';
import { useRouter } from '../context/RouterContext';

export const ResourcesPage: React.FC = () => {
  const { navigate } = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Strategy & Web', 'Automation & AI', 'Product Engineering', 'Design & Branding'];

  const filteredArticles = activeCategory === 'All'
    ? RESOURCE_ARTICLES
    : RESOURCE_ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <main className="py-16 sm:py-24 bg-[#FAFAF8] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1442CB] block mb-2">
            Practical Engineering & Design Guides
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Clear thinking on software, automation and design.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Substantive articles written from direct building experience. Practical guidance to help
            business owners and technical founders make smarter digital decisions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActiveCategory(c)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === c
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Articles List */}
        <div className="mt-10 space-y-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => navigate(`/resources/${article.slug}`)}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 hover:border-slate-300 transition-all cursor-pointer shadow-2xs hover:shadow-sm group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500 pb-3 border-b border-slate-100">
                <span className="font-semibold text-[#1442CB]">{article.category}</span>
                <div className="flex items-center gap-3">
                  <span>{article.publishedDate}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5" /> {article.readTime}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#1442CB] transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                  {article.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              {/* Author & Takeaway Box */}
              <div className="mt-5 p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <span className="text-slate-700">
                  <strong>Key Takeaway:</strong> {article.takeaway}
                </span>
                <span className="text-slate-400 shrink-0 font-medium">
                  By {article.author.name}
                </span>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#1442CB] group-hover:underline flex items-center gap-1">
                  Read full article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};
