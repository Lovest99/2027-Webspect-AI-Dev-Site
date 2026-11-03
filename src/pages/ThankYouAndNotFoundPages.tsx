import React from 'react';
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { COMPANY_INFO } from '../data/company';

export const ThankYouPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <main className="py-20 sm:py-32 bg-[#FAFAF8] min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Thank You</h1>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Your project enquiry has been submitted. Bright Cheteni will review your requirements and get
            back to you shortly.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] rounded-xl transition-colors"
          >
            Back to Homepage
          </button>
          <a
            href={COMPANY_INFO.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-xl transition-colors flex items-center justify-center gap-1.5"
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
    <main className="py-20 sm:py-32 bg-[#FAFAF8] min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <span className="font-mono text-5xl font-black text-slate-300">404</span>
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Page Not Found</h1>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            The page you're looking for doesn't exist or has moved. If you were looking for our services,
            we have organized everything into Business Solutions.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] rounded-xl transition-colors"
          >
            Go to Homepage
          </button>
          <button
            onClick={() => navigate('/solutions')}
            className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-xl transition-colors"
          >
            Explore Solutions
          </button>
        </div>
      </div>
    </main>
  );
};
