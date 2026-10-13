// Inloop's own work, taken from the portfolio on the original site
// (inloopmedia.com). Images live in public/images/work, website demo videos
// in public/videos/work. Rendered by src/routes/Portfolio.jsx.

const img = (name) => `/images/work/${name}.webp`;
const range = (prefix, n) => Array.from({ length: n }, (_, i) => img(`${prefix}-${i + 1}`));

export const CLIENTS = [
  ['Nomads Travel Club', 1], ['Flyball', 2], ['Da Luxera', 3], ['The Luxe Drop', 4], ['Brizzio', 5], ['The Souled Store', 6],
  ['Dencity', 7], ['SUGAR', 8], ['Salty', 9], ['Bla Bli Blu', 10], ['Foxtale', 11], ['Paris Beauty', 12],
].map(([name, n]) => ({ name, src: img(`performance-client-${n}`) }));

export const HEADLINE_STATS = [
  ['5M+', 'App downloads for Apploft'],
  ['14.5M', 'Impressions on a single campaign'],
  ['₹1.08', 'Lowest cost per conversion'],
  ['4.3x', 'ROAS in month one'],
];

export const CATEGORIES = [
  { slug: 'branding', label: 'Branding' },
  { slug: 'design', label: 'Design' },
  { slug: 'social-media', label: 'Social Media' },
  { slug: 'web-app', label: 'Web & App' },
  { slug: 'influencer-marketing', label: 'Influencer' },
  { slug: 'content-production', label: 'Production' },
  { slug: 'performance-marketing', label: 'Performance' },
];

export const BRANDS = [
  {
    name: 'Nomads Travel Club', kind: 'Travel', line: 'A premium travel club identity, from logo to luggage tags.',
    logo: img('nomads-logo'), guide: [img('nomads-brand-guide-1'), img('nomads-brand-guide-2')], showcase: range('nomads-showcase', 8),
  },
  {
    name: 'Saatvik', kind: 'Hotel & restaurant', line: 'A warm, premium dining brand for a hotel, banquet and rooftop.',
    logo: img('satvik-logo'), guide: [img('satvik-brand-guide-1'), img('satvik-brand-guide-2')], showcase: range('satvik-showcase', 3),
  },
  {
    name: 'Curve Studio', kind: 'Studio', line: 'A bold, minimal identity system built on strong colour.',
    logo: img('curvestudio-logo'), guide: [img('curvestudio-brand-guide-1'), img('curvestudio-brand-guide-2')], showcase: range('curvestudio-showcase', 2),
  },
  {
    name: 'Skin Lattice Clinic', kind: 'Skincare clinic', line: 'A calm, clinical-luxury identity with its own mood board.',
    logo: img('skinlattice-logo'), guide: [img('skinlattice-brand-guide-1'), img('skinlattice-brand-guide-2')], showcase: [],
  },
  {
    name: 'Flyball', kind: 'Audio tech', line: 'A high-energy brand for professional microphones.',
    logo: img('flyball-logo'), guide: [img('flyball-brand-guide-1'), img('flyball-brand-guide-2')], showcase: [],
  },
];

export const PACKAGING = { name: 'Plantomed', line: 'Label and packaging design for a supplements range.', items: range('plantomed-packaging', 4) };

export const DESIGN = [
  { title: 'Performance ads', note: 'Gaming, rewards and trading campaigns', items: range('ad', 17), shape: 'square' },
  { title: 'Amazon A+ creatives', note: 'Product storytelling for marketplaces', items: range('amazon-creative', 6), shape: 'wide' },
  { title: 'Posters & mockups', note: 'Campaign key visuals', items: range('poster', 6), shape: 'wide' },
  { title: 'Web banners', note: 'Sale and launch banners', items: range('web-banner', 4), shape: 'wide' },
];

export const SOCIAL = {
  feeds: range('social-media', 7),
  // monthly account views from the insight screenshots on the original site
  stats: [['960K', 'Views in one month'], ['872K', 'Views in one month'], ['417K', 'Views in one month'], ['100K', 'Views in 30 days']],
  insights: range('social-media-insight', 4),
  tools: range('social-media-tool', 5),
};

export const WEBSITES = [
  { type: 'Fashion e-commerce', poster: img('website-1'), video: '/videos/work/web-development-1.webm' },
  { type: 'Eyewear store', poster: img('website-2'), video: '/videos/work/web-development-2.webm' },
  { type: 'Technology company', poster: img('website-3'), video: '/videos/work/web-development-3.webm' },
  { type: 'Rewards app', poster: img('website-4'), video: '/videos/work/web-development-4.webm' },
  { type: 'Investing platform', poster: img('website-5'), video: '/videos/work/web-development-5.webm' },
];

export const INFLUENCER = {
  partner: img('snackmedia-logo'),
  network: [['Himalaya', img('himalaya-logo')], ['Nykaa', img('nykaa-logo')], ['ITC', img('itc-logo')]],
  brands: range('influencer-logo', 5),
  videos: range('influencer', 7),
  ugc: range('ugc-content', 5),
};

export const PRODUCTION = {
  shoots: range('shoot', 19),
  post: range('post-production', 8),
};

export const PERFORMANCE = {
  results: [
    ['Impressions', '14.5M'], ['Impressions', '7.7M'], ['Impressions', '4.82M'], ['Downloads', '264K'],
    ['Cost / conversion', '₹1.08'], ['Cost / conversion', '₹1.13'], ['Spend managed', '₹285K'], ['Spend managed', '$6.69K'],
  ],
  platforms: [['Google Ads', img('googleads-logo')], ['Meta', img('meta-logo')], ['LinkedIn Ads', img('linkedinads-logo')]],
};
