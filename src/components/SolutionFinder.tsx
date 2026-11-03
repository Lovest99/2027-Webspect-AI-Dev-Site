import React, { useState } from 'react';
import {
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  Send,
  MessageCircle,
  Info,
  Check,
} from 'lucide-react';
import { useRouter } from '../context/RouterContext';

interface SolutionFinderProps {
  onSendProjectEnquiry: (prefilledBrief: {
    interest: string;
    description: string;
  }) => void;
}

export const SolutionFinder: React.FC<SolutionFinderProps> = ({ onSendProjectEnquiry }) => {
  const { navigate } = useRouter();

  // 3-step state
  const [step, setStep] = useState<number>(1);
  const [selectedGoal, setSelectedGoal] = useState<string>('');
  const [selectedCurrentState, setSelectedCurrentState] = useState<string>('');
  const [selectedOutcome, setSelectedOutcome] = useState<string>('');

  // Step 1 Options
  const goalOptions = [
    {
      id: 'presence',
      title: 'Get more customers online',
      desc: 'Our current website is outdated, invisible on Google, or we have no site at all.',
    },
    {
      id: 'enquiries',
      title: 'Capture & manage enquiries better',
      desc: 'Leads come through WhatsApp, calls and email, but we lose track of them.',
    },
    {
      id: 'automation',
      title: 'Eliminate repetitive manual tasks',
      desc: 'Typing quotes, assembling reports, or copying data between tools takes hours.',
    },
    {
      id: 'operations',
      title: 'Run operations in one custom dashboard',
      desc: 'Spreadsheets are breaking down; we need job cards, tracking and team permissions.',
    },
    {
      id: 'product',
      title: 'Build a new digital software product',
      desc: 'We have an idea or prototype and need a full-stack engineering partner to build the MVP.',
    },
    {
      id: 'branding',
      title: 'Elevate our visual brand & marketing graphics',
      desc: 'Our promotional posters look amateurish; we need professional monthly graphics.',
    },
  ];

  // Step 2 Options
  const stateOptions = [
    {
      id: 'scratch',
      title: 'Starting from scratch',
      desc: 'No existing system, logo or software; we are setting this up for the first time.',
    },
    {
      id: 'spreadsheets',
      title: 'Relying on spreadsheets & WhatsApp',
      desc: 'We run everything through Excel/Google Sheets, paper dockets, and chat groups.',
    },
    {
      id: 'legacy-site',
      title: 'We have an existing website or tool',
      desc: 'It works partially, but looks dated, loads slowly, or lacks crucial features.',
    },
    {
      id: 'active-product',
      title: 'We have an active product idea or prototype',
      desc: 'We have domain expertise and wireframes, but need senior engineering execution.',
    },
  ];

  // Step 3 Options
  const outcomeOptions = [
    {
      id: 'fast-leads',
      title: 'Clear website + direct WhatsApp enquiry flow',
      desc: 'A modern, fast home on the web that establishes credibility and brings in quotes.',
    },
    {
      id: 'quote-pipeline',
      title: 'Automated quote preparation & lead queue',
      desc: 'Intake forms that calculate estimates and alert our team with one-click approval.',
    },
    {
      id: 'bespoke-portal',
      title: 'Tailored operational portal with staff roles',
      desc: 'A centralized cloud application for tracking jobs, dispatches, or inventory.',
    },
    {
      id: 'launched-mvp',
      title: 'Production-ready web application (MVP)',
      desc: 'A functional software product ready to test with real paying customers.',
    },
    {
      id: 'monthly-graphics',
      title: 'Consistent daily/weekly promotional posters',
      desc: 'Fixed-price visual packages so our business looks professional every single day.',
    },
  ];

  // Rule-based Recommendation Logic (transparent, not fake AI)
  const getRecommendation = () => {
    if (selectedGoal === 'branding' || selectedOutcome === 'monthly-graphics') {
      return {
        solutionName: 'Brand Visibility & Promotional Graphics',
        slug: 'brand-visibility',
        scopeSummary: 'Fixed-price design package (Essential $10, Business $30, or Monthly Presence $60/mo) + optional $5 vector logo modernization.',
        relevantExample: 'Happie Cosmetics & Multivate Construction visual campaign graphics.',
        suggestedNextStep: 'Review our confirmed design packages or discuss your specific campaign brief.',
      };
    }

    if (selectedGoal === 'product' || selectedOutcome === 'launched-mvp') {
      return {
        solutionName: 'Product Development & Full-Stack Engineering',
        slug: 'product-development',
        scopeSummary: 'Phase 1: Technical discovery & clickable UI prototype. Phase 2: Full-stack MVP build with TypeScript, React, and cloud backend.',
        relevantExample: 'MIST Civic Platform (mist.co.zw) & Relay AI.',
        suggestedNextStep: 'Book a discovery consultation to define the single core value loop of your MVP.',
      };
    }

    if (selectedGoal === 'automation' || selectedOutcome === 'quote-pipeline') {
      return {
        solutionName: 'Workflow Automation & Smart Document Pipelines',
        slug: 'workflow-automation',
        scopeSummary: 'Automated lead ingestion, quote drafting engine, and human-in-the-loop review interface connected to your WhatsApp/email.',
        relevantExample: 'Relay AI Webhook Engine & Quotivo Contractor Estimation.',
        suggestedNextStep: 'Map the 3 most repetitive steps in your current quoting or reporting process.',
      };
    }

    if (selectedGoal === 'operations' || selectedOutcome === 'bespoke-portal') {
      return {
        solutionName: 'Business Operations & Custom Management Dashboards',
        slug: 'business-operations',
        scopeSummary: 'Tailored operational web application with role-based permissions (manager, field staff, client), real-time status boards, and automated backups.',
        relevantExample: 'TowMate Roadside Assistance Dispatch & Plant Pulse Remote.',
        suggestedNextStep: 'Share a sample of your current operational spreadsheets to map your data schema.',
      };
    }

    if (selectedGoal === 'enquiries') {
      return {
        solutionName: 'Customer Enquiries & Intake Optimization',
        slug: 'customer-enquiries',
        scopeSummary: 'Custom specification forms, centralized lead queue dashboard, and direct WhatsApp handoff with pre-filled parameters.',
        relevantExample: 'Professional Mox Commercial Cleaning intake workflow.',
        suggestedNextStep: 'Structure the key intake questions your team needs answered before sending a quote.',
      };
    }

    // Default to Digital Presence
    return {
      solutionName: 'Digital Presence & High-Performance Business Website',
      slug: 'digital-presence',
      scopeSummary: 'Modern responsive website with clear value proposition, mobile-first performance, project gallery, and frictionless WhatsApp contact flow.',
      relevantExample: 'Multivate Construction corporate web platform & equipment showcase.',
      suggestedNextStep: 'Compile your key past projects, services, and current logo for an initial scoping call.',
    };
  };

  const recommendation = getRecommendation();

  // Generated editable brief text
  const briefText = `Goal: ${
    goalOptions.find((g) => g.id === selectedGoal)?.title || 'Improve digital operations'
  }. Current setup: ${
    stateOptions.find((s) => s.id === selectedCurrentState)?.title || 'Existing manual setup'
  }. Desired result: ${
    outcomeOptions.find((o) => o.id === selectedOutcome)?.title || 'Professional solution'
  }. Recommended solution: ${recommendation.solutionName}.`;

  const whatsappLink = `https://wa.me/263787679376?text=${encodeURIComponent(
    `Hi Bright, I used the Webspect Solution Finder:\n\n${briefText}\n\nI'd like to discuss how we can implement this.`
  )}`;

  const handleReset = () => {
    setStep(1);
    setSelectedGoal('');
    setSelectedCurrentState('');
    setSelectedOutcome('');
  };

  return (
    <section id="solution-finder" className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1442CB] block mb-1.5">
            Interactive Navigator
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Find the right solution for your business.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Answer 3 quick questions. Our transparent rule-based finder recommends the most effective
            starting point for your specific situation.
          </p>
        </div>

        {/* Progress Bar (3 steps) */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
            <span>Step {step} of 3</span>
            <span>
              {step === 1 && 'What to improve'}
              {step === 2 && 'Current setup'}
              {step === 3 && 'Desired outcome'}
              {step > 3 && 'Your Recommendation'}
            </span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#1442CB] h-full transition-all duration-300"
              style={{ width: `${Math.min(100, (step / 3) * 100)}%` }}
            />
          </div>
        </div>

        {/* STEP 1: What do you want to improve? */}
        {step === 1 && (
          <div className="mt-6 space-y-3 animate-in fade-in duration-200">
            <h3 className="text-base font-bold text-slate-900 text-center">
              1. What do you want to improve most?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {goalOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setSelectedGoal(opt.id);
                    setStep(2);
                  }}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedGoal === opt.id
                      ? 'bg-blue-50 border-[#1442CB] text-slate-900 shadow-xs ring-1 ring-[#1442CB]/20'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span className="text-sm font-bold text-slate-900 block">{opt.title}</span>
                  <span className="text-xs text-slate-500 block mt-1 leading-relaxed">
                    {opt.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: What do you have in place already? */}
        {step === 2 && (
          <div className="mt-8 space-y-4 animate-in fade-in duration-200">
            <h3 className="text-lg font-bold text-slate-900 text-center">
              2. What do you have in place already?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4">
              {stateOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setSelectedCurrentState(opt.id);
                    setStep(3);
                  }}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedCurrentState === opt.id
                      ? 'bg-blue-50 border-[#1442CB] text-slate-900 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span className="text-sm font-bold text-slate-900 block">{opt.title}</span>
                  <span className="text-xs text-slate-500 block mt-1 leading-relaxed">
                    {opt.desc}
                  </span>
                </button>
              ))}
            </div>
            <div className="pt-4 flex justify-center">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-slate-500 hover:text-slate-800 underline"
              >
                ← Back to Step 1
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: What would a useful result look like? */}
        {step === 3 && (
          <div className="mt-8 space-y-4 animate-in fade-in duration-200">
            <h3 className="text-lg font-bold text-slate-900 text-center">
              3. What would a useful result look like?
            </h3>
            <div className="grid grid-cols-1 gap-3 mt-4">
              {outcomeOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setSelectedOutcome(opt.id);
                    setStep(4);
                  }}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedOutcome === opt.id
                      ? 'bg-blue-50 border-[#1442CB] text-slate-900 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span className="text-sm font-bold text-slate-900 block">{opt.title}</span>
                  <span className="text-xs text-slate-500 block mt-1 leading-relaxed">
                    {opt.desc}
                  </span>
                </button>
              ))}
            </div>
            <div className="pt-4 flex justify-center">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-xs text-slate-500 hover:text-slate-800 underline"
              >
                ← Back to Step 2
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: RECOMMENDATION RESULT */}
        {step >= 4 && (
          <div className="mt-8 bg-[#FAFAF8] rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6 animate-in fade-in duration-200">
            {/* Header Badge */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1442CB]">
                Recommended Starting Point
              </span>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Start over
              </button>
            </div>

            {/* Recommendation Title */}
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {recommendation.solutionName}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Transparent recommendation based on your answers (no speculative AI or fake quotes).
              </p>
            </div>

            {/* Scope & Relevant Work Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <span className="text-[11px] font-bold uppercase text-slate-400 block">
                  Possible Scope
                </span>
                <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                  {recommendation.scopeSummary}
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <span className="text-[11px] font-bold uppercase text-slate-400 block">
                  Relevant Work
                </span>
                <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                  {recommendation.relevantExample}
                </p>
              </div>
            </div>

            {/* Editable Project Brief Box */}
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1">
                Your Generated Project Brief (Ready to send)
              </span>
              <p className="text-xs font-mono text-slate-700 bg-slate-50 p-2.5 rounded border border-slate-200/70 leading-relaxed">
                {briefText}
              </p>
            </div>

            {/* Conversion Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Continue on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() =>
                  onSendProjectEnquiry({
                    interest: recommendation.solutionName,
                    description: briefText,
                  })
                }
                className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] active:scale-[0.98] rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Send project enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => navigate(`/solutions/${recommendation.slug}`)}
                className="w-full sm:w-auto px-4 py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                View solution page
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
