import React, { useState } from 'react';
import {
  Boxes,
  ExternalLink,
  ArrowRight,
  Layers,
  Send,
  X,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import { useRouter } from '../context/RouterContext';

interface ProductsPageProps {
  onRegisterInterest: (productName: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onRegisterInterest }) => {
  const { navigate } = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeStatus, setActiveStatus] = useState<string>('All');

  const categories = ['All', 'Enterprise & Automation', 'Productivity & AI', 'Civic & Utilities', 'Industry & IoT'];
  const statuses = ['All', 'Live Public Application', 'Interactive Prototype', 'In Development', 'Civic / Client Platform'];

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchStatus = activeStatus === 'All' || p.status === activeStatus;
    return matchCat && matchStatus;
  });

  return (
    <main className="py-16 sm:py-24 bg-[#FAFAF8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1442CB] block mb-2">
            Independent Software & Prototypes
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Products with purpose.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A curated index of software tools, civic utilities, and operational prototypes built by
            Webspect. Each card displays its verified current status—distinguishing live public
            platforms from interactive prototypes and tools currently in development.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">
              Category:
            </span>
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActiveCategory(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === c
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">
              Status:
            </span>
            {statuses.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setActiveStatus(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeStatus === s
                    ? 'bg-[#1442CB] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 transition-all shadow-2xs hover:shadow-sm"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${
                      prod.status === 'Live Public Application' || prod.status === 'Civic / Client Platform'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : prod.status === 'Interactive Prototype'
                        ? 'bg-blue-50 text-[#1442CB] border-blue-200'
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}
                  >
                    {prod.status}
                  </span>
                  <span className="text-[11px] text-slate-400">{prod.category}</span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 mt-3">{prod.name}</h2>
                <p className="text-xs font-medium text-slate-600 mt-1">{prod.tagline}</p>

                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2.5 text-xs">
                  <div>
                    <span className="font-semibold text-slate-700 block">Who it’s for:</span>
                    <span className="text-slate-500 mt-0.5 block">{prod.whoItIsFor}</span>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-700 block">What it solves:</span>
                    <span className="text-slate-500 mt-0.5 block leading-relaxed">
                      {prod.whatItHelpsWith}
                    </span>
                  </div>
                </div>

                {/* Key features */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                    Verified Capabilities:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {prod.keyFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {prod.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                {prod.actionType === 'explore' && prod.publicUrl && (
                  <a
                    href={prod.publicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 bg-[#1442CB] hover:bg-[#0F35A8] text-white text-xs font-semibold rounded-xl text-center transition-colors inline-flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>Explore live product</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {prod.actionType === 'demo' && prod.publicUrl && (
                  <a
                    href={prod.publicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs font-semibold rounded-xl text-center transition-colors inline-flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>Launch live prototype</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {prod.actionType === 'register' && (
                  <button
                    type="button"
                    onClick={() => onRegisterInterest(prod.name)}
                    className="w-full py-2.5 px-3 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold rounded-xl text-center transition-colors inline-flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>Register interest (In Development)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
