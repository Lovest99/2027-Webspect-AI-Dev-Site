export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  clientOrProject: string;
  projectType: 'Client project' | 'Independent product' | 'Interface prototype' | 'Design concept' | 'In development';
  sector: string;
  summary: string;
  challenge: string;
  approach: string;
  delivered: string[];
  keyDecisions: string[];
  techOrTools: string[];
  externalUrl?: string;
  relatedSolutionSlug: string;
  badgeAccent: string;
}

export const WORK_ITEMS: CaseStudy[] = [
  {
    id: 'multivate',
    slug: 'multivate-construction',
    title: 'Multivate Construction – Corporate Digital Presence & Project Portfolio',
    clientOrProject: 'Multivate Construction',
    projectType: 'Client project',
    sector: 'Commercial Civil Engineering & Building',
    summary: 'A robust digital platform and branded presentation showcasing commercial building capacity, civil works, and machinery fleet.',
    challenge: 'Multivate delivers high-stakes commercial construction and earthmoving projects across Zimbabwe, but lacked a central digital home that proved their project history, heavy machinery capacity, and engineering standards to corporate developers.',
    approach: 'Designed an authoritative, high-clarity web platform structured around past civil completions, equipment specifications, and direct tender enquiry channels. Created clean visual hierarchies with high-contrast architectural imagery and clear contact routes.',
    delivered: [
      'Comprehensive company website with mobile-optimized architecture',
      'Categorized commercial project gallery (civil works, commercial builds, renovations)',
      'Direct tender and quotation inquiry flows connected to management',
      'Corporate promotional graphic collateral matching the new visual standards'
    ],
    keyDecisions: [
      'Prioritized equipment and safety accreditation proof directly on the homepage over abstract marketing copy',
      'Engineered an ultra-fast image gallery that loads seamlessly over variable mobile network connections'
    ],
    techOrTools: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Vector Branding'],
    relatedSolutionSlug: 'digital-presence',
    badgeAccent: '#D97706'
  },
  {
    id: 'mox',
    slug: 'professional-mox',
    title: 'Professional Mox – Executive Cleaning & Corporate Facility Care',
    clientOrProject: 'Professional Mox',
    projectType: 'Client project',
    sector: 'Corporate Hygiene & Facilities Maintenance',
    summary: 'Clear service tier architecture, quotation intake workflows, and branded promotional collateral for specialized B2B hygiene services.',
    challenge: 'Professional Mox offers specialized industrial hygiene, fumigation, and corporate office care. Inquiries arrived scattered across WhatsApp and phone calls without details on square meterage or frequency, causing delay in sending accurate bids.',
    approach: 'Structured their service offerings into transparent enterprise and commercial tiers. Built a quick-intake service scoping flow where clients specify premises type, frequency, and custom needs before handoff.',
    delivered: [
      'Modern, trustworthy corporate website with clear service breakdowns',
      'Interactive facility scope questionnaire that pre-populates quotation requests',
      'Corporate brand collateral and social promotional suite',
      'Direct WhatsApp quote request integration with structured parameters'
    ],
    keyDecisions: [
      'Replaced vague service bullet points with clear premises checklists (offices, schools, medical facilities)',
      'Integrated an upfront checklist so clients submit floor size and frequency before the first call'
    ],
    techOrTools: ['React', 'Tailwind CSS', 'WhatsApp Integration', 'Brand Design'],
    relatedSolutionSlug: 'customer-enquiries',
    badgeAccent: '#0D9488'
  },
  {
    id: 'mist-civic',
    slug: 'mist-civic-platform',
    title: 'MIST Platform – Geotagged Civic & Municipal Reporting System',
    clientOrProject: 'MIST Civic System',
    projectType: 'Independent product',
    sector: 'Civic Infrastructure & Public Works',
    summary: 'A public-facing civic reporting application enabling residents to report municipal faults with geotagged media and track repair status.',
    challenge: 'Urban residents in Zimbabwe frequently encounter pipe bursts, sewer leakages, and uncollected refuse, but existing municipal channels rely on busy phone switchboards with zero transparent tracking.',
    approach: 'Architected a mobile-first web application where citizens submit geotagged reports with photos in under 45 seconds. Designed an internal triage dashboard for routing reports to municipal departments with status tags.',
    delivered: [
      'Citizen reporting web app with automatic GPS coordinate capture',
      'Public incident status tracker allowing residents to verify repair progress',
      'Departmental routing and categorization taxonomy',
      'Lightweight, high-accessibility UI optimized for low-bandwidth mobile connections'
    ],
    keyDecisions: [
      'Allowed anonymous report submissions to eliminate sign-up friction while using device hashing to prevent spam',
      'Kept the citizen flow to 3 simple steps: location, photo, description'
    ],
    techOrTools: ['React', 'TypeScript', 'Geolocation API', 'Leaflet', 'Cloud Infrastructure'],
    externalUrl: 'https://mist.co.zw/',
    relatedSolutionSlug: 'product-development',
    badgeAccent: '#2563EB'
  },
  {
    id: 'happie',
    slug: 'happie-cosmetics-enterprise',
    title: 'Happie Cosmetics & Enterprise – FMCG & Beauty Brand Presence',
    clientOrProject: 'Happie Cosmetics / Happie Enterprise',
    projectType: 'Client project',
    sector: 'Beauty Retail & Wholesale Distribution',
    summary: 'Vibrant product presentation, wholesale catalogue architecture, and consistent promotional campaign graphics.',
    challenge: 'Happie operates across retail beauty cosmetics and wholesale FMCG distribution. Their existing social content was ad-hoc, with low product legibility and inconsistent pricing announcements across regional WhatsApp groups.',
    approach: 'Designed a high-impact, cohesive visual identity for product launches. Created structured catalogue templates and monthly promotional poster suites that highlight product benefits, ingredients, and bulk wholesale tiers.',
    delivered: [
      'High-resolution promotional poster campaign for retail beauty ranges',
      'Wholesale FMCG product catalogue layout with clear pricing tiers',
      'Monthly status and social promotional graphic packages',
      'Branded digital assets formatted for WhatsApp catalog and Instagram'
    ],
    keyDecisions: [
      'Developed a distinctive color-coded system separating retail cosmetics from bulk enterprise commodities',
      'Engineered templates for rapid weekly price updates without sacrificing visual polish'
    ],
    techOrTools: ['Brand System Design', 'Typography', 'Commercial Graphic Design', 'Digital Catalogues'],
    relatedSolutionSlug: 'brand-visibility',
    badgeAccent: '#DB2777'
  },
  {
    id: 'general-aluminium',
    slug: 'general-aluminium-solutions',
    title: 'General Aluminium Solutions – Architectural Fabrication Showcase',
    clientOrProject: 'General Aluminium Solutions',
    projectType: 'Client project',
    sector: 'Architectural Glazing & Metal Fabrication',
    summary: 'Custom architectural portfolio and quotation specification system for aluminium doors, windows, and shopfronts.',
    challenge: 'Fabricating custom aluminium shopfronts, sliding doors, and curtain walls requires exact measurements and profile specifications. Inquiries without dimensions resulted in back-and-forth delays.',
    approach: 'Created an editorial digital showcase featuring real residential and commercial installations. Integrated an architectural specification builder guiding homeowners and builders through profile choices before requesting site visits.',
    delivered: [
      'Portfolio website displaying completed residential and commercial installations',
      'Interactive profile and glass selector for preliminary cost estimates',
      'Branded project sheets for tender submissions and builder meetings',
      'Direct WhatsApp handoff linking requested aluminium profile codes'
    ],
    keyDecisions: [
      'Focused visuals on macro details (clean mitres, powder-coated finishes, hardware)',
      'Created an intuitive profile guide demystifying glass thickness and frame types for property owners'
    ],
    techOrTools: ['React', 'Tailwind CSS', 'Figma', 'Asset Optimization'],
    relatedSolutionSlug: 'digital-presence',
    badgeAccent: '#4B5563'
  },
  {
    id: 'relay-system',
    slug: 'relay-automation-engine',
    title: 'Relay AI – Intelligent Webhook & Event Automation Router',
    clientOrProject: 'Relay AI',
    projectType: 'Independent product',
    sector: 'Developer Tools & Business Automation',
    summary: 'A fast webhook orchestration engine that ingests, filters, and routes operational events across business apps with human-in-the-loop safeguards.',
    challenge: 'Small businesses and agencies struggle to connect fragmented apps without paying exorbitant Zapier monthly fees for high-volume simple webhooks.',
    approach: 'Built a lightweight, event-driven router in Node.js with a visual configuration dashboard in React. Supported instant JSON schema parsing, condition filters, and review steps for sensitive transactions.',
    delivered: [
      'Interactive visual webhook pipeline builder',
      'Live payload inspection console with replay capabilities',
      'Configurable alert routes to WhatsApp, Slack, and email',
      'Human-in-the-loop review threshold for high-value orders'
    ],
    keyDecisions: [
      'Implemented local in-memory fallback queues to prevent data loss during network hiccups',
      'Designed a zero-confusion visual rule builder rather than complex script editors'
    ],
    techOrTools: ['Node.js', 'Express', 'React', 'Tailwind CSS', 'Webhooks API'],
    externalUrl: 'https://relay-ai-pro.lovable.app/',
    relatedSolutionSlug: 'workflow-automation',
    badgeAccent: '#059669'
  },
  {
    id: 'dr-shana',
    slug: 'dr-shana-healthcare',
    title: 'Dr Shana – Clinical Practice Identity & Patient Experience',
    clientOrProject: 'Dr Shana Medical Consulting',
    projectType: 'Client project',
    sector: 'Healthcare & Specialized Clinical Practice',
    summary: 'Dignified medical practice branding, patient appointment booking journeys, and clear clinical service information.',
    challenge: 'Patients looking for specialized consultation were overwhelmed by clinical jargon and had to phone during specific desk hours to find consulting times and fee structures.',
    approach: 'Developed an empathetic, clean medical identity with clear clinic hours, consultation guidelines, and an accessible appointment request workflow.',
    delivered: [
      'Clean, accessible medical website with patient care guidelines',
      'Appointment scheduling enquiry form with consultation category selection',
      'Refined clinical brand stationery, signage guidelines, and patient info sheets',
      'Fast-loading mobile layout adhering to strict accessibility standards'
    ],
    keyDecisions: [
      'Maintained a calming, warm neutral aesthetic avoiding sterile cold blue hospital tones',
      'Highlighted doctor qualifications, consultation fee transparency, and directions prominently'
    ],
    techOrTools: ['React', 'Accessibility WCAG 2.2 AA', 'Typography', 'Brand Design'],
    relatedSolutionSlug: 'brand-visibility',
    badgeAccent: '#4F46E5'
  }
];
