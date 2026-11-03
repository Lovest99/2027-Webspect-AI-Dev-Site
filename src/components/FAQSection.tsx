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
    <section className="py-12 sm:py-16 bg-[#FAFAF8] border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1442CB] block mb-1.5">
            Honest Clarifications
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Useful answers to common questions.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Straightforward answers to help you evaluate whether Webspect is the right engineering and
            design partner for your business.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-6 space-y-2.5">
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
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
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
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-10 p-5 bg-white rounded-xl border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-slate-700">
            Have a question specific to your company's workflow or industry?
          </div>
          <button
            onClick={onAskQuestion}
            className="px-4 py-2 text-xs font-semibold text-[#1442CB] bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors shrink-0"
          >
            Ask us directly
          </button>
        </div>
      </div>
    </section>
  );
};
