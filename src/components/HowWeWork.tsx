import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HowWeWorkProps {
  onStartProject: () => void;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onStartProject }) => {
  return (
    <section className="py-12 sm:py-16 bg-[#FAFAF8] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1442CB] block mb-1.5">
            Engagement & Delivery
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
            From a business challenge to something useful.
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
              className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-2xs flex flex-col justify-between"
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
        <div className="mt-10 p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-slate-700">
            <strong>No speculative retainers or hourly surprises:</strong> Scope, timeline, and exact
            deliverables are agreed before kickoff.
          </div>
          <button
            onClick={onStartProject}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] rounded-xl transition-colors shrink-0"
          >
            Start a project discussion
          </button>
        </div>
      </div>
    </section>
  );
};
