import React, { useState, useEffect } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchDialog } from './components/SearchDialog';
import { ContactFormModal } from './components/ContactFormModal';

// Pages
import { HomePage } from './pages/HomePage';
import { SolutionsIndexPage } from './pages/SolutionsIndexPage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';
import { ProductsPage } from './pages/ProductsPage';
import { WorkPage } from './pages/WorkPage';
import { WorkDetailPage } from './pages/WorkDetailPage';
import { DesignPackagesPage } from './pages/DesignPackagesPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ResourceArticlePage } from './pages/ResourceArticlePage';
import { CompanyPage } from './pages/CompanyPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { ThankYouPage, NotFoundPage } from './pages/ThankYouAndNotFoundPages';

function AppContent() {
  const { path } = useRouter();

  // Search dialog state
  const [searchOpen, setSearchOpen] = useState(false);

  // Global contact modal state
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactInterest, setContactInterest] = useState<string>('');
  const [contactDescription, setContactDescription] = useState<string>('');
  const [contactPackage, setContactPackage] = useState<string>('');

  // Scroll-reactive atmospheric depth state
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openContact = (interest?: string, description?: string, pkg?: string) => {
    setContactInterest(interest || 'Digital Presence');
    setContactDescription(description || '');
    setContactPackage(pkg || '');
    setContactModalOpen(true);
  };

  // Route matching
  const renderRoute = () => {
    // Exact routes
    if (path === '/' || path === '') {
      return <HomePage onOpenContact={openContact} />;
    }

    if (path === '/solutions') {
      return <SolutionsIndexPage onOpenContact={openContact} />;
    }

    if (path.startsWith('/solutions/')) {
      const slug = path.replace('/solutions/', '').split('/')[0];
      return <SolutionDetailPage slug={slug} onOpenContact={openContact} />;
    }

    if (path === '/products') {
      return (
        <ProductsPage
          onRegisterInterest={(prodName) =>
            openContact(`Waitlist: ${prodName}`, `I am registering interest in ${prodName}.`)
          }
        />
      );
    }

    if (path.startsWith('/products/')) {
      // Direct product view
      return (
        <ProductsPage
          onRegisterInterest={(prodName) =>
            openContact(`Waitlist: ${prodName}`, `I am registering interest in ${prodName}.`)
          }
        />
      );
    }

    if (path === '/work') {
      return <WorkPage />;
    }

    if (path.startsWith('/work/')) {
      const slug = path.replace('/work/', '').split('/')[0];
      return <WorkDetailPage slug={slug} onOpenContact={openContact} />;
    }

    if (path === '/design-packages') {
      return (
        <DesignPackagesPage
          onOrderPackage={(pkgName) =>
            openContact(`Design Package Order: ${pkgName}`, `I would like to order the ${pkgName}.`, pkgName)
          }
        />
      );
    }

    if (path === '/resources') {
      return <ResourcesPage />;
    }

    if (path.startsWith('/resources/')) {
      const slug = path.replace('/resources/', '').split('/')[0];
      return <ResourceArticlePage slug={slug} onOpenContact={openContact} />;
    }

    if (path === '/company') {
      return <CompanyPage onOpenContact={() => openContact()} />;
    }

    if (path === '/contact') {
      return <ContactPage />;
    }

    if (path === '/privacy') {
      return <PrivacyPage />;
    }

    if (path === '/terms') {
      return <TermsPage />;
    }

    if (path === '/thank-you') {
      return <ThankYouPage />;
    }

    // 404 fallback
    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#0F172A] selection:bg-[#1442CB]/15 selection:text-[#1442CB] relative">
      {/* Dynamic Scroll-Reactive Atmospheric Background Engine */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        {/* Subtle Engineered Micro-Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-35" />

        {/* Scroll-Reactive Deep Blue Pale Gradient Wash (Gently infuses as user scrolls) */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1442CB]/[0.025] to-[#0A173D]/[0.05] transition-opacity duration-700 ease-out"
          style={{
            opacity: Math.min(0.2 + scrollY * 0.00045, 0.75),
          }}
        />

        {/* Primary Ambient Deep-Blue Radiant Orb (Smoothly follows & blooms with scroll) */}
        <div
          className="absolute -top-32 right-[-10%] w-[680px] sm:w-[920px] h-[680px] sm:h-[920px] rounded-full bg-gradient-to-br from-[#1442CB]/[0.09] via-[#1E40AF]/[0.04] to-transparent blur-3xl transition-transform duration-700 ease-out will-change-transform"
          style={{
            transform: `translate3d(0, ${Math.min(scrollY * 0.16, 650)}px, 0) scale(${1 + Math.min(scrollY * 0.00025, 0.25)})`,
          }}
        />

        {/* Secondary Mid-Page Cyan/Cobalt Light Bloom (Subtly reveals as you scroll down) */}
        <div
          className="absolute top-[38%] left-[-12%] sm:left-[-8%] w-[620px] sm:w-[820px] h-[620px] sm:h-[820px] rounded-full bg-gradient-to-tr from-[#1442CB]/[0.08] via-[#0284C7]/[0.04] to-transparent blur-3xl transition-transform duration-700 ease-out will-change-transform"
          style={{
            transform: `translate3d(0, ${Math.min(scrollY * 0.14, 520)}px, 0) scale(${1 + Math.min(scrollY * 0.00015, 0.15)})`,
            opacity: Math.min(0.3 + scrollY * 0.0008, 0.9),
          }}
        />

        {/* Lower Ambient Deep Blue Horizon Glow */}
        <div
          className="absolute bottom-[-10%] right-[5%] w-[750px] h-[750px] rounded-full bg-gradient-to-t from-[#0A173D]/[0.1] via-[#1442CB]/[0.04] to-transparent blur-3xl transition-transform duration-700 ease-out will-change-transform"
          style={{
            transform: `translate3d(0, ${-Math.min(scrollY * 0.06, 250)}px, 0)`,
            opacity: Math.min(0.4 + scrollY * 0.0006, 0.95),
          }}
        />
      </div>

      {/* Top Bar Navigation */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={(interest) => openContact(interest)}
      />

      {/* Main Page Content */}
      <div className="flex-1">{renderRoute()}</div>

      {/* Global Footer */}
      <Footer />

      {/* Global Search Dialog */}
      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Project Enquiry Modal */}
      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialInterest={contactInterest}
        initialDescription={contactDescription}
        initialPackage={contactPackage}
      />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
