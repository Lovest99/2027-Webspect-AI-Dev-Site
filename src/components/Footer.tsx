import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { useRouter } from '../context/RouterContext';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="bg-[#0A1128] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
              className="inline-block p-1 bg-white rounded-lg"
              aria-label="Webspect AI & Dev"
            >
              <img
                src="/assets/aistudio/logo-webspect_4c3ffc03.png"
                alt="Webspect AI & Dev"
                className="h-8 w-auto object-contain"
              />
            </a>

            <p className="text-xs font-mono text-blue-400 tracking-wider">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.positioningStatement}
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>Led by {COMPANY_INFO.founder.name} · {COMPANY_INFO.founder.degree} ({COMPANY_INFO.founder.university})</p>
              <p>{COMPANY_INFO.contact.location} · {COMPANY_INFO.contact.remotePolicy}</p>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {COMPANY_INFO.contact.whatsappNumber}</span>
              </a>
            </div>
          </div>

          {/* Solutions Column (Col 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Business Solutions
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/solutions/digital-presence"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/solutions/digital-presence');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Digital Presence
                </a>
              </li>
              <li>
                <a
                  href="/solutions/customer-enquiries"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/solutions/customer-enquiries');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Customer Enquiries
                </a>
              </li>
              <li>
                <a
                  href="/solutions/workflow-automation"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/solutions/workflow-automation');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Workflow Automation
                </a>
              </li>
              <li>
                <a
                  href="/solutions/business-operations"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/solutions/business-operations');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Business Operations
                </a>
              </li>
              <li>
                <a
                  href="/solutions/product-development"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/solutions/product-development');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Product Development
                </a>
              </li>
              <li>
                <a
                  href="/solutions/brand-visibility"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/solutions/brand-visibility');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Brand Visibility
                </a>
              </li>
            </ul>
          </div>

          {/* Products & Work (Col 8-10) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Work & Independent Products
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/work"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/work');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Client Case Studies & Proof
                </a>
              </li>
              <li>
                <a
                  href="/products/mist"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/products/mist');
                  }}
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  MIST Civic Platform <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="/products/relay-ai"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/products/relay-ai');
                  }}
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Relay AI Webhook Router <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="/products/analytico-ai"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/products/analytico-ai');
                  }}
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Analytico AI Analytics <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="/design-packages"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/design-packages');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Design Packages ($10–$60)
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Resources (Col 11-12) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Company
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/company"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/company');
                  }}
                  className="hover:text-white transition-colors"
                >
                  About Webspect
                </a>
              </li>
              <li>
                <a
                  href="/resources"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/resources');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Guides & Resources
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/contact');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Contact & Brief
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/privacy');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/terms');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Webspect AI & Dev. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            Zimbabwe · Serving clients worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};
