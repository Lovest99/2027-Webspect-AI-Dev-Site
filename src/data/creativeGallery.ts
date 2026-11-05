export interface CreativeDesign {
  id: string;
  client: string;
  category: 'Construction & Industrial' | 'Corporate Services' | 'Beauty & Retail' | 'Healthcare & Consulting';
  headline: string;
  briefSummary: string;
  imagePath?: string;
  galleryImages?: string[];
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
    headline: 'Your home called. It wants a refresh.',
    briefSummary: 'A high-impact promotional campaign establishing Multivate as the premier renovation, plastering and painting specialist across Bulawayo and Zimbabwe.',
    imagePath: '/assets/aistudio/file_0000000034ec8211943d2fd9091f992f_33a58136.png',
    galleryImages: ['/assets/aistudio/file_0000000034ec8211943d2fd9091f992f_33a58136.png'],
    brandColors: {
      primary: '#0F172A',
      secondary: '#DC2626',
      accent: '#2563EB',
      surface: '#FEF2F2'
    },
    typographyStyle: 'Bold industrial headline with vibrant WhatsApp REFRESH call-to-action',
    deliverables: ['Home Refresh Campaign Poster', 'Renovations & Painting Flyer', 'WhatsApp Intake Artwork'],
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
    headline: 'Frame Your Space. Aluminium doors, windows & glass solutions',
    briefSummary: 'Architectural showcase highlighting sliding doors, windows, shopfronts, verandah enclosures, shower cubicles, and office partitions in Southerton, Harare.',
    imagePath: '/assets/aistudio/file_0000000012fc821199272b82bcbe0dc1_ec2eb850.png',
    galleryImages: ['/assets/aistudio/file_0000000012fc821199272b82bcbe0dc1_ec2eb850.png'],
    brandColors: {
      primary: '#0B2545',
      secondary: '#DC2626',
      accent: '#38BDF8',
      surface: '#F0F9FF'
    },
    typographyStyle: 'Architectural drafting-inspired typography with bold red accent action bar',
    deliverables: ['Frame Your Space Master Campaign', 'Sliding Doors & Windows Spec Flyer', 'Direct Quote Request Artwork'],
    dimensions: '1080 x 1350 (Portrait) & 1080 x 1920 (Status)'
  },
  {
    id: 'dr-shana',
    client: 'Dr Shana Herbs & Food Supplements',
    category: 'Healthcare & Consulting',
    headline: 'Herbs & Supplements. Delivered to You.',
    briefSummary: 'Commercial food supplement product launch poster with Bulawayo delivery routing, featuring Revicell, Yeegarlic, Ganoderma, and Ginseng.',
    imagePath: '/assets/aistudio/file_00000000103c821188fc16c750cdb539_40815e79.png',
    galleryImages: [
      '/assets/aistudio/file_00000000103c821188fc16c750cdb539_40815e79.png',
      '/assets/aistudio/file_0000000005088211b5bd4bc964906c62_4ee6230b.png'
    ],
    brandColors: {
      primary: '#064E3B',
      secondary: '#15803D',
      accent: '#D97706',
      surface: '#FEF3C7'
    },
    typographyStyle: 'Premium botanical serif with golden header flourishes and high-clarity ordering badges',
    deliverables: ['Full Product Range Showcase', 'Bulawayo Delivery Callout Flyer', 'WhatsApp Product List Order Poster'],
    dimensions: '1080 x 1350 (Portrait) & 1080 x 1920 (Status)'
  },
  {
    id: 'dr-shana-guarana',
    client: 'Dr Shana Herbs & Food Supplements',
    category: 'Healthcare & Consulting',
    headline: 'Liquid Chlorophyll Plus Guarana – Your Next Product Enquiry, Simplified.',
    briefSummary: 'High-conversion single-product showcase engineered for WhatsApp status and social channels with ordering support and ingredient guides.',
    imagePath: '/assets/aistudio/file_0000000005088211b5bd4bc964906c62_4ee6230b.png',
    galleryImages: ['/assets/aistudio/file_0000000005088211b5bd4bc964906c62_4ee6230b.png'],
    brandColors: {
      primary: '#064E3B',
      secondary: '#047857',
      accent: '#10B981',
      surface: '#ECFDF5'
    },
    typographyStyle: 'Refined herbal luxury layout with ingredients checklist and WhatsApp order triggers',
    deliverables: ['Liquid Chlorophyll Spotlight Poster', 'Ingredient & Direction Checklist', 'WhatsApp Direct Order Route'],
    dimensions: '1080 x 1350 (Portrait) & 1080 x 1920 (Status)'
  }
];
