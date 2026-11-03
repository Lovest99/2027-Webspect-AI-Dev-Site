import React, { useState, useEffect } from 'react';
import {
  X,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Loader2,
  Copy,
  Check,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
  initialDescription?: string;
  initialPackage?: string;
}

export const ContactFormModal: React.FC<ContactFormModalProps> = ({
  isOpen,
  onClose,
  initialInterest = '',
  initialDescription = '',
  initialPackage = '',
}) => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [contactMethod, setContactMethod] = useState<'whatsapp' | 'email'>('whatsapp');
  const [contactValue, setContactValue] = useState('');
  const [interest, setInterest] = useState(initialInterest || 'Digital Presence');
  const [description, setDescription] = useState(initialDescription || '');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    referenceId: string;
    message: string;
    timestamp: string;
  } | null>(null);

  // Sync props when opening modal
  useEffect(() => {
    if (isOpen) {
      if (initialInterest) setInterest(initialInterest);
      if (initialDescription) setDescription(initialDescription);
      setErrorMsg(null);
      setSuccessData(null);
    }
  }, [isOpen, initialInterest, initialDescription]);

  // Keyboard escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const interestOptions = [
    'Digital Presence (Website or Catalogue)',
    'Customer Enquiries & Intake Flow',
    'Workflow Automation & Document Generation',
    'Business Operations Dashboard',
    'Product Development (MVP Engineering)',
    'Brand Visibility & Design Packages',
    'General Consultation',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validation
    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!contactValue.trim()) {
      setErrorMsg(`Please enter your ${contactMethod === 'email' ? 'email address' : 'WhatsApp number'}.`);
      return;
    }
    if (!description.trim()) {
      setErrorMsg('Please provide a brief description of what you want to achieve.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          businessName: businessName.trim() || undefined,
          contactMethod,
          contactValue: contactValue.trim(),
          interest,
          description: description.trim(),
          budget: budget.trim() || undefined,
          timeline: timeline.trim() || undefined,
          selectedPackage: initialPackage || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Server rejected enquiry submission');
      }

      setSuccessData({
        referenceId: data.referenceId,
        message: data.message,
        timestamp: data.timestamp,
      });
    } catch (err: any) {
      // In case server route is unavailable or offline, offer clear feedback and WhatsApp direct fallback
      setErrorMsg(err.message || 'Unable to submit to server. You can also chat with us directly on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  // WhatsApp formatted string
  const whatsappSummary = `Hi Bright, I would like to discuss a project with Webspect:
- Name: ${name || '[Not specified]'}
- Business: ${businessName || '[Not specified]'}
- Interest: ${interest}
- Details: ${description || initialDescription || '[To discuss]'}
${budget ? `- Estimated Budget: ${budget}` : ''}
${timeline ? `- Timeline: ${timeline}` : ''}
${initialPackage ? `- Selected Package: ${initialPackage}` : ''}`;

  const whatsappDirectUrl = `${COMPANY_INFO.contact.whatsappLink}?text=${encodeURIComponent(
    whatsappSummary
  )}`;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Project Enquiry Form"
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full my-8 shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1442CB]">
              Start a Conversation
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-1">
              Tell us about your project
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Direct consultation with Bright Cheteni · Scoped around your business
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg bg-slate-100 transition-colors"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Screen (Rendered ONLY after real backend acceptance) */}
        {successData ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-900">Enquiry Received</h4>
              <p className="text-xs font-mono text-slate-500 mt-1">
                Reference ID: <strong className="text-slate-900">{successData.referenceId}</strong>
              </p>
              <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                Thank you, {name}. Your requirements have been submitted directly to Bright Cheteni.
                We will review your details and respond via {contactMethod}.
              </p>
            </div>

            <div className="pt-4 p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-600">
              <p>Want a faster response? You can also ping Bright directly on WhatsApp:</p>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open in WhatsApp</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 rounded-lg"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Main Project Form */
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMsg && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Injected Selected Package Notice */}
            {initialPackage && (
              <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900 font-medium">
                Selected Package: <strong>{initialPackage}</strong>
              </div>
            )}

            {/* Row 1: Name and Business Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Your Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Tendai Moyo"
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1442CB]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Business Name (Optional)
                </label>
                <input
                  type="text"
                  name="organization"
                  autoComplete="organization"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Apex Civil Solutions"
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1442CB]"
                />
              </div>
            </div>

            {/* Row 2: Contact Method and Value */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Preferred Contact Method
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setContactMethod('whatsapp')}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                      contactMethod === 'whatsapp'
                        ? 'bg-blue-50 border-[#1442CB] text-[#1442CB] font-semibold'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactMethod('email')}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                      contactMethod === 'email'
                        ? 'bg-blue-50 border-[#1442CB] text-[#1442CB] font-semibold'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Email
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  {contactMethod === 'whatsapp' ? 'WhatsApp Number' : 'Email Address'}{' '}
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  type={contactMethod === 'whatsapp' ? 'tel' : 'email'}
                  name={contactMethod === 'whatsapp' ? 'phone' : 'email'}
                  autoComplete={contactMethod === 'whatsapp' ? 'tel' : 'email'}
                  required
                  value={contactValue}
                  onChange={(e) => setContactValue(e.target.value)}
                  placeholder={
                    contactMethod === 'whatsapp' ? '+263 78 ... or local number' : 'name@company.com'
                  }
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1442CB]"
                />
              </div>
            </div>

            {/* Row 3: What do you want to improve? */}
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                What do you want to improve?
              </label>
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1442CB]"
              >
                {interestOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Row 4: Short Description */}
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Brief Description of Your Requirements <span className="text-rose-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What is the bottleneck or product goal? (e.g., We need a website showing our equipment fleet and tender completions with direct WhatsApp quote requests)"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1442CB]"
              />
            </div>

            {/* Row 5: Optional Budget and Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Estimated Budget (Optional)
                </label>
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="e.g. Under $100, $200–$500, Custom"
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1442CB]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Desired Timeline (Optional)
                </label>
                <input
                  type="text"
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  placeholder="e.g. Within 2 weeks, Flexible"
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1442CB]"
                />
              </div>
            </div>

            {/* Submit Action & WhatsApp Fallback */}
            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] disabled:opacity-60 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Project Enquiry</span>
                  </>
                )}
              </button>

              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp instead</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-400 text-center">
              We never share your information. Direct engineering consultation.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
