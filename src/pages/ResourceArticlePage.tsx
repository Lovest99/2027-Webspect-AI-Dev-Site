import React from 'react';
import {
  Clock,
  ArrowRight,
  ChevronLeft,
  Share2,
  Bookmark,
  User,
  GraduationCap,
} from 'lucide-react';
import { RESOURCE_ARTICLES, ResourceArticle } from '../data/resources';
import { useRouter } from '../context/RouterContext';

interface ResourceArticlePageProps {
  slug: string;
  onOpenContact: (interest?: string, description?: string) => void;
}

export const ResourceArticlePage: React.FC<ResourceArticlePageProps> = ({ slug, onOpenContact }) => {
  const { navigate } = useRouter();

  const article = RESOURCE_ARTICLES.find((a) => a.slug === slug) || RESOURCE_ARTICLES[0];

  return (
    <main className="py-14 sm:py-20 bg-[#FAFAF8] min-h-screen relative overflow-hidden">
      {/* Engineered Canvas Micro-Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Atmospheric Pale Blue Radial Light Bloom */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[360px] bg-gradient-to-b from-[#1442CB]/[0.07] via-[#1E40AF]/[0.02] to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <a
            href="/resources"
            onClick={(e) => {
              e.preventDefault();
              navigate('/resources');
            }}
            className="hover:text-slate-900 flex items-center gap-1"
          >
            <ChevronLeft className="w-3.5 h-3.5" /> Resources
          </a>
          <span>/</span>
          <span className="text-[#1442CB] font-semibold">{article.category}</span>
        </div>

        {/* Article Header */}
        <header className="space-y-4 pb-8 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/70 text-xs font-semibold text-[#1442CB] uppercase tracking-wider mb-1 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1442CB]" />
            <span>{article.category}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-[#1442CB] to-indigo-950 bg-clip-text text-transparent">
              {article.title}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {article.subtitle}
          </p>

          {/* Metadata & Author */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0A1128] text-white flex items-center justify-center font-bold text-xs">
                BC
              </div>
              <div>
                <span className="font-bold text-slate-900 block">{article.author.name}</span>
                <span className="text-slate-500">{article.author.role} · {article.author.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 font-mono text-[11px]">
              <span>{article.publishedDate}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> {article.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Summary & Core Takeaway Callout */}
        <div className="my-8 p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#1442CB] block">
            Core Takeaway
          </span>
          <p className="text-sm font-semibold text-slate-900 leading-relaxed">
            "{article.takeaway}"
          </p>
        </div>

        {/* Article Body Sections */}
        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                {section.heading}
              </h2>
              {section.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Article Footer & Contextual CTA */}
        <footer className="mt-14 pt-8 border-t border-slate-200 space-y-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-slate-900 block">
                Applying this to your business?
              </span>
              <p className="text-xs text-slate-600 mt-0.5">
                We design and build the digital tools discussed in this guide.
              </p>
            </div>
            <button
              onClick={() => onOpenContact(`Discussion from: ${article.title}`)}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] rounded-xl transition-colors shrink-0"
            >
              Discuss your project
            </button>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500">
            <button
              onClick={() => navigate('/resources')}
              className="hover:text-slate-900 flex items-center gap-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Back to all resources
            </button>
            <button
              onClick={() => navigate(`/solutions/${article.relatedSolutionSlug}`)}
              className="text-[#1442CB] font-semibold hover:underline flex items-center gap-1"
            >
              View related solution <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </footer>
      </div>
    </main>
  );
};
