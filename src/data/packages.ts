export interface DesignPackage {
  id: string;
  name: string;
  priceUSD: number;
  cadence?: string;
  designCount: number;
  description: string;
  idealFor: string;
  included: string[];
  notIncluded: string[];
  turnaroundNote: string;
  isPopular?: boolean;
}

export const DESIGN_PACKAGES: DesignPackage[] = [
  {
    id: 'essential',
    name: 'Essential Package',
    priceUSD: 10,
    designCount: 3,
    description: '3 unique high-impact promotional posters for a focused campaign, flash announcement or service launch.',
    idealFor: 'Upcoming events, seasonal promotions, or businesses needing a quick promotional refresh.',
    included: [
      '3 unique custom poster concepts',
      'High-resolution JPG & PNG files (1080x1080 and 1080x1920 formats)',
      '1 focused revision round per design',
      'Ready for WhatsApp Status, Facebook, and Instagram'
    ],
    notIncluded: [
      'Logo design (available as a $5 add-on)',
      'Social media account publishing or ad spend'
    ],
    turnaroundNote: 'Delivered in 24–48 hours after briefing.'
  },
  {
    id: 'business',
    name: 'Business Package',
    priceUSD: 30,
    designCount: 10,
    description: '10 unique branded promotional graphics to support a multi-week campaign or comprehensive product showcase.',
    idealFor: 'Growing enterprises, retail shops, and professional service providers wanting consistent weekly visibility.',
    included: [
      '10 unique custom designs with unified brand styling',
      'Story/Status (9:16) and Square (1:1) export options',
      '2 revision rounds per design concept',
      'Print-ready high-resolution files if required'
    ],
    notIncluded: [
      'Logo design (available as a $5 add-on)',
      'Social media management or ad placements'
    ],
    turnaroundNote: 'Staggered delivery or full batch in 3–5 working days.',
    isPopular: true
  },
  {
    id: 'monthly-presence',
    name: 'Monthly Presence',
    priceUSD: 60,
    cadence: '/month',
    designCount: 31,
    description: '31 unique custom-branded posts—giving your business a fresh, professional graphic for every day of the month.',
    idealFor: 'Ambitious businesses looking to dominate social feeds, establish authority, and keep their pipeline active.',
    included: [
      '31 unique bespoke designs delivered on a planned schedule',
      'Consistent brand typography, color palettes, and seasonal promos',
      'Priority revision turnaround',
      'Full commercial usage rights across digital and print'
    ],
    notIncluded: [
      'Publishing and caption scheduling (customer publishes)',
      'Paid advertising budget or Meta ad account management'
    ],
    turnaroundNote: 'Batch delivered weekly or monthly as agreed.'
  }
];

export const LOGO_ADDON = {
  priceUSD: 5,
  name: 'Logo Design & Vector Refinement',
  description: 'Add a professional, crisp vector logo or logo modernization to any poster package for just $5 extra.'
};
