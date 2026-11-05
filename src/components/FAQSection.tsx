import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { MAIN_FAQS, FAQItem } from '../data/faqs';

interface FAQSectionProps {
  onAskQuestion: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onAskQuestion }) => {
  const [openIds, setOpenIds] = useState<string[]>(['do-we-need-ai', 'not-technical']);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'General', 'Technology & AI', 'Scope & Pricing', 'Process'];

  const toggleFAQ = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const displayedFAQs = filter === 'All'
    ? MAIN_FAQS
    : MAIN_FAQS.filter((f) => f.category === filter);

  return (
    <section className="py-14 sm:py-20 bg-[#FAFAF8] border-b border-slate-200/80 relative overflow-hidden">
      {/* Engineered Canvas Micro-Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Atmospheric Pale Blue Radial Light Bloom */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[340px] bg-gradient-to-b from-[#1442CB]/[0.06] via-[#1E40AF]/[0.02] to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/70 text-xs font-semibold text-[#1442CB] uppercase tracking-wider mb-2.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1442CB]" />
            <span>Honest Clarifications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Useful answers to <span className="bg-gradient-to-r from-[#1442CB] via-blue-600 to-indigo-600 bg-clip-text text-transparent">common questions</span>.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Straightforward answers to help you evaluate whether Webspect is the right engineering and
            design partner for your business.
          </p>
        </div>

        {/* Category Filters with Generous Touch Padding */}
        <div className="mt-8 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden p-1.5 bg-slate-100/70 sm:bg-transparent rounded-xl">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`shrink-0 px-4 py-2.5 sm:px-3.5 sm:py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap min-h-[38px] cursor-pointer ${
                filter === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/90'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-8 space-y-3">
          {displayedFAQs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200/90 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#1442CB]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-10 p-6 bg-white rounded-2xl border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="text-xs sm:text-sm text-slate-700">
            Have a question specific to your company's workflow or industry?
          </div>
          <button
            onClick={onAskQuestion}
            className="px-5 py-3 text-xs sm:text-sm font-semibold text-[#1442CB] bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors shrink-0 cursor-pointer shadow-2xs"
          >
            Ask us directly
          </button>
        </div>
      </div>
    </section>
  );
};
