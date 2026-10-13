import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  BRANDS, CATEGORIES, CLIENTS, DESIGN, HEADLINE_STATS, INFLUENCER, PACKAGING, PERFORMANCE, PRODUCTION, SOCIAL, WEBSITES,
} from '@/lib/workData';

// One clickable creative; opens the lightbox with its whole group.
function Shot({ src, group, i, open, className = '' }) {
  return (
    <button type="button" className={`pw-shot ${className}`} onClick={() => open(group, i)} data-noview aria-label="View larger">
      <img src={src} alt="" loading="lazy" decoding="async" />
    </button>
  );
}

function Lightbox({ box, close, step }) {
  useEffect(() => {
    if (!box) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.documentElement.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.documentElement.style.overflow = ''; };
  }, [box, close, step]);

  if (!box) return null;
  const { group, i } = box;
  return (
    <div className="pw-lb" role="dialog" aria-modal="true" aria-label="Work viewer" onClick={close} data-lenis-prevent>
      <img key={group[i]} src={group[i]} alt="" onClick={(e) => e.stopPropagation()} />
      <span className="pw-lb-n">{String(i + 1).padStart(2, '0')} / {String(group.length).padStart(2, '0')}</span>
      <button type="button" className="pw-lb-x" onClick={close} aria-label="Close">✕</button>
      {group.length > 1 && <>
        <button type="button" className="pw-lb-p" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous">←</button>
        <button type="button" className="pw-lb-nx" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next">→</button>
      </>}
    </div>
  );
}

function Head({ k, title, line }) {
  return (
    <div className="pw-head">
      <div>
        <div className="kick2">{k}</div>
        <h2>{title}</h2>
      </div>
      {line && <p>{line}</p>}
    </div>
  );
}

// website demos play only while on screen, so 15 MB of video never loads up front
function SiteVideo({ site }) {
  const ref = useRef(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return undefined;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { v.preload = 'auto'; v.play().catch(() => {}); } else v.pause();
    }, { threshold: 0.35 });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <figure className="pw-site">
      <div className="pw-site-bar"><i /><i /><i /><span>{site.type}</span></div>
      <video ref={ref} src={site.video} poster={site.poster} muted loop playsInline preload="none" />
    </figure>
  );
}

function Branding({ open }) {
  return (
    <>
      <Head k="Branding" title={<>Identities built to be <span className="grad">remembered</span></>} line="Complete brand systems: strategy, logo, guidelines and the world around them." />
      <div className="pw-brands">
        {BRANDS.map((b) => {
          const all = [...b.showcase, ...b.guide, b.logo];
          return (
            <article className="pw-brand" key={b.name}>
              <div className="pw-brand-main">
                <Shot src={b.showcase[0] || b.guide[0]} group={all} i={0} open={open} className="pw-brand-hero" />
              </div>
              <div className="pw-brand-side">
                <div className="pw-brand-logo"><img src={b.logo} alt={`${b.name} logo`} loading="lazy" /></div>
                <span className="pw-tag">{b.kind}</span>
                <h3>{b.name}</h3>
                <p>{b.line}</p>
                <div className="pw-brand-thumbs">
                  {all.slice(1, 4).map((src, j) => <Shot key={src} src={src} group={all} i={j + 1} open={open} />)}
                </div>
                <button type="button" className="pw-more" onClick={() => open(all, 0)}>View all {all.length} <em>↗</em></button>
              </div>
            </article>
          );
        })}
      </div>
      <Head k="Packaging" title={PACKAGING.name} line={PACKAGING.line} />
      <div className="pw-grid pw-wide2">{PACKAGING.items.map((s, i) => <Shot key={s} src={s} group={PACKAGING.items} i={i} open={open} />)}</div>
    </>
  );
}

