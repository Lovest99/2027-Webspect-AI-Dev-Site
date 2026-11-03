import React from 'react';
import {
  X,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
  Layers,
  Building2,
} from 'lucide-react';
import { CaseStudy } from '../data/work';
import { useRouter } from '../context/RouterContext';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenContact: (interest?: string, description?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onOpenContact,
}) => {
  const { navigate } = useRouter();

  if (!caseStudy) return null;

  const handleInquire = () => {
    onClose();
    onOpenContact(
      `Case Study Reference: ${caseStudy.clientOrProject}`,
      `I saw the ${caseStudy.clientOrProject} project (${caseStudy.sector}) and want to discuss building a similar digital solution for our business.`
    );
  };

  const handleReadFullPage = () => {
    onClose();
    navigate(`/work/${caseStudy.slug}`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 bg-slate-50/60 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span className={caseStudy.projectType === 'Client project' ? 'text-amber-700 font-semibold' : 'text-[#1442CB] font-semibold'}>
                {caseStudy.projectType}
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-600 font-medium">{caseStudy.sector}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1 leading-snug">
              {caseStudy.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/70 transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-800 text-sm">
          {/* Summary */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {caseStudy.summary}
          </p>

          {/* Real Challenge & Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                The Business Challenge
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1442CB] block mb-1.5">
                Webspect Engineering Approach
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                {caseStudy.approach}
              </p>
            </div>
          </div>

          {/* Delivered Scope */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Delivered Technical Scope
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.delivered.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white rounded-xl border border-slate-200/80 flex items-start gap-2.5 shadow-2xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Unboxed */}
          {caseStudy.techOrTools && caseStudy.techOrTools.length > 0 && (
            <div className="pt-2 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Technologies & Architecture
              </span>
              <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-600">
                {caseStudy.techOrTools.map((tech, idx) => (
                  <span key={tech} className="inline-flex items-center gap-1.5">
                    {idx > 0 && <span aria-hidden="true" className="text-slate-300">·</span>}
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {caseStudy.externalUrl && (
              <a
                href={caseStudy.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              type="button"
              onClick={handleReadFullPage}
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Full case study article</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/263787679376?text=${encodeURIComponent(
                `Hi Bright, I was reviewing the ${caseStudy.clientOrProject} case study on Webspect and want to ask about a similar solution for my company.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-100/70 bg-emerald-50 border border-emerald-200 rounded-lg inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Ask on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={handleInquire}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] rounded-lg shadow-xs inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Discuss Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
