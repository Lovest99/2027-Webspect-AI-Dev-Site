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
    <main className="py-16 sm:py-24 bg-[#FAFAF8] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1442CB] block mb-2">
            Confirmed Commercial Pricing
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Design Packages for Serious Brands
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
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all shrink-0 ${
              includeLogo
                ? 'bg-blue-50 border-[#1442CB] text-[#1442CB]'
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
                    className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
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
                    className="w-full py-2 px-3 text-center text-xs font-medium text-slate-600 hover:text-slate-900 block"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
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
