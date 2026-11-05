import React from 'react';
import { ShieldCheck, ChevronLeft } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export const PrivacyPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <main className="py-16 sm:py-24 bg-[#FAFAF8] min-h-screen relative overflow-hidden">
      {/* Engineered Canvas Micro-Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Atmospheric Pale Blue Light Bloom */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-gradient-to-b from-[#1442CB]/[0.06] via-[#1442CB]/[0.02] to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        <div>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
            className="text-xs text-slate-500 hover:text-slate-900 inline-flex items-center gap-1 mb-4"
          >
            <ChevronLeft className="w-3.5 h-3.5" /> Back to Home
          </a>
          <h1 className="text-3xl font-extrabold text-slate-900">
            <span className="bg-gradient-to-r from-slate-900 via-[#1442CB] to-indigo-950 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-1 font-mono">Last updated: October 2026</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed shadow-2xs">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              Webspect AI & Dev collects information you directly provide when submitting an enquiry or
              contacting us via WhatsApp, including your name, business name, email address, phone number,
              and project details.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. How We Use Your Information</h2>
            <p>
              We use the submitted information solely to evaluate your project scope, prepare accurate
              estimates, and communicate directly with you regarding your enquiry. We never sell, rent, or
              disclose your personal or company information to third-party marketing brokers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">3. Data Security & Storage</h2>
            <p>
              We apply standard technical security measures to safeguard your communications. Confidential
              client project assets, source code repositories, and database schemas are stored on secured
              infrastructure with encrypted access controls.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">4. Contacting Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact Bright Cheteni directly via
              WhatsApp at +263 78 767 9376 or via our website enquiry form.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};
