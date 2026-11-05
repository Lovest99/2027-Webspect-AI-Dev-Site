import React, { useState } from 'react';
import {
  ArrowRight,
  ExternalLink,
  Layers,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Maximize2,
} from 'lucide-react';
import { WORK_ITEMS, CaseStudy } from '../data/work';
import { useRouter } from '../context/RouterContext';
import { CaseStudyModal } from './CaseStudyModal';

interface SelectedWorkProps {
  onOpenContact?: (interest?: string, description?: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenContact }) => {
  const { navigate } = useRouter();
  const [filter, setFilter] = useState<string>('All');
  const [inspectCaseStudy, setInspectCaseStudy] = useState<CaseStudy | null>(null);

  const filters = ['All', 'Client project', 'Independent product'];

  const displayedWork = filter === 'All'
    ? WORK_ITEMS
    : WORK_ITEMS.filter((w) => w.projectType === filter);

  return (
    <section className="py-16 sm:py-20 bg-white/85 backdrop-blur-xs border-b border-slate-200/80 relative overflow-hidden">
      {/* Engineered Canvas Micro-Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Atmospheric Pale Blue Light Bloom */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#1442CB]/[0.06] via-[#1442CB]/[0.02] to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/70 text-xs font-semibold text-[#1442CB] uppercase tracking-wider mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1442CB]" />
              <span>Demonstrated Proof</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-[-0.02em] text-slate-900 leading-tight">
              A look at <span className="bg-gradient-to-r from-[#1442CB] via-blue-600 to-indigo-600 bg-clip-text text-transparent">what we create</span>.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Real client platforms, civic utilities, and engineering systems built with measurable
              clarity, technical precision, and commercial purpose.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => navigate('/work')}
              className="px-4.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors inline-flex items-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>Explore all case studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Bar (Segmented Controls with tactile padding) */}
        <div className="mt-8 w-full sm:w-auto flex items-center gap-1.5 p-1.5 bg-slate-100/90 border border-slate-200/90 rounded-xl overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`flex-1 sm:flex-initial text-center px-3.5 py-2.5 sm:px-4 sm:py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                filter === f
                  ? 'bg-white text-slate-900 shadow-xs ring-1 ring-slate-200/80 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              {f === 'Client project' ? (
                <>
                  <span className="sm:hidden">Clients</span>
                  <span className="hidden sm:inline">Client project</span>
                </>
              ) : f === 'Independent product' ? (
                <>
                  <span className="sm:hidden">Products</span>
                  <span className="hidden sm:inline">Independent product</span>
                </>
              ) : (
                f
              )}
            </button>
          ))}
        </div>

        {/* Selected Work Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedWork.slice(0, 6).map((item) => (
            <div
              key={item.id}
              onClick={() => setInspectCaseStudy(item)}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:border-[#1442CB]/60 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between cursor-pointer relative"
            >
              {/* Subtle top indicator on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-[#1442CB] transition-colors z-10" />

              {/* Verified Image Preview Banner (Frameless Flush to Rounded Corners) */}
              {item.imagePath && (
                <div className="w-full aspect-[16/9] overflow-hidden border-b border-slate-200/80 bg-slate-950 relative">
                  <img
                    src={item.imagePath}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-3 text-[10px] font-mono uppercase tracking-wider text-white/90 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    Verified Deliverable
                  </span>
                </div>
              )}

              {/* Padded Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Zero-Pill Unboxed Metadata Header */}
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className={item.projectType === 'Client project' ? 'text-amber-800 font-semibold text-xs' : 'text-[#1442CB] font-semibold text-xs'}>
                        {item.projectType}
                      </span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="text-slate-500 text-xs truncate max-w-[170px]">{item.sector}</span>
                    </div>
                    <span className="p-1 text-slate-400 group-hover:text-[#1442CB] transition-colors" title="Quick preview">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-4 group-hover:text-[#1442CB] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Challenge -> Delivered highlights */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Delivered Scope:
                      </span>
                      <ul className="space-y-1.5">
                        {item.delivered.slice(0, 2).map((del, i) => (
                          <li key={i} className="text-slate-700 flex items-start gap-2 text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1442CB] group-hover:text-[#0D32A8] flex items-center gap-1.5">
                    <span>Quick inspect & details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {item.externalUrl && (
                    <span className="text-[11px] text-slate-400 font-mono bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60">
                      Live Link
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Case Study Inspector Modal */}
      <CaseStudyModal
        caseStudy={inspectCaseStudy}
        onClose={() => setInspectCaseStudy(null)}
        onOpenContact={(interest, desc) => {
          if (onOpenContact) {
            onOpenContact(interest, desc);
          } else {
            navigate('/contact');
          }
        }}
      />
    </section>
  );
};
