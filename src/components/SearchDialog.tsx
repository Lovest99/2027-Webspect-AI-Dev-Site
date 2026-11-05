import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Globe, Layers, Zap, Palette, Boxes, MessageSquare, ExternalLink, FileText, Package } from 'lucide-react';
import { SOLUTIONS } from '../data/solutions';
import { PRODUCTS } from '../data/products';
import { WORK_ITEMS } from '../data/work';
import { RESOURCE_ARTICLES } from '../data/resources';
import { DESIGN_PACKAGES } from '../data/packages';
import { useRouter } from '../context/RouterContext';

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchDialog: React.FC<SearchDialogProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { navigate } = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);

      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open triggered by parent state or keyboard event
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Aggregate searchable items
  const cleanQuery = query.toLowerCase().trim();

  const results = React.useMemo(() => {
    if (!cleanQuery) {
      // Default recommended quick jumps
      return [
        {
          type: 'Solution',
          title: 'Digital Presence',
          subtitle: 'Websites and catalogues to get found and chosen online',
          path: '/solutions/digital-presence',
          icon: Globe,
        },
        {
          type: 'Solution',
          title: 'Workflow Automation',
          subtitle: 'Reduce repetitive data entry and document generation',
          path: '/solutions/workflow-automation',
          icon: Zap,
        },
        {
          type: 'Product',
          title: 'MIST Civic Platform',
          subtitle: 'Geotagged municipal and civic issue reporting platform',
          path: '/products/mist',
          icon: Boxes,
        },
        {
          type: 'Package',
          title: 'Monthly Presence Package',
          subtitle: '$60/mo for 31 unique promotional designs',
          path: '/design-packages',
          icon: Package,
        },
        {
          type: 'Resource',
          title: 'Is your business ready for automation?',
          subtitle: 'The 4 sanity checks before writing any code',
          path: '/resources/is-your-business-ready-for-automation',
          icon: FileText,
        },
      ];
    }

    const items: Array<{
      type: string;
      title: string;
      subtitle: string;
      path: string;
      icon: any;
    }> = [];

    // Search Solutions
    SOLUTIONS.forEach((s) => {
      if (
        s.navTitle.toLowerCase().includes(cleanQuery) ||
        s.pageTitle.toLowerCase().includes(cleanQuery) ||
        s.shortDescription.toLowerCase().includes(cleanQuery) ||
        s.definition.toLowerCase().includes(cleanQuery)
      ) {
        items.push({
          type: 'Solution',
          title: s.pageTitle,
          subtitle: s.shortDescription,
          path: `/solutions/${s.slug}`,
          icon: s.iconName === 'Globe' ? Globe : s.iconName === 'Zap' ? Zap : s.iconName === 'Layers' ? Layers : MessageSquare,
        });
      }
    });

    // Search Products
    PRODUCTS.forEach((p) => {
      if (
        p.name.toLowerCase().includes(cleanQuery) ||
        p.tagline.toLowerCase().includes(cleanQuery) ||
        p.whatItHelpsWith.toLowerCase().includes(cleanQuery)
      ) {
        items.push({
          type: 'Product',
          title: p.name,
          subtitle: `${p.status} · ${p.tagline}`,
          path: `/products/${p.slug}`,
          icon: Boxes,
        });
      }
    });

    // Search Case Studies & Work
    WORK_ITEMS.forEach((w) => {
      if (
        w.title.toLowerCase().includes(cleanQuery) ||
        w.clientOrProject.toLowerCase().includes(cleanQuery) ||
        w.sector.toLowerCase().includes(cleanQuery) ||
        w.summary.toLowerCase().includes(cleanQuery)
      ) {
        items.push({
          type: 'Case Study',
          title: w.clientOrProject,
          subtitle: `${w.projectType} · ${w.sector}`,
          path: `/work/${w.slug}`,
          icon: Layers,
        });
      }
    });

    // Search Resources
    RESOURCE_ARTICLES.forEach((r) => {
      if (
        r.title.toLowerCase().includes(cleanQuery) ||
        r.subtitle.toLowerCase().includes(cleanQuery) ||
        r.summary.toLowerCase().includes(cleanQuery)
      ) {
        items.push({
          type: 'Resource',
          title: r.title,
          subtitle: `${r.readTime} · ${r.category}`,
          path: `/resources/${r.slug}`,
          icon: FileText,
        });
      }
    });

    // Search Packages
    DESIGN_PACKAGES.forEach((dp) => {
      if (
        dp.name.toLowerCase().includes(cleanQuery) ||
        dp.description.toLowerCase().includes(cleanQuery)
      ) {
        items.push({
          type: 'Design Package',
          title: `${dp.name} ($${dp.priceUSD}${dp.cadence || ''})`,
          subtitle: `${dp.designCount} unique designs · ${dp.description}`,
          path: '/design-packages',
          icon: Package,
        });
      }
    });

    return items;
  }, [cleanQuery]);

  const handleSelect = (path: string) => {
    onClose();
    navigate(path);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, results.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % Math.max(1, results.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex].path);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-sm overflow-hidden touch-none overscroll-none select-none transition-opacity duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Quick Search"
    >
      <div
        className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900 touch-auto overscroll-contain animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search solutions, products, real work, resources, or packages..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
              ESC
            </span>
          )}
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-slate-50">
          {results.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <p className="text-sm">No results found for "{query}".</p>
              <p className="text-xs text-slate-400 mt-1">
                Try searching for "website", "automation", "MIST", "posters", or "pricing".
              </p>
            </div>
          ) : (
            results.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={`${item.type}-${item.path}-${idx}`}
                  type="button"
                  onClick={() => handleSelect(item.path)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg flex items-center justify-between gap-3 transition-colors ${
                    isSelected ? 'bg-slate-100 text-slate-900' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-md shrink-0 mt-0.5 ${
                        isSelected ? 'bg-white text-[#1442CB] shadow-sm' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                          {item.type}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-slate-900 truncate">{item.title}</p>
                      <p className="text-xs text-slate-500 truncate mt-0.5">{item.subtitle}</p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-[#1442CB] translate-x-0.5' : 'text-slate-300'
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span>
              <kbd className="font-mono bg-white border border-slate-200 px-1 py-0.5 rounded shadow-2xs">↑</kbd>{' '}
              <kbd className="font-mono bg-white border border-slate-200 px-1 py-0.5 rounded shadow-2xs">↓</kbd> to navigate
            </span>
            <span>
              <kbd className="font-mono bg-white border border-slate-200 px-1 py-0.5 rounded shadow-2xs">↵</kbd> to select
            </span>
          </div>
          <span>Webspect AI & Dev</span>
        </div>
      </div>
    </div>
  );
};
