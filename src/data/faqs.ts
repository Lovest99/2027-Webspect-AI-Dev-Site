export interface FAQItem {
  id: string;
  category: 'General' | 'Scope & Pricing' | 'Technology & AI' | 'Process';
  question: string;
  answer: string;
}

export const MAIN_FAQS: FAQItem[] = [
  {
    id: 'not-technical',
    category: 'General',
    question: "I'm not technical. Can you help me decide what I need?",
    answer: "Absolutely. Most of our clients are business owners, contractors, and managers who know their industry inside out, not software architects. You describe what is frustrating in your daily operations or what customer experience you want to create, and we translate that into the right technical recommendations."
  },
  {
    id: 'improve-existing',
    category: 'General',
    question: "Can you improve or fix what we already have?",
    answer: "Yes. You do not always need to tear everything down and start from zero. If you have an existing WordPress site, Google Workspace setup, or spreadsheet workflow that has good elements, we can refine the design, speed up loading performance, or connect modern automations without disrupting what already works."
  },
  {
    id: 'do-we-need-ai',
    category: 'Technology & AI',
    question: "Do we actually need AI for this?",
    answer: "Often, the answer is no. We are intentionally disciplined about when to introduce AI. Many business problems are solved far more reliably, cheaply, and predictably with a clean responsive website, a well-structured form, or a simple automated notification script. We only recommend AI when there is genuine unstructured data to analyze, draft summaries to generate, or complex classification that rule-based code cannot easily solve."
  },
  {
    id: 'smaller-scope',
    category: 'Scope & Pricing',
    question: "Can we start with a smaller scope first?",
    answer: "We actively encourage this. Starting with a focused Minimum Viable Product (MVP) or a single high-priority workflow allows you to see tangible value quickly, validate how your team and customers use it, and invest in secondary features with real operational confidence."
  },
  {
    id: 'existing-branding',
    category: 'General',
    question: "Can you work with our existing branding and logo?",
    answer: "Yes. If you have an established logo and brand colors that your market recognizes, we preserve and enhance them, ensuring all web layouts and promotional graphics present your brand in its sharpest, most cohesive form."
  },
  {
    id: 'remote-collaboration',
    category: 'Process',
    question: "Can we work together remotely across borders?",
    answer: "Yes. While Webspect is based in Zimbabwe, we collaborate smoothly with clients across Southern Africa and international markets. We communicate via WhatsApp, Google Meet, and shared interactive staging links, keeping you in direct touch with the engineer on your project."
  },
  {
    id: 'pricing-decision',
    category: 'Scope & Pricing',
    question: "How is pricing decided?",
    answer: "For design work, we offer clear, fixed packages (Essential at $10, Business at $30, Monthly Presence at $60/month, and $5 logo add-ons). For custom websites, software, and automation pipelines, projects are scoped around your specific business requirements, complexity, and integrations, with transparent fixed milestone pricing agreed before work begins. We do not charge surprise hourly fees."
  },
  {
    id: 'after-launch',
    category: 'Process',
    question: "What happens after launch?",
    answer: "We don't hand over a codebase and disappear. We provide a post-launch stabilization window to monitor system performance, train your team, and resolve any questions. We also offer ongoing maintenance agreements or on-demand sprint retainers for future enhancements."
  }
];
