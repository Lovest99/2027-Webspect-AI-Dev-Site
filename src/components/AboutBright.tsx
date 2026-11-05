import React from 'react';
import {
  GraduationCap,
  MapPin,
  Code,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { useRouter } from '../context/RouterContext';

export const AboutBright: React.FC = () => {
  const { navigate } = useRouter();
  const { founder } = COMPANY_INFO;

  return (
    <section className="py-14 sm:py-20 bg-white/90 border-b border-slate-200/80 relative overflow-hidden">
      {/* Engineered Canvas Micro-Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Atmospheric Pale Blue Radial Light Bloom */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[340px] bg-gradient-to-b from-[#1442CB]/[0.06] via-[#1E40AF]/[0.02] to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Authentic Profile Card */}
          <div className="lg:col-span-5 bg-[#FAFAF8] rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
            {/* Real Founder Engineering Portfolio Banner (16:9 Widescreen Flush to Rounded Corners) */}
            <div className="w-full overflow-hidden border-b border-slate-200/90 bg-slate-950 aspect-[16/9] relative group">
              <img
                src={founder.portfolioImage || '/assets/aistudio/bright-portfolio-01-hero.jpg'}
                alt="Bright Cheteni software engineering portfolio banner"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white/90">
                <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">brightcheteni.dev</span>
                <span className="text-emerald-400 font-semibold bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">Verified Portfolio</span>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              {/* Visual Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-slate-200/80">
              <div className="w-16 h-16 rounded-2xl bg-[#0A1128] text-white flex items-center justify-center font-bold text-2xl shadow-sm shrink-0">
                BC
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{founder.name}</h3>
                <p className="text-xs text-[#1442CB] font-semibold mt-0.5">{founder.role}</p>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{founder.location}</span>
                </div>
              </div>
            </div>

            {/* Academic Credential & Engineering Focus */}
            <div className="py-5 space-y-3 border-b border-slate-200/80 text-xs">
              <div className="flex items-start gap-2.5 text-slate-700">
                <GraduationCap className="w-4 h-4 text-[#1442CB] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">{founder.degree}</span>
                  <span className="text-slate-500">{founder.university}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-slate-700">
                <Code className="w-4 h-4 text-[#1442CB] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Engineering Focus</span>
                  <span className="text-slate-500">
                    TypeScript, React, Node.js, Cloud SQL & Applied AI
                  </span>
                </div>
              </div>
            </div>

            {/* Specialties */}
            <div className="pt-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Core Capabilities
              </span>
              <ul className="space-y-1.5">
                {founder.specialties.map((spec, i) => (
                  <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

          {/* Right Column: Editorial Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/70 text-xs font-semibold text-[#1442CB] uppercase tracking-wider shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1442CB]" />
              <span>Engineering Leadership</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Direct engineering with <span className="bg-gradient-to-r from-[#1442CB] via-blue-600 to-indigo-600 bg-clip-text text-transparent">no middle layers</span>.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {founder.bio}
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Rather than running an oversized agency with layers of non-technical account managers,
              Webspect provides direct, senior-level development. You collaborate directly with the
              engineer architecting your database, designing your interfaces, and deploying your code.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="font-bold text-slate-900 block">Based in Zimbabwe</span>
                <span className="text-slate-600 mt-1 block">
                  Built to serve local businesses, regional enterprises, and international founders
                  remotely.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="font-bold text-slate-900 block">Zero AI Hype</span>
                <span className="text-slate-600 mt-1 block">
                  Disciplined evaluation: If a simple web form or spreadsheet script does the job, we
                  won’t sell you bloated AI.
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={() => navigate('/company')}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors inline-flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <span>Read more about Webspect</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
