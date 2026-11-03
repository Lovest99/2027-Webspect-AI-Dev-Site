import React from 'react';
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Code,
  Layers,
  ChevronLeft,
} from 'lucide-react';
import { WORK_ITEMS, CaseStudy } from '../data/work';
import { useRouter } from '../context/RouterContext';

interface WorkDetailPageProps {
  slug: string;
  onOpenContact: (interest?: string, description?: string) => void;
}

export const WorkDetailPage: React.FC<WorkDetailPageProps> = ({ slug, onOpenContact }) => {
  const { navigate } = useRouter();

  const caseStudy = WORK_ITEMS.find((w) => w.slug === slug) || WORK_ITEMS[0];

  return (
    <main className="py-14 sm:py-20 bg-[#FAFAF8] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <a
            href="/work"
            onClick={(e) => {
              e.preventDefault();
              navigate('/work');
            }}
            className="hover:text-slate-900 flex items-center gap-1"
          >
            <ChevronLeft className="w-3.5 h-3.5" /> Case Studies
          </a>
          <span>/</span>
          <span className="text-[#1442CB] font-semibold">{caseStudy.clientOrProject}</span>
        </div>

        {/* Case Study Header */}
        <div>
          <div className="flex items-center gap-3 text-xs mb-3">
            <span
              className={`font-mono uppercase text-[10px] px-2 py-0.5 rounded border ${
                caseStudy.projectType === 'Client project'
                  ? 'bg-amber-50 text-amber-700 border-amber-200'
                  : 'bg-blue-50 text-[#1442CB] border-blue-200'
              }`}
            >
              {caseStudy.projectType}
            </span>
            <span className="text-slate-500 font-medium">{caseStudy.sector}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {caseStudy.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {caseStudy.summary}
          </p>

          {caseStudy.externalUrl && (
            <div className="mt-4">
              <a
                href={caseStudy.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#1442CB] hover:underline inline-flex items-center gap-1"
              >
                <span>Visit live public platform ({caseStudy.externalUrl})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* Tech Stack Bar */}
        <div className="mt-8 p-4 bg-white rounded-xl border border-slate-200 flex flex-wrap items-center gap-2 text-xs">
          <span className="font-semibold text-slate-400 uppercase tracking-wider mr-2">
            Tools & Architecture:
          </span>
          {caseStudy.techOrTools.map((tool, i) => (
            <span
              key={i}
              className="font-mono text-slate-700 bg-slate-50 px-2.5 py-1 rounded border border-slate-200/80"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* 1. The Challenge */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600">
            <AlertCircle className="w-4 h-4" />
            <span>The Challenge</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            What was getting in the way
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {caseStudy.challenge}
          </p>
        </div>

        {/* 2. The Approach */}
        <div className="mt-8 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1442CB]">
            <Code className="w-4 h-4" />
            <span>Our Approach</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Strategy & Technical Execution
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {caseStudy.approach}
          </p>
        </div>

        {/* 3. What Was Delivered */}
        <div className="mt-8 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
            <CheckCircle2 className="w-4 h-4" />
            <span>What We Delivered</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Concrete Deliverables & Assets
          </h2>
          <ul className="space-y-2.5 pt-1">
            {caseStudy.delivered.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Important Design & Engineering Decisions */}
        <div className="mt-8 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
            <Layers className="w-4 h-4" />
            <span>Architectural Rationale</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Key Engineering & Design Decisions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {caseStudy.keyDecisions.map((decision, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed"
              >
                {decision}
              </div>
            ))}
          </div>
        </div>

        {/* Contextual CTA for this solution domain */}
        <div className="mt-12 p-8 bg-[#0A1128] text-white rounded-2xl text-center space-y-4">
          <h2 className="text-2xl font-bold">
            Face a similar challenge in your operations?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Let's discuss how we can adapt this approach for your industry and customer base.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => onOpenContact(`Inquiry based on ${caseStudy.clientOrProject}`)}
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] rounded-xl transition-colors"
            >
              Discuss a similar project
            </button>
            <button
              onClick={() => navigate(`/solutions/${caseStudy.relatedSolutionSlug}`)}
              className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-xl transition-colors"
            >
              Explore this solution domain
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