function Design({ open }) {
  return DESIGN.map((g, n) => (
    <div className="pw-block" key={g.title}>
      <Head k={n === 0 ? 'Design' : g.note} title={n === 0 ? <>Design that <span className="grad">converts</span></> : g.title} line={n === 0 ? `${g.title}: ${g.note.toLowerCase()}.` : null} />
      <div className={g.shape === 'square' ? 'pw-masonry' : 'pw-grid pw-wide2'}>
        {g.items.map((s, i) => <Shot key={s} src={s} group={g.items} i={i} open={open} />)}
      </div>
    </div>
  ));
}

function Social({ open }) {
  return (
    <>
      <Head k="Social media" title={<>Feeds that build <span className="grad">communities</span></>} line="Strategy, content, posting and community management across the brands we run." />
      <div className="pw-phones">{SOCIAL.feeds.map((s, i) => <Shot key={s} src={s} group={SOCIAL.feeds} i={i} open={open} className="pw-phone" />)}</div>
      <div className="pw-stats">
        {SOCIAL.stats.map(([v, l], i) => <div className="pw-stat" key={i}><b>{v}</b><span>{l}</span></div>)}
      </div>
      <div className="pw-insights">
        {SOCIAL.insights.map((s, i) => <Shot key={s} src={s} group={SOCIAL.insights} i={i} open={open} className="pw-phone" />)}
        <div className="pw-tools">
          <span className="pw-tag">Tools we run it on</span>
          <div>{SOCIAL.tools.map((s) => <img key={s} src={s} alt="" loading="lazy" />)}</div>
        </div>
      </div>
    </>
  );
}

function Web() {
  return (
    <>
      <Head k="Web & app" title={<>Websites that <span className="grad">build businesses</span></>} line="Custom sites, Shopify stores, web apps and landing pages, designed to convert." />
      <div className="pw-sites">{WEBSITES.map((s) => <SiteVideo key={s.video} site={s} />)}</div>
    </>
  );
}

function Influencer({ open }) {
  return (
    <>
      <Head k="Influencer marketing" title={<>Creators at <span className="grad">scale</span></>} line="Through our partner network SnackMedia, we connect brands with creators across every category." />
      <div className="pw-network">
        <div className="pw-partner"><span className="pw-tag">Network partner</span><img src={INFLUENCER.partner} alt="SnackMedia" loading="lazy" /></div>
        <div className="pw-logos">
          {INFLUENCER.network.map(([n, s]) => <img key={n} src={s} alt={n} loading="lazy" />)}
          {INFLUENCER.brands.map((s) => <img key={s} src={s} alt="" loading="lazy" className="round" />)}
        </div>
      </div>
      <div className="pw-phones">{INFLUENCER.videos.map((s, i) => <Shot key={s} src={s} group={INFLUENCER.videos} i={i} open={open} className="pw-phone" />)}</div>
      <Head k="UGC" title="Real creators, real trust" />
      <div className="pw-phones">{INFLUENCER.ugc.map((s, i) => <Shot key={s} src={s} group={INFLUENCER.ugc} i={i} open={open} className="pw-phone" />)}</div>
    </>
  );
}

function Production({ open }) {
  return (
    <>
      <Head k="Content production" title={<>Shot, edited, <span className="grad">shipped</span></>} line="Product shoots, food, jewellery, fashion and interiors, produced in-house from idea to final edit." />
      <div className="pw-masonry pw-m4">{PRODUCTION.shoots.map((s, i) => <Shot key={s} src={s} group={PRODUCTION.shoots} i={i} open={open} />)}</div>
      <Head k="Post production" title="Where content comes alive" line="Reels, ad edits, motion graphics and AI-assisted video." />
      <div className="pw-phones">{PRODUCTION.post.map((s, i) => <Shot key={s} src={s} group={PRODUCTION.post} i={i} open={open} className="pw-phone" />)}</div>
    </>
  );
}

