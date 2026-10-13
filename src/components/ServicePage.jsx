import { useEffect, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '@/lib/serviceData';
import { seoForRoute } from '@/lib/seo';

// Shared, visual-first layout for every service page. Content lives in
// src/lib/serviceData.js. Below the hero: an overview split (statement +
// at-a-glance stats), a pinned horizontal reel of capabilities, a sticky
// process timeline, a kinetic deliverables band and checklist, the "why
// Inloop" strip, FAQ, related services and a split CTA.

function Title({ text }) {
  // "Brands people [remember]." → highlight the bracketed words
  const parts = text.split(/(\[[^\]]+\])/);
  return parts.map((p, i) =>
    p.startsWith('[') ? <span className="grad" key={i}>{p.slice(1, -1)}</span> : p,
  );
}

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function Overview({ text, glance }) {
  const ref = useRef(null);
  // words brighten one by one, scrubbed to the scroll position
  useLayoutEffect(() => {
    const el = ref.current;
    const { gsap } = window;
    if (!el) return undefined;
    if (!gsap || !window.ScrollTrigger || reducedMotion()) {
      el.classList.add('lit');
      return undefined;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelectorAll('span'), { opacity: 0.14 }, {
        opacity: 1, stagger: 0.1, ease: 'none',
        scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 42%', scrub: 0.6 },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="sec sv-over">
      <div className="sv-over-copy">
        <Kick n="01">Overview</Kick>
        <p className="sv-words sv-scrub" ref={ref}>
          {text.split(' ').map((w, k) => <span key={k}>{w} </span>)}
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

// "What we do": on desktop the section pins and the capability cards slide
// sideways as you scroll, each photo drifting inside its frame. Phones (and
// reduced motion) get a native swipe carousel from the same markup.
function Reel({ caps }) {
  const secRef = useRef(null);
  const trackRef = useRef(null);
  const countRef = useRef(null);
  const barRef = useRef(null);

  useLayoutEffect(() => {
    const sec = secRef.current;
    const track = trackRef.current;
    const { gsap } = window;
    if (!sec || !track || !gsap || !window.ScrollTrigger || reducedMotion()) return undefined;

    const mm = gsap.matchMedia();
    mm.add('(min-width: 861px)', () => {
      // slide until the last card meets the right edge of the content column
      const distance = () => {
        const win = track.parentElement;
        const cs = getComputedStyle(win);
        return track.scrollWidth - (win.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight));
      };
      const slide = gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: sec,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (st) => {
            const n = Math.min(caps.length, Math.floor(st.progress * caps.length) + 1);
            if (countRef.current) countRef.current.textContent = String(n).padStart(2, '0');
            if (barRef.current) barRef.current.style.transform = `scaleX(${st.progress})`;
          },
        },
      });
      track.querySelectorAll('.sv-reel-img img').forEach((img) => {
        gsap.fromTo(img, { xPercent: -7 }, {
          xPercent: 7, ease: 'none',
          scrollTrigger: { trigger: img.parentElement, containerAnimation: slide, start: 'left right', end: 'right left', scrub: true },
        });
      });
    });
    return () => mm.revert();
  }, [caps.length]);

  return (
    <section className="sv-reel" ref={secRef}>
      <div className="sv-reel-head">
        <div>
          <Kick n="02">What we do</Kick>
          <h2>{caps.length} ways we <span className="grad">move the needle</span></h2>
        </div>
        <div className="sv-reel-meter" aria-hidden="true">
          <span><b ref={countRef}>01</b> / {String(caps.length).padStart(2, '0')}</span>
          <i><em ref={barRef} /></i>
          <small>Scroll to explore</small>
        </div>
      </div>
      <div className="sv-reel-win">
        <div className="sv-reel-track" ref={trackRef}>
          {caps.map((c, i) => (
            <article className="sv-reel-card" key={c.h} data-noview>
              <div className="sv-reel-img"><img src={c.img} alt="" decoding="async" /></div>
              <span className="sv-reel-n">{String(i + 1).padStart(2, '0')}</span>
              <div className="sv-reel-body">
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            </article>
          ))}
          <Link className="sv-reel-end" to="/#contact">
            <span className="sv-reel-end-k">Next step</span>
            <b>Let’s build yours.</b>
            <span className="sv-reel-end-go">Book a free call <em>↗</em></span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// two rows of giant outlined text that slide in opposite directions with scroll
function Kinetic({ items }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const el = ref.current;
    const { gsap } = window;
    if (!el || !gsap || !window.ScrollTrigger || reducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      const [a, b] = el.querySelectorAll('.sv-kin-row');
      const st = { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.5 };
      gsap.fromTo(a, { xPercent: 0 }, { xPercent: -28, ease: 'none', scrollTrigger: st });
      gsap.fromTo(b, { xPercent: -28 }, { xPercent: 0, ease: 'none', scrollTrigger: { ...st } });
    }, el);
    return () => ctx.revert();
  }, []);

  const half = Math.ceil(items.length / 2);
  const row = (list) => [...list, ...list].map((t, i) => <span key={i}>{t}<i>✦</i></span>);
  return (
    <div className="sv-kin" ref={ref} aria-hidden="true">
      <div className="sv-kin-row">{row(items.slice(0, half))}</div>
      <div className="sv-kin-row out">{row(items.slice(half))}</div>
    </div>
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

      <Reel caps={caps} />

      <section className="sec sv-process">
        <div className="sv-process-side reveal-up">
          <Kick n="03">How it works</Kick>
          <h2>{steps.length} steps, <span className="grad">zero guesswork</span></h2>
          <p>A clear, repeatable process, so you always know what’s happening and what comes next.</p>
          <Link className="btn ghost magnetic" data-mag="0.3" to="/#contact">Start with a free call <span className="arr">↗</span></Link>
        </div>
        <Steps steps={steps} />
      </section>

      <Kinetic items={deliver} />

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
