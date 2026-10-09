import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Shared, visual-first layout for every service page. Content lives in
// src/lib/serviceData.js; long paragraphs are replaced by an interactive
// capability showcase, hover-to-reveal tiles and moving chip rails, so a
// visitor can scan the page instead of reading it.

function Title({ text }) {
  // "Brands people [remember]." → highlight the bracketed words
  const parts = text.split(/(\[[^\]]+\])/);
  return parts.map((p, i) =>
    p.startsWith('[') ? <span className="grad" key={i}>{p.slice(1, -1)}</span> : p,
  );
}

function Statement({ text, glance, image }) {
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
    <section className={`sec svx-statement${image ? ' has-img' : ''}`}>
      <div className="svx-st-text">
        <p className="svx-words" ref={ref}>
          {text.split(' ').map((w, k) => <span key={k} style={{ '--k': k }}>{w} </span>)}
        </p>
        {glance.length > 0 && (
          <div className="svx-glance">
            {glance.map(([big, label]) => (
              <div className="svx-glance-i anim-rise" key={big}><b>{big}</b><span>{label}</span></div>
            ))}
          </div>
        )}
      </div>
      {image && (
        <figure className="svx-st-img anim-rise">
          <img src={image} alt="" loading="lazy" decoding="async" />
        </figure>
      )}
    </section>
  );
}

const ROTATE_MS = 4500;

function Capabilities({ caps }) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  // only rotate while the showcase is actually on screen, so a visitor who
  // scrolls down to it starts from the first capability
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // auto-advance until the visitor picks one themselves
  useEffect(() => {
    if (!auto || !inView) return undefined;
    const t = setTimeout(() => setActive((a) => (a + 1) % caps.length), ROTATE_MS);
    return () => clearTimeout(t);
  }, [active, auto, inView, caps.length]);

  const cap = caps[active];
  return (
    <section className="sec svx-caps" ref={ref}>
      <div className="sec-head reveal-up">
        <div className="kick2">What we do</div>
        <h2>{caps.length} ways we <span className="grad">move the needle</span></h2>
      </div>
      <div className="svx-caps-grid">
        <div className="svx-caps-list" role="tablist" aria-label="Capabilities">
          {caps.map((c, i) => (
            <button
              type="button"
              role="tab"
              aria-selected={i === active}
              className={`svx-cap${i === active ? ' on' : ''}`}
              key={c.h}
              onClick={() => { setActive(i); setAuto(false); }}
            >
              <span className="svx-cap-n">{String(i + 1).padStart(2, '0')}</span>
              <span className="svx-cap-h">{c.h}</span>
              <span className="svx-cap-bar" aria-hidden="true">{i === active && auto && inView && <i key={active} />}</span>
            </button>
          ))}
        </div>
        <div className="svx-panel" role="tabpanel" key={active}>
          <span className="svx-panel-glyph" aria-hidden="true">{cap.ic}</span>
          <span className="svx-panel-ic" aria-hidden="true">{cap.ic}</span>
          <h3>{cap.h}</h3>
          <p>{cap.p}</p>
          <span className="svx-panel-n" aria-hidden="true">{String(active + 1).padStart(2, '0')} / {String(caps.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
}

function Rail({ label, items, reverse }) {
  // duplicated list so the CSS marquee loops seamlessly
  return (
    <div className={`svx-rail${reverse ? ' rev' : ''}`}>
      <span className="svx-rail-lab">{label}</span>
      <div className="svx-rail-win">
        <div className="svx-rail-track">
          {[...items, ...items].map((t, i) => <span className="svx-chip" key={i} aria-hidden={i >= items.length}>{t}</span>)}
        </div>
      </div>
    </div>
  );
}

export default function ServicePage({ data, children }) {
  const { route, image, eyebrow, title, sub, cta, badges, statement, glance, caps, steps, deliver, bestFor, why, faq, ctaH, ctaP } = data;

  return (
    <div id="svp"><main className="route svx" data-route={route}>
      <header className="sp-hero">
        <div className="hero-orbit" aria-hidden="true"><span className="ho-glow"></span><svg className="ho-rings" viewBox="0 0 800 800"><g className="ho-spin s1"><circle className="ho-c" cx="400" cy="400" r="158"/></g><g className="ho-spin s2"><circle className="ho-c dash" cx="400" cy="400" r="238"/><circle className="ho-dot" cx="400" cy="162" r="4"/></g><g className="ho-spin s3"><circle className="ho-c thin dash" cx="400" cy="400" r="318"/></g><g className="ho-spin s4"><circle className="ho-c faint" cx="400" cy="400" r="392"/><circle className="ho-dot" cx="400" cy="8" r="3"/></g></svg></div>
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
      </header>

      <Statement text={statement} glance={glance} image={image} />

      {children}

      <Capabilities caps={caps} />

      <section className="sec svx-process">
        <div className="sec-head reveal-up">
          <div className="kick2">How it works</div>
          <h2>{steps.length} steps, <span className="grad">zero guesswork</span></h2>
        </div>
        <div className="svx-line anim-rise" aria-hidden="true"><i></i></div>
        <ol className={`svx-steps n${steps.length}`}>
          {steps.map((s, i) => (
            <li className="svx-step anim-rise" key={s.h}>
              <span className="svx-step-n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="sec svx-rails">
        <Rail label="What you get" items={deliver} />
        {bestFor.length > 0 && <Rail label="Best for" items={bestFor} reverse />}
      </section>

      <section className="sec svx-why">
        <div className="sec-head reveal-up">
          <div className="kick2">Why Inloop</div>
          <h2>What you <span className="grad">walk away with</span></h2>
        </div>
        <div className="svx-tiles">
          {why.map((w) => (
            <div className="svx-tile anim-rise" key={w.h} tabIndex={0}>
              <span className="svx-tile-ic" aria-hidden="true">{w.ic}</span>
              <h3>{w.h}</h3>
              <div className="svx-tile-more"><p>{w.p}</p></div>
            </div>
          ))}
        </div>
      </section>

      {faq.length > 0 && (
        <section className="sec">
          <div className="sec-head reveal-up">
            <div className="kick2">FAQ</div>
            <h2>Questions, <span className="grad">answered</span></h2>
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

      <section className="sec cta-band">
        <div className="cta-band-inner reveal-up">
          <div className="cta-portal"></div>
          <h2>{ctaH}</h2>
          <p>{ctaP}</p>
          <Link className="btn primary lg magnetic" data-mag="0.35" to="/#contact">Book a Free Call <span className="arr">↗</span></Link>
        </div>
      </section>
    </main></div>
  );
}
