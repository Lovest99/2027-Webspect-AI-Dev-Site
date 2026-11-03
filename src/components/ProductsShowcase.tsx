import React, { useState } from 'react';
import {
  Boxes,
  ExternalLink,
  ArrowRight,
  Layers,
  Send,
  X,
  CheckCircle2,
} from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import { useRouter } from '../context/RouterContext';

interface ProductsShowcaseProps {
  onRegisterInterest: (productName: string) => void;
}

export const ProductsShowcase: React.FC<ProductsShowcaseProps> = ({ onRegisterInterest }) => {
  const { navigate } = useRouter();
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Enterprise & Automation', 'Productivity & AI', 'Civic & Utilities', 'Industry & IoT'];

  const filteredProducts = filter === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1442CB] block mb-1.5">
              Independent Products & Prototypes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Explore what we’re building.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Beyond client commissions, Webspect architects independent tools, civic utilities, and
              operational experiments with verified current statuses.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => navigate('/products')}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>View all products directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-[#FAFAF8] rounded-xl border border-slate-200/90 p-5 flex flex-col justify-between hover:border-[#1442CB]/30 transition-all shadow-2xs hover:shadow-sm"
            >
              {/* Product Header */}
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium pb-2 border-b border-slate-200/50">
                  <span
                    className={`font-semibold text-[11px] ${
                      prod.status === 'Live Public Application' || prod.status === 'Civic / Client Platform'
                        ? 'text-emerald-700'
                        : prod.status === 'Interactive Prototype'
                        ? 'text-[#1442CB]'
                        : 'text-amber-700'
                    }`}
                  >
                    {prod.status}
                  </span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="text-slate-500 text-[11px] truncate">
                    {prod.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mt-3">{prod.name}</h3>
                <p className="text-xs text-slate-600 mt-1 font-medium">{prod.tagline}</p>

                {/* Who it's for & What it helps with */}
                <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-2 text-xs">
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

                {/* Tech Stack Unboxed */}
                <div className="mt-4 pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-500">
                  {prod.techStack.map((tech, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5">
                      {i > 0 && <span aria-hidden="true" className="text-slate-300">·</span>}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between gap-2">
                {prod.actionType === 'explore' && prod.publicUrl && (
                  <a
                    href={prod.publicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 bg-[#1442CB] hover:bg-[#0F35A8] text-white text-xs font-semibold rounded-lg text-center transition-colors inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Explore product</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {prod.actionType === 'demo' && prod.publicUrl && (
                  <a
                    href={prod.publicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-semibold rounded-lg text-center transition-colors inline-flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>View live demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {prod.actionType === 'register' && (
                  <button
                    type="button"
                    onClick={() => onRegisterInterest(prod.name)}
                    className="w-full py-2 px-3 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold rounded-lg text-center transition-colors inline-flex items-center justify-center gap-1.5"
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
    </section>
  );
};
