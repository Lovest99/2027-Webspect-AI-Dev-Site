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
  Compass,
} from 'lucide-react';
import { SOLUTIONS } from '../data/solutions';
import { useRouter } from '../context/RouterContext';

interface SolutionsIndexPageProps {
  onOpenContact: (interest?: string) => void;
}

export const SolutionsIndexPage: React.FC<SolutionsIndexPageProps> = ({ onOpenContact }) => {
  const { navigate } = useRouter();

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
            <span>Organised by Business Outcomes</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Digital tools shaped around <span className="bg-gradient-to-r from-[#1442CB] via-blue-600 to-indigo-600 bg-clip-text text-transparent">what you want to achieve</span>.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Rather than selling disconnected technical services, Webspect provides practical business
            solutions: helping you get noticed, capture opportunities, streamline repetitive work,
            and build ambitious software.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={() => {
                navigate('/#solution-finder');
                const el = document.getElementById('solution-finder');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-3 bg-white text-slate-800 border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors inline-flex items-center gap-2.5 shadow-2xs cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#1442CB]" />
              <span>Not sure where to start? Use the 3-step Solution Finder</span>
            </button>
          </div>
        </div>

        {/* 6 Solutions Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((sol, index) => {
            const Icon = getIcon(sol.iconName);
            return (
              <div
                key={sol.id}
                onClick={() => navigate(`/solutions/${sol.slug}`)}
                className="group bg-white rounded-2xl border border-slate-200/90 p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all cursor-pointer shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-blue-50 text-[#1442CB] group-hover:bg-[#1442CB] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">0{index + 1}</span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mt-5 group-hover:text-[#1442CB] transition-colors leading-snug">
                    {sol.pageTitle}
                  </h2>
                  <p className="text-xs font-semibold text-[#1442CB] mt-1">
                    Goal: {sol.navTitle}
                  </p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {sol.definition}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {sol.capabilities.slice(0, 3).map((cap, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{cap.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1442CB] group-hover:underline flex items-center gap-1">
                    Explore solution <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">Detailed View</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};
