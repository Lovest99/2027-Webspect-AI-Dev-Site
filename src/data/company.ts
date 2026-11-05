export interface CompanyInfo {
  name: string;
  tagline: string;
  positioningStatement: string;
  founder: {
    name: string;
    role: string;
    degree: string;
    university: string;
    location: string;
    bio: string;
    specialties: string[];
    portfolioImage?: string;
  };
  contact: {
    websiteUrl: string;
    whatsappNumber: string;
    whatsappLink: string;
    emailHint: string;
    location: string;
    remotePolicy: string;
  };
  principles: {
    title: string;
    description: string;
  }[];
  howWeWorkStages: {
    step: string;
    title: string;
    description: string;
  }[];
}

export const COMPANY_INFO: CompanyInfo = {
  name: 'Webspect AI & Dev',
  tagline: 'WHERE VISION MEETS VIRTUAL REALITY',
  positioningStatement: 'Webspect designs and builds the digital tools businesses need to get noticed, serve customers and run more efficiently.',
  founder: {
    name: 'Bright Cheteni',
    role: 'AI Systems Engineer & Full-stack Product Developer',
    degree: 'BSc Computer Science',
    university: 'National University of Science and Technology (NUST)',
    location: 'Zimbabwe',
    bio: 'Bright Cheteni combines full-stack product engineering, applied AI systems, and graphic craft to build digital tools that solve tangible business bottlenecks. With a background in computer science from NUST and hands-on experience building both client software and independent digital products, Bright focuses on practical utility—bridging the gap between what a business needs to communicate and the systems required to execute it reliably.',
    specialties: [
      'Full-Stack Web Engineering (React, Node, TypeScript, SQL)',
      'Applied AI Integration & Workflow Automation',
      'System Architecture & API Integrations',
      'Editorial Interface Design & Commercial Graphic Systems',
      'Mobile-First Progressive Web Applications'
    ],
    portfolioImage: '/assets/aistudio/bright-portfolio-01-hero.jpg'
  },
  contact: {
    websiteUrl: 'https://www.webspectit.com/',
    whatsappNumber: '+263 78 767 9376',
    whatsappLink: 'https://wa.me/263787679376',
    emailHint: 'brightcheteni1@gmail.com',
    location: 'Zimbabwe',
    remotePolicy: 'Working remotely with clients across Zimbabwe, Southern Africa, and internationally.'
  },
  principles: [
    {
      title: 'Utility over Vanity',
      description: 'We do not build software for technical vanity or publish graphics for superficial applause. Every screen and script must serve a measurable commercial purpose: attracting buyers, organizing operations, or saving team hours.'
    },
    {
      title: 'Human-in-the-Loop AI',
      description: 'We treat artificial intelligence as an extraordinary drafting, summarization, and routing engine—never an unaccountable autocrat. High-stakes financial, medical, and operational checkpoints remain under human review.'
    },
    {
      title: 'Disciplined Scope',
      description: 'We believe most software projects fail from unconstrained ambition rather than technical limitation. We isolate the vital core loop, build it with precision, and iterate based on real operational feedback.'
    },
    {
      title: 'Direct Engineering Contact',
      description: 'When you collaborate with Webspect, you work directly with the engineer designing and coding your system—not passed around account managers, sales intermediaries, or junior subcontractors.'
    }
  ],
  howWeWorkStages: [
    {
      step: '01',
      title: 'Understand your situation',
      description: 'We examine your business bottlenecks, current spreadsheets, customer journeys, and commercial goals before talking about technical stacks or layouts.'
    },
    {
      step: '02',
      title: 'Agree on the right scope',
      description: 'We document precisely what will be built, what will be deferred to later phases, the milestone deliverables, and exact transparent pricing before work begins.'
    },
    {
      step: '03',
      title: 'Build and review together',
      description: 'We develop in focused, demonstrable cycles. You test real interactive interfaces and workflows on your own devices as they come together, providing feedback along the way.'
    },
    {
      step: '04',
      title: 'Launch and support the next step',
      description: 'We handle production deployment, domain configuration, and staff orientation—ensuring your team is confident using and maintaining the solution.'
    }
  ]
};
