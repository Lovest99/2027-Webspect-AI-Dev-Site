import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface FinalConversationProps {
  onOpenContact: () => void;
}

export const FinalConversation: React.FC<FinalConversationProps> = ({ onOpenContact }) => {
  const whatsappUrl = `${COMPANY_INFO.contact.whatsappLink}?text=${encodeURIComponent(
    'Hi Bright, I was looking through the Webspect website and would like to talk about a project.'
  )}`;

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-[#070D22] via-[#0D1C44] to-[#060A18] text-white relative overflow-hidden border-t border-blue-950/80">
      {/* Atmospheric Pale Blue Radial Light Bloom */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#1442CB]/25 via-[#1E40AF]/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      {/* Subtle Arc Geometry framing reminiscent of the logo */}
      <div
        className="pointer-events-none absolute -bottom-36 -left-36 w-96 h-96 rounded-full border-[32px] border-white/5"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full border-[24px] border-white/5"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block mb-3">
          Start a Conversation
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          What would you like to make better?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Tell us what you’re working on, what’s getting in the way or what you’d like to build.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onOpenContact}
            className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#1442CB] hover:bg-blue-600 active:scale-[0.98] rounded-xl shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Tell us about it</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-slate-800/90 hover:bg-slate-700 active:scale-[0.98] rounded-xl border border-slate-700/80 shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <p className="mt-6 text-[11px] sm:text-xs text-slate-400 font-mono text-center">
          Zimbabwe · Working across borders · Direct engineer contact
        </p>
      </div>
    </section>
  );
};
