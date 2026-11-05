import React, { useState } from 'react';
import {
  Globe,
  Zap,
  Boxes,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  Check,
  Smartphone,
  ExternalLink,
  ShieldCheck,
  Lock,
  Building2,
  Layers,
} from 'lucide-react';
import { useRouter } from '../context/RouterContext';

interface HeroShowcaseProps {
  onFindSolutionClick: () => void;
  onExploreWorkClick: () => void;
}

export const HeroShowcase: React.FC<HeroShowcaseProps> = ({
  onFindSolutionClick,
  onExploreWorkClick,
}) => {
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState<'noticed' | 'smarter' | 'build'>('noticed');

  // Mode 1: Interactive View Toggle (Web Catalogue vs Mobile WhatsApp)
  const [noticedView, setNoticedView] = useState<'catalogue' | 'whatsapp'>('catalogue');

  // Mode 2: Interactive Quotation Workflow Demo
  const [quoteApproved, setQuoteApproved] = useState<boolean>(false);
  const [includeExpress, setIncludeExpress] = useState<boolean>(false);
  const [selectedQuotePreset, setSelectedQuotePreset] = useState<'glazing' | 'epoxy' | 'hygiene'>('glazing');

  const quotePresets = {
    glazing: {
      client: 'K. Moyo · Commercial Office Park',
      item: 'Heavy Duty Aluminium Sliding Doors (3000x2400)',
      baseCost: 480,
      glazeCost: 210,
      hardwareCost: 110,
      expressCost: 120,
      glaze: '6.38mm Laminated Safety Glass',
      hardware: 'Flush Pulls & Charcoal Matt Powder-Coating',
    },
    epoxy: {
      client: 'Belmont Industrial Logistics Depot',
      item: '1,200m² Heavy Commercial Epoxy Flooring (2mm)',
      baseCost: 3600,
      glazeCost: 950,
      hardwareCost: 650,
      expressCost: 450,
      glaze: 'Surface Shot-Blasting & Moisture Primer',
      hardware: 'Chemical-Resistant Polyurethane Seal Coat',
    },
    hygiene: {
      client: 'Apex Executive Suites · Monthly Corporate Care',
      item: 'Tier-3 Deep Disinfection & HVAC Filtration Care',
      baseCost: 420,
      glazeCost: 180,
      hardwareCost: 90,
      expressCost: 80,
      glaze: 'Scheduled Bi-Weekly Restroom Sanitization',
      hardware: 'Consumables & Eco-Certified Supplies',
    },
  };

  const activePreset = quotePresets[selectedQuotePreset];
  const subtotal = activePreset.baseCost + activePreset.glazeCost + activePreset.hardwareCost;
  const calculatedTotal = subtotal + (includeExpress ? activePreset.expressCost : 0);

  // Mode 3: Interactive View Toggle for MIST (Live Dispatch vs Cloud Architecture)
  const [buildView, setBuildView] = useState<'dispatch' | 'architecture'>('dispatch');

  return (
    <section className="relative overflow-hidden pt-4 pb-10 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20 border-b border-slate-200/80 bg-[#FAFAF9]">
      {/* Subtle Engineered Canvas Micro-Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      {/* Atmospheric Radial Gradient Light Bloom */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-gradient-to-b from-[#1442CB]/[0.07] via-[#1442CB]/[0.015] to-transparent blur-3xl"
        aria-hidden="true"
      />

      {/* =========================================================================
          MOTION GRAPHICS: OFFICIAL TECH STACK ICONS CIRCLING ALONG BLUEPRINT ARCS
         ========================================================================= */}
      <div
        className="pointer-events-none absolute -top-12 -right-20 sm:-right-8 lg:right-6 w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] lg:w-[620px] lg:h-[620px] select-none z-0"
        aria-hidden="true"
      >
        {/* Blueprint Concentric Arc Geometry (Webspect Logo DNA) */}
        <svg
          className="absolute inset-0 w-full h-full text-[#1442CB] opacity-[0.09]"
          viewBox="0 0 500 500"
          fill="none"
        >
          <circle cx="480" cy="20" r="440" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="480" cy="20" r="340" stroke="currentColor" strokeWidth="2" />
          <circle cx="480" cy="20" r="240" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="480" cy="20" r="150" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="480" cy="20" r="70" fill="currentColor" fillOpacity="0.3" />
        </svg>

        {/* Outer Orbit (Radius ~78%, Clockwise 48s rotation) */}
        <div className="absolute inset-0 flex items-center justify-center animate-orbit-outer">
          <div className="relative w-[78%] h-[78%] rounded-full border border-dashed border-[#1442CB]/15">
            {/* Tech 1: Official React Icon (Top at 0°) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-outer-counter">
              <div
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 border border-slate-200/90 shadow-[0_2px_10px_rgba(20,66,203,0.12)] flex items-center justify-center"
                title="React"
              >
                <svg viewBox="0 0 115.3 100" className="w-4 h-4">
                  <ellipse cx="57.65" cy="50" rx="16.7" ry="43.8" fill="none" stroke="#61DAFB" strokeWidth="6" transform="rotate(30 57.65 50)" />
                  <ellipse cx="57.65" cy="50" rx="16.7" ry="43.8" fill="none" stroke="#61DAFB" strokeWidth="6" transform="rotate(90 57.65 50)" />
                  <ellipse cx="57.65" cy="50" rx="16.7" ry="43.8" fill="none" stroke="#61DAFB" strokeWidth="6" transform="rotate(150 57.65 50)" />
                  <circle cx="57.65" cy="50" r="9" fill="#61DAFB" />
                </svg>
              </div>
            </div>

            {/* Tech 2: Official TypeScript Icon (Bottom Right at ~120°) */}
            <div className="absolute top-[75%] right-[6%] translate-x-1/2 -translate-y-1/2 animate-orbit-outer-counter">
              <div
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 border border-slate-200/90 shadow-[0_2px_10px_rgba(20,66,203,0.12)] flex items-center justify-center p-0.5"
                title="TypeScript"
              >
                <svg viewBox="0 0 128 128" className="w-4.5 h-4.5 rounded-sm">
                  <rect width="128" height="128" rx="16" fill="#3178C6" />
                  <path d="M68.8 61.6h-17v48.8H38.5V61.6H21.6V49.2h47.2v12.4zm14.6 27.6c3.2 2.6 7.6 4.2 12.2 4.2 6.5 0 10.1-2.9 10.1-7.2 0-11.8-21.5-6.7-21.5-23.7 0-9.7 7.7-16.5 20.3-16.5 6.3 0 11.2 1.6 14.6 3.9l-4.1 10.6c-2.9-1.9-6.9-3.2-10.7-3.2-5.7 0-8.9 2.7-8.9 6.2 0 11.1 21.6 6.3 21.6 23.9 0 10-8.2 17.1-21.6 17.1-7.7 0-14-2.1-17.7-5.1l5.7-10.2z" fill="#FFFFFF" />
                </svg>
              </div>
            </div>

            {/* Tech 3: Official Node.js Icon (Bottom Left at ~240°) */}
            <div className="absolute top-[75%] left-[6%] -translate-x-1/2 -translate-y-1/2 animate-orbit-outer-counter">
              <div
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 border border-slate-200/90 shadow-[0_2px_10px_rgba(20,66,203,0.12)] flex items-center justify-center"
                title="Node.js"
              >
                <svg viewBox="0 0 32 32" className="w-4 h-4">
                  <path d="M16 3l12 6.9v14.2L16 31 4 24.1V9.9L16 3z" fill="#5FA04E" />
                  <path d="M16 5.3L6.2 11v12l9.8 5.7 9.8-5.7V11L16 5.3z" fill="#333333" />
                  <path d="M14.5 13.5v7h2.2v-4.2l3 4.2h2.2v-7h-2.2v4.1l-3-4.1h-2.2z" fill="#FFFFFF" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Inner Orbit (Radius ~48%, Counter-Clockwise 36s rotation) */}
        <div className="absolute inset-0 flex items-center justify-center animate-orbit-inner">
          <div className="relative w-[48%] h-[48%] rounded-full border border-dotted border-[#1442CB]/20">
            {/* Tech 4: Official PostgreSQL Icon (Top Right at ~45°) */}
            <div className="absolute top-[12%] right-[12%] translate-x-1/2 -translate-y-1/2 animate-orbit-inner-counter">
              <div
                className="w-6.5 h-6.5 sm:w-7.5 sm:h-7.5 rounded-full bg-white/95 border border-slate-200/90 shadow-[0_2px_8px_rgba(20,66,203,0.12)] flex items-center justify-center"
                title="PostgreSQL"
              >
                <svg viewBox="0 0 128 128" className="w-4 h-4">
                  <path d="M64 8C33.1 8 8 33.1 8 64s25.1 56 56 56 56-25.1 56-56S94.9 8 64 8zm0 102.7c-25.8 0-46.7-20.9-46.7-46.7S38.2 17.3 64 17.3s46.7 20.9 46.7 46.7-20.9 46.7-46.7 46.7z" fill="#336791" />
                  <path d="M72.2 40.5c-4.1-1.3-9.5-1.9-15.3-1.9-12.8 0-19.6 4.9-19.6 13.2 0 7.8 5.7 11.8 16.3 14.1 8.8 1.9 11.4 3.7 11.4 6.8 0 3.8-3.7 6.1-10.8 6.1-5.7 0-11.8-1.7-16-4.5l-2.4 8.7c4.6 2.4 11.5 3.7 18.2 3.7 14.2 0 21.6-5.4 21.6-14.3 0-8.2-5.9-12.3-16.8-14.7-8.3-1.8-10.8-3.4-10.8-6.1 0-3.3 3.3-5.3 9.7-5.3 4.9 0 9.8 1.2 13.5 2.7l3-8.8z" fill="#336791" />
                </svg>
              </div>
            </div>

            {/* Tech 5: Official Python Icon (Bottom at 180°) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 animate-orbit-inner-counter">
              <div
                className="w-6.5 h-6.5 sm:w-7.5 sm:h-7.5 rounded-full bg-white/95 border border-slate-200/90 shadow-[0_2px_8px_rgba(20,66,203,0.12)] flex items-center justify-center p-0.5"
                title="Python"
              >
                <svg viewBox="0 0 110 110" className="w-4 h-4">
                  <path d="M54.5 5.5c-26.6 0-25 11.5-25 11.5l.03 11.9h25.4v3.6H19.5S5.5 30.9 5.5 57.5s12.2 25.8 12.2 25.8h7.3v-10.2s-.4-12.2 12-12.2h24.7s11.5.2 11.5-11.5V17S74.8 5.5 54.5 5.5zm-13.8 7.3a4.1 4.1 0 110 8.2 4.1 4.1 0 010-8.2z" fill="#3776AB" />
                  <path d="M55.5 104.5c26.6 0 25-11.5 25-11.5l-.03-11.9H55.07v-3.6h35.43s14 1.6 14-25-12.2-25.8-12.2-25.8h-7.3v10.2s.4 12.2-12 12.2H48.3s-11.5-.2-11.5 11.5V93s-1.6 11.5 18.7 11.5zm13.8-7.3a4.1 4.1 0 110-8.2 4.1 4.1 0 010 8.2z" fill="#FFD43B" />
                </svg>
              </div>
            </div>

            {/* Tech 6: Official Tailwind CSS Icon (Top Left at ~315°) */}
            <div className="absolute top-[12%] left-[12%] -translate-x-1/2 -translate-y-1/2 animate-orbit-inner-counter">
              <div
                className="w-6.5 h-6.5 sm:w-7.5 sm:h-7.5 rounded-full bg-white/95 border border-slate-200/90 shadow-[0_2px_8px_rgba(20,66,203,0.12)] flex items-center justify-center p-0.5"
                title="Tailwind CSS"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#06B6D4">
                  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.975 12 6.001 12z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Editorial Status Badge (Webspect name removed as requested) */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 border border-slate-200/90 shadow-2xs backdrop-blur-sm mb-3 sm:mb-4 max-w-full">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1442CB] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1442CB]"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-semibold text-slate-800 tracking-tight">
            Websites · Custom Software · AI Systems · Brand Identity
          </span>
        </div>

        {/* Hero Text Block with Protected Frosted Radial Shield for Maximum Contrast & Readability */}
        <div className="max-w-3xl relative z-20">
          {/* Subtle soft frosted text protection shield so no background arc ever impairs readability */}
          <div className="absolute -inset-4 sm:-inset-6 -z-10 bg-radial from-[#FAFAF9]/95 via-[#FAFAF9]/80 to-transparent blur-md pointer-events-none" />

          <h1 className="text-2xl sm:text-4xl lg:text-[3.25rem] font-extrabold tracking-[-0.03em] text-slate-900 leading-[1.14]">
            Make your next business move a{' '}
            <span className="text-[#1442CB]">better one</span>.
          </h1>

          <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl text-balance">
            Get a stronger online presence, simplify everyday work or build your next digital
            product—with solutions shaped around your business.
          </p>

          {/* Compact Primary Action Row */}
          <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3.5">
            <button
              onClick={onFindSolutionClick}
              className="px-4.5 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-b from-[#1749E9] to-[#1037A8] hover:from-[#1A4FD8] hover:to-[#0F3299] active:scale-[0.98] rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_6px_16px_rgba(20,66,203,0.2)] transition-all inline-flex items-center gap-2 cursor-pointer group"
            >
              <span>Find my solution</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={onExploreWorkClick}
              className="px-4 py-2.5 sm:px-4.5 sm:py-3 text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 hover:text-slate-900 active:scale-[0.98] rounded-xl border border-slate-300/80 shadow-2xs hover:border-slate-400 transition-all cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>See what we’ve built</span>
            </button>

            {/* Location: Zimbabwe single-row proof line */}
            <div className="w-full sm:w-auto flex items-center gap-1.5 text-[10px] min-[380px]:text-[11px] sm:text-xs text-slate-600 font-medium whitespace-nowrap tracking-tight bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-slate-200/60 shadow-2xs w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
              <span>Zimbabwe · Working across borders · Direct engineer contact</span>
            </div>
          </div>
        </div>

        {/* Compact Interactive "What's your next move?" Showcase Chassis */}
        <div className="mt-7 sm:mt-9 lg:mt-11 bg-white rounded-2xl border border-slate-200/90 shadow-[0_16px_48px_-12px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.04)] overflow-hidden relative z-10">
          {/* Showcase Control Header */}
          <div className="px-3.5 py-3 sm:px-5 sm:py-3.5 bg-slate-50/90 border-b border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] sm:text-[11px] font-bold text-[#1442CB] uppercase tracking-wider">
                  Interactive Showcase
                </span>
                <span className="text-slate-300 text-xs">·</span>
                <span className="text-[10px] sm:text-[11px] font-mono text-slate-500">
                  REAL BUSINESS SCENARIOS
                </span>
              </div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                What’s your next move?
              </h2>
            </div>

            {/* Segmented Mode Selector: Fits together with icons, text, and zero horizontal scrolling on all mobile viewports */}
            <div className="w-full sm:w-auto grid grid-cols-3 sm:flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 bg-slate-100/90 sm:bg-white border border-slate-200/90 rounded-xl shadow-2xs">
              <button
                type="button"
                onClick={() => setActiveTab('noticed')}
                className={`w-full text-center px-1 sm:px-4 py-2 sm:py-2.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 cursor-pointer min-h-[46px] sm:min-h-[42px] ${
                  activeTab === 'noticed'
                    ? 'bg-[#1442CB] text-white shadow-xs font-bold ring-1 ring-[#1442CB]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white sm:hover:bg-slate-100'
                }`}
              >
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="hidden sm:inline font-mono text-[10px] opacity-75">01.</span>
                <span className="leading-tight text-center">Get noticed</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('smarter')}
                className={`w-full text-center px-1 sm:px-4 py-2 sm:py-2.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 cursor-pointer min-h-[46px] sm:min-h-[42px] ${
                  activeTab === 'smarter'
                    ? 'bg-[#1442CB] text-white shadow-xs font-bold ring-1 ring-[#1442CB]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white sm:hover:bg-slate-100'
                }`}
              >
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="hidden sm:inline font-mono text-[10px] opacity-75">02.</span>
                <span className="leading-tight text-center">Work smarter</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('build')}
                className={`w-full text-center px-1 sm:px-4 py-2 sm:py-2.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 cursor-pointer min-h-[46px] sm:min-h-[42px] ${
                  activeTab === 'build'
                    ? 'bg-[#1442CB] text-white shadow-xs font-bold ring-1 ring-[#1442CB]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white sm:hover:bg-slate-100'
                }`}
              >
                <Boxes className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="hidden sm:inline font-mono text-[10px] opacity-75">03.</span>
                <span className="leading-tight text-center">Build new</span>
              </button>
            </div>
          </div>

          {/* Mode 1: GET NOTICED */}
          {activeTab === 'noticed' && (
            <div className="p-4 sm:p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-5 space-y-3 sm:space-y-3.5">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1442CB] uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Commercial Presence & Credibility</span>
                </div>
                <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-slate-900 leading-snug">
                  Help prospective clients verify you can deliver before they ever pick up the phone.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A high-capability building contractor is ready to tender for major corporate
                  developments, but their digital presence failed to prove their heavy machinery fleet
                  and project track record.
                </p>

                <div className="pt-2 sm:pt-2.5 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">Real project completion catalogues structured for corporate buyers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">Fast-loading mobile layout optimized for variable cellular networks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">Direct WhatsApp tender inquiry links pre-filled with project specs</span>
                  </div>
                </div>

                <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={() => navigate('/solutions/digital-presence')}
                    className="px-4 py-2.5 sm:px-4.5 sm:py-2.5 text-xs font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] rounded-xl transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Explore digital presence</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => navigate('/work/multivate-construction')}
                    className="px-4 py-2.5 sm:px-4.5 sm:py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                  >
                    View Multivate case study
                  </button>
                </div>
              </div>

              {/* Interactive Visual Showcase Box */}
              <div className="lg:col-span-7 bg-[#0B1120] rounded-xl p-4 sm:p-4.5 text-white border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-dark opacity-30 pointer-events-none" />

                {/* Browser-like Chrome with interactive view tabs */}
                <div className="relative z-10 flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-slate-800/90 gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-900/90 border border-slate-700/60 rounded-md text-[11px] font-mono text-slate-300">
                      <Lock className="w-3 h-3 text-emerald-400" />
                      <span>multivateconstruction.co.zw</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-700/60">
                    <button
                      type="button"
                      onClick={() => setNoticedView('catalogue')}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                        noticedView === 'catalogue'
                          ? 'bg-[#1442CB] text-white shadow-2xs'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Tender Catalogue
                    </button>
                    <button
                      type="button"
                      onClick={() => setNoticedView('whatsapp')}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                        noticedView === 'whatsapp'
                          ? 'bg-[#1442CB] text-white shadow-2xs'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      WhatsApp Intake
                    </button>
                  </div>
                </div>

                {/* Simulated Content View */}
                {noticedView === 'catalogue' ? (
                  <div className="relative z-10 space-y-2.5">
                    <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/95 border border-slate-700/70 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2.5">
                      <div>
                        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                          Commercial Civil & Earthmoving
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                          Multivate Construction (Pvt) Ltd
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 max-w-md">
                          National Infrastructure · Earthmoving Fleet · Commercial Builds
                        </p>
                      </div>
                      <div className="px-2.5 py-1 bg-amber-500/15 border border-amber-500/40 text-amber-300 rounded-lg text-[11px] font-semibold shrink-0">
                        Tender Ready
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-2.5 text-center">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                        <span className="text-[10px] text-slate-400 block font-medium">Fleet & Plant</span>
                        <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block">Heavy Plant</span>
                        <span className="text-[10px] sm:text-[11px] text-slate-400">CAT 320D Excavator</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                        <span className="text-[10px] text-slate-400 block font-medium">Civil Sectors</span>
                        <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block">Commercial</span>
                        <span className="text-[10px] sm:text-[11px] text-slate-400">Roads & Warehouses</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                        <span className="text-[10px] text-slate-400 block font-medium">Intake Route</span>
                        <span className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5 block">WhatsApp</span>
                        <span className="text-[10px] sm:text-[11px] text-slate-400">Direct Tender Spec</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#1442CB]/15 border border-[#1442CB]/40 text-xs text-slate-300 flex items-center justify-between">
                      <span className="text-slate-200 text-[11px] sm:text-xs">
                        Supplied campaign artwork: <strong>"Business rako, ngarionekwe."</strong>
                      </span>
                      <span className="text-[10px] text-blue-300 font-mono bg-[#1442CB]/30 px-2 py-0.5 rounded">
                        1080×1350 High-Res
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="relative z-10 space-y-2.5">
                    <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-xs text-slate-200">
                      <div className="flex items-center gap-2 mb-2 text-emerald-400 font-bold text-xs">
                        <Smartphone className="w-3.5 h-3.5" />
                        <span>Pre-formatted WhatsApp Tender Intake</span>
                      </div>
                      <div className="font-mono text-[11px] sm:text-xs text-slate-300 bg-slate-900/95 p-3 rounded-lg border border-slate-800 leading-relaxed">
                        "Hello Multivate, I am preparing a tender RFP for commercial earthworks. Site area: 4,500m². Target commencement: Next month."
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-slate-400 mt-2">
                        Eliminates vague back-and-forth by formatting dimensions, location, and site
                        type directly on the first tap.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Mode 2: WORK SMARTER */}
          {activeTab === 'smarter' && (
            <div className="p-4 sm:p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-5 space-y-3 sm:space-y-3.5">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1442CB] uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Operational Automation Demo</span>
                </div>
                <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-slate-900 leading-snug">
                  Automate the calculations and paperwork—with your review on every final quote.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Instead of copying dimensions into spreadsheets and typing identical WhatsApp messages,
                  this interactive workflow organizes intake, runs rates, and leaves the final approval in
                  your hands.
                </p>

                <div className="pt-2 sm:pt-2.5 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">Eliminates 30+ minutes of manual retyping per quotation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">Human-in-the-loop review ensures zero hallucinated prices</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">Generates branded PDF estimate ready for customer dispatch</span>
                  </div>
                </div>

                <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={() => navigate('/solutions/workflow-automation')}
                    className="px-4 py-2.5 sm:px-4.5 sm:py-2.5 text-xs font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] rounded-xl transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>See workflow automation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      setQuoteApproved(false);
                      setIncludeExpress(false);
                    }}
                    className="px-4 py-2.5 sm:px-4.5 sm:py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                  >
                    Reset demo
                  </button>
                </div>
              </div>

              {/* Interactive Workflow Visualizer */}
              <div className="lg:col-span-7 bg-[#0B1120] text-white rounded-xl p-4 sm:p-4.5 border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-dark opacity-30 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <span className="text-[11px] font-mono font-semibold text-slate-400">
                    INTERACTIVE QUOTE GENERATOR
                  </span>

                  {/* Preset Selector */}
                  <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-700/60 text-xs">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedQuotePreset('glazing');
                        setQuoteApproved(false);
                      }}
                      className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors text-xs font-medium ${
                        selectedQuotePreset === 'glazing'
                          ? 'bg-[#1442CB] text-white shadow-2xs font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Glazing
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedQuotePreset('epoxy');
                        setQuoteApproved(false);
                      }}
                      className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors text-xs font-medium ${
                        selectedQuotePreset === 'epoxy'
                          ? 'bg-[#1442CB] text-white shadow-2xs font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Flooring
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedQuotePreset('hygiene');
                        setQuoteApproved(false);
                      }}
                      className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors text-xs font-medium ${
                        selectedQuotePreset === 'hygiene'
                          ? 'bg-[#1442CB] text-white shadow-2xs font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Hygiene
                    </button>
                  </div>
                </div>

                {/* Quotation Specification */}
                <div className="relative z-10 p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono text-[10px] sm:text-[11px]">
                      Enquiry Ref: #QT-2026-89
                    </span>
                    <span className="text-blue-400 font-semibold text-[11px] sm:text-xs truncate max-w-[200px]">
                      {activePreset.client}
                    </span>
                  </div>

                  <div className="p-2.5 sm:p-3 bg-slate-900 rounded-lg text-xs space-y-1.5 font-mono">
                    <div className="flex justify-between text-slate-200">
                      <span className="truncate pr-2">{activePreset.item}</span>
                      <span className="font-semibold text-white">${activePreset.baseCost}.00</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[10px] sm:text-[11px]">
                      <span className="truncate pr-2">{activePreset.glaze}</span>
                      <span>${activePreset.glazeCost}.00</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[10px] sm:text-[11px]">
                      <span className="truncate pr-2">{activePreset.hardware}</span>
                      <span>${activePreset.hardwareCost}.00</span>
                    </div>

                    {/* Interactive Add-on Checkbox */}
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] sm:text-[11px]">
                      <label className="flex items-center gap-1.5 cursor-pointer text-slate-300 hover:text-white">
                        <input
                          type="checkbox"
                          checked={includeExpress}
                          onChange={(e) => setIncludeExpress(e.target.checked)}
                          className="rounded border-slate-700 bg-slate-800 text-[#1442CB] focus:ring-0 cursor-pointer"
                        />
                        <span>Express 48h Fabrication (+${activePreset.expressCost}.00)</span>
                      </label>
                      <span className="text-slate-400">
                        {includeExpress ? `+$${activePreset.expressCost}.00` : '$0.00'}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-700 flex justify-between font-bold text-white text-xs sm:text-sm">
                      <span>Calculated Estimate Total</span>
                      <span className="text-emerald-400 tabular-nums">
                        ${calculatedTotal.toLocaleString()}.00
                      </span>
                    </div>
                  </div>

                  {/* Human Sign-off Action */}
                  <div className="pt-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div className="text-[11px] text-slate-400">
                      {quoteApproved ? (
                        <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                          <Check className="w-3.5 h-3.5" /> Approved · Dispatched to WhatsApp
                        </span>
                      ) : (
                        <span>Mandatory human review checkpoint</span>
                      )}
                    </div>

                    {!quoteApproved ? (
                      <button
                        type="button"
                        onClick={() => setQuoteApproved(true)}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
                      >
                        <FileCheck className="w-3.5 h-3.5" />
                        <span>Sign Off & Send</span>
                      </button>
                    ) : (
                      <div className="px-3.5 py-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] rounded-lg font-medium text-center">
                        Dispatched in 1.4s · PDF Generated
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mode 3: BUILD SOMETHING NEW */}
          {activeTab === 'build' && (
            <div className="p-4 sm:p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-5 space-y-3 sm:space-y-3.5">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1442CB] uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Product Engineering · From Idea to Launch</span>
                </div>
                <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-slate-900 leading-snug">
                  Full-stack engineering for founders with a validated market need.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We take product ideas through disciplined discovery, interactive UI prototyping,
                  resilient web architectures, and iterative post-launch sprints without unnecessary
                  complexity.
                </p>

                <div className="pt-2 sm:pt-2.5 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">Proven builds: MIST Civic Platform, Relay AI, Analytico, LifeOS</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">Modern stack: TypeScript, React, Node.js, Cloud SQL & Geolocation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">Client owns 100% of the code, database schema, and intellectual property</span>
                  </div>
                </div>

                <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={() => navigate('/solutions/product-development')}
                    className="px-4 py-2.5 sm:px-4.5 sm:py-2.5 text-xs font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] rounded-xl transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Discuss my product idea</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => navigate('/products')}
                    className="px-4 py-2.5 sm:px-4.5 sm:py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                  >
                    Explore all products
                  </button>
                </div>
              </div>

              {/* Product Preview Interface Card */}
              <div className="lg:col-span-7 bg-[#0B1120] text-white rounded-xl p-4 sm:p-4.5 border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-dark opacity-30 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
                    <span className="text-xs font-bold text-white tracking-wide">
                      MIST Platform (mist.co.zw)
                    </span>
                  </div>

                  <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-700/60 text-xs">
                    <button
                      type="button"
                      onClick={() => setBuildView('dispatch')}
                      className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors text-xs font-medium ${
                        buildView === 'dispatch'
                          ? 'bg-[#1442CB] text-white shadow-2xs font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Live Dispatch
                    </button>
                    <button
                      type="button"
                      onClick={() => setBuildView('architecture')}
                      className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors text-xs font-medium ${
                        buildView === 'architecture'
                          ? 'bg-[#1442CB] text-white shadow-2xs font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Tech Architecture
                    </button>
                  </div>
                </div>

                {buildView === 'dispatch' ? (
                  <div className="relative z-10 space-y-2.5">
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-mono">
                          Incident #ZW-841
                        </span>
                        <span className="text-xs font-bold text-white mt-0.5 block">
                          Water Pipe Burst · 14th Ave & Fife St
                        </span>
                        <span className="text-[10px] sm:text-[11px] text-slate-400">
                          Geotagged GPS: -20.1584, 28.5833 · Verified by Resident
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded-md border border-amber-500/30">
                        Dispatched
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 bg-slate-900/70 rounded-xl border border-slate-800">
                        <span className="text-slate-400 block text-[10px] font-medium">Department Routing</span>
                        <span className="font-semibold text-white mt-0.5 block text-xs">
                          Municipal Engineering & Water
                        </span>
                      </div>
                      <div className="p-2.5 bg-slate-900/70 rounded-xl border border-slate-800">
                        <span className="text-slate-400 block text-[10px] font-medium">Resident Update</span>
                        <span className="font-semibold text-emerald-400 mt-0.5 block text-xs">
                          SMS & Web Status
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 text-xs text-slate-400 flex items-center justify-between">
                      <span className="font-mono text-[10px] sm:text-[11px]">Stack: TypeScript + React + PostgreSQL</span>
                      <a
                        href="https://mist.co.zw/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 font-medium text-xs"
                      >
                        Visit mist.co.zw <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="relative z-10 space-y-2 font-mono text-[11px] sm:text-xs bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-slate-300">
                    <div className="text-slate-400 text-[10px] mb-1">
                      // PostgreSQL Fault Ingestion Table
                    </div>
                    <div>
                      <span className="text-purple-400">CREATE TABLE</span> incident (
                    </div>
                    <div className="pl-3 sm:pl-4">
                      id <span className="text-blue-400">UUID PRIMARY KEY</span>,
                    </div>
                    <div className="pl-3 sm:pl-4">
                      geo_point <span className="text-blue-400">GEOGRAPHY(POINT, 4326)</span>,
                    </div>
                    <div className="pl-3 sm:pl-4">
                      status <span className="text-blue-400">incident_status_enum</span>,
                    </div>
                    <div className="pl-3 sm:pl-4">
                      department_id <span className="text-blue-400">VARCHAR(64)</span>
                    </div>
                    <div>);</div>
                    <div className="pt-1.5 text-emerald-400 text-[11px] sm:text-xs flex items-center gap-1 font-medium">
                      <Check className="w-3 h-3" /> Automated webhook fanout to municipal engineers
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Studio Engineering Standards Ribbon (Compact 4-column strip with Zimbabwe scope) */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-200/90 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs sm:text-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1442CB]" />
              <span>Direct Engineering Access</span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
              Collaborate directly with Bright Cheteni (BSc CS, NUST)—zero non-technical account manager middle layers.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs sm:text-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#1442CB]" />
              <span>Milestone Scoping</span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
              Clear deliverable boundaries, transparent fixed pricing, and written specifications agreed before kickoff.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs sm:text-sm">
              <Lock className="w-3.5 h-3.5 text-[#1442CB]" />
              <span>100% IP & Code Ownership</span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
              You own all intellectual property, database schemas, repository rights, and deployment credentials.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs sm:text-sm">
              <Globe className="w-3.5 h-3.5 text-[#1442CB]" />
              <span>Zimbabwe to Global</span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
              Based in Zimbabwe, operating across Southern Africa and international time zones with equal dedication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
