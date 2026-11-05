import React, { useState } from 'react';
import {
  Palette,
  Eye,
  X,
  ArrowRight,
  Maximize2,
  CheckCircle2,
  Info,
  Layers,
} from 'lucide-react';
import { CREATIVE_DESIGNS, CreativeDesign } from '../data/creativeGallery';
import { useRouter } from '../context/RouterContext';

export const CreativeGallery: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalDesign, setActiveModalDesign] = useState<CreativeDesign | null>(null);

  const categories = ['All', 'Construction & Industrial', 'Corporate Services', 'Beauty & Retail', 'Healthcare & Consulting'];

  const filteredDesigns = selectedCategory === 'All'
    ? CREATIVE_DESIGNS
    : CREATIVE_DESIGNS.filter((d) => d.category === selectedCategory);

  React.useEffect(() => {
    if (activeModalDesign) {
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setActiveModalDesign(null);
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeModalDesign]);

  return (
    <section className="py-12 sm:py-16 bg-[#FAFAF8]/95 relative overflow-hidden border-b border-slate-200/80">
      {/* Engineered Canvas Micro-Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Atmospheric Light Bloom */}
      <div
        className="pointer-events-none absolute -top-24 left-1/4 w-[500px] h-[300px] bg-gradient-to-b from-[#1442CB]/[0.05] to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Tagline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/70 text-xs font-semibold text-[#1442CB] uppercase tracking-wider mb-2.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1442CB]" />
              <span>Commercial Graphic Design & Visual Identity</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Your business should <span className="bg-gradient-to-r from-[#1442CB] via-blue-600 to-indigo-600 bg-clip-text text-transparent">look as good as the work you do</span>.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              <span className="font-semibold text-slate-900 italic">"Business rako, ngarionekwe."</span>{' '}
              Promotional graphic campaigns, commercial posters, and brand identities engineered to
              stop the scroll and establish credibility.
            </p>
          </div>

          {/* Quick Notice & CTAs with generous padding */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={() => navigate('/solutions/brand-visibility')}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Explore brand visibility
            </button>
            <button
              onClick={() => navigate('/design-packages')}
              className="px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors cursor-pointer shadow-2xs"
            >
              View design packages
            </button>
          </div>
        </div>

        {/* Clear Disclaimer Note as requested */}
        <div className="mt-4 p-2.5 bg-amber-50/80 border border-amber-200/80 rounded-xl flex items-center gap-2.5 text-xs text-amber-900">
          <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>
            <strong>Portfolio Notice:</strong> Commissioned graphic design & brand artwork created for clients—not an online storefront for physical goods.
          </span>
        </div>

        {/* Category Filters (Functional Buttons) */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-1.5 sm:pb-0 sm:flex-wrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 sm:px-3.5 sm:py-2 min-h-[38px] rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs font-semibold'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Gallery Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredDesigns.map((design) => (
            <div
              key={design.id}
              className="group bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              {/* Poster Representation Container */}
              {design.imagePath ? (
                <div
                  className="relative overflow-hidden aspect-[4/5] bg-slate-900 cursor-pointer group/img"
                  onClick={() => setActiveModalDesign(design)}
                >
                  <img
                    src={design.imagePath}
                    alt={`${design.client} - ${design.headline}`}
                    className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Bar Floating Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-start justify-between z-10">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-xs border border-white/20">
                      {design.category}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalDesign(design);
                      }}
                      className="p-1.5 bg-black/60 hover:bg-black/80 text-white rounded-lg backdrop-blur-xs transition-colors cursor-pointer border border-white/20"
                      title="Inspect full poster"
                      aria-label={`Inspect ${design.client} artwork`}
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom Information Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <p className="text-xs font-bold text-white/90 truncate">{design.client}</p>
                    <p className="text-sm font-extrabold text-white leading-tight line-clamp-2 mt-0.5">
                      {design.headline}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  className="relative p-5 sm:p-6 flex flex-col justify-between min-h-[240px] overflow-hidden transition-colors cursor-pointer"
                  style={{
                    backgroundColor: design.brandColors.primary,
                    color: '#FFFFFF',
                  }}
                  onClick={() => setActiveModalDesign(design)}
                >
                  {/* Visual geometric accent background */}
                  <div
                    className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-20 pointer-events-none"
                    style={{ backgroundColor: design.brandColors.accent }}
                    aria-hidden="true"
                  />

                  {/* Top bar of poster card */}
                  <div className="flex items-start justify-between relative z-10">
                    <div>
                      <span
                        className="text-[11px] uppercase font-bold tracking-wider opacity-90 block"
                        style={{ color: design.brandColors.accent }}
                      >
                        {design.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-white mt-1 leading-tight">
                        {design.client}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalDesign(design);
                      }}
                      className="p-1.5 bg-black/40 hover:bg-black/60 text-white/80 hover:text-white rounded-lg backdrop-blur-xs transition-colors"
                      title="View design details"
                      aria-label={`Inspect ${design.client} design brief`}
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Center headline in client brand style */}
                  <div className="my-6 relative z-10">
                    <p className="text-xl sm:text-2xl font-black leading-tight tracking-tight text-white/95">
                      "{design.headline}"
                    </p>
                    <p className="text-xs text-white/70 mt-2 font-mono">
                      Format: {design.dimensions}
                    </p>
                  </div>

                  {/* Bottom brand accents */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10 relative z-10 text-[11px] text-white/70">
                    <span>Client Artwork</span>
                    <span className="font-semibold text-white/90">Webspect AI & Dev</span>
                  </div>
                </div>
              )}

              {/* Card Footer Breakdown */}
              <div className="p-5 bg-white space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  {design.briefSummary}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] text-slate-500 font-medium">
                  {design.deliverables.slice(0, 2).map((del, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 text-slate-600">
                      {i > 0 && <span aria-hidden="true" className="text-slate-300">·</span>}
                      {del}
                    </span>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveModalDesign(design)}
                    className="text-xs font-semibold text-[#1442CB] hover:underline flex items-center gap-1"
                  >
                    Inspect brief & details <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Inspector for Full-size Inspection */}
        {activeModalDesign && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-sm overflow-hidden touch-none overscroll-none select-none transition-opacity duration-150"
            onClick={() => setActiveModalDesign(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Design Brief Inspector"
          >
            <div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[84vh] sm:max-h-[88vh] overflow-y-auto shadow-2xl border border-slate-200 p-5 sm:p-8 space-y-6 my-auto relative z-10 touch-auto overscroll-contain animate-in zoom-in-95 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1442CB]">
                    {activeModalDesign.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    {activeModalDesign.client}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalDesign(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg bg-slate-100"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Full Poster Presentation Preview */}
              {activeModalDesign.imagePath ? (
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-md flex items-center justify-center relative group max-h-[460px]">
                  <img
                    src={activeModalDesign.imagePath}
                    alt={`${activeModalDesign.client} delivered poster design`}
                    className="w-full max-h-[460px] object-contain object-center"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500 text-white shadow-sm">
                    Delivered Client Artwork
                  </div>
                </div>
              ) : (
                <div
                  className="p-8 rounded-xl flex flex-col justify-between min-h-[260px] text-white shadow-inner relative overflow-hidden"
                  style={{ backgroundColor: activeModalDesign.brandColors.primary }}
                >
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-white/70">PROMOTIONAL SPECIFICATION</span>
                    <span
                      className="px-2 py-0.5 rounded text-[11px] font-bold"
                      style={{
                        backgroundColor: activeModalDesign.brandColors.accent,
                        color: activeModalDesign.brandColors.primary,
                      }}
                    >
                      APPROVED ARTWORK
                    </span>
                  </div>

                  <div className="my-6">
                    <h4 className="text-2xl sm:text-3xl font-black leading-tight">
                      {activeModalDesign.headline}
                    </h4>
                    <p className="text-sm text-white/80 mt-2 font-medium">
                      Typography: {activeModalDesign.typographyStyle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/20 flex justify-between text-xs text-white/70">
                    <span>Aspect: {activeModalDesign.dimensions}</span>
                    <span className="font-bold text-white">Webspect Brand Engine</span>
                  </div>
                </div>
              )}

              {/* Design Brief Breakdown */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Client Design Brief & Context
                  </h4>
                  <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                    {activeModalDesign.briefSummary}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Supplied Deliverables
                  </h4>
                  <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalDesign.deliverables.map((del, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/70 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Action Footer */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  Ready to upgrade your brand's promotional materials?
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setActiveModalDesign(null);
                      navigate('/design-packages');
                    }}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] rounded-xl transition-colors"
                  >
                    View Packages ($10–$60)
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
