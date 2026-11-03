import React, { useState } from 'react';
import {
  Globe,
  Zap,
  Boxes,
  ArrowRight,
  CheckCircle2,
  Check,
  RotateCcw,
  UserCheck,
  ExternalLink,
} from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export const EditorialStories: React.FC = () => {
  const { navigate } = useRouter();
  const [activeStory, setActiveStory] = useState<'presence' | 'automation' | 'product'>('presence');

  // Story 2: Workflow Automation Demo State
  const [workflowApproved, setWorkflowApproved] = useState<boolean>(false);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#070D1F] via-[#0E1D45] to-[#070E22] border-y border-blue-950/80 text-white relative overflow-hidden">
      {/* Atmospheric Pale Blue Radial Light Blooms */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] lg:w-[1100px] h-[480px] bg-gradient-to-b from-[#1E40AF]/25 via-[#1442CB]/10 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#1442CB]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-[#1E40AF]/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Subtle Arc Geometry framing reminiscent of the Webspect identity */}
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full border-[28px] border-blue-500/[0.04]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block mb-1.5">
              Deep-Dive Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              How Webspect solves real business challenges.
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Explore how we design customer-facing websites, human-supervised automation, and
              production-grade software.
            </p>
          </div>

          {/* Interactive Story Switcher */}
          <div className="w-full md:w-auto grid grid-cols-3 md:flex items-center gap-1 p-1 bg-slate-900/90 border border-slate-700/80 rounded-xl shadow-inner backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setActiveStory('presence')}
              className={`w-full justify-center text-center px-1.5 py-2 md:px-3 md:py-1.5 rounded-lg text-[11px] min-[375px]:text-xs font-semibold transition-all flex items-center justify-center gap-1 md:gap-1.5 cursor-pointer whitespace-nowrap ${
                activeStory === 'presence'
                  ? 'bg-[#1442CB] text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Globe className="w-3.5 h-3.5 shrink-0 hidden lg:inline" />
              <span className="font-mono text-[9.5px] opacity-70 hidden min-[360px]:inline">01.</span>
              <span><span className="hidden sm:inline">Digital </span>Presence</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveStory('automation')}
              className={`w-full justify-center text-center px-1.5 py-2 md:px-3 md:py-1.5 rounded-lg text-[11px] min-[375px]:text-xs font-semibold transition-all flex items-center justify-center gap-1 md:gap-1.5 cursor-pointer whitespace-nowrap ${
                activeStory === 'automation'
                  ? 'bg-[#1442CB] text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Zap className="w-3.5 h-3.5 shrink-0 hidden lg:inline" />
              <span className="font-mono text-[9.5px] opacity-70 hidden min-[360px]:inline">02.</span>
              <span><span className="hidden sm:inline">Workflow </span>Automation</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveStory('product')}
              className={`w-full justify-center text-center px-1.5 py-2 md:px-3 md:py-1.5 rounded-lg text-[11px] min-[375px]:text-xs font-semibold transition-all flex items-center justify-center gap-1 md:gap-1.5 cursor-pointer whitespace-nowrap ${
                activeStory === 'product'
                  ? 'bg-[#1442CB] text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Boxes className="w-3.5 h-3.5 shrink-0 hidden lg:inline" />
              <span className="font-mono text-[9.5px] opacity-70 hidden min-[360px]:inline">03.</span>
              <span><span className="hidden sm:inline">Product </span><span className="sm:hidden">Product</span><span className="hidden sm:inline">Engineering</span></span>
            </button>
          </div>
        </div>

        {/* ACTIVE STORY 1: DIGITAL PRESENCE */}
        {activeStory === 'presence' && (
          <div className="bg-[#0C152E]/90 rounded-2xl border border-blue-900/40 p-5 sm:p-8 shadow-2xl shadow-blue-950/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center backdrop-blur-sm animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400">
                <span>Clear Messaging & Tender Readiness</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Help customers find you—and take the next step.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Most business websites fail not from poor technology, but from failing to answer the
                customer's immediate question. When someone lands on your page from a referral or search,
                they want to verify your legitimacy, see proof of past work, and contact you without hassle.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="p-3 bg-slate-900/70 rounded-xl border border-blue-900/40">
                  <h4 className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Clear, Plain-Language Messaging
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Eliminate abstract jargon. State what you do, who you serve, and why you are qualified.
                  </p>
                </div>

                <div className="p-3 bg-slate-900/70 rounded-xl border border-blue-900/40">
                  <h4 className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Mobile Usability & Data Respect
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Lightweight code that loads in under 1.5 seconds over cellular networks, with tap targets
                    sized comfortably for thumbs.
                  </p>
                </div>

                <div className="p-3 bg-slate-900/70 rounded-xl border border-blue-900/40">
                  <h4 className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Frictionless Inbound Contact Routes
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    One-tap WhatsApp links with pre-filled enquiry parameters and simple quote forms.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => navigate('/solutions/digital-presence')}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#1442CB] hover:bg-blue-600 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Explore digital presence</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/work/multivate-construction')}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-800 rounded-lg border border-slate-700/70 transition-colors cursor-pointer"
                >
                  See Multivate work
                </button>
              </div>
            </div>

            {/* Right Visual: Journey Architecture */}
            <div className="lg:col-span-6 bg-[#080E21] rounded-xl border border-slate-800 p-4 sm:p-6 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Customer Journey Architecture
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                  Discovery → Enquiry
                </span>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="w-6 h-6 rounded-full bg-slate-800 text-slate-300 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400">Step 1 · Arrival</span>
                    <p className="text-xs font-semibold text-white">
                      Customer searches or opens referral link
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Within 3 seconds, they see real photos of your past builds, accreditation, and
                      operating locations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="w-6 h-6 rounded-full bg-slate-800 text-slate-300 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400">Step 2 · Evaluation</span>
                    <p className="text-xs font-semibold text-white">
                      Browses project catalogue & specifications
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Categorized galleries verify equipment capabilities, civil scope, and finishing
                      standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-blue-950/50 border border-blue-600/50">
                  <div className="w-6 h-6 rounded-full bg-[#1442CB] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-blue-300">Step 3 · Direct Action</span>
                    <p className="text-xs font-semibold text-white">
                      Taps WhatsApp or submits project requirements
                    </p>
                    <p className="text-[11px] text-blue-200/90 mt-0.5">
                      No generic "submit" box into a black hole; enquiry is formatted cleanly with exact
                      dimensions and site requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ACTIVE STORY 2: WORKFLOW AUTOMATION */}
        {activeStory === 'automation' && (
          <div className="bg-[#0C152E]/90 rounded-2xl border border-blue-900/40 p-5 sm:p-8 shadow-2xl shadow-blue-950/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center backdrop-blur-sm animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400">
                <span>Human-in-the-Loop Workflow</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Give repetitive work a better process.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Automation should remove administrative drudgery, not introduce unpredictable AI risks.
                We design scoped workflows that assemble data, parse documents, and draft proposals,
                always maintaining human sign-off where real business reputations are on the line.
              </p>

              <div className="space-y-2.5 pt-1 text-xs text-slate-200">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Scoped Around Your Existing Tools:</strong> Connect
                    spreadsheets, WhatsApp, and email without forcing your team to learn complex enterprise software.
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Human Approval at Consequential Steps:</strong> AI
                    and scripts do the repetitive drafting; experienced managers retain final say on quotes.
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Full Audit Trails & Fail-Safes:</strong> Clear
                    logs and instant exception alerts when customer data requires human review.
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => navigate('/solutions/workflow-automation')}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#1442CB] hover:bg-blue-600 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Explore workflow automation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/work/relay-automation-engine')}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-800 rounded-lg border border-slate-700/70 transition-colors cursor-pointer"
                >
                  See Relay AI case study
                </button>
              </div>
            </div>

            {/* Right Visual: Interactive Review Pipeline */}
            <div className="lg:col-span-6 bg-[#080E21] text-white rounded-xl p-4 sm:p-5 border border-slate-800 space-y-2.5">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                <span className="text-[11px] font-mono text-slate-400">
                  PIPELINE SIMULATOR
                </span>
                <span className="text-[11px] font-mono text-amber-400">
                  Human-in-the-Loop Active
                </span>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">01. Enquiry Received</span>
                    <span className="text-slate-200">1,200m² Warehouse Epoxy Flooring in Industrial Park</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[11px]">200 OK</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">02. Automated Rate Calculation</span>
                    <span className="text-slate-200">2mm Heavy Industrial Epoxy + Primer + Seal</span>
                  </div>
                  <span className="text-blue-400 font-mono text-[11px]">$4,850.00</span>
                </div>

                {/* Step 3: Human Review Checkpoint */}
                <div
                  className={`p-3 rounded-lg border transition-all ${
                    workflowApproved
                      ? 'bg-emerald-950/40 border-emerald-500/50'
                      : 'bg-amber-950/30 border-amber-500/40'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold flex items-center gap-1.5 text-white">
                      <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                      03. Manager Verification Checkpoint
                    </span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                        workflowApproved
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : 'bg-amber-500/20 text-amber-300'
                      }`}
                    >
                      {workflowApproved ? 'Approved' : 'Action Required'}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Automated drafts are held until verified by the supervisor. No speculative quotes
                    are ever released without confirmation.
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between">
                    {!workflowApproved ? (
                      <button
                        type="button"
                        onClick={() => setWorkflowApproved(true)}
                        className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Sign Off & Release Quote</span>
                      </button>
                    ) : (
                      <div className="flex items-center justify-between w-full">
                        <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Dispatched to Client WhatsApp
                        </span>
                        <button
                          type="button"
                          onClick={() => setWorkflowApproved(false)}
                          className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                        >
                          <RotateCcw className="w-3 h-3" /> Reset
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ACTIVE STORY 3: PRODUCT ENGINEERING */}
        {activeStory === 'product' && (
          <div className="bg-[#0C152E]/90 rounded-2xl border border-blue-900/40 p-5 sm:p-8 shadow-2xl shadow-blue-950/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center backdrop-blur-sm animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400">
                <span>Full-Stack Engineering & MVP Discovery</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Bring your idea into something people can use.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Founders and businesses often have valuable domain insights, but lack an engineering
                partner to turn napkin sketches into resilient software. We handle technical discovery,
                interactive prototyping, full-stack engineering, and launch sprints.
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs">
                <div className="p-2.5 bg-slate-900/70 rounded-lg border border-blue-900/40">
                  <span className="font-bold text-white block text-xs">1. Scope & MVP</span>
                  <span className="text-slate-400 text-[11px] mt-0.5 block">
                    Isolate the single core loop that makes your product essential.
                  </span>
                </div>
                <div className="p-2.5 bg-slate-900/70 rounded-lg border border-blue-900/40">
                  <span className="font-bold text-white block text-xs">2. Interactive UI</span>
                  <span className="text-slate-400 text-[11px] mt-0.5 block">
                    Validate clickable flows with real users before writing backend schemas.
                  </span>
                </div>
                <div className="p-2.5 bg-slate-900/70 rounded-lg border border-blue-900/40">
                  <span className="font-bold text-white block text-xs">3. Full-Stack Build</span>
                  <span className="text-slate-400 text-[11px] mt-0.5 block">
                    TypeScript, React, Node, Cloud SQL, and secure user permissions.
                  </span>
                </div>
                <div className="p-2.5 bg-slate-900/70 rounded-lg border border-blue-900/40">
                  <span className="font-bold text-white block text-xs">4. Launch & Sprints</span>
                  <span className="text-slate-400 text-[11px] mt-0.5 block">
                    Deploy to cloud infrastructure and iterate based on actual usage.
                  </span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => navigate('/solutions/product-development')}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#1442CB] hover:bg-blue-600 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Discuss my product idea</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/products')}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-800 rounded-lg border border-slate-700/70 transition-colors cursor-pointer"
                >
                  Explore independent products
                </button>
              </div>
            </div>

            {/* Right Visual: MIST Product Card */}
            <div className="lg:col-span-6 bg-[#080E21] text-white rounded-xl p-4 sm:p-5 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span className="text-xs font-bold text-white tracking-wide">
                    MIST Platform (mist.co.zw)
                  </span>
                </div>
                <a
                  href="https://mist.co.zw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-blue-400 hover:underline flex items-center gap-1"
                >
                  mist.co.zw <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-400 text-[11px]">
                    Citizen Fault Report #ZW-4902
                  </span>
                  <span className="text-emerald-400 text-[11px] font-mono">
                    Resolved in 34 mins
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white">
                  Refuse Accumulation at Commercial Market Area
                </h4>
                <p className="text-[11px] text-slate-400">
                  Location: Lobengula St & 6th Ave, Zimbabwe · GPS: -20.1539, 28.5794
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Department Dispatch</span>
                  <span className="font-semibold text-white mt-0.5 block text-xs">
                    Health & Public Amenities
                  </span>
                </div>
                <div className="p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Public Status Tracking</span>
                  <span className="font-semibold text-emerald-400 mt-0.5 block text-xs">
                    Verified Public Docket
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
