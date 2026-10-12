import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '@/lib/serviceData';
import { seoForRoute } from '@/lib/seo';

// Shared, visual-first layout for every service page. Content lives in
// src/lib/serviceData.js. Below the hero: an overview split (statement +
// at-a-glance stats), a photo bento of capabilities, a sticky process
// timeline, a deliverables checklist, the "why Inloop" strip and FAQ.

function Title({ text }) {
  // "Brands people [remember]." → highlight the bracketed words
  const parts = text.split(/(\[[^\]]+\])/);
  return parts.map((p, i) =>
    p.startsWith('[') ? <span className="grad" key={i}>{p.slice(1, -1)}</span> : p,
  );
}

function Overview({ text, glance }) {
  const ref = useRef(null);
  // words light up in sequence once the statement scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.classList.add('lit');
        io.disconnect();
      }
    }, { threshold: 0.45 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="sec sv-over">
      <div className="sv-over-copy">
        <Kick n="01">Overview</Kick>
        <p className="svx-words sv-words" ref={ref}>
          {text.split(' ').map((w, k) => <span key={k} style={{ '--k': k }}>{w} </span>)}
        </p>
      </div>
      <dl className="sv-glance">
        {glance.map(([v, l]) => (
          <div className="sv-glance-i anim-rise" key={v}>
            <dt>{v}</dt>
            <dd>{l}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

// editorial section kicker: "02 — What we do"
const Kick = ({ n, children }) => <div className="kick2 sv-k"><span>{n}</span>{children}</div>;

const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7" /></svg>
);

function Steps({ steps }) {
  const ref = useRef(null);
  // the timeline line fills as the visitor scrolls through the steps
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const p = (window.innerHeight * 0.6 - r.top) / r.height;
      el.style.setProperty('--fill', Math.min(1, Math.max(0, p)).toFixed(3));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <ol className="sv-steps" ref={ref}>
      {steps.map((s, i) => (
        <li className="sv-step anim-rise" key={s.h}>
          <span className="sv-step-n">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <h3>{s.h}</h3>
            <p>{s.p}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

// the next three services in menu order, wrapping round
function relatedServices(route) {
  const keys = Object.keys(SERVICES);
  const at = keys.indexOf(route);
  return [1, 2, 3].map((k) => SERVICES[keys[(at + k) % keys.length]]);
}

const serviceName = (route) => seoForRoute(route).title.replace(/\s+—\s+Inloop Media$/, '');

function Checklist({ n, label, title, items }) {
  return (
    <div className="sv-list">
      <div className="sv-list-head reveal-up">
        <Kick n={n}>{label}</Kick>
        <h2>{title}</h2>
      </div>
      <ul className="sv-checks">
        {items.map((t) => <li className="anim-rise" key={t}><Check />{t}</li>)}
      </ul>
    </div>
  );
}

export default function ServicePage({ data, children }) {
  const { route, image, accent, eyebrow, title, sub, cta, badges, statement, glance = [], caps, steps, deliver, bestFor, why, faq, ctaH, ctaP } = data;

  return (
    <div id="svp"><main className="route svx" data-route={route} style={{ '--acc': accent }}>
      <header className="sp-hero svx-hero">
        <div className="svx-hero-copy">
          <div className="reveal d1"><span className="sp-eyebrow"><span className="dot"></span>{eyebrow}</span></div>
          <h1 className="reveal d2 pt-fade svx-title"><Title text={title} /></h1>
          <p className="reveal d3 sub pt-fade">{sub}</p>
          <div className="reveal d4 cta-row pt-fade">
            <Link className="btn primary lg magnetic" data-mag="0.3" to="/#contact">{cta}</Link>
            <Link className="btn ghost magnetic" data-mag="0.3" to="/#services">All services <span className="arr">↗</span></Link>
          </div>
          <div className="sp-badges reveal d4">
            {badges.map((b) => <span className="sp-badge" key={b}>{b}</span>)}
          </div>
        </div>
        <figure className="svx-hero-media reveal d3" data-noview>
          <img src={image} alt="" decoding="async" fetchPriority="high" />
        </figure>
      </header>

      <Overview text={statement} glance={glance} />

      {children}

      <section className="sec sv-caps">
        <div className="sv-head reveal-up">
          <div>
            <Kick n="02">What we do</Kick>
            <h2>{caps.length} ways we <span className="grad">move the needle</span></h2>
          </div>
          <p>Hover any card to see what’s included.</p>
        </div>
        <div className={`sv-bento n${caps.length}`}>
          {caps.map((c, i) => (
            <article className="sv-card anim-rise" key={c.h} tabIndex={0} data-noview>
              <img src={c.img} alt="" loading="lazy" decoding="async" />
              <span className="sv-card-n">{String(i + 1).padStart(2, '0')}</span>
              <div className="sv-card-body">
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sec sv-process">
        <div className="sv-process-side reveal-up">
          <Kick n="03">How it works</Kick>
          <h2>{steps.length} steps, <span className="grad">zero guesswork</span></h2>
          <p>A clear, repeatable process, so you always know what’s happening and what comes next.</p>
          <Link className="btn ghost magnetic" data-mag="0.3" to="/#contact">Start with a free call <span className="arr">↗</span></Link>
        </div>
        <Steps steps={steps} />
      </section>

      <section className={`sec sv-deliver${bestFor.length > 0 ? ' two' : ''}`}>
        <Checklist n="04" label="Deliverables" title="What you get" items={deliver} />
        {bestFor.length > 0 && <Checklist n="04" label="Who it’s for" title="Best for" items={bestFor} />}
      </section>

      <section className="sec sv-why">
        <div className="sv-head reveal-up">
          <div>
            <Kick n="05">Why Inloop</Kick>
            <h2>What you <span className="grad">walk away with</span></h2>
          </div>
        </div>
        <div className={`sv-why-row n${why.length}`}>
          {why.map((w, i) => (
            <div className="sv-why-i anim-rise" key={w.h}>
              <span className="sv-why-n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{w.h}</h3>
              <p>{w.p}</p>
            </div>
          ))}
        </div>
      </section>

      {faq.length > 0 && (
        <section className="sec sv-faq">
          <div className="sv-faq-side reveal-up">
            <Kick n="06">FAQ</Kick>
            <h2>Questions, <span className="grad">answered</span></h2>
            <p>Can’t find what you’re looking for? Ask us directly on a free call.</p>
            <Link className="btn ghost magnetic" data-mag="0.3" to="/#contact">Ask us <span className="arr">↗</span></Link>
          </div>
          <div className="sp-faq">
            {faq.map((f) => (
              <details className="faq-item anim-rise" key={f.q}>
                <summary><span>{f.q}</span><i className="faq-ic" aria-hidden="true"></i></summary>
                <div className="faq-a"><p>{f.a}</p></div>
              </details>
            ))}
          </div>
        </section>
      )}

      <section className="sec sv-more">
        <div className="sv-head reveal-up">
          <div>
            <div className="kick2">Explore more</div>
            <h2>Pairs well <span className="grad">with this</span></h2>
          </div>
          <Link className="jp-all" to="/#services">All services <span>↗</span></Link>
        </div>
        <div className="sv-more-grid">
          {relatedServices(route).map((s) => (
            <Link className="sv-more-i anim-rise" to={`/${s.route}`} key={s.route}>
              <span className="sv-more-eb">{s.eyebrow.split('·')[0].trim()}</span>
              <h3>{serviceName(s.route)}</h3>
              <p>{s.sub}</p>
              <span className="sv-more-go" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="sec sv-cta">
        <div className="sv-cta-card reveal-up">
          <span className="sv-cta-glow" aria-hidden="true"></span>
          <div className="sv-cta-main">
            <div className="kick2">Let’s talk</div>
            <h2>{ctaH}</h2>
            <p>{ctaP}</p>
            <div className="sv-cta-btns">
              <Link className="btn primary lg magnetic cta-lux" data-mag="0.35" to="/#contact">Book a Free Call <span className="arr">↗</span></Link>
              <a className="btn ghost magnetic" data-mag="0.3" href="https://wa.me/919211225929" target="_blank" rel="noopener noreferrer">WhatsApp us</a>
            </div>
          </div>
          <div className="sv-cta-side">
            <span className="sv-cta-lab">What happens on the call</span>
            <ol>
              <li><b>01</b><span>We learn about your brand, goals and what’s working today.</span></li>
              <li><b>02</b><span>We share quick wins and where we see the biggest opportunity.</span></li>
              <li><b>03</b><span>You get a clear plan and proposal, with no obligation.</span></li>
            </ol>
          </div>
        </div>
      </section>
    </main></div>
  );
}
