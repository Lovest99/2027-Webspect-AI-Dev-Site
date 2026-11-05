import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  Package,
  Palette,
  ArrowRight,
  Info,
  Clock,
  MessageCircle,
} from 'lucide-react';
import { DESIGN_PACKAGES, LOGO_ADDON, DesignPackage } from '../data/packages';
import { CREATIVE_DESIGNS } from '../data/creativeGallery';
import { useRouter } from '../context/RouterContext';

interface DesignPackagesPageProps {
  onOrderPackage: (pkgName: string) => void;
}

export const DesignPackagesPage: React.FC<DesignPackagesPageProps> = ({ onOrderPackage }) => {
  const { navigate } = useRouter();
  const [includeLogo, setIncludeLogo] = useState<boolean>(false);

  return (
    <main className="py-16 sm:py-24 bg-[#FAFAF8] min-h-screen relative overflow-hidden">
      {/* Engineered Canvas Micro-Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Atmospheric Pale Blue Radial Light Bloom */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-gradient-to-b from-[#1442CB]/[0.07] via-[#1E40AF]/[0.02] to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/70 text-xs font-semibold text-[#1442CB] uppercase tracking-wider mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1442CB]" />
            <span>Confirmed Commercial Pricing</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Design Packages for <span className="bg-gradient-to-r from-[#1442CB] via-blue-600 to-indigo-600 bg-clip-text text-transparent">Serious Brands</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Elevate your commercial visibility with high-impact promotional posters and social artwork
            at transparent, fixed USD package rates.
          </p>
        </div>

        {/* Clear Policy Notice */}
        <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 max-w-3xl mx-auto text-xs text-amber-900 leading-relaxed">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Clear Scope Terms:</strong> Packages provide unique, custom-branded graphic designs
            ready for you to publish over WhatsApp Status, Instagram, and Facebook. Social media account
            publishing, caption scheduling, and paid ad spend are not included. Turnaround, revisions, and
            file formats are agreed before work starts.
          </div>
        </div>

        {/* Logo Add-on Toggle Card */}
        <div className="mt-8 max-w-xl mx-auto bg-white rounded-xl border border-slate-200 p-4 shadow-2xs flex items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-[#1442CB]" />
              Need a vector logo too?
            </span>
            <p className="text-xs text-slate-500 mt-0.5">
              Add a modernized vector logo or brand mark for just <strong>$5 extra</strong> with any
              package.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIncludeLogo(!includeLogo)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all shrink-0 cursor-pointer ${
              includeLogo
                ? 'bg-blue-50 border-[#1442CB] text-[#1442CB] shadow-2xs'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {includeLogo ? '✓ Logo Added (+$5)' : '+ Add Logo ($5)'}
          </button>
        </div>

        {/* 3 Confirmed Packages Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {DESIGN_PACKAGES.map((pkg) => {
            const totalPrice = includeLogo ? pkg.priceUSD + LOGO_ADDON.priceUSD : pkg.priceUSD;
            return (
              <div
                key={pkg.id}
                className={`bg-white rounded-2xl border flex flex-col justify-between p-6 sm:p-8 transition-all shadow-2xs ${
                  pkg.isPopular
                    ? 'border-[#1442CB] ring-2 ring-[#1442CB]/10 shadow-md relative'
                    : 'border-slate-200/90'
                }`}
              >
                <div>
                  {pkg.isPopular && (
                    <span className="text-xs uppercase font-bold tracking-wider text-[#1442CB] block mb-2">
                      Most Popular Tier
                    </span>
                  )}

                  <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{pkg.idealFor}</p>

                  {/* Price Tag */}
                  <div className="mt-5 pb-5 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                        ${totalPrice}
                      </span>
                      {pkg.cadence && (
                        <span className="text-xs text-slate-500 font-medium">{pkg.cadence}</span>
                      )}
                    </div>
                    <span className="text-xs font-semibold text-[#1442CB] mt-1 block">
                      {pkg.designCount} Unique Custom Designs
                    </span>
                    {includeLogo && (
                      <span className="text-[11px] text-emerald-600 block mt-0.5">
                        Includes vector logo design (+${LOGO_ADDON.priceUSD})
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 mt-4 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* What's included */}
                  <div className="mt-6 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      What's Included:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {pkg.included.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Not included */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-500">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Not Included:
                    </span>
                    {pkg.notIncluded.map((notInc, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px]">
                        <span className="text-slate-400">·</span>
                        <span>{notInc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 pt-5 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{pkg.turnaroundNote}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      onOrderPackage(
                        `${pkg.name} ($${totalPrice}${pkg.cadence || ''})${
                          includeLogo ? ' + Logo Design ($5)' : ''
                        }`
                      )
                    }
                    className={`w-full py-3.5 px-5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      pkg.isPopular
                        ? 'bg-[#1442CB] hover:bg-[#0F35A8] text-white shadow-xs'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    Order {pkg.name}
                  </button>

                  <a
                    href={`https://wa.me/263787679376?text=${encodeURIComponent(
                      `Hi Bright, I would like to order the ${pkg.name} ($${totalPrice}${pkg.cadence || ''})${
                        includeLogo ? ' with Logo Design' : ''
                      }.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 text-center text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-xl transition-colors block cursor-pointer"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Delivered Artwork Proof Showcase */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-2xs">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1442CB] block mb-1">
              Proof of Craft & Delivery
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Recent <span className="bg-gradient-to-r from-[#1442CB] via-blue-600 to-indigo-600 bg-clip-text text-transparent">delivered client artwork</span>.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Every graphic is designed custom for your commercial audience—high contrast typography, calibrated color psychology, and direct call-to-action routing.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 group shadow-sm flex flex-col justify-between">
              <div className="aspect-[4/5] overflow-hidden bg-slate-950 flex items-center justify-center relative">
                <img
                  src="/assets/aistudio/file_0000000034ec8211943d2fd9091f992f_33a58136.png"
                  alt="Multivate Construction promotional artwork"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-slate-950 shadow-xs">
                  Construction & Civil
                </span>
              </div>
              <div className="p-3.5 bg-white border-t border-slate-100">
                <p className="font-bold text-xs text-slate-900 truncate">Multivate Construction</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Campaign refresh poster</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 group shadow-sm flex flex-col justify-between">
              <div className="aspect-[4/5] overflow-hidden bg-slate-950 flex items-center justify-center relative">
                <img
                  src="/assets/aistudio/file_0000000012fc821199272b82bcbe0dc1_ec2eb850.png"
                  alt="General Aluminium Solutions promotional artwork"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-white shadow-xs">
                  Architectural Glazing
                </span>
              </div>
              <div className="p-3.5 bg-white border-t border-slate-100">
                <p className="font-bold text-xs text-slate-900 truncate">General Aluminium Solutions</p>
                <p className="text-[11px] text-slate-500 mt-0.5">"Frame Your Space" campaign</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 group shadow-sm flex flex-col justify-between">
              <div className="aspect-[4/5] overflow-hidden bg-slate-950 flex items-center justify-center relative">
                <img
                  src="/assets/aistudio/file_00000000103c821188fc16c750cdb539_40815e79.png"
                  alt="Dr Shana Herbs & Food Supplements promotional artwork"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-600 text-white shadow-xs">
                  Health & Supplements
                </span>
              </div>
              <div className="p-3.5 bg-white border-t border-slate-100">
                <p className="font-bold text-xs text-slate-900 truncate">Dr Shana Herbs & Supplements</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Nationwide delivery poster</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 group shadow-sm flex flex-col justify-between">
              <div className="aspect-[4/5] overflow-hidden bg-slate-950 flex items-center justify-center relative">
                <img
                  src="/assets/aistudio/file_0000000005088211b5bd4bc964906c62_4ee6230b.png"
                  alt="Dr Shana Liquid Chlorophyll Plus Guarana promotional artwork"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-600 text-white shadow-xs">
                  Herbal Wellness
                </span>
              </div>
              <div className="p-3.5 bg-white border-t border-slate-100">
                <p className="font-bold text-xs text-slate-900 truncate">Dr Shana Chlorophyll Plus</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Formulation spotlight & benefits</p>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Web & Software Scope Notice */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xs">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1442CB] block mb-1">
              Custom Engineering & Software
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              Websites, custom software and automation: Scoped around your business.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Unlike static posters, custom software has varied database rules, integrations, and user
              roles. We agree on fixed milestone pricing after reviewing your requirements.
            </p>
          </div>

          <button
            onClick={() => onOrderPackage('Custom Software / Website Scope')}
            className="px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] rounded-xl transition-colors shrink-0"
          >
            Request custom scope discussion
          </button>
        </div>
      </div>
    </main>
  );
};
