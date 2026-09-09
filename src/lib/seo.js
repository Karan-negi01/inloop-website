// Central SEO metadata for every route, plus the site's canonical base URL.
// SITE_URL is a placeholder — update it to the real production domain
// (it also feeds public/sitemap.xml and the canonical/OG tags below).
export const SITE_URL = 'https://www.inloopmedia.com';

export const SEO = {
  home: {
    title: 'Inloop Media — AI-First Marketing Agency',
    description:
      "Inloop Media is an AI-first marketing agency combining creative, performance and automation to engineer measurable growth for modern brands.",
  },
  branding: {
    title: 'Brand Strategy & Identity — Inloop Media',
    description:
      'Brand strategy and identity systems built to make your brand unmistakable — positioning, visual identity and guidelines from Inloop Media.',
  },
  'social-media': {
    title: 'Social Media Management — Inloop Media',
    description:
      'Always-on social media management and content that compounds — strategy, creative and community from Inloop Media.',
  },
  website: {
    title: 'Website Design & Development — Inloop Media',
    description:
      'Website design and development engineered to convert — sites and funnels built for performance by Inloop Media.',
  },
  influencer: {
    title: 'Influencer Marketing — Inloop Media',
    description:
      'Influencer marketing matched to real intent — creator partnerships built to drive genuine results with Inloop Media.',
  },
  performance: {
    title: 'Performance & Paid Media — Inloop Media',
    description:
      'Performance and paid media campaigns engineered around ROAS, not vanity metrics — by Inloop Media.',
  },
  ai: {
    title: 'AI-Powered Creative — Inloop Media',
    description:
      "AI-powered creative and automation woven through every campaign — Inloop Media's AI-first approach to marketing.",
  },
  'creator-management': {
    title: 'Creator Management — Inloop Media',
    description: 'End-to-end creator management for talent and brands — Inloop Media.',
  },
  production: {
    title: 'Creative Production — Inloop Media',
    description: 'Creative production — shoots and post-production that move at AI speed, from Inloop Media.',
  },
  pr: {
    title: 'Strategic PR & Comms — Inloop Media',
    description: 'Strategic PR and communications — narratives that earn attention and trust, by Inloop Media.',
  },
  content: {
    title: 'Content Creation — Inloop Media',
    description: 'Story-first content creation across every format — Inloop Media.',
  },
  seo: {
    title: 'SEO & Search — Inloop Media',
    description: 'SEO and search visibility that compounds organically — Inloop Media.',
  },
  ecommerce: {
    title: 'E-commerce Growth & Optimization — Inloop Media',
    description: "E-commerce growth and optimization — turn your store into a sales engine with Inloop Media.",
  },
  careers: {
    title: 'Careers — Inloop Media',
    description: 'Careers at Inloop Media — join an AI-first marketing agency building brands that scale.',
  },
  blog: {
    title: 'Blog — Inloop Media',
    description: 'Ideas, playbooks and growth insights from Inloop Media.',
  },
  portfolio: {
    title: 'Work — Inloop Media',
    description:
      "Explore Inloop Media's portfolio — branding, design, social, web, content and performance work across industries.",
  },
  about: {
    title: 'About — Inloop Media',
    description: 'About Inloop Media — an AI-first marketing agency built to close the systems gap in brand growth.',
  },
};

export function routeFromPath(pathname) {
  const p = pathname.replace(/^\//, '');
  return p === '' ? 'home' : p;
}

export function seoForRoute(route) {
  return SEO[route] || SEO.home;
}
