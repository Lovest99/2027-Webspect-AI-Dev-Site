import React from 'react';
import {
  Globe,
  MessageSquare,
  Zap,
  Layers,
  Boxes,
  Palette,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Briefcase,
  FileCheck,
} from 'lucide-react';
import { SOLUTIONS, Solution } from '../data/solutions';
import { WORK_ITEMS } from '../data/work';
import { useRouter } from '../context/RouterContext';

interface SolutionDetailPageProps {
  slug: string;
  onOpenContact: (interest?: string, description?: string) => void;
}

export const SolutionDetailPage: React.FC<SolutionDetailPageProps> = ({ slug, onOpenContact }) => {
  const { navigate } = useRouter();

  const solution = SOLUTIONS.find((s) => s.slug === slug) || SOLUTIONS[0];

  const relevantWork = WORK_ITEMS.filter((w) =>
    solution.relevantWorkIds.includes(w.id)
  );

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe': return Globe;
      case 'MessageSquareCheck': return MessageSquare;
      case 'MessageSquare': return MessageSquare;
      case 'Zap': return Zap;
      case 'Layers': return Layers;
      case 'Boxes': return Boxes;
      case 'Palette': return Palette;
      default: return Globe;
    }
  };

  const Icon = getIcon(solution.iconName);

  return (
    <main className="py-14 sm:py-20 bg-[#FAFAF8] min-h-screen relative overflow-hidden">
      {/* Engineered Canvas Micro-Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Atmospheric Pale Blue Radial Light Bloom */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[360px] bg-gradient-to-b from-[#1442CB]/[0.07] via-[#1E40AF]/[0.02] to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <a
            href="/solutions"
            onClick={(e) => {
              e.preventDefault();
              navigate('/solutions');
            }}
            className="hover:text-slate-900"
          >
            Solutions
          </a>
          <span>/</span>
          <span className="text-[#1442CB] font-semibold">{solution.navTitle}</span>
        </div>

        {/* 1. Outcome-led Headline & Plain-language definition */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 text-[#1442CB] rounded-xl text-xs font-semibold mb-4 shadow-2xs">
            <Icon className="w-4 h-4" />
            <span>Goal: {solution.navTitle}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-[#1442CB] to-indigo-950 bg-clip-text text-transparent">
              {solution.pageTitle}
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            {solution.definition}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenContact(solution.pageTitle)}
              className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] rounded-xl shadow-xs transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>{solution.ctaLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/263787679376"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* 2. Customer Problem Statement */}
        <div className="mt-14 p-6 sm:p-8 bg-amber-50/70 border border-amber-200/80 rounded-2xl">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-amber-900">
                The Typical Business Bottleneck:
              </h2>
              <p className="mt-2 text-sm sm:text-base text-amber-950 leading-relaxed">
                "{solution.problemStatement}"
              </p>
            </div>
          </div>
        </div>

        {/* 3. This May Be Right For You If... */}
        <div className="mt-14 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            This may be right for you if…
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {solution.rightForYouIf.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. What the Solution Includes */}
        <div className="mt-14">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1442CB] block mb-1">
              Core Deliverables
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              What this solution can include
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Every deliverable is calibrated to your company scale and verified before launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.capabilities.map((cap, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-2"
              >
                <div className="w-2 h-2 rounded-full bg-[#1442CB]" />
                <h3 className="text-sm font-bold text-slate-900">{cap.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. How We Determine Scope */}
        <div className="mt-14 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            How we determine scope & pricing
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            We don't invent arbitrary package prices for custom systems. We evaluate four concrete
            operational dimensions:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {solution.scopeFactors.map((factor, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-700 flex items-start gap-2.5">
                <FileCheck className="w-4 h-4 text-[#1442CB] shrink-0 mt-0.5" />
                <span>{factor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Relevant Real Work */}
        {relevantWork.length > 0 && (
          <div className="mt-14">
            <div className="max-w-2xl mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1442CB] block mb-1">
                Demonstrated Proof
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                Relevant work in this domain
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relevantWork.map((w) => (
                <div
                  key={w.id}
                  onClick={() => navigate(`/work/${w.slug}`)}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 transition-all cursor-pointer shadow-2xs flex flex-col justify-between group"
                >
                  {w.imagePath && (
                    <div className="w-full aspect-[16/9] overflow-hidden border-b border-slate-100 bg-slate-950 relative">
                      <img
                        src={w.imagePath}
                        alt={w.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <span className="absolute bottom-2 left-2.5 text-[9px] font-mono uppercase bg-black/60 text-white/90 px-1.5 py-0.5 rounded backdrop-blur-xs">
                        Verified Case Study
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-amber-600 uppercase font-semibold">
                        {w.projectType}
                      </span>
                      <span className="text-slate-400">{w.sector}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mt-2 group-hover:text-[#1442CB] transition-colors">
                      {w.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2">{w.summary}</p>
                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#1442CB] flex items-center gap-1">
                        View case study <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. Solution Specific FAQs */}
        <div className="mt-14 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Frequently asked questions about {solution.navTitle}
          </h2>

          <div className="space-y-4">
            {solution.faqs.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="text-sm font-bold text-slate-900">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Contextual CTA */}
        <div className="mt-14 p-8 bg-[#0A1128] text-white rounded-2xl text-center space-y-4">
          <h2 className="text-2xl font-bold">
            Ready to explore {solution.navTitle.toLowerCase()} for your business?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Discuss your requirements directly with Bright Cheteni. No pushy sales pitch—just clear
            technical assessment and honest scope advice.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => onOpenContact(solution.pageTitle)}
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] rounded-xl transition-colors"
            >
              {solution.ctaLabel}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
