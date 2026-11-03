import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronDown,
  Search,
  Menu,
  X,
  Globe,
  MessageSquare,
  Zap,
  Layers,
  Boxes,
  Palette,
  ArrowRight,
  Briefcase,
  PhoneCall,
  Compass,
} from 'lucide-react';
import { useRouter } from '../context/RouterContext';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenContact: (initialInterest?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenContact }) => {
  const { path, navigate } = useRouter();
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close mega menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setSolutionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on route change
  useEffect(() => {
    setSolutionsOpen(false);
    setMobileMenuOpen(false);
  }, [path]);

  // Solutions Mega Menu Items
  const improveItems = [
    {
      title: 'Get found online',
      desc: 'Websites and catalogues built to turn visitors into buyers.',
      href: '/solutions/digital-presence',
      icon: Globe,
    },
    {
      title: 'Turn enquiries into opportunities',
      desc: 'Intake forms, pipelines and follow-ups so leads never get lost.',
      href: '/solutions/customer-enquiries',
      icon: MessageSquare,
    },
    {
      title: 'Reduce repetitive work',
      desc: 'Document generation, data sync and human-in-the-loop AI.',
      href: '/solutions/workflow-automation',
      icon: Zap,
    },
    {
      title: 'Run your business in one place',
      desc: 'Custom operational portals, job boards and role permissions.',
      href: '/solutions/business-operations',
      icon: Layers,
    },
    {
      title: 'Build your product idea',
      desc: 'Discovery, interactive prototypes and full-stack MVP builds.',
      href: '/solutions/product-development',
      icon: Boxes,
    },
    {
      title: 'Make your brand stand out',
      desc: 'Professional logos, promotional posters and monthly presence.',
      href: '/solutions/brand-visibility',
      icon: Palette,
    },
  ];

  const exploreItems = [
    {
      title: 'Find the right solution',
      desc: 'Answer 3 quick questions for a transparent recommendation.',
      action: () => {
        setSolutionsOpen(false);
        navigate('/#solution-finder');
        const el = document.getElementById('solution-finder');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      icon: Compass,
    },
    {
      title: 'See our work',
      desc: 'Explore real project deliveries, prototypes and client designs.',
      href: '/work',
      icon: Briefcase,
    },
    {
      title: 'Discuss your challenge',
      desc: 'Direct consultation on WhatsApp or via our project enquiry form.',
      action: () => {
        setSolutionsOpen(false);
        onOpenContact();
      },
      icon: PhoneCall,
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAFAF8]/95 backdrop-blur-md border-b border-slate-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4 lg:gap-8">
          {/* Zone 1: Brand Wordmark with actual uploaded logo */}
          <div className="flex items-center shrink-0">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
              className="flex items-center group py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1442CB] rounded-md"
              aria-label="Webspect AI & Dev Home"
            >
              {/* Actual uploaded logo with navy-to-royal-blue gradient and capsule */}
              <img
                src="/assets/aistudio/logo-webspect_4c3ffc03.png"
                alt="Webspect AI & Dev – Where Vision Meets Virtual Reality"
                className="h-8 sm:h-10 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
              />
            </a>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-slate-700">
            {/* Solutions Dropdown trigger */}
            <div className="relative">
              <button
                ref={buttonRef}
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setSolutionsOpen(true);
                  }
                }}
                aria-expanded={solutionsOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md hover:text-slate-900 transition-colors ${
                  path.startsWith('/solutions') || solutionsOpen
                    ? 'text-[#1442CB] font-semibold bg-slate-100/60'
                    : 'text-slate-700'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    solutionsOpen ? 'rotate-180 text-[#1442CB]' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Solutions Mega Menu Dropdown */}
              {solutionsOpen && (
                <div
                  ref={megaMenuRef}
                  className="absolute left-1/2 -translate-x-1/2 mt-3 w-[720px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  role="menu"
                >
                  <div className="grid grid-cols-12 gap-6">
                    {/* Column 1: WHAT DO YOU WANT TO IMPROVE? */}
                    <div className="col-span-8 pr-4 border-r border-slate-100">
                      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          What do you want to improve?
                        </span>
                        <a
                          href="/solutions"
                          onClick={(e) => {
                            e.preventDefault();
                            setSolutionsOpen(false);
                            navigate('/solutions');
                          }}
                          className="text-xs font-medium text-[#1442CB] hover:underline flex items-center gap-1"
                        >
                          All solutions <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {improveItems.map((item) => {
                          const Icon = item.icon;
                          const isActive = path === item.href;
                          return (
                            <a
                              key={item.href}
                              href={item.href}
                              onClick={(e) => {
                                e.preventDefault();
                                setSolutionsOpen(false);
                                navigate(item.href);
                              }}
                              className={`group p-2.5 rounded-xl transition-all flex items-start gap-3 ${
                                isActive ? 'bg-blue-50/60 text-[#1442CB]' : 'hover:bg-slate-50 text-slate-900'
                              }`}
                            >
                              <div
                                className={`p-2 rounded-lg shrink-0 mt-0.5 transition-colors ${
                                  isActive
                                    ? 'bg-[#1442CB] text-white shadow-sm'
                                    : 'bg-slate-100 text-slate-600 group-hover:bg-[#1442CB] group-hover:text-white'
                                }`}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <span className="text-xs sm:text-sm font-semibold block leading-tight text-slate-900 group-hover:text-[#1442CB]">
                                  {item.title}
                                </span>
                                <span className="text-[11px] text-slate-500 block leading-snug mt-1 line-clamp-2">
                                  {item.desc}
                                </span>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>

                    {/* Column 2: EXPLORE */}
                    <div className="col-span-4 pl-1">
                      <div className="pb-3 mb-2 border-b border-slate-100">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Explore
                        </span>
                      </div>
                      <div className="space-y-2">
                        {exploreItems.map((item, idx) => {
                          const Icon = item.icon;
                          if (item.action) {
                            return (
                              <button
                                key={`action-${idx}`}
                                type="button"
                                onClick={item.action}
                                className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 text-slate-900 flex items-start gap-3 group transition-colors"
                              >
                                <div className="p-2 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#1442CB] shrink-0 mt-0.5">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <span className="text-xs sm:text-sm font-semibold block text-slate-900 group-hover:text-[#1442CB]">
                                    {item.title}
                                  </span>
                                  <span className="text-[11px] text-slate-500 block leading-snug mt-0.5">
                                    {item.desc}
                                  </span>
                                </div>
                              </button>
                            );
                          }
                          return (
                            <a
                              key={item.href}
                              href={item.href}
                              onClick={(e) => {
                                e.preventDefault();
                                setSolutionsOpen(false);
                                if (item.href) navigate(item.href);
                              }}
                              className="p-2.5 rounded-xl hover:bg-slate-50 text-slate-900 flex items-start gap-3 group transition-colors block"
                            >
                              <div className="p-2 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#1442CB] shrink-0 mt-0.5">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <span className="text-xs sm:text-sm font-semibold block text-slate-900 group-hover:text-[#1442CB]">
                                  {item.title}
                                </span>
                                <span className="text-[11px] text-slate-500 block leading-snug mt-0.5">
                                  {item.desc}
                                </span>
                              </div>
                            </a>
                          );
                        })}
                      </div>

                      {/* Design Packages Sub-entry in Mega Menu */}
                      <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                        <span className="text-[11px] font-semibold text-slate-700 block">
                          Looking for design packages?
                        </span>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          $10 Essential · $30 Business · $60/mo
                        </p>
                        <a
                          href="/design-packages"
                          onClick={(e) => {
                            e.preventDefault();
                            setSolutionsOpen(false);
                            navigate('/design-packages');
                          }}
                          className="mt-2 text-xs font-semibold text-[#1442CB] hover:underline inline-flex items-center gap-1"
                        >
                          View package rates <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Products link */}
            <a
              href="/products"
              onClick={(e) => {
                e.preventDefault();
                navigate('/products');
              }}
              className={`px-3 py-2 rounded-md hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
                path.startsWith('/products') ? 'text-[#1442CB] font-semibold bg-slate-100/60' : 'text-slate-700'
              }`}
            >
              Products
            </a>

            {/* Our Work link */}
            <a
              href="/work"
              onClick={(e) => {
                e.preventDefault();
                navigate('/work');
              }}
              className={`px-3 py-2 rounded-md hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
                path.startsWith('/work') ? 'text-[#1442CB] font-semibold bg-slate-100/60' : 'text-slate-700'
              }`}
            >
              Our Work
            </a>

            {/* Resources link */}
            <a
              href="/resources"
              onClick={(e) => {
                e.preventDefault();
                navigate('/resources');
              }}
              className={`px-3 py-2 rounded-md hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
                path.startsWith('/resources') ? 'text-[#1442CB] font-semibold bg-slate-100/60' : 'text-slate-700'
              }`}
            >
              Resources
            </a>

            {/* Company link */}
            <a
              href="/company"
              onClick={(e) => {
                e.preventDefault();
                navigate('/company');
              }}
              className={`px-3 py-2 rounded-md hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
                path === '/company' ? 'text-[#1442CB] font-semibold bg-slate-100/60' : 'text-slate-700'
              }`}
            >
              Company
            </a>
          </nav>

          {/* Zone 3: Search + Secondary Action + Primary Action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick search button */}
            <button
              onClick={onOpenSearch}
              className="p-2 sm:px-2.5 sm:py-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100/80 transition-colors flex items-center gap-2"
              title="Search website (Cmd+K)"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
              <span className="hidden xl:inline text-xs text-slate-400 font-mono bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                ⌘K
              </span>
            </button>

            {/* Secondary Action: "Explore solutions" */}
            <a
              href="/solutions"
              onClick={(e) => {
                e.preventDefault();
                navigate('/solutions');
              }}
              className="hidden lg:inline-flex px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100/70 rounded-lg transition-colors whitespace-nowrap shrink-0 border border-slate-200/80"
            >
              Explore solutions
            </a>

            {/* Primary Action: "Let's talk" */}
            <button
              onClick={() => onOpenContact()}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] active:scale-[0.98] rounded-lg transition-all shadow-sm hover:shadow whitespace-nowrap shrink-0"
            >
              Let’s talk
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto space-y-5 animate-in fade-in duration-200">
          {/* Quick search in mobile */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSearch();
            }}
            className="w-full flex items-center justify-between px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-500"
          >
            <span className="flex items-center gap-2">
              <Search className="w-4 h-4" /> Search solutions, work, products...
            </span>
            <span className="text-[11px] font-mono text-slate-400">Search</span>
          </button>

          {/* Solutions Section */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Business Solutions
            </div>
            <div className="grid grid-cols-1 gap-1">
              {improveItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      navigate(item.href);
                    }}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 text-slate-900"
                  >
                    <Icon className="w-4 h-4 text-[#1442CB] shrink-0 mt-1" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                      <div className="text-xs text-slate-500 line-clamp-1">{item.desc}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Site Navigation Links */}
          <div className="pt-2 border-t border-slate-100">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Company & Work
            </div>
            <div className="space-y-1">
              <a
                href="/products"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  navigate('/products');
                }}
                className="block px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                Products
              </a>
              <a
                href="/work"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  navigate('/work');
                }}
                className="block px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                Our Work & Case Studies
              </a>
              <a
                href="/design-packages"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  navigate('/design-packages');
                }}
                className="block px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                Design Packages ($10–$60)
              </a>
              <a
                href="/resources"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  navigate('/resources');
                }}
                className="block px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                Resources & Guides
              </a>
              <a
                href="/company"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  navigate('/company');
                }}
                className="block px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                About Bright Cheteni & Webspect
              </a>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-[#1442CB] rounded-lg shadow-sm"
            >
              Start a Project Conversation
            </button>
            <a
              href="https://wa.me/263787679376?text=Hi%20Bright%2C%20I%20am%20exploring%20Webspect%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
            >
              Chat on WhatsApp (+263 78 767 9376)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
