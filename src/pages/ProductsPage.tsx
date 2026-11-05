import React, { useState } from 'react';
import { createPortal } from 'react-dom';
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
  Maximize2,
  ChevronLeft,
  ChevronRight,
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
  const [previewProduct, setPreviewProduct] = useState<Product | null>(null);
  const [activeImgIndex, setActiveImgIndex] = useState<number>(0);

  const categories = ['All', 'Enterprise & Automation', 'Productivity & AI', 'Civic & Utilities', 'Industry & IoT'];
  const statuses = ['All', 'Live Public Application', 'Interactive Prototype', 'In Development', 'Civic / Client Platform'];

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchStatus = activeStatus === 'All' || p.status === activeStatus;
    return matchCat && matchStatus;
  });

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
    <main className="py-16 sm:py-24 bg-[#FAFAF8] min-h-screen relative overflow-hidden">
      {/* Engineered Canvas Micro-Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Atmospheric Pale Blue Radial Light Bloom */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-gradient-to-b from-[#1442CB]/[0.07] via-[#1E40AF]/[0.02] to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/70 text-xs font-semibold text-[#1442CB] uppercase tracking-wider mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1442CB]" />
            <span>Independent Software & Prototypes</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Products with <span className="bg-gradient-to-r from-[#1442CB] via-blue-600 to-indigo-600 bg-clip-text text-transparent">purpose</span>.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A curated index of software tools, civic utilities, and operational prototypes built by
            Webspect. Each card displays its verified current status—distinguishing live public
            platforms from interactive prototypes and tools currently in development.
          </p>
        </div>

        {/* Filters with Generous Touch Padding & Mobile Scroll */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden p-1 bg-slate-100/70 sm:bg-transparent rounded-xl">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 shrink-0">
              Category:
            </span>
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActiveCategory(c)}
                className={`shrink-0 px-4 py-2.5 sm:px-3.5 sm:py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap min-h-[38px] cursor-pointer ${
                  activeCategory === c
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/90'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden p-1 bg-slate-100/70 sm:bg-transparent rounded-xl">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 shrink-0">
              Status:
            </span>
            {statuses.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setActiveStatus(s)}
                className={`shrink-0 px-4 py-2.5 sm:px-3.5 sm:py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap min-h-[38px] cursor-pointer ${
                  activeStatus === s
                    ? 'bg-[#1442CB] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/90'
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
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-all shadow-2xs hover:shadow-md group"
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

              <div className="p-6 sm:p-7">
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

                <div className="flex items-start justify-between gap-2 mt-3">
                  <h2 className="text-xl font-bold text-slate-900">{prod.name}</h2>
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
              <div className="p-6 sm:p-7 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
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
            </div>
          ))}
        </div>
      </div>


      {/* Screenshot Lightbox Modal Portaled to body */}
      {typeof document !== 'undefined' && previewProduct && previewProduct.screenshots && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md overflow-hidden touch-none overscroll-none select-none transition-opacity duration-150"
          onClick={() => setPreviewProduct(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${previewProduct.name} preview walkthrough`}
        >
          <div
            className="bg-slate-900 border border-slate-800 text-white rounded-2xl max-w-[calc(100vw-1.5rem)] sm:max-w-4xl w-full max-h-[80dvh] sm:max-h-[85vh] overflow-hidden flex flex-col shadow-2xl my-auto relative z-10 touch-auto overscroll-contain animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-4 py-3 sm:px-5 sm:py-3.5 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0">
              <div className="min-w-0 pr-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                  {previewProduct.category} · {previewProduct.status}
                </span>
                <h3 className="text-base sm:text-xl font-bold text-white mt-0.5 truncate">
                  {previewProduct.name} Interface Walkthrough
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {previewProduct.publicUrl && (
                  <a
                    href={previewProduct.publicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#1442CB] hover:bg-[#0F35A8] text-white rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Open Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setPreviewProduct(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800/80 transition-colors cursor-pointer"
                  aria-label="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Image View */}
            <div className="relative flex-1 min-h-0 bg-black flex items-center justify-center overflow-hidden p-2">
              <img
                src={previewProduct.screenshots[activeImgIndex] || previewProduct.heroImage}
                alt={`${previewProduct.name} preview screen ${activeImgIndex + 1}`}
                className="max-w-full max-h-[46dvh] sm:max-h-[480px] object-contain rounded"
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
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full backdrop-blur-xs transition-colors cursor-pointer"
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
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full backdrop-blur-xs transition-colors cursor-pointer"
                    aria-label="Next screen"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Bottom Thumbnails */}
            {previewProduct.screenshots.length > 1 && (
              <div className="p-2.5 sm:p-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between gap-3 overflow-x-auto shrink-0">
                <span className="text-[11px] sm:text-xs text-slate-400 font-mono shrink-0">
                  Screen {activeImgIndex + 1} of {previewProduct.screenshots.length}
                </span>
                <div className="flex items-center gap-2 overflow-x-auto">
                  {previewProduct.screenshots.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImgIndex(i)}
                      className={`h-9 sm:h-11 w-14 sm:w-16 rounded overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
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
        </div>,
        document.body
      )}
    </main>

  );
};
