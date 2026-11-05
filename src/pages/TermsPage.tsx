import React from 'react';
import { ChevronLeft, FileText } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export const TermsPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <main className="py-16 sm:py-24 bg-[#FAFAF8] min-h-screen relative overflow-hidden">
      {/* Engineered Canvas Micro-Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Atmospheric Pale Blue Light Bloom */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-gradient-to-b from-[#1442CB]/[0.06] via-[#1442CB]/[0.02] to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        <div>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
            className="text-xs text-slate-500 hover:text-slate-900 inline-flex items-center gap-1 mb-4"
          >
            <ChevronLeft className="w-3.5 h-3.5" /> Back to Home
          </a>
          <h1 className="text-3xl font-extrabold text-slate-900">
            <span className="bg-gradient-to-r from-slate-900 via-[#1442CB] to-indigo-950 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-1 font-mono">Last updated: October 2026</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed shadow-2xs">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. Engagement & Deliverables</h2>
            <p>
              Webspect AI & Dev provides bespoke software development, digital presence systems, workflow
              automation, and commercial graphic design packages. Every engagement operates under an
              agreed scope of work detailing deliverables, timeline estimates, and milestones.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. Intellectual Property Ownership</h2>
            <p>
              Upon receipt of final milestone payments, clients retain 100% ownership of custom application
              source code, tailored database schemas, and delivered design assets. Webspect retains the right
              to display delivered non-confidential artwork in its portfolio.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">3. Design Package Terms</h2>
            <p>
              Design packages (Essential, Business, Monthly Presence) include custom poster artwork ready
              for client publishing. Packages do not include paid advertising budgets, social media
              publishing management, or ad account administration.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">4. Warranties & Disclaimers</h2>
            <p>
              We guarantee that our code and design assets adhere to modern industry standards and
              accessibility practices. We do not make speculative commercial guarantees regarding third-party
              ad conversion rates or platform algorithm performance.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};
