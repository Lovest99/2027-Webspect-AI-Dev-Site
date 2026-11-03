import React from 'react';
import { HeroShowcase } from '../components/HeroShowcase';
import { SelectedWork } from '../components/SelectedWork';
import { ProblemBridge } from '../components/ProblemBridge';
import { EditorialStories } from '../components/EditorialStories';
import { CreativeGallery } from '../components/CreativeGallery';
import { ProductsShowcase } from '../components/ProductsShowcase';
import { SolutionFinder } from '../components/SolutionFinder';
import { HowWeWork } from '../components/HowWeWork';
import { AboutBright } from '../components/AboutBright';
import { FAQSection } from '../components/FAQSection';
import { FinalConversation } from '../components/FinalConversation';
import { useRouter } from '../context/RouterContext';

interface HomePageProps {
  onOpenContact: (interest?: string, description?: string, pkg?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenContact }) => {
  const { navigate } = useRouter();

  const handleFindSolutionClick = () => {
    const el = document.getElementById('solution-finder');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/solutions');
    }
  };

  const handleExploreWorkClick = () => {
    navigate('/work');
  };

  return (
    <main className="w-full">
      {/* 1. Hero with "What's your next move?" Interactive Showcase */}
      <HeroShowcase
        onFindSolutionClick={handleFindSolutionClick}
        onExploreWorkClick={handleExploreWorkClick}
      />

      {/* 2. Selected Work (Real proof early) */}
      <SelectedWork onOpenContact={(interest, desc) => onOpenContact(interest, desc)} />

      {/* 3. Start with the Business Problem (6 selectable challenges) */}
      <ProblemBridge
        onDiscussSolution={(solutionName) => onOpenContact(solutionName)}
      />

      {/* 4. Three Editorial Solution Stories */}
      <EditorialStories />

      {/* 5. Creative Work Showcase ("Business rako, ngarionekwe") */}
      <CreativeGallery />

      {/* 6. Products with Purpose */}
      <ProductsShowcase
        onRegisterInterest={(prodName) =>
          onOpenContact(`Product Waitlist: ${prodName}`, `I am registering interest in ${prodName}.`)
        }
      />

      {/* Interactive Solution Finder */}
      <SolutionFinder
        onSendProjectEnquiry={(brief) =>
          onOpenContact(brief.interest, brief.description)
        }
      />

      {/* 7. A Clear Way to Work Together (4 stages) */}
      <HowWeWork onStartProject={() => onOpenContact('General Project Scope')} />

      {/* 8. About Bright Cheteni */}
      <AboutBright />

      {/* 9. Useful Answers (FAQs) */}
      <FAQSection onAskQuestion={() => onOpenContact('General Enquiry')} />

      {/* 10. Final Conversation */}
      <FinalConversation onOpenContact={() => onOpenContact()} />
    </main>
  );
};
