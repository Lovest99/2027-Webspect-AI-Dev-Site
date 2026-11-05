import React, { useState } from 'react';
import {
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MapPin,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [contactMethod, setContactMethod] = useState<'whatsapp' | 'email'>('whatsapp');
  const [contactValue, setContactValue] = useState('');
  const [interest, setInterest] = useState('Digital Presence');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    referenceId: string;
    message: string;
  } | null>(null);

  const interestOptions = [
    'Digital Presence (Website or Catalogue)',
    'Customer Enquiries & Intake Optimization',
    'Workflow Automation & Document Generation',
    'Business Operations Dashboard',
    'Product Development (MVP Engineering)',
    'Brand Visibility & Design Packages',
    'General Scope Consultation',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!contactValue.trim()) {
      setErrorMsg(`Please enter your ${contactMethod === 'email' ? 'email address' : 'WhatsApp number'}.`);
      return;
    }
    if (!description.trim()) {
      setErrorMsg('Please include a brief description of what you want to achieve.');
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
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Server rejected submission');
      }

      setSuccessData({
        referenceId: data.referenceId,
        message: data.message,
      });
    } catch (err: any) {
      setErrorMsg(err.message || 'Unable to submit directly to server. Please use our WhatsApp route below.');
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl = `${COMPANY_INFO.contact.whatsappLink}?text=${encodeURIComponent(
    `Hi Bright, I would like to discuss a project with Webspect:\n- Name: ${name || '[To provide]'}\n- Business: ${businessName || '[To provide]'}\n- Interest: ${interest}\n- Details: ${description || '[To discuss]'}`
  )}`;

  return (
    <main className="py-16 sm:py-24 bg-[#FAFAF8] min-h-screen relative overflow-hidden">
      {/* Engineered Canvas Micro-Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Atmospheric Pale Blue Radial Light Bloom */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-gradient-to-b from-[#1442CB]/[0.07] via-[#1E40AF]/[0.02] to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct info & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/70 text-xs font-semibold text-[#1442CB] uppercase tracking-wider mb-2.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1442CB]" />
              <span>Contact & Scoping</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Let’s talk about <span className="bg-gradient-to-r from-[#1442CB] via-blue-600 to-indigo-600 bg-clip-text text-transparent">your project</span>.
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Whether you need a high-performance business website, an enquiry automation pipeline, a
              custom dashboard, or a 31-design monthly brand package, we're ready to help.
            </p>

            <div className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#1442CB] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Location</span>
                  <span className="text-slate-500">{COMPANY_INFO.contact.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#1442CB] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Remote Collaboration</span>
                  <span className="text-slate-500">{COMPANY_INFO.contact.remotePolicy}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Direct Engineering Access</span>
                  <span className="text-slate-500">
                    You communicate directly with Bright Cheteni, not junior intermediaries.
                  </span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-5 bg-emerald-50 border border-emerald-200/80 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Instant WhatsApp Communication</span>
              </div>
              <p className="text-xs text-emerald-950 leading-relaxed">
                Prefer a quick chat or voice note to describe what you're working on? Message Bright
                directly:
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on {COMPANY_INFO.contact.whatsappNumber}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Full Project Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            {successData ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Enquiry Received</h3>
                <p className="text-xs font-mono text-slate-500">
                  Reference: <strong>{successData.referenceId}</strong>
                </p>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, {name}. Bright Cheteni has received your details and will review your
                  operational requirements shortly.
                </p>
                <div className="pt-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Follow up on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 pb-2 border-b border-slate-100">
                  Project Scoping Form
                </h3>

                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
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
                      className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1442CB]/25 focus:border-[#1442CB] transition-all placeholder:text-slate-400 shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="organization"
                      autoComplete="organization"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="e.g. Apex Civil Solutions"
                      className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1442CB]/25 focus:border-[#1442CB] transition-all placeholder:text-slate-400 shadow-2xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Preferred Channel
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setContactMethod('whatsapp')}
                        className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                          contactMethod === 'whatsapp'
                            ? 'bg-blue-50 border-[#1442CB] text-[#1442CB] shadow-2xs'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        WhatsApp
                      </button>
                      <button
                        type="button"
                        onClick={() => setContactMethod('email')}
                        className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                          contactMethod === 'email'
                            ? 'bg-blue-50 border-[#1442CB] text-[#1442CB] shadow-2xs'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        Email
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
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
                        contactMethod === 'whatsapp' ? '+263 78 ...' : 'name@company.com'
                      }
                      className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1442CB]/25 focus:border-[#1442CB] transition-all placeholder:text-slate-400 shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    What area are you looking to improve?
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1442CB]/25 focus:border-[#1442CB] transition-all text-slate-900 shadow-2xs"
                  >
                    {interestOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                    What are you looking to build or solve? <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Tell us what you're working on, what's getting in the way, or what you'd like to build..."
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1442CB]/25 focus:border-[#1442CB] transition-all placeholder:text-slate-400 shadow-2xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Estimated Budget (Optional)
                    </label>
                    <input
                      type="text"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="e.g. Under $100, $200–$500, Custom"
                      className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1442CB]/25 focus:border-[#1442CB] transition-all placeholder:text-slate-400 shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Desired Timeline (Optional)
                    </label>
                    <input
                      type="text"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      placeholder="e.g. Next 2 weeks, Flexible"
                      className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1442CB]/25 focus:border-[#1442CB] transition-all placeholder:text-slate-400 shadow-2xs"
                    />
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 text-xs sm:text-sm font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Project Enquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
