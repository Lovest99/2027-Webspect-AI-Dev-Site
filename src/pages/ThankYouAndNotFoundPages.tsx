import React from 'react';
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { COMPANY_INFO } from '../data/company';

export const ThankYouPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <main className="py-20 sm:py-32 bg-[#FAFAF8] min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      {/* Engineered Canvas Micro-Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Atmospheric Pale Blue Light Bloom */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-gradient-to-b from-[#1442CB]/[0.06] via-[#1442CB]/[0.02] to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-md mx-auto px-4 text-center space-y-6 relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">
            <span className="bg-gradient-to-r from-slate-900 via-[#1442CB] to-indigo-950 bg-clip-text text-transparent">
              Thank You
            </span>
          </h1>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Your project enquiry has been submitted. Bright Cheteni will review your requirements and get
            back to you shortly.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] rounded-xl transition-colors cursor-pointer shadow-xs"
          >
            Back to Homepage
          </button>
          <a
            href={COMPANY_INFO.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export const NotFoundPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <main className="py-20 sm:py-32 bg-[#FAFAF8] min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      {/* Engineered Canvas Micro-Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Atmospheric Pale Blue Light Bloom */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-gradient-to-b from-[#1442CB]/[0.06] via-[#1442CB]/[0.02] to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-md mx-auto px-4 text-center space-y-6 relative z-10">
        <span className="font-mono text-5xl font-black text-slate-300">404</span>
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">
            <span className="bg-gradient-to-r from-slate-900 via-[#1442CB] to-indigo-950 bg-clip-text text-transparent">
              Page Not Found
            </span>
          </h1>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            The page you're looking for doesn't exist or has moved. If you were looking for our services,
            we have organized everything into Business Solutions.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] rounded-xl transition-colors cursor-pointer shadow-xs"
          >
            Go to Homepage
          </button>
          <button
            onClick={() => navigate('/solutions')}
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer shadow-2xs"
          >
            Explore Solutions
          </button>
        </div>
      </div>
    </main>
  );
};
