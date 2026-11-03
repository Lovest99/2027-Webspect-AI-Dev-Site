export interface CreativeDesign {
  id: string;
  client: string;
  category: 'Construction & Industrial' | 'Corporate Services' | 'Beauty & Retail' | 'Healthcare & Consulting';
  headline: string;
  briefSummary: string;
  brandColors: {
    primary: string;
    secondary: string;
    accent: string;
    surface: string;
  };
  typographyStyle: string;
  deliverables: string[];
  dimensions: string;
}

export const CREATIVE_DESIGNS: CreativeDesign[] = [
  {
    id: 'multivate',
    client: 'Multivate Construction',
    category: 'Construction & Industrial',
    headline: 'Building Infrastructure With Engineering Discipline',
    briefSummary: 'A high-impact promotional campaign establishing Multivate as the premier heavy civil, earthmoving and building contractor across Matabeleland and Zimbabwe.',
    brandColors: {
      primary: '#0F172A',
      secondary: '#D97706',
      accent: '#F59E0B',
      surface: '#FEF3C7'
    },
    typographyStyle: 'Bold industrial geometric sans with high-contrast amber warnings',
    deliverables: ['Plant & Machinery Equipment Poster', 'Tender Capability Showcase', 'Site Safety Notice Graphics'],
    dimensions: '1080 x 1350 (Portrait Feed) & 1080 x 1920 (Status)'
  },
  {
    id: 'mox',
    client: 'Professional Mox',
    category: 'Corporate Services',
    headline: 'Executive Commercial Cleaning & Facility Hygiene',
    briefSummary: 'Corporate visual suite communicating immaculate hygiene, specialized fumigation, and corporate office prestige for B2B procurement managers.',
    brandColors: {
      primary: '#042F2E',
      secondary: '#0D9488',
      accent: '#2DD4BF',
      surface: '#CCFBF1'
    },
    typographyStyle: 'Clean modern neo-grotesque sans with refined geometric spacing',
    deliverables: ['Corporate Hygiene Package Flyer', 'Deep Cleaning Checklist Poster', 'Executive Office Care Promo'],
    dimensions: '1080 x 1080 (Square) & 1080 x 1920 (Status)'
  },
  {
    id: 'happie-cosmetics',
    client: 'Happie Cosmetics',
    category: 'Beauty & Retail',
    headline: 'Radiant Skin, Everyday Luxury & Vibrant Beauty',
    briefSummary: 'Vibrant, editorial beauty retail campaign showcasing premium skincare, body washes, and cosmetics formulated for glowing skin in sunny climates.',
    brandColors: {
      primary: '#831843',
      secondary: '#BE185D',
      accent: '#F472B6',
      surface: '#FDF2F8'
    },
    typographyStyle: 'Elegant luxury serif paired with airy tracking for high fashion aesthetic',
    deliverables: ['Glow Skincare Collection Launch', 'Weekend Beauty Specials Flyer', 'Product Benefit Spotlight Series'],
    dimensions: '1080 x 1350 (Portrait) & 1080 x 1920 (Status)'
  },
  {
    id: 'happie-enterprise',
    client: 'Happie Enterprise',
    category: 'Beauty & Retail',
    headline: 'Wholesale Commodities & FMCG Bulk Distribution',
    briefSummary: 'Clean, legible commercial wholesale pricing posters designed for rapid comprehension in busy trade hubs and high-volume merchant WhatsApp groups.',
    brandColors: {
      primary: '#1E1B4B',
      secondary: '#4338CA',
      accent: '#F59E0B',
      surface: '#EEF2FF'
    },
    typographyStyle: 'High-legibility tabular numerals with bold promotional price tags',
    deliverables: ['Weekly Bulk Rate Sheet', 'Container Arrival Notice', 'Wholesale Partner Tier Cards'],
    dimensions: '1080 x 1080 (Square) & 1080 x 1920 (Status)'
  },
  {
    id: 'general-aluminium',
    client: 'General Aluminium Solutions',
    category: 'Construction & Industrial',
    headline: 'Precision Architectural Aluminium & Glazing Systems',
    briefSummary: 'Architectural showcase highlighting sliding folding doors, curtain wall facades, and modern residential aluminium window systems.',
    brandColors: {
      primary: '#111827',
      secondary: '#374151',
      accent: '#0284C7',
      surface: '#F3F4F6'
    },
    typographyStyle: 'Architectural drafting-inspired typography with crisp technical precision',
    deliverables: ['Modern Pivot Door Spotlight', 'Residential Glazing Renovation Flyer', 'Commercial Shopfront Spec Sheet'],
    dimensions: '1080 x 1350 (Portrait) & 1080 x 1920 (Status)'
  },
  {
    id: 'dr-shana',
    client: 'Dr Shana Medical Consulting',
    category: 'Healthcare & Consulting',
    headline: 'Empathetic Clinical Healthcare & Patient Wellness',
    briefSummary: 'Dignified, trustworthy clinical communication outlining consulting hours, wellness checkups, and specialized clinical care.',
    brandColors: {
      primary: '#1E1B4B',
      secondary: '#312E81',
      accent: '#6366F1',
      surface: '#EEF2FF'
    },
    typographyStyle: 'Authoritative, calm typography evoking medical excellence and care',
    deliverables: ['Clinic Consultation Hours Notice', 'Annual Health Screening Guide', 'Patient Appointment Protocol'],
    dimensions: '1080 x 1080 (Square) & 1080 x 1920 (Status)'
  }
];
