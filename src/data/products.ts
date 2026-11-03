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
    techStack: ['React', 'TypeScript', 'Geo-Services', 'Cloud Backend']
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
    techStack: ['React', 'Tailwind CSS', 'Gemini AI API', 'Data Visualization']
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
    techStack: ['Node.js', 'Express', 'React', 'Webhook Handlers']
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
    techStack: ['Mobile Web App', 'Geolocation API', 'React', 'Tailwind']
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
    techStack: ['TypeScript', 'Gemini AI API', 'React']
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
    techStack: ['React', 'AI Knowledge Retrieval', 'TypeScript']
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
    techStack: ['Telemetry Webhooks', 'React Dashboard', 'Chart Engine']
  },
  {
    id: 'clarity-ai',
    slug: 'clarity-ai',
    name: 'Clarity AI',
    category: 'Productivity & AI',
    status: 'Interactive Prototype',
    tagline: 'Executive decision modeling and strategic clarity workspace.',
    whoItIsFor: 'Startup founders, executive directors, and strategy teams.',
    whatItHelpsWith: 'Helps teams break down complex strategic dilemmas into structured decision trees with trade-off analysis.',
    keyFeatures: [
      'Structured decision canvas with assumption testing',
      'Risk and second-order effect identification',
      'One-page strategic memo export'
    ],
    publicUrl: 'https://clarity-empire-vision.lovable.app/',
    actionType: 'demo',
    accentColor: '#0369A1',
    techStack: ['React', 'TypeScript', 'Decision Logic Framework']
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