function Performance() {
  return (
    <>
      <Head k="Performance marketing" title={<>Numbers from <span className="grad">real accounts</span></>} line="Results from campaigns we run for e-commerce, apps, real estate and brand awareness." />
      <div className="pw-results">
        {PERFORMANCE.results.map(([l, v], i) => <div className="pw-result" key={i}><span>{l}</span><b>{v}</b></div>)}
      </div>
      <div className="pw-platforms">
        <span className="pw-tag">Platforms</span>
        {PERFORMANCE.platforms.map(([n, s]) => <span className="pw-plat" key={n}><img src={s} alt="" loading="lazy" />{n}</span>)}
      </div>
    </>
  );
}

const PANELS = {
  branding: Branding, design: Design, 'social-media': Social, 'web-app': Web,
  'influencer-marketing': Influencer, 'content-production': Production, 'performance-marketing': Performance,
};

export default function Portfolio() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const fromHash = hash.replace('#', '');
  const cat = PANELS[fromHash] ? fromHash : 'branding';
  const [box, setBox] = useState(null);
  const tabsRef = useRef(null);

  const open = useCallback((group, i) => setBox({ group, i }), []);
  const close = useCallback(() => setBox(null), []);
  const step = useCallback((d) => setBox((b) => b && { ...b, i: (b.i + d + b.group.length) % b.group.length }), []);

  const pick = (slug) => {
    navigate(`/portfolio#${slug}`, { replace: true });
    const top = tabsRef.current.getBoundingClientRect().top + window.scrollY - 90;
    if (window.scrollY > top) window.scrollTo({ top, behavior: 'smooth' });
  };

  const Panel = PANELS[cat];
  return (
<div id="svp"><main className="route pw" data-route="portfolio">
  <header className="pw-hero">
    <div className="pw-hero-copy">
      <div className="reveal d1"><span className="sp-eyebrow"><span className="dot"></span>Portfolio · Inloop Media</span></div>
      <h1 className="reveal d2 pt-fade">Work that moves <span className="jr-silver">brands.</span></h1>
      <p className="reveal d3 pt-fade">Brand identities, ads, shoots, websites and campaigns, all made by our team for real clients.</p>
      <dl className="pw-hero-stats reveal d4 pt-fade">
        {HEADLINE_STATS.map(([v, l]) => <div key={l}><dt>{v}</dt><dd>{l}</dd></div>)}
      </dl>
    </div>
    <div className="pw-hero-art reveal d3" aria-hidden="true" data-noview>
      <img className="a" src="/images/work/satvik-showcase-2.webp" alt="" fetchPriority="high" />
      <img className="b" src="/images/work/shoot-7.webp" alt="" />
      <img className="c" src="/images/work/nomads-showcase-4.webp" alt="" />
    </div>
  </header>

  <section className="pw-clients" aria-label="Brands we've worked with">
    <span className="pw-tag">Brands we’ve worked with</span>
    <div className="pw-clients-track">
      {[0, 1].map((k) => (
        <div className="pw-clients-set" key={k} aria-hidden={k === 1 ? 'true' : undefined}>
          {CLIENTS.map((c) => <img key={c.name} src={c.src} alt={k === 0 ? c.name : ''} loading="lazy" />)}
        </div>
      ))}
    </div>
  </section>

  <nav className="pw-tabs" ref={tabsRef} aria-label="Portfolio categories">
    {CATEGORIES.map((c) => (
      <button type="button" key={c.slug} className={c.slug === cat ? 'on' : ''} aria-current={c.slug === cat ? 'true' : undefined} onClick={() => pick(c.slug)}>{c.label}</button>
    ))}
  </nav>

  <section className="sec pw-panel" key={cat}>
    <Panel open={open} />
  </section>

  <section className="sec cta-band">
    <div className="cta-band-inner reveal-up">
      <div className="cta-portal"></div>
      <h2>Let’s build your brand next</h2>
      <p>If you’re ready to grow, we’re ready to build it with you.</p>
      <Link className="btn primary lg magnetic cta-lux" data-mag="0.35" to="/#contact">Book a Free Call <span className="arr">↗</span></Link>
    </div>
  </section>

  <Lightbox box={box} close={close} step={step} />
</main></div>
  );
}
