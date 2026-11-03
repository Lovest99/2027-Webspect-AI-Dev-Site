import React, { useState } from 'react';
import {
  Globe,
  MessageSquare,
  Zap,
  Layers,
  Boxes,
  Palette,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { useRouter } from '../context/RouterContext';

interface ChallengeItem {
  id: string;
  problem: string;
  recommendedSolution: string;
  solutionSlug: string;
  solutionNavTitle: string;
  whatItIncludes: string[];
  relevantExample: {
    name: string;
    description: string;
  };
  icon: any;
}

const CHALLENGES: ChallengeItem[] = [
  {
    id: 'find-online',
    problem: 'Customers struggle to find us online.',
    recommendedSolution: 'Digital Presence',
    solutionSlug: 'digital-presence',
    solutionNavTitle: 'Get found online',
    whatItIncludes: [
      'High-speed business website with clear value messaging',
      'Technical SEO foundations and local search discoverability',
      'Mobile-first layout so smartphone users easily browse services',
      'Frictionless tap-to-WhatsApp and quote request pathways'
    ],
    relevantExample: {
      name: 'Multivate Construction',
      description: 'Built a commercial web platform proving equipment fleet and civil capabilities to corporate tender boards.'
    },
    icon: Globe,
  },
  {
    id: 'track-enquiries',
    problem: 'Enquiries are difficult to keep track of.',
    recommendedSolution: 'Customer Enquiries',
    solutionSlug: 'customer-enquiries',
    solutionNavTitle: 'Turn enquiries into opportunities',
    whatItIncludes: [
      'Structured lead capture forms that collect project specifications',
      'Centralized enquiry queue dashboard with lead stage tracking',
      'One-tap WhatsApp enquiry pre-formatting',
      'Instant team alerts when high-priority leads submit'
    ],
    relevantExample: {
      name: 'Professional Mox',
      description: 'Created a pre-quote facility questionnaire that collects square meterage and premises frequency before the call.'
    },
    icon: MessageSquare,
  },
  {
    id: 'repeat-admin',
    problem: 'We keep repeating the same admin.',
    recommendedSolution: 'Workflow Automation',
    solutionSlug: 'workflow-automation',
    solutionNavTitle: 'Reduce repetitive work',
    whatItIncludes: [
      'Automated branded PDF proposal and quote generation',
      'Data synchronization between web forms, spreadsheets and messaging',
      'Human-in-the-loop AI drafting with mandatory manager sign-off',
      'Exception monitoring and error logs'
    ],
    relevantExample: {
      name: 'Relay AI Automation Pipeline',
      description: 'Webhook router connecting customer enquiries to automated draft quotations without manual re-typing.'
    },
    icon: Zap,
  },
  {
    id: 'scattered-info',
    problem: 'Our information is scattered.',
    recommendedSolution: 'Business Operations',
    solutionSlug: 'business-operations',
    solutionNavTitle: 'Run your business in one place',
    whatItIncludes: [
      'Custom internal operations dashboard tailored to your workflow',
      'Role-based permissions for managers, field technicians and clients',
      'Centralized job card, inventory or equipment dispatch tracking',
      'Secure database with automatic cloud backups'
    ],
    relevantExample: {
      name: 'TowMate Recovery Dispatch',
      description: 'Interactive dispatch console showing breakdown coordinates, nearest truck operators, and status dockets.'
    },
    icon: Layers,
  },
  {
    id: 'idea-to-build',
    problem: 'We have an idea we want to build.',
    recommendedSolution: 'Product Development',
    solutionSlug: 'product-development',
    solutionNavTitle: 'Build your product idea',
    whatItIncludes: [
      'Technical discovery, user flows, and core value MVP scoping',
      'Interactive clickable UI prototypes ready for user validation',
      'Full-stack engineering (React, TypeScript, Node.js, Cloud SQL)',
      '100% intellectual property and code ownership'
    ],
    relevantExample: {
      name: 'MIST Civic Platform',
      description: 'Designed and engineered a public municipal issue reporting app with GPS geotagging and departmental routing.'
    },
    icon: Boxes,
  },
  {
    id: 'brand-look',
    problem: 'Our brand needs a more professional look.',
    recommendedSolution: 'Brand Visibility',
    solutionSlug: 'brand-visibility',
    solutionNavTitle: 'Make your brand stand out',
    whatItIncludes: [
      'Crisp vector logo refinement and typography rules',
      'Commercial promotional posters engineered to stop the scroll',
      'Fixed-price monthly visual packages (Essential $10, Business $30, Monthly $60/mo)',
      'Consistent digital assets for WhatsApp Status and Instagram'
    ],
    relevantExample: {
      name: 'Happie Cosmetics & Enterprise',
      description: 'Complete promotional graphic campaigns and structured wholesale price sheets for FMCG distribution.'
    },
    icon: Palette,
  },
];

interface ProblemBridgeProps {
  onDiscussSolution: (solutionName: string) => void;
}

export const ProblemBridge: React.FC<ProblemBridgeProps> = ({ onDiscussSolution }) => {
  const [selectedId, setSelectedId] = useState<string>('find-online');
  const { navigate } = useRouter();

  const activeChallenge = CHALLENGES.find((c) => c.id === selectedId) || CHALLENGES[0];
  const Icon = activeChallenge.icon;

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-[#1442CB] uppercase tracking-wider mb-3">
            <span>Diagnose Your Bottleneck</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-[-0.02em] text-slate-900 leading-tight">
            What would make business easier?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            Select the primary operational friction or growth hurdle getting in your way right now to see
            how Webspect designs the solution.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Challenges Selector (6 items) */}
          <div className="lg:col-span-5 space-y-2.5">
            {CHALLENGES.map((item) => {
              const ItemIcon = item.icon;
              const isSelected = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-center justify-between gap-3 group cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#1442CB] shadow-md text-slate-900 ring-2 ring-[#1442CB]/10 translate-x-1'
                      : 'bg-slate-50/70 border-slate-200/80 hover:border-slate-300 hover:bg-white text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`p-2.5 rounded-lg shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#1442CB] text-white shadow-xs'
                          : 'bg-white border border-slate-200/80 text-slate-500 group-hover:text-slate-800'
                      }`}
                    >
                      <ItemIcon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold leading-snug truncate">
                      {item.problem}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-[#1442CB] translate-x-1' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Inline Explanation Card */}
          <div className="lg:col-span-7 bg-[#FAFAF9] rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-[0_12px_36px_rgba(15,23,42,0.05)] relative overflow-hidden">
            {/* Top architectural hairline */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1442CB] via-[#3B82F6] to-transparent" />

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1442CB] mb-2">
              <Icon className="w-4 h-4" />
              <span>Recommended Solution</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {activeChallenge.recommendedSolution}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
              Goal: {activeChallenge.solutionNavTitle}
            </p>

            {/* What it can include */}
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                What this can include:
              </h4>
              <ul className="space-y-2.5">
                {activeChallenge.whatItIncludes.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Relevant Example Box */}
            <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Relevant Real Example
              </span>
              <p className="text-sm font-bold text-slate-900 mt-0.5">
                {activeChallenge.relevantExample.name}
              </p>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {activeChallenge.relevantExample.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-200/90 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onDiscussSolution(activeChallenge.recommendedSolution)}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-b from-[#1749E9] to-[#1037A8] hover:from-[#1A4FD8] hover:to-[#0F3299] active:scale-[0.98] rounded-xl shadow-xs transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Discuss this solution</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => navigate(`/solutions/${activeChallenge.solutionSlug}`)}
                className="px-4.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 rounded-xl border border-slate-300 shadow-2xs transition-colors cursor-pointer"
              >
                Full solution details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
