export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'Enterprise & Automation' | 'Productivity & AI' | 'Civic & Utilities' | 'Industry & IoT';
  status: 'Live Public Application' | 'Interactive Prototype' | 'In Development' | 'Civic / Client Platform';
  tagline: string;
  whoItIsFor: string;
  whatItHelpsWith: string;
  keyFeatures: string[];
  publicUrl?: string;
  actionType: 'explore' | 'demo' | 'register';
  accentColor: string;
  techStack: string[];
  heroImage?: string;
  screenshots?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'mist',
    slug: 'mist',
    name: 'MIST Platform',
    category: 'Civic & Utilities',
    status: 'Civic / Client Platform',
    tagline: 'Municipal and civic issue reporting platform for residents and service authorities.',
    whoItIsFor: 'Municipal councils, community organizations, and urban residents.',
    whatItHelpsWith: 'Streamlines reporting of water leaks, burst pipes, refuse collection and street lighting issues with geotagged locations.',
    keyFeatures: [
      'Geotagged community incident submissions',
      'Categorized department routing for city maintenance teams',
      'Public issue progress tracking and resolution status'
    ],
    publicUrl: 'https://mist.co.zw/',
    actionType: 'explore',
    accentColor: '#0284C7',
    techStack: ['React', 'TypeScript', 'Geo-Services', 'Cloud Backend'],
    heroImage: '/assets/aistudio/mist-01-hero-archived_202dda1a.jpg',
    screenshots: [
      '/assets/aistudio/mist-01-hero-archived_202dda1a.jpg',
      '/assets/aistudio/mist-02-services-archived_7328dbc6.jpg'
    ]
  },
  {
    id: 'analytico-ai',
    slug: 'analytico-ai',
    name: 'Analytico AI',
    category: 'Enterprise & Automation',
    status: 'Interactive Prototype',
    tagline: 'AI-assisted business intelligence and automated narrative reporting.',
    whoItIsFor: 'Business operators, sales leaders, and analysts wanting quick data clarity.',
    whatItHelpsWith: 'Transforms raw spreadsheets and transactional CSVs into plain-English management summaries and trend visualizations.',
    keyFeatures: [
      'Drag-and-drop CSV and spreadsheet parsing',
      'Automated executive bullet summary generation',
      'Dynamic charts illustrating revenue and operational metrics'
    ],
    publicUrl: 'https://analyze-eloquent.lovable.app',
    actionType: 'demo',
    accentColor: '#1442CB',
    techStack: ['React', 'Tailwind CSS', 'Gemini AI API', 'Data Visualization'],
    heroImage: '/assets/aistudio/analytico-01-hero_b8a161d6.jpg',
    screenshots: [
      '/assets/aistudio/analytico-01-hero_b8a161d6.jpg',
      '/assets/aistudio/analytico-03-dashboard_f6976e62.jpg',
      '/assets/aistudio/analytico-04-agent-network_1b58c3d0.jpg',
      '/assets/aistudio/analytico-02-auth_366c2970.jpg'
    ]
  },
  {
    id: 'relay-ai',
    slug: 'relay-ai',
    name: 'Relay AI',
    category: 'Enterprise & Automation',
    status: 'Interactive Prototype',
    tagline: 'Intelligent webhook router and event-driven automation for business teams.',
    whoItIsFor: 'Digital businesses, agencies, and operations teams managing multiple tools.',
    whatItHelpsWith: 'Routes incoming leads and system events between messaging tools, spreadsheets, and notification channels with customizable logic.',
    keyFeatures: [
      'Webhook listener with conditional branch rules',
      'Payload inspection and instant formatting',
      'Human-in-the-loop review alerts for high-value transactions'
    ],
    publicUrl: 'https://relay-ai-pro.lovable.app/',
    actionType: 'demo',
    accentColor: '#0F766E',
    techStack: ['Node.js', 'Express', 'React', 'Webhook Handlers'],
    heroImage: '/assets/aistudio/relay-01-hero_3d5e6359.jpg',
    screenshots: [
      '/assets/aistudio/relay-01-hero_3d5e6359.jpg',
      '/assets/aistudio/relay-03-dashboard_3d786d9a.jpg',
      '/assets/aistudio/relay-04-analytics_0c732112.jpg',
      '/assets/aistudio/relay-02-auth_83c6b048.jpg'
    ]
  },
  {
    id: 'lifeos',
    slug: 'lifeos',
    name: 'LifeOS',
    category: 'Productivity & AI',
    status: 'Interactive Prototype',
    tagline: 'Personal operating system for deliberate daily planning and focus tracking.',
    whoItIsFor: 'Entrepreneurs, software engineers, and independent professionals.',
    whatItHelpsWith: 'Combines daily priority planning, habit consistency loops, and personal milestone tracking in a clean, distraction-free interface.',
    keyFeatures: [
      'Single-screen morning priority planner',
      'Micro-habit tracking with streak resilience',
      'Focus session timer and quick note capture'
    ],
    publicUrl: 'https://life-bright.ai.studio/',
    actionType: 'demo',
    accentColor: '#4338CA',
    techStack: ['React', 'TypeScript', 'Local State', 'Clean UI']
  },
  {
    id: 'towmate',
    slug: 'towmate',
    name: 'TowMate',
    category: 'Civic & Utilities',
    status: 'Interactive Prototype',
    tagline: 'Rapid roadside assistance and towing dispatch locator.',
    whoItIsFor: 'Motorists, recovery truck operators, and roadside emergency dispatchers.',
    whatItHelpsWith: 'Allows stranded drivers to request nearby towing assistance with precise GPS coordinates without confusing phone directions.',
    keyFeatures: [
      'One-tap GPS breakdown distress signal',
      'Nearest operator distance and contact display',
      'Clear vehicle type and situation categorisation'
    ],
    publicUrl: 'https://red-button-tow.lovable.app/',
    actionType: 'demo',
    accentColor: '#DC2626',
    techStack: ['Mobile Web App', 'Geolocation API', 'React', 'Tailwind'],
    heroImage: '/assets/aistudio/towmate-01-hero_04eb9363.jpg',
    screenshots: [
      '/assets/aistudio/towmate-01-hero_04eb9363.jpg',
      '/assets/aistudio/towmate-02-auth_481374b9.jpg'
    ]
  },
  {
    id: 'brandmind-ai',
    slug: 'brandmind-ai',
    name: 'BrandMind AI',
    category: 'Productivity & AI',
    status: 'Interactive Prototype',
    tagline: 'Contextual brand positioning and editorial campaign copy synthesizer.',
    whoItIsFor: 'Marketing consultants, solo business owners, and creative directors.',
    whatItHelpsWith: 'Synthesizes market differentiation angles, value propositions, and social headlines grounded in specific audience segments.',
    keyFeatures: [
      'Brand voice persona configuration',
      'Differentiation matrix generator',
      'Channel-specific copy suggestions with tone moderation'
    ],
    publicUrl: 'https://brand-mind-aizim.lovable.app/',
    actionType: 'demo',
    accentColor: '#7C3AED',
    techStack: ['TypeScript', 'Gemini AI API', 'React'],
    heroImage: '/assets/aistudio/brandmind-01-hero_14e58a22.jpg',
    screenshots: [
      '/assets/aistudio/brandmind-01-hero_14e58a22.jpg',
      '/assets/aistudio/brandmind-02-design-workspace_502803f9.jpg',
      '/assets/aistudio/brandmind-03-templates_1f4783e1.jpg'
    ]
  },
  {
    id: 'bible-gpt',
    slug: 'bible-gpt',
    name: 'Bible GPT',
    category: 'Productivity & AI',
    status: 'Interactive Prototype',
    tagline: 'Theological study assistant and contextual cross-reference explorer.',
    whoItIsFor: 'Pastors, theology students, study groups, and individual readers.',
    whatItHelpsWith: 'Provides historical context, linguistic roots, and cross-chapter synthesis for scripture passages without speculative commentary.',
    keyFeatures: [
      'Passage cross-reference mapping',
      'Historical context and original language study prompts',
      'Topical sermon and study guide drafting'
    ],
    publicUrl: 'https://divine-insight-forge.lovable.app/',
    actionType: 'demo',
    accentColor: '#B45309',
    techStack: ['React', 'AI Knowledge Retrieval', 'TypeScript'],
    heroImage: '/assets/aistudio/biblegpt-01-hero_cb51e5de.jpg',
    screenshots: [
      '/assets/aistudio/biblegpt-01-hero_cb51e5de.jpg',
      '/assets/aistudio/biblegpt-03-feature-showcase_1d744968.jpg',
      '/assets/aistudio/biblegpt-02-auth_f67c298d.jpg'
    ]
  },
  {
    id: 'coverpilot',
    slug: 'coverpilot',
    name: 'CoverPilot',
    category: 'Enterprise & Automation',
    status: 'Interactive Prototype',
    tagline: 'Automated shift coverage, on-call dispatch, and workforce scheduling.',
    whoItIsFor: 'Healthcare shifts, security operators, and high-tempo industrial workforces.',
    whatItHelpsWith: 'Eliminates frantic phone calls when team members call in absent by instantly matching certified replacements through automated SMS and push.',
    keyFeatures: [
      'Real-time shift coverage heatmaps & deficit charts',
      'Instant SMS/WhatsApp broadcast to verified standby staff',
      'Compliance & certification validity verification before assignment'
    ],
    publicUrl: 'https://coverpilot-ops.lovable.app/',
    actionType: 'demo',
    accentColor: '#2563EB',
    techStack: ['React', 'TypeScript', 'Scheduling Algorithms', 'Real-time Alerts'],
    heroImage: '/assets/aistudio/coverpilot-01-hero_8848c129.jpg',
    screenshots: [
      '/assets/aistudio/coverpilot-01-hero_8848c129.jpg',
      '/assets/aistudio/coverpilot-03-coverage-charts_f9e72658.jpg',
      '/assets/aistudio/coverpilot-02-auth_f228c853.jpg'
    ]
  },
  {
    id: 'plant-pulse-remote',
    slug: 'plant-pulse-remote',
    name: 'Plant Pulse Remote',
    category: 'Industry & IoT',
    status: 'Interactive Prototype',
    tagline: 'Agricultural telemetry and micro-climate remote monitoring.',
    whoItIsFor: 'Commercial greenhouse managers, horticulture farmers, and agronomists.',
    whatItHelpsWith: 'Monitors soil moisture, ambient temperature, and humidity sensors across dispersed plots, alerting teams to critical thresholds.',
    keyFeatures: [
      'Multi-zone sensor status feed',
      'Threshold alert configurations (dryness, frost warning)',
      'Daily watering and environmental summary graphs'
    ],
    publicUrl: 'https://plant-pulse-remote.lovable.app/',
    actionType: 'demo',
    accentColor: '#15803D',
    techStack: ['Telemetry Webhooks', 'React Dashboard', 'Chart Engine'],
    heroImage: '/assets/aistudio/plantpulse-01-hero_5b98e4a5.jpg',
    screenshots: [
      '/assets/aistudio/plantpulse-01-hero_5b98e4a5.jpg',
      '/assets/aistudio/plantpulse-02-auth_80a33401.jpg'
    ]
  },
  {
    id: 'clarity-ai',
    slug: 'clarity-ai',
    name: 'Clarity AI',
    category: 'Productivity & AI',
    status: 'Live Public Application',
    tagline: 'Run your empire from your phone. Built for Sichel Energies & SIMRAC Zimbabwe.',
    whoItIsFor: 'Executive directors, regional energy managers, and enterprise leadership.',
    whatItHelpsWith: 'Centralizes executive KPIs, fuel reserves, fleet operations, and financial cashflow into one real-time mobile command center.',
    keyFeatures: [
      'Role-based executive hierarchy with super-admin permission gate',
      'Live energy & supply asset tracking feeds across Southern Africa',
      'Instant voice and text executive summaries with audit citations'
    ],
    publicUrl: 'https://clarity-empire-vision.lovable.app/',
    actionType: 'explore',
    accentColor: '#0369A1',
    techStack: ['React', 'TypeScript', 'Secure Auth', 'Enterprise Architecture'],
    heroImage: '/assets/aistudio/clarity-01-hero_1e4dd67f.jpg',
    screenshots: [
      '/assets/aistudio/clarity-01-hero_1e4dd67f.jpg',
      '/assets/aistudio/clarity-02-auth_c17b6eb4.jpg'
    ]
  },
  {
    id: 'sichel-technologies',
    slug: 'sichel-technologies',
    name: 'Sichel Technologies Enterprise Suite',
    category: 'Enterprise & Automation',
    status: 'Civic / Client Platform',
    tagline: 'Enterprise engineering and technology solutions architecture.',
    whoItIsFor: 'Mining operations, commercial energy groups, and institutional enterprises.',
    whatItHelpsWith: 'Custom enterprise IT architecture, secure on-premises integration, and high-availability operations software for corporate groups.',
    keyFeatures: [
      'Bespoke operational workflows built for African enterprise conditions',
      'High-security role management and SOC2 compliance controls',
      'Resilient offline-first capability for remote field installations'
    ],
    publicUrl: 'https://sichel.co.zw/',
    actionType: 'explore',
    accentColor: '#1E293B',
    techStack: ['React', 'Enterprise Cloud', 'Security Hardening', 'Node.js'],
    heroImage: '/assets/aistudio/it-company-01-hero_1429d4ca.jpg',
    screenshots: [
      '/assets/aistudio/it-company-01-hero_1429d4ca.jpg'
    ]
  },
  {
    id: 'quotivo',
    slug: 'quotivo',
    name: 'Quotivo',
    category: 'Enterprise & Automation',
    status: 'In Development',
    tagline: 'Intelligent quotation and material estimation engine for contractors.',
    whoItIsFor: 'Trade contractors, builders, and custom fabricators in Southern Africa.',
    whatItHelpsWith: 'Automates turning job measurements and material rate cards into professional client estimates with currency switching.',
    keyFeatures: [
      'Material rate-sheet calculation engine',
      'Multi-currency quotation output (USD / ZiG)',
      'Branded PDF proposal generation ready for WhatsApp'
    ],
    actionType: 'register',
    accentColor: '#1442CB',
    techStack: ['React', 'Express', 'PDF Engine', 'Calculations Engine']
  },
  {
    id: 'zororo',
    slug: 'zororo',
    name: 'Zororo',
    category: 'Industry & IoT',
    status: 'In Development',
    tagline: 'Independent hotel management and lodge reservation platform.',
    whoItIsFor: 'Boutique hotels, safari lodges, and guest house operators.',
    whatItHelpsWith: 'Combines direct online room reservations, housekeeping status boards, and guest billing into an intuitive local system.',
    keyFeatures: [
      'Interactive room availability grid',
      'Housekeeping status management (clean, occupied, maintenance)',
      'Guest profile and stay history logging'
    ],
    actionType: 'register',
    accentColor: '#047857',
    techStack: ['React', 'PostgreSQL Schema', 'Role-based Permissions']
  }
];
