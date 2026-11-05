import React, { useState } from 'react';
import {
  Boxes,
  ExternalLink,
  ArrowRight,
  Layers,
  Send,
  X,
  CheckCircle2,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import { useRouter } from '../context/RouterContext';

interface ProductsShowcaseProps {
  onRegisterInterest: (productName: string) => void;
}

export const ProductsShowcase: React.FC<ProductsShowcaseProps> = ({ onRegisterInterest }) => {
  const { navigate } = useRouter();
  const [filter, setFilter] = useState<string>('All');
  const [previewProduct, setPreviewProduct] = useState<Product | null>(null);
  const [activeImgIndex, setActiveImgIndex] = useState<number>(0);

  const categories = ['All', 'Enterprise & Automation', 'Productivity & AI', 'Civic & Utilities', 'Industry & IoT'];

  const filteredProducts = filter === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === filter);

  React.useEffect(() => {
    if (previewProduct) {
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setPreviewProduct(null);
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [previewProduct]);

  return (
    <section className="py-12 sm:py-16 bg-white/85 backdrop-blur-xs relative overflow-hidden border-b border-slate-200/80">
      {/* Engineered Canvas Micro-Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Atmospheric Light Bloom */}
      <div
        className="pointer-events-none absolute -top-24 right-1/4 w-[500px] h-[300px] bg-gradient-to-b from-[#1442CB]/[0.05] to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/70 text-xs font-semibold text-[#1442CB] uppercase tracking-wider mb-2.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1442CB]" />
              <span>Independent Products & Prototypes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Explore <span className="bg-gradient-to-r from-[#1442CB] via-blue-600 to-indigo-600 bg-clip-text text-transparent">what we’re building</span>.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Beyond client commissions, Webspect architects independent tools, civic utilities, and
              operational experiments with verified current statuses.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => navigate('/products')}
              className="px-4.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors inline-flex items-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>View all products directory</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filter Buttons with comfortable padding and mobile scroll */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-1.5 sm:pb-0 sm:flex-wrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 sm:px-3.5 sm:py-2 min-h-[38px] rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-slate-900 text-white shadow-xs font-semibold'
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
              className="bg-[#FAFAF8] rounded-xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:border-[#1442CB]/40 transition-all shadow-2xs hover:shadow-md group"
            >
              {/* Product Screenshot Banner if Available (Strict 16:9 Widescreen) */}
              {prod.heroImage ? (
                <div
                  className="w-full aspect-[16/9] bg-slate-950 overflow-hidden relative border-b border-slate-200 cursor-pointer"
                  onClick={() => {
                    setPreviewProduct(prod);
                    setActiveImgIndex(0);
                  }}
                >
                  <img
                    src={prod.heroImage}
                    alt={`${prod.name} interface screenshot`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
                    {prod.screenshots && prod.screenshots.length > 1 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/60 text-white/90 backdrop-blur-xs">
                        {prod.screenshots.length} screens
                      </span>
                    )}
                    <span className="p-1 rounded bg-black/60 text-white/90 backdrop-blur-xs hover:text-white" title="Inspect UI">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ) : null}

              {/* Product Header & Details */}
              <div className="p-5">
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

                <div className="flex items-start justify-between gap-2 mt-3">
                  <h3 className="text-xl font-bold text-slate-900">{prod.name}</h3>
                  {prod.screenshots && (
                    <button
                      type="button"
                      onClick={() => {
                        setPreviewProduct(prod);
                        setActiveImgIndex(0);
                      }}
                      className="text-[11px] font-semibold text-[#1442CB] hover:underline shrink-0"
                    >
                      Inspect UI
                    </button>
                  )}
                </div>

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
              <div className="p-5 pt-0">
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-2">
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
            </div>
          ))}
        </div>

        {/* Screenshot Lightbox Modal */}
        {previewProduct && previewProduct.screenshots && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-sm overflow-hidden touch-none overscroll-none select-none transition-opacity duration-150"
            onClick={() => setPreviewProduct(null)}
          >
            <div
              className="bg-slate-900 border border-slate-800 text-white rounded-2xl max-w-4xl w-full max-h-[84vh] sm:max-h-[88vh] overflow-hidden flex flex-col shadow-2xl my-auto relative z-10 touch-auto overscroll-contain animate-in zoom-in-95 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                    {previewProduct.category} · {previewProduct.status}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                    {previewProduct.name} Interface Walkthrough
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {previewProduct.publicUrl && (
                    <a
                      href={previewProduct.publicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#1442CB] hover:bg-[#0F35A8] text-white rounded-lg text-xs font-semibold inline-flex items-center gap-1.5"
                    >
                      <span>Open Live App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setPreviewProduct(null)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800/80"
                    aria-label="Close preview"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Image View */}
              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden max-h-[520px] p-2">
                <img
                  src={previewProduct.screenshots[activeImgIndex] || previewProduct.heroImage}
                  alt={`${previewProduct.name} preview screen ${activeImgIndex + 1}`}
                  className="max-w-full max-h-[500px] object-contain rounded"
                />

                {previewProduct.screenshots.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImgIndex((prev) =>
                          prev === 0 ? previewProduct.screenshots!.length - 1 : prev - 1
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full backdrop-blur-xs transition-colors"
                      aria-label="Previous screen"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImgIndex((prev) =>
                          prev === previewProduct.screenshots!.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full backdrop-blur-xs transition-colors"
                      aria-label="Next screen"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Bottom Thumbnails */}
              {previewProduct.screenshots.length > 1 && (
                <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between gap-3 overflow-x-auto">
                  <span className="text-xs text-slate-400 font-mono">
                    Screen {activeImgIndex + 1} of {previewProduct.screenshots.length}
                  </span>
                  <div className="flex items-center gap-2">
                    {previewProduct.screenshots.map((img, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveImgIndex(i)}
                        className={`h-11 w-16 rounded overflow-hidden border-2 transition-all shrink-0 ${
                          activeImgIndex === i
                            ? 'border-[#1442CB] ring-2 ring-blue-500'
                            : 'border-slate-700 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
