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
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Authentic Profile Card */}
          <div className="lg:col-span-5 bg-[#FAFAF8] rounded-xl border border-slate-200/90 p-5 sm:p-6 shadow-xs">
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

          {/* Right Column: Editorial Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1442CB] block">
              Engineering Leadership
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Direct engineering with no middle layers.
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
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors inline-flex items-center gap-2"
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
