import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HowWeWorkProps {
  onStartProject: () => void;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onStartProject }) => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAFAF8] border-b border-slate-200/80 relative overflow-hidden">
      {/* Engineered Canvas Micro-Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Atmospheric Pale Blue Radial Light Bloom */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[340px] bg-gradient-to-b from-[#1442CB]/[0.06] via-[#1E40AF]/[0.02] to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/70 text-xs font-semibold text-[#1442CB] uppercase tracking-wider mb-2.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1442CB]" />
            <span>Engagement & Delivery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
            From a business challenge to <span className="bg-gradient-to-r from-[#1442CB] via-blue-600 to-indigo-600 bg-clip-text text-transparent">something useful</span>.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            We work in transparent, collaborative milestones. Deliverables, technical boundaries, and
            pricing are agreed in writing before any development starts.
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {COMPANY_INFO.howWeWorkStages.map((stage) => (
            <div
              key={stage.step}
              className="bg-white rounded-xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-2xl font-black text-[#1442CB] block">
                  {stage.step}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-3 leading-snug">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400 font-mono">
                Milestone Review
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance banner */}
        <div className="mt-10 p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-slate-700">
            <strong>No speculative retainers or hourly surprises:</strong> Scope, timeline, and exact
            deliverables are agreed before kickoff.
          </div>
          <button
            onClick={onStartProject}
            className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] rounded-xl shadow-xs transition-colors shrink-0 cursor-pointer"
          >
            Start a project discussion
          </button>
        </div>
      </div>
    </section>
  );
};
