export interface Solution {
  id: string;
  slug: string;
  navTitle: string;
  pageTitle: string;
  shortDescription: string;
  definition: string;
  iconName: string;
  problemStatement: string;
  rightForYouIf: string[];
  capabilities: {
    title: string;
    description: string;
  }[];
  interactiveDemoType: 'presence' | 'enquiry' | 'automation' | 'operations' | 'product' | 'brand';
  scopeFactors: string[];
  ctaLabel: string;
  relevantWorkIds: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SOLUTIONS: Solution[] = [
  {
    id: 'digital-presence',
    slug: 'digital-presence',
    navTitle: 'Get found online',
    pageTitle: 'Make it easier for customers to find and choose you.',
    shortDescription: 'Modern websites, clear messaging and search foundations built to turn visitors into buyers.',
    definition: 'Digital presence solutions designed around how real customers evaluate and select services—combining clean speed, persuasive structure, and frictionless contact paths.',
    iconName: 'Globe',
    problemStatement: 'Customers search for what you offer, but land on an outdated page, get confused by vague descriptions, or struggle to find how to contact you on mobile.',
    rightForYouIf: [
      'Your business relies heavily on word-of-mouth and needs a credible online home that reinforces referrals.',
      'You have an old website that looks neglected or fails to display cleanly on smartphones.',
      'Customers constantly ask basic questions via phone that your website should have answered immediately.',
      'You want a professional landing page for a new service launch or regional market expansion.'
    ],
    capabilities: [
      {
        title: 'High-Performance Business Websites',
        description: 'Clean, fast-loading multi-page sites built on modern web standards with zero bloated plugins.'
      },
      {
        title: 'Conversion Landing Pages',
        description: 'Targeted single-page experiences focused on explaining a specific offering and driving inbound enquiries.'
      },
      {
        title: 'Product & Service Catalogues',
        description: 'Structured visual presentation of what you sell with organized categories and direct enquiry links.'
      },
      {
        title: 'Mobile-First Enquiry Journeys',
        description: 'Effortless tap-to-WhatsApp, streamlined quote forms, and click-to-call flows optimized for mobile users.'
      },
      {
        title: 'Technical Search Foundations (SEO)',
        description: 'Semantic markup, JSON-LD structured data, fast Core Web Vitals, and localized metadata.'
      }
    ],
    interactiveDemoType: 'presence',
    scopeFactors: [
      'Number of core pages and content depth',
      'Need for custom product/project catalogues vs static presentation',
      'Copywriting and visual asset preparation requirements',
      'Integration with existing domains, hosting or analytics'
    ],
    ctaLabel: 'Discuss my online presence',
    relevantWorkIds: ['multivate', 'mox', 'general-aluminium'],
    faqs: [
      {
        question: 'How long does a typical business website take to build?',
        answer: 'Most standard business websites take 2 to 4 weeks depending on how quickly content, photography and reviews are provided. We agree on an exact milestone schedule before commencing work.'
      },
      {
        question: 'Can you work with our existing domain and hosting?',
        answer: 'Yes. We can deploy to your existing host or recommend modern, high-speed hosting environments that run reliably without high monthly maintenance.'
      },
      {
        question: 'Will our team be able to update text or photos later?',
        answer: 'Yes. We structure the project so you can easily update project photos, announcements or team members without touching technical code.'
      }
    ]
  },
  {
    id: 'customer-enquiries',
    slug: 'customer-enquiries',
    navTitle: 'Turn enquiries into opportunities',
    pageTitle: 'Give every enquiry a clear next step.',
    shortDescription: 'Lead capture forms, organized intake queues and follow-up flows that prevent missed clients.',
    definition: 'Frictionless capture tools and organized pipeline interfaces that bring customer requests from WhatsApp, website forms, and email into an orderly queue.',
    iconName: 'MessageSquareCheck',
    problemStatement: 'Potential buyers reach out across multiple channels, but messages get buried in personal inboxes, details are forgotten, and quotes take days to send.',
    rightForYouIf: [
      'Enquiries get lost across WhatsApp chats, DMs, phone notes and staff emails.',
      'Potential clients go to competitors simply because your first response took too long.',
      'You have no visibility into how many leads came in this month or what their estimated value is.',
      'Drafting repetitive quotes eats up hours that should be spent doing paid client work.'
    ],
    capabilities: [
      {
        title: 'Tailored Lead Capture Forms',
        description: 'Smart forms that collect the exact project specifications needed to prepare an accurate estimate.'
      },
      {
        title: 'Enquiry Management Dashboard',
        description: 'A clean, centralized Kanban or list board showing every prospective client, their requirements, and their current stage.'
      },
      {
        title: 'Instant WhatsApp Handoff',
        description: 'Structured handoff buttons that package form details into a clean WhatsApp draft message to your business number.'
      },
      {
        title: 'Quote Request Workflows',
        description: 'Self-guided quote builders allowing buyers to specify measurements, quantities or services before speaking to you.'
      },
      {
        title: 'Automated Status Notifications',
        description: 'Email and SMS acknowledgments reassuring the client that their request has been received and is being reviewed.'
      }
    ],
    interactiveDemoType: 'enquiry',
    scopeFactors: [
      'Volume and variety of inbound channels (website, WhatsApp, email)',
      'Number of team members needing access to view and update enquiries',
      'Complexity of preliminary quote calculations',
      'Integration requirements with external CRMs or notification webhooks'
    ],
    ctaLabel: 'Improve our enquiry process',
    relevantWorkIds: ['relay-system', 'towmate'],
    faqs: [
      {
        question: 'Can you send automated WhatsApp messages on our behalf?',
        answer: 'We provide structured WhatsApp handoff links out-of-the-box. For full automated chatbot replies inside WhatsApp, an official Meta WhatsApp Business API account is required, which we can guide you through or integrate where appropriate.'
      },
      {
        question: 'What if we already use an email or CRM tool?',
        answer: 'We can connect your website forms directly to your existing CRM, Google Sheets, or Slack channels using secure webhooks.'
      }
    ]
  },
  {
    id: 'workflow-automation',
    slug: 'workflow-automation',
    navTitle: 'Reduce repetitive work',
    pageTitle: 'Spend less time repeating the same work.',
    shortDescription: 'Smart document generators, data sync and human-in-the-loop AI assistance tailored to your workflow.',
    definition: 'Pragmatic automations that take the burden of repetitive data entry, reporting, and document drafting off your team—with human review where it matters.',
    iconName: 'Zap',
    problemStatement: 'Skilled team members spend hours retyping information between systems, assembling identical PDF reports, or chasing routine administrative follow-ups.',
    rightForYouIf: [
      'Your team spends substantial weekly hours copying customer data from forms into spreadsheets or invoices.',
      'Generating recurring reports, proposals, or certificates is completely manual.',
      'Manual copy-pasting has caused costly errors, missed deadlines, or duplicate orders.',
      'You want AI assistance to draft summaries or extract information, but need guaranteed human sign-off on consequential steps.'
    ],
    capabilities: [
      {
        title: 'Document & Proposal Generation',
        description: 'Turn structured inputs into branded PDFs, estimates, invoices, and contracts in seconds.'
      },
      {
        title: 'System-to-System Data Synchronisation',
        description: 'Eliminate duplicate entry by syncing customer, order, or inventory records between platforms.'
      },
      {
        title: 'Human-in-the-Loop AI Drafting',
        description: 'AI drafts repetitive text, extracts invoice line-items, or categorizes requests—ready for one-click human approval.'
      },
      {
        title: 'Exception Monitoring & Alerts',
        description: 'Instant notifications when an order is flagged, an approval is pending, or data requires manual intervention.'
      },
      {
        title: 'Audit Trails & Transparency',
        description: 'Full logging of every action taken by the automated pipeline so nothing happens silently.'
      }
    ],
    interactiveDemoType: 'automation',
    scopeFactors: [
      'Available APIs or data formats of the tools you currently use',
      'Specific data transformation and validation rules needed',
      'Volume of records processed daily/weekly',
      'Human sign-off checkpoints and exception handling paths'
    ],
    ctaLabel: 'Find what we can automate',
    relevantWorkIds: ['relay-system', 'analytico-ai'],
    faqs: [
      {
        question: 'Is AI reliable enough to use in our core business operations?',
        answer: 'We treat AI as a powerful drafting and classification assistant, not an autonomous boss. We intentionally design human-in-the-loop checkpoints at critical junctures (e.g. quote totals, legal language, client dispatches) so an experienced human retains full authority.'
      },
      {
        question: 'Do we need to replace our existing software?',
        answer: 'Rarely. Most of our automations bridge the software you already use (Google Workspace, existing accounting software, custom databases) via APIs and secure webhooks.'
      }
    ]
  },
  {
    id: 'business-operations',
    slug: 'business-operations',
    navTitle: 'Run your business in one place',
    pageTitle: 'Bring your business information into one place.',
    shortDescription: 'Custom internal dashboards, portals and tracking systems built around your operational rules.',
    definition: 'Bespoke operational web applications tailored to your specific workflows—giving leadership and staff clear visibility into orders, assets, staff tasks, and metrics.',
    iconName: 'Layers',
    problemStatement: 'Core operations run across a chaotic mix of spreadsheets, paper dockets, and chat groups, making it impossible to see the real status of jobs or inventory.',
    rightForYouIf: [
      'Standard SaaS tools feel either too generic, overly complex, or prohibitively expensive per user seat.',
      'Your operations have unique rules or localized workflows that off-the-shelf software cannot accommodate.',
      'Managers lack real-time visibility into daily progress without calling multiple supervisors.',
      'Clients or contractors need a secure portal to upload documents, track job progress, or approve milestones.'
    ],
    capabilities: [
      {
        title: 'Operational Status Dashboards',
        description: 'Real-time overview of active projects, pending dispatches, equipment status, and daily team tasks.'
      },
      {
        title: 'Client & Vendor Portals',
        description: 'Dedicated login areas where clients can inspect job progress, download invoices, or submit support tickets.'
      },
      {
        title: 'Role-Based Access Control (RBAC)',
        description: 'Granular permissions ensuring employees, managers, and external clients only see what is relevant to them.'
      },
      {
        title: 'Custom Inventory & Job Tracking',
        description: 'Bespoke tracking for physical assets, warehouse supplies, workshop jobs, or dispatch fleets.'
      },
      {
        title: 'Secure Cloud Infrastructure',
        description: 'Reliable database architecture, automated daily backups, and encrypted user authentication.'
      }
    ],
    interactiveDemoType: 'operations',
    scopeFactors: [
      'Number of custom entities (e.g. jobs, equipment, inventory items, clients)',
      'User roles and authorization rules required',
      'Reporting requirements and metric calculations',
      'Historical data migration from existing spreadsheets'
    ],
    ctaLabel: 'Discuss our operations',
    relevantWorkIds: ['towmate', 'plant-pulse-remote', 'zororo'],
    faqs: [
      {
        question: 'How does custom software compare to subscribing to an off-the-shelf SaaS?',
        answer: 'Off-the-shelf SaaS is good for standard needs, but per-seat monthly subscription costs mount quickly as your team grows, and you are forced to alter your business rules to match their rigid software. A custom system is designed around your exact operational rules and is owned by you without per-seat lock-in.'
      },
      {
        question: 'Can this run on tablets or mobile phones for field staff?',
        answer: 'Yes. All operational interfaces are responsive web apps that work seamlessly on iPhones, Android smartphones, tablets, laptops, and workshop terminals.'
      }
    ]
  },
  {
    id: 'product-development',
    slug: 'product-development',
    navTitle: 'Build your product idea',
    pageTitle: 'Turn your product idea into something people can use.',
    shortDescription: 'Technical discovery, clickable prototypes and full-stack engineering from MVP to launch.',
    definition: 'End-to-end product development for founders and business innovators—turning raw concepts into functional, resilient software products ready for real market feedback.',
    iconName: 'Boxes',
    problemStatement: 'You have identified a market need or business opportunity, but lack the technical engineering leadership to design, architect, and code a working product.',
    rightForYouIf: [
      'You are a startup founder with domain expertise who needs a technical co-developer to build an MVP.',
      'You are an established company testing a new digital service line or subsidiary product.',
      'You need high-fidelity prototypes to demonstrate feasibility to partners or investors.',
      'You want disciplined engineering that prioritizes speed to market without creating throwaway spaghetti code.'
    ],
    capabilities: [
      {
        title: 'Technical Discovery & Architecture',
        description: 'Scoping user journeys, data models, edge cases, and selecting the optimal technology stack.'
      },
      {
        title: 'Interactive UI/UX Prototyping',
        description: 'Designing intuitive, high-craft interfaces that users can test and interact with before building.'
      },
      {
        title: 'Full-Stack Web Engineering',
        description: 'Building robust frontends (React, TypeScript, Tailwind) and scalable backends with secure databases.'
      },
      {
        title: 'AI & 3rd-Party Integrations',
        description: 'Integrating foundation models, search grounding, payment gateways, and communications APIs.'
      },
      {
        title: 'Testing, Deployment & Sprints',
        description: 'Continuous integration, cloud deployment, telemetry instrumentation, and fast post-launch iteration.'
      }
    ],
    interactiveDemoType: 'product',
    scopeFactors: [
      'Core feature set for Minimum Viable Product (MVP)',
      'Third-party APIs and payment gateway requirements',
      'User authentication, billing tiers, or subscription logic',
      'Target deployment environment and scaling expectations'
    ],
    ctaLabel: 'Discuss my product idea',
    relevantWorkIds: ['mist-civic', 'brandmind-ai', 'clarity-ai', 'lifeos'],
    faqs: [
      {
        question: 'How do we decide what goes into the MVP?',
        answer: 'We conduct a structured discovery session to isolate the single core value loop—the smallest feature set that solves the primary problem for your early adopters. Non-essential features are documented for post-launch sprint phases.'
      },
      {
        question: 'Who owns the intellectual property (IP) and code?',
        answer: 'You retain 100% ownership of your business IP, application code, and data upon completion of contract milestones.'
      }
    ]
  },
  {
    id: 'brand-visibility',
    slug: 'brand-visibility',
    navTitle: 'Make your brand stand out',
    pageTitle: 'Give your business a look people recognise.',
    shortDescription: 'Professional logo design, promotional posters and fixed-price monthly visual packages.',
    definition: 'Strategic visual identity and promotional graphic design tailored to give Zimbabwean and regional businesses an authoritative, polished look across digital and physical touchpoints.',
    iconName: 'Palette',
    problemStatement: 'Your business provides first-class service, but your social posters, logos, and promotional graphics look uncoordinated and homemade, weakening customer trust.',
    rightForYouIf: [
      'You want your brand to command respect and look as professional as corporate competitors.',
      'You need a steady stream of promotional graphics for WhatsApp status, Facebook, and Instagram campaigns.',
      'You need a refreshed vector logo that prints crisply on vehicles, signage, and uniforms.',
      'You prefer clear, fixed package pricing rather than unpredictable designer hourly rates.'
    ],
    capabilities: [
      {
        title: 'Logo & Brand Identity Refinement',
        description: 'Crisp vector logos, typographic rules, and color palettes that represent your business scale ($5 add-on with poster packages).'
      },
      {
        title: 'Commercial Promotional Posters',
        description: 'High-impact promotional graphics designed with clear hierarchy, professional typography, and compelling hooks.'
      },
      {
        title: 'Monthly Visual Presence Packages',
        description: 'Fixed-price 31-design monthly packages ($60/mo) delivering consistent, daily branded social and status artwork.'
      },
      {
        title: 'Architectural & Product Visuals',
        description: 'Refined presentation of industrial, architectural, cosmetic, or retail goods for catalogues and ads.'
      },
      {
        title: 'Print-Ready & Digital Assets',
        description: 'Delivered in high-resolution formats suitable for digital screens, signage, dockets, and merchandise.'
      }
    ],
    interactiveDemoType: 'brand',
    scopeFactors: [
      'Package selection (Essential $10, Business $30, Monthly Presence $60/mo)',
      'Logo design inclusion ($5 extra)',
      'Turnaround requirements and revision rounds',
      'Format requirements (social portrait, landscape banner, print-ready CMYK)'
    ],
    ctaLabel: 'Plan my designs',
    relevantWorkIds: ['multivate', 'mox', 'happie', 'dr-shana'],
    faqs: [
      {
        question: 'Are social media advertising spend or account management included in the monthly design package?',
        answer: 'No. The Monthly Presence package ($60/mo) strictly delivers 31 unique, custom-branded visual designs ready for you to publish over the month. Ad spend, copywriting for ad accounts, and publishing/community management are handled by the customer.'
      },
      {
        question: 'How do revisions work for design packages?',
        answer: 'Each package includes focused revision rounds to refine text, layout, and color before final delivery in full-resolution PNG/JPG and vector formats.'
      }
    ]
  }
];
