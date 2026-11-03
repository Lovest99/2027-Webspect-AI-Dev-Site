export interface ResourceArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Strategy & Web' | 'Automation & AI' | 'Product Engineering' | 'Design & Branding';
  publishedDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    location: string;
  };
  summary: string;
  takeaway: string;
  sections: {
    heading: string;
    content: string[];
  }[];
  relatedSolutionSlug: string;
}

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    id: 'website-purpose',
    slug: 'what-should-a-business-website-help-customers-do',
    title: 'What should a business website actually help customers do?',
    subtitle: 'Moving beyond digital brochures: Why websites fail when they forget the customer’s immediate question.',
    category: 'Strategy & Web',
    publishedDate: 'October 14, 2026',
    readTime: '5 min read',
    author: {
      name: 'Bright Cheteni',
      role: 'AI Systems Engineer & Full-stack Developer',
      location: 'Zimbabwe'
    },
    summary: 'Most business websites read like corporate vanity projects instead of commercial tools. A practical guide on structuring your site around trust, proof, and the single logical next step.',
    takeaway: 'A website succeeds when a visitor with zero prior knowledge can verify within 10 seconds: what you do, why you are qualified, and how to get in touch.',
    sections: [
      {
        heading: 'The Brochure Trap',
        content: [
          'Many business owners believe that having a website simply means publishing an "About Us" paragraph, listing five bullet points under "Services," and pasting a generic email address on a contact page.',
          'In reality, visitors arrive with high skepticism and short attention spans. They are not browsing out of curiosity; they have an active problem they want solved, or they were referred by someone and want to confirm you are legitimate before picking up the phone.',
          'When your homepage fails to immediately answer what you do and who you serve, visitors hit the back button and look for someone who makes it obvious.'
        ]
      },
      {
        heading: 'The Three Questions Every Page Must Answer in 10 Seconds',
        content: [
          '1. "Am I in the right place?" State plainly what you do without marketing buzzwords. If you build commercial aluminium shopfronts in Zimbabwe, say so. Do not say "We provide holistic architectural envelope paradigms."',
          '2. "Can they actually deliver?" Show real proof immediately: photographs of completed work, names of real projects, recognizable certifications, or clear equipment capabilities.',
          '3. "What happens next?" Give one unmistakable action: "Request a quote on WhatsApp," "View commercial projects," or "Book an inspection." If you present six rival buttons of equal weight, visitors click none.'
        ]
      },
      {
        heading: 'Designing for the Reality of Mobile and Data Constraints',
        content: [
          'In Southern Africa and across many global markets, over 75% of your prospective buyers browse your website on a mobile phone over cellular networks.',
          'If your page takes 8 seconds to load bloated video backgrounds and uncompressed 10MB images, potential customers abandon the page before your headline even paints on screen.',
          'Speed is an editorial and engineering discipline. At Webspect, every image is optimized, scripts are kept lean, and tap targets are comfortably spaced for thumbs.'
        ]
      }
    ],
    relatedSolutionSlug: 'digital-presence'
  },
  {
    id: 'automation-readiness',
    slug: 'is-your-business-ready-for-automation',
    title: 'Is your business ready for automation? (The 4 sanity checks)',
    subtitle: 'Why automating a broken or undefined manual process only accelerates chaos.',
    category: 'Automation & AI',
    publishedDate: 'September 28, 2026',
    readTime: '6 min read',
    author: {
      name: 'Bright Cheteni',
      role: 'AI Systems Engineer & Full-stack Developer',
      location: 'Zimbabwe'
    },
    summary: 'Before paying for automation software or attempting AI integrations, use these four practical sanity tests to determine whether your workflow is truly ready to be automated.',
    takeaway: 'Never automate what you cannot first write down as a reliable manual checklist with clear exception rules.',
    sections: [
      {
        heading: 'The Seduction of "Automating Everything"',
        content: [
          'Automation and AI promise to eliminate grunt work, and they genuinely can. But business owners often mistake software for operational discipline.',
          'If two different employees handle the same customer request using conflicting criteria, a software script cannot magically guess which one is correct. Automating an ambiguous workflow simply produces mistakes faster.'
        ]
      },
      {
        heading: 'The 4 Sanity Checks Before You Write a Single Line of Code',
        content: [
          'Check 1: Frequency and Pain. Does this task happen at least 5 to 10 times a week, and does doing it manually create a noticeable bottleneck or human error?',
          'Check 2: Predictable Inputs. Does the incoming data arrive in structured fields (e.g., form submissions, standard spreadsheets, or consistent emails) rather than handwritten sticky notes or rambling voice notes?',
          'Check 3: Documented Decision Rules. Can you write an "If-This-Then-That" document explaining what happens when data is missing or unusual?',
          'Check 4: Human-in-the-Loop Tolerance. Have you defined where human judgment is non-negotiable? Automations should handle data retrieval and draft generation, while your team reviews and clicks "Approve."'
        ]
      },
      {
        heading: 'Where to Start Small',
        content: [
          'Start with low-risk, high-frequency tasks: automated lead intake notifications, auto-generating quote PDFs from simple spreadsheet entries, or syncing customer contact details to an operations board.',
          'Once the baseline workflow is dependable, you can introduce intelligence layers like document classification or automated summary drafts.'
        ]
      }
    ],
    relatedSolutionSlug: 'workflow-automation'
  },
  {
    id: 'custom-software-prep',
    slug: 'what-to-prepare-before-requesting-a-custom-system',
    title: 'What to prepare before requesting a custom software system',
    subtitle: 'How to save weeks of development time and thousands of dollars by preparing the right operational inputs.',
    category: 'Product Engineering',
    publishedDate: 'September 12, 2026',
    readTime: '7 min read',
    author: {
      name: 'Bright Cheteni',
      role: 'AI Systems Engineer & Full-stack Developer',
      location: 'Zimbabwe'
    },
    summary: 'A step-by-step checklist of what an engineer actually needs to know about your operations before scoping a custom portal, dashboard, or internal system.',
    takeaway: 'The clearest sign of a successful software build is a client who knows their current manual bottlenecks and user roles before the first kickoff call.',
    sections: [
      {
        heading: 'Why Many Software Projects Stall Early',
        content: [
          'The biggest risk in custom software development is not the technology stack; it is scope fog. When requirements are expressed vaguely ("We need a system like Uber, but for spare parts"), weeks are wasted guessing user expectations.',
          'When you come prepared with your actual operational artefacts, the path to a working MVP is direct, fast, and cost-effective.'
        ]
      },
      {
        heading: 'The 4 Artefacts You Should Bring to Your Scoping Session',
        content: [
          '1. Your Current Spreadsheets or Dockets. Bring the actual Excel or Google Sheets your team relies on today. Look at the column headers; those are your database fields.',
          '2. The People and Their Permissions. Who will log into this system? List their roles (e.g., Administrator, Workshop Supervisor, Field Technician, External Client) and what each should be allowed to view or edit.',
          '3. The Lifecycle of a Record. Trace the lifespan of your core entity (e.g., a Job Card, an Order, or an Incident Report) from "Submitted" to "In Progress," "Approved," and "Completed."',
          '4. The Non-Negotiable Core vs Nice-to-Haves. What single feature would make the system worth paying for on Day 1? Build that first; save secondary bells and whistles for Version 2.'
        ]
      }
    ],
    relatedSolutionSlug: 'business-operations'
  },
  {
    id: 'briefing-a-designer',
    slug: 'how-to-brief-a-designer-getting-visuals-that-sell',
    title: 'How to brief a designer: Getting visuals that sell without endless revisions',
    subtitle: 'The exact framework to turn your promotional goals into high-impact graphics that stop the scroll.',
    category: 'Design & Branding',
    publishedDate: 'August 29, 2026',
    readTime: '4 min read',
    author: {
      name: 'Bright Cheteni',
      role: 'AI Systems Engineer & Full-stack Developer',
      location: 'Zimbabwe'
    },
    summary: 'Why "make it pop" produces frustration, and how to write a 10-line creative brief that guarantees your promotional posters and brand artwork hit the mark on the first draft.',
    takeaway: 'Great commercial design is not subjective decoration; it is clear visual hierarchy delivering one single message to one specific audience.',
    sections: [
      {
        heading: 'Why Design Revisions Drag On',
        content: [
          'Most business owners struggle to brief designers because they focus on adjectives ("make it clean, elegant, modern and pop") rather than commercial constraints.',
          'Design is problem-solving. When you define the target customer, the primary message, and the exact contact route, the visual direction becomes clear.'
        ]
      },
      {
        heading: 'The 5-Line Briefing Template',
        content: [
          'Line 1: Target Audience. Who is holding the phone? (e.g., Property developers looking for commercial glazed aluminium windows).',
          'Line 2: The Hook / Headline. What is the single big offer or announcement? (e.g., "Heavy Civil Earthmoving Equipment Ready for Immediate Dispatch").',
          'Line 3: Supporting Details. Three bullet points maximum. (e.g., Certified operators, wet/dry hire rates, 24/7 breakdown support).',
          'Line 4: Single Action. What should they do right now? (e.g., "WhatsApp your site location to +263 78 767 9376 for a rate card").',
          'Line 5: Assets. Provide high-resolution logo files and uncompressed photos of your real equipment rather than generic stock images.'
        ]
      }
    ],
    relatedSolutionSlug: 'brand-visibility'
  },
  {
    id: 'web-tool-or-app',
    slug: 'website-internal-tool-or-mobile-app-which-do-you-need',
    title: 'Website, internal tool or mobile app: Which one does your business actually need?',
    subtitle: 'Avoiding the expensive trap of building a native mobile app when a fast web application solves the real problem.',
    category: 'Product Engineering',
    publishedDate: 'August 10, 2026',
    readTime: '6 min read',
    author: {
      name: 'Bright Cheteni',
      role: 'AI Systems Engineer & Full-stack Developer',
      location: 'Zimbabwe'
    },
    summary: 'How to evaluate technical format based on customer friction, development costs, maintenance overhead, and real device capabilities.',
    takeaway: 'Unless you require continuous background GPS tracking or deep Bluetooth device pairing, a responsive web app delivers 95% of the utility at a fraction of the build and maintenance cost.',
    sections: [
      {
        heading: 'The Myth of the Native App',
        content: [
          'Almost every founder or small business executive who visits us says, "We want an iOS and Android app on the Google Play Store."',
          'Then we ask: "Will your customers genuinely take the time to download a 60MB application, accept app permissions, and keep it on their phones just to order once a month?" Usually, the honest answer is no.',
          'Downloading an app is high friction. A responsive mobile web app opens in 1 second through a WhatsApp link or QR code with zero installation hurdles.'
        ]
      },
      {
        heading: 'The Quick Decision Matrix',
        content: [
          'Choose a Business Website if: Your primary goal is customer discovery, proof of credibility, and driving inbound phone calls, WhatsApp messages, or lead form submissions.',
          'Choose an Internal Tool / Dashboard if: Your goal is managing data, dispatching teams, updating job cards, or viewing business KPIs for your internal staff.',
          'Choose a Web Application (PWA) if: Customers or partners need interactive accounts, dashboards, or self-service portals that work across laptops, iPads, and phones.',
          'Choose a Native Mobile App only if: You are building a consumer habit product used multiple times daily, or requiring continuous background sensor hardware integration.'
        ]
      }
    ],
    relatedSolutionSlug: 'product-development'
  }
];
