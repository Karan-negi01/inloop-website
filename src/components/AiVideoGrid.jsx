// AI video concepts — each card is a looping, CSS-animated storyboard of a
// short-form ad (hook → demo → CTA) instead of a placeholder "play" thumbnail.
const ICONS = {
  beauty: (
    <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M26 6h12v8H26z" /><path d="M22 14h20l2 8H20z" /><rect x="18" y="22" width="28" height="36" rx="6" /><path d="M26 34c2-3 10-3 12 0M28 42h8" /></svg>
  ),
  fashion: (
    <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 14a5 5 0 1 1 5-5" /><path d="M32 14v4L8 34c-2 1.5-1 4 1.5 4h45c2.5 0 3.5-2.5 1.5-4L32 18" /><path d="M16 38v18h32V38" /></svg>
  ),
  saas: (
    <svg viewBox="0 0 64 64" aria-hidden="true"><rect x="6" y="10" width="52" height="36" rx="5" /><path d="M6 18h52M14 38l9-9 7 6 12-13 8 7" /><path d="M24 54h16M32 46v8" /></svg>
  ),
  services: (
    <svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="20" r="10" /><path d="M12 58c2-12 10-18 20-18s18 6 20 18" /><path d="M48 10v12M44 14v4M52 14v4" /></svg>
  ),
  d2c: (
    <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M12 20h40l-3 36H15z" /><path d="M24 26v-8a8 8 0 0 1 16 0v8" /><path d="M26 40l4 4 9-9" /></svg>
  ),
  realestate: (
    <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 30 32 10l24 20" /><path d="M14 26v30h36V26" /><rect x="27" y="40" width="10" height="16" /><rect x="19" y="32" width="7" height="7" /><rect x="38" y="32" width="7" height="7" /></svg>
  ),
};

const CONCEPTS = [
  {
    icon: 'beauty', title: 'Beauty, Health & Wellness', sub: 'UGC unboxings & routines', cta: 'Shop the routine',
    scenes: ['“I almost skipped this step…”', 'Texture close-up, day 1 → day 7', 'Glow kit — 20% off today'],
  },
  {
    icon: 'fashion', title: 'Fashion & Apparel', sub: 'Lookbooks & try-on hooks', cta: 'Shop the look',
    scenes: ['One jacket, five outfits', 'AI try-on across body types', 'New drop — sizes XS to 3XL'],
  },
  {
    icon: 'saas', title: 'High-Tech & SaaS', sub: 'Explainer & demo ads', cta: 'Start free trial',
    scenes: ['Still exporting reports by hand?', '3-click dashboard walkthrough', 'Live in 10 minutes'],
  },
  {
    icon: 'services', title: 'Professional Services', sub: 'Talking-head authority', cta: 'Book a consult',
    scenes: ['3 mistakes that cost you clients', 'Expert breakdown, captioned', 'Free 15-min audit'],
  },
  {
    icon: 'd2c', title: 'D2C & E-commerce', sub: 'Product spotlights', cta: 'Buy now',
    scenes: ['Why 10,000 people switched', '360° product spin + reviews', 'Free shipping this week'],
  },
  {
    icon: 'realestate', title: 'Real Estate', sub: 'Walkthrough reels', cta: 'Schedule a visit',
    scenes: ['Sunrise from the 14th floor', 'AI-staged room walkthrough', '2 & 3 BHK — site visits open'],
  },
];

const STAGES = ['Hook', 'Demo', 'CTA'];

export default function AiVideoGrid() {
  return (
    <div className="aiv-grid">
      {CONCEPTS.map((c, i) => (
        <article className="aiv-card anim-rise" style={{ '--i': i }} key={c.title}>
          <div className="aiv-thumb">
            <div className="aiv-top" aria-hidden="true">
              <div className="aiv-segs"><i /><i /><i /></div>
              <div className="aiv-meta"><span className="aiv-badge">AI</span><span>Sponsored</span></div>
            </div>
            <span className="aiv-ic">{ICONS[c.icon]}</span>
            <ol className="aiv-scenes" aria-label={`${c.title} ad storyboard`}>
              {c.scenes.map((s, k) => (
                <li className="aiv-scene" key={STAGES[k]}>
                  <span className="aiv-step">{STAGES[k]}</span>
                  <span className="aiv-line">{s}</span>
                </li>
              ))}
            </ol>
            <span className="aiv-cta" aria-hidden="true">{c.cta} <span>→</span></span>
          </div>
          <div className="aiv-label"><b>{c.title}</b><span>{c.sub}</span></div>
        </article>
      ))}
    </div>
  );
}
