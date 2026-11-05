import React, { useState } from 'react';
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Layers,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { WORK_ITEMS, CaseStudy } from '../data/work';
import { useRouter } from '../context/RouterContext';

export const WorkPage: React.FC = () => {
  const { navigate } = useRouter();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'Client project', 'Independent product'];

  const displayedWork = activeFilter === 'All'
    ? WORK_ITEMS
    : WORK_ITEMS.filter((w) => w.projectType === activeFilter);

  return (
    <main className="py-16 sm:py-24 bg-[#FAFAF8] min-h-screen relative overflow-hidden">
      {/* Engineered Canvas Micro-Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Atmospheric Pale Blue Radial Light Bloom */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-gradient-to-b from-[#1442CB]/[0.07] via-[#1E40AF]/[0.02] to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/70 text-xs font-semibold text-[#1442CB] uppercase tracking-wider mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1442CB]" />
            <span>Case Studies & Proof</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Real work, <span className="bg-gradient-to-r from-[#1442CB] via-blue-600 to-indigo-600 bg-clip-text text-transparent">delivered with discipline</span>.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore commercial client projects, civic systems, and software architectures. Each case study
            details the actual business challenge, our technical approach, and exactly what was
            delivered—without fabricated conversion percentages or inflated claims.
          </p>
        </div>

        {/* Filter Buttons with Generous Touch Padding */}
        <div className="mt-8 flex items-center gap-2 p-1.5 bg-slate-100/90 sm:bg-transparent rounded-xl overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-fit max-w-full">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActiveFilter(f)}
              className={`shrink-0 text-center px-4 py-2.5 sm:px-4 sm:py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap min-h-[40px] ${
                activeFilter === f
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/90'
              }`}
            >
              {f === 'Client project' ? 'Client Projects' : f === 'Independent product' ? 'Independent Products' : 'All Work'}
            </button>
          ))}
        </div>

        {/* Work Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedWork.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/work/${item.slug}`)}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-all cursor-pointer shadow-2xs hover:shadow-md group"
            >
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

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium pb-2 border-b border-slate-100">
                    <span
                      className={`font-semibold text-[11px] ${
                        item.projectType === 'Client project'
                          ? 'text-amber-700'
                          : 'text-[#1442CB]'
                      }`}
                    >
                      {item.projectType}
                    </span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="text-slate-500 text-[11px] truncate">{item.sector}</span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mt-4 group-hover:text-[#1442CB] transition-colors leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>

                  {/* Challenge -> Delivered preview */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Delivered Deliverables:
                      </span>
                      <ul className="space-y-1">
                        {item.delivered.slice(0, 3).map((del, i) => (
                          <li key={i} className="text-slate-700 flex items-start gap-1.5 text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Unboxed */}
                  <div className="mt-4 pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-500">
                    {item.techOrTools.map((t, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5">
                        {i > 0 && <span aria-hidden="true" className="text-slate-300">·</span>}
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1442CB] group-hover:underline flex items-center gap-1">
                    Read full case study <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  {item.externalUrl && (
                    <span className="text-[11px] font-mono text-slate-400">Live URL</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
