import React from 'react';
import {
  GraduationCap,
  MapPin,
  Code,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { useRouter } from '../context/RouterContext';

interface CompanyPageProps {
  onOpenContact: () => void;
}

export const CompanyPage: React.FC<CompanyPageProps> = ({ onOpenContact }) => {
  const { navigate } = useRouter();
  const { founder, principles, howWeWorkStages, contact } = COMPANY_INFO;

  return (
    <main className="py-16 sm:py-24 bg-[#FAFAF8] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Hero */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1442CB] block mb-2">
            Company & Philosophy
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Direct, disciplined digital product development.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {COMPANY_INFO.positioningStatement}
          </p>
        </div>

        {/* Founder Profile Section */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-8 sm:p-10 shadow-2xs">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-24 h-24 rounded-2xl bg-[#0A1128] text-white flex items-center justify-center font-bold text-3xl shadow-sm shrink-0">
              BC
            </div>

            <div className="space-y-4 flex-1">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{founder.name}</h2>
                <p className="text-sm font-semibold text-[#1442CB] mt-0.5">{founder.role}</p>
                <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{founder.location} · {contact.remotePolicy}</span>
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3 text-xs text-slate-700">
                <GraduationCap className="w-5 h-5 text-[#1442CB] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">{founder.degree}</span>
                  <span className="text-slate-600">{founder.university}</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {founder.bio}
              </p>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Specialties & Technical Domains
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {founder.specialties.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Governing Principles */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1442CB] block mb-1">
              Guiding Principles
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              How we approach technology and design
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((pr, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs space-y-2">
                <span className="text-xs font-mono text-[#1442CB] font-bold">0{i + 1}.</span>
                <h3 className="text-lg font-bold text-slate-900">{pr.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pr.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How We Work 4-Stage Flow */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-2xs">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1442CB] block mb-1">
              Collaboration Lifecycle
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Four steps from challenge to live tool
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {howWeWorkStages.map((st) => (
              <div key={st.step} className="p-5 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                <span className="font-mono text-xs font-bold text-[#1442CB] bg-white px-2 py-0.5 rounded border border-slate-200">
                  STAGE {st.step}
                </span>
                <h3 className="text-base font-bold text-slate-900">{st.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Strip */}
        <div className="p-8 bg-[#0A1128] text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Have an idea or operational challenge to discuss?</h3>
            <p className="text-xs text-slate-300 mt-1">
              Reach Bright directly via WhatsApp or start a project inquiry.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] rounded-xl transition-colors"
            >
              Start conversation
            </button>
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
