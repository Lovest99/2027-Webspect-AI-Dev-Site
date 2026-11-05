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
  imagePath?: string;
  galleryImages?: string[];
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
    badgeAccent: '#D97706',
    imagePath: '/assets/aistudio/file_0000000034ec8211943d2fd9091f992f_33a58136.png',
    galleryImages: ['/assets/aistudio/file_0000000034ec8211943d2fd9091f992f_33a58136.png']
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
    badgeAccent: '#2563EB',
    imagePath: '/assets/aistudio/mist-01-hero-archived_202dda1a.jpg',
    galleryImages: [
      '/assets/aistudio/mist-01-hero-archived_202dda1a.jpg',
      '/assets/aistudio/mist-02-services-archived_7328dbc6.jpg'
    ]
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
    badgeAccent: '#4B5563',
    imagePath: '/assets/aistudio/file_0000000012fc821199272b82bcbe0dc1_ec2eb850.png',
    galleryImages: ['/assets/aistudio/file_0000000012fc821199272b82bcbe0dc1_ec2eb850.png']
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
    badgeAccent: '#059669',
    imagePath: '/assets/aistudio/relay-01-hero_3d5e6359.jpg',
    galleryImages: [
      '/assets/aistudio/relay-01-hero_3d5e6359.jpg',
      '/assets/aistudio/relay-03-dashboard_3d786d9a.jpg',
      '/assets/aistudio/relay-04-analytics_0c732112.jpg',
      '/assets/aistudio/relay-02-auth_83c6b048.jpg'
    ]
  },
  {
    id: 'dr-shana',
    slug: 'dr-shana-healthcare',
    title: 'Dr Shana – Natural Health Formulations & Delivery Distribution',
    clientOrProject: 'Dr Shana Healthcare & Food Supplements',
    projectType: 'Client project',
    sector: 'Healthcare & Natural Wellness Products',
    summary: 'E-commerce and nationwide delivery promotion campaign for herbal food supplements and natural health remedies.',
    challenge: 'Dr Shana manufactures premium liquid chlorophyll, guarana, and natural supplements in Zimbabwe, but needed clear, high-trust promotional assets that explain health benefits and drive phone/WhatsApp distribution orders.',
    approach: 'Designed authentic commercial campaign artwork highlighting primary health benefits (detoxification, gut health, immunity) with nationwide delivery callouts and direct order verification.',
    delivered: [
      'High-impact commercial campaign posters for Chlorophyll Plus Guarana and food supplements',
      'Direct order intake workflows connecting buyers to regional distribution hubs',
      'Mobile-ready nutritional benefit cards for WhatsApp marketing and social distribution',
      'Promotional signage guidelines for pharmacies and retail stockists'
    ],
    keyDecisions: [
      'Emphasized clear product dosage and verified health benefits over generic wellness stock imagery',
      'Prominently integrated Harare dispatch contact routes and nationwide logistics guarantees'
    ],
    techOrTools: ['Commercial Graphic Design', 'Campaign Collateral', 'Typography', 'Figma'],
    relatedSolutionSlug: 'brand-visibility',
    badgeAccent: '#059669',
    imagePath: '/assets/aistudio/file_00000000103c821188fc16c750cdb539_40815e79.png',
    galleryImages: [
      '/assets/aistudio/file_00000000103c821188fc16c750cdb539_40815e79.png',
      '/assets/aistudio/file_0000000005088211b5bd4bc964906c62_4ee6230b.png'
    ]
  },
  {
    id: 'analytico-ai-study',
    slug: 'analytico-business-intelligence',
    title: 'Analytico AI – Multi-Agent Business Intelligence & Predictive Analytics',
    clientOrProject: 'Analytico AI',
    projectType: 'Independent product',
    sector: 'Enterprise Analytics & Executive Reporting',
    summary: 'A team of five collaborative AI agents that ingest raw business data, model forecasts, and articulate plain-English boardroom summaries.',
    challenge: 'Business leaders spend hours wrestling with fragmented spreadsheets and SQL queries to compile basic weekly revenue trends and cohort retention numbers.',
    approach: 'Engineered an intuitive analytics suite with a relationship graph of 5 autonomous agents (Ingestor, Janitor, Analyst, Oracle, Narrator) that clean, model, forecast, and explain corporate KPIs automatically.',
    delivered: [
      'Full executive dashboard with live revenue metrics, churn indicators, and blended CAC curves',
      'Multi-agent collaborative graph interface with real-time status cues',
      'SOC 2 Type II compliant secure authentication with corporate SSO integration',
      'Automated board-ready narrative summaries with cited evidence'
    ],
    keyDecisions: [
      'Gave each AI agent a dedicated operational domain to ensure verifiable, deterministic calculations',
      'Designed a sleek, dark terminal-inspired interface with high-contrast data visualization'
    ],
    techOrTools: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini AI API', 'Data Visualization'],
    externalUrl: 'https://analyze-eloquent.lovable.app',
    relatedSolutionSlug: 'workflow-automation',
    badgeAccent: '#1442CB',
    imagePath: '/assets/aistudio/analytico-01-hero_b8a161d6.jpg',
    galleryImages: [
      '/assets/aistudio/analytico-01-hero_b8a161d6.jpg',
      '/assets/aistudio/analytico-03-dashboard_f6976e62.jpg',
      '/assets/aistudio/analytico-04-agent-network_1b58c3d0.jpg',
      '/assets/aistudio/analytico-02-auth_366c2970.jpg'
    ]
  },
  {
    id: 'clarity-ai-sichel',
    slug: 'clarity-ai-enterprise-vision',
    title: 'Clarity AI – Mobile Command Center for Sichel Energies & SIMRAC Zimbabwe',
    clientOrProject: 'Sichel Energies & SIMRAC Zimbabwe',
    projectType: 'Client project',
    sector: 'Commercial Energy, Logistics & Group Operations',
    summary: 'An executive mobile command center allowing corporate leadership to monitor national energy distribution, fuel reserves, and cashflow in real-time.',
    challenge: 'Executive leadership needed continuous visibility across regional fuel terminals and logistics fleets without waiting for end-of-day spreadsheet reconciliations.',
    approach: 'Architected a mobile-first executive dashboard with verified super-admin claims, live tank telemetry integrations, and instant WhatsApp summary pushes.',
    delivered: [
      'Mobile-first responsive executive dashboard ("Run your empire from your phone")',
      'Verified corporate authentication with custom domain email restrictions (@sichel.co.zw)',
      'Real-time supply chain monitoring with anomaly triggers',
      'Executive summary memo generator designed for instant decision-making'
    ],
    keyDecisions: [
      'Prioritized biometric mobile login and fast finger-touch ergonomics for leaders on the move',
      'Engineered an enterprise authentication system with role-based super-admin privileges'
    ],
    techOrTools: ['React', 'TypeScript', 'Tailwind CSS', 'Secure Auth', 'Enterprise Cloud'],
    externalUrl: 'https://clarity-empire-vision.lovable.app/',
    relatedSolutionSlug: 'product-development',
    badgeAccent: '#0369A1',
    imagePath: '/assets/aistudio/clarity-01-hero_1e4dd67f.jpg',
    galleryImages: [
      '/assets/aistudio/clarity-01-hero_1e4dd67f.jpg',
      '/assets/aistudio/clarity-02-auth_c17b6eb4.jpg'
    ]
  },
  {
    id: 'coverpilot-ops',
    slug: 'coverpilot-shift-automation',
    title: 'CoverPilot – Shift Coverage & On-Call Emergency Workforce Dispatch',
    clientOrProject: 'CoverPilot',
    projectType: 'Independent product',
    sector: 'Workforce Operations & Health/Safety Dispatch',
    summary: 'Automated shift coverage and on-call emergency scheduling eliminating frantic phone calls through instant SMS and WhatsApp replacement alerts.',
    challenge: 'When a critical industrial or security shift worker calls in absent, managers lose up to 90 minutes frantically calling off-duty workers to find a replacement.',
    approach: 'Engineered an automated coverage dispatch engine that monitors live shift rosters, calculates compliance and certification rules, and automatically contacts verified standby personnel.',
    delivered: [
      'Live shift deficit and coverage heatmap visualizations',
      'Automated SMS & WhatsApp cascade messaging to qualified workers',
      'Instant shift acceptance confirmation with direct calendar sync',
      'Comprehensive audit log of staffing levels for regulatory compliance'
    ],
    keyDecisions: [
      'Implemented automated compliance verification so uncertified workers cannot accidentally be dispatched',
      'Created visual shift coverage charts displaying 24-hour deficit warnings at a glance'
    ],
    techOrTools: ['React', 'TypeScript', 'Scheduling Algorithms', 'Real-time Messaging', 'Tailwind CSS'],
    externalUrl: 'https://coverpilot-ops.lovable.app/',
    relatedSolutionSlug: 'workflow-automation',
    badgeAccent: '#2563EB',
    imagePath: '/assets/aistudio/coverpilot-01-hero_8848c129.jpg',
    galleryImages: [
      '/assets/aistudio/coverpilot-01-hero_8848c129.jpg',
      '/assets/aistudio/coverpilot-03-coverage-charts_f9e72658.jpg',
      '/assets/aistudio/coverpilot-02-auth_f228c853.jpg'
    ]
  }
];
