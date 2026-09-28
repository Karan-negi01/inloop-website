import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const STORY = [
  {
    title: 'Born from a simple observation',
    body: 'We watched brands with average ideas and strong systems consistently outgrow brands with brilliant ideas and no structure. That one pattern changed how we think about everything.',
  },
  {
    title: 'Built for modern brands',
    body: "Inloop Media was built to bring that thinking to modern brands — combining structured growth systems, performance-driven content and AI-powered execution under one roof. Today, we're building one of the most ambitious AI-first marketing ecosystems, working across creative, performance, media and technology.",
  },
  {
    title: 'Backed by AMS Group',
    body: 'As part of AMS Group, we bring the heritage of a diversified business group to every brand we grow — blending proven business wisdom with the speed of today.',
  },
];

const VALUES = [
  ['Systems Over Guesswork', 'We build for predictable, repeatable growth — not lucky wins.'],
  ['Human First, AI Always', 'Creativity and strategy lead. AI gives them speed and scale.'],
  ['Creativity With Intention', 'Every creative decision ties to a business outcome, not just an aesthetic.'],
  ['Built to Scale', 'Everything we make is designed to grow with the brand, not slow it down.'],
  ['In Every Loop That Matters', 'From first scroll to final conversion, we stay connected to what drives results.'],
];

const AGENTS = [
  ['Strategist', 'Reads the data, finds the opportunity, sets the direction.'],
  ['Creator', "Produces and tests creative at a scale humans can't match."],
  ['Optimizer', 'Watches performance live and scales what works.'],
];

// One <span> per word so the belief statement can light up word by word on scroll.
function Words({ text, accent = false }) {
  return text.split(' ').map((w, i) => (
    <span key={i} className={`abx-w${accent ? ' abx-w-accent' : ''}`}>{w} </span>
  ));
}

const pad = (n) => String(n).padStart(2, '0');

export default function About() {
  const rootRef = useRef(null);

  // Inertia scroll on desktop, driven by GSAP's ticker so the scrubbed and pinned
  // animations below follow it frame-for-frame (same setup as the Home flip cards).
  useEffect(() => {
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ lerp: 0.09 });
    lenis.on('scroll', ScrollTrigger.update);
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      // ── belief: words brighten as the statement scrolls through the viewport ──
      gsap.fromTo(
        '.abx-w',
        { opacity: 0.14 },
        {
          opacity: 1,
          stagger: 0.08,
          ease: 'none',
          scrollTrigger: { trigger: '.abx-belief-text', start: 'top 80%', end: 'bottom 45%', scrub: 1 },
        },
      );
      gsap.from('.abx-belief-prose p', {
        opacity: 0,
        y: 24,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.abx-belief-prose', start: 'top 85%' },
      });

      const mm = gsap.matchMedia();

      // ── story: pinned, three chapters crossfade (desktop only) ──
      mm.add('(min-width: 861px)', () => {
        const pinEl = root.querySelector('.abx-story-pin');
        const chapters = gsap.utils.toArray('.abx-chapter');
        const counter = root.querySelector('.abx-story-count b');
        const dots = gsap.utils.toArray('.abx-dot');
        gsap.set(chapters.slice(1), { autoAlpha: 0, y: 28 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinEl,
            start: 'top top',
            end: `+=${window.innerHeight * 2.2}`,
            pin: true,
            scrub: 1.2,
            anticipatePin: 1,
            onUpdate(self) {
              const i = Math.min(chapters.length - 1, Math.floor(self.progress * chapters.length));
              if (counter) counter.textContent = pad(i + 1);
              dots.forEach((d, k) => d.classList.toggle('on', k === i));
            },
          },
        });
        tl.fromTo('.abx-story-bar i', { scaleX: 0 }, { scaleX: 1, ease: 'none', duration: chapters.length }, 0);
        chapters.forEach((ch, i) => {
          if (i === 0) return;
          tl.to(chapters[i - 1], { autoAlpha: 0, y: -28, duration: 0.5, ease: 'power1.inOut' }, i - 0.35);
          tl.to(ch, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power1.inOut' }, i - 0.1);
        });
      });

      // ── values: each row lights up as it reaches the middle of the screen ──
      gsap.utils.toArray('.abx-value').forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0.2, y: 24 },
          { opacity: 1, y: 0, ease: 'none', scrollTrigger: { trigger: row, start: 'top 90%', end: 'top 62%', scrub: 1 } },
        );
      });

      // ── how we work: connector draws across, then the three agents step in ──
      const wayTl = gsap.timeline({ scrollTrigger: { trigger: '.abx-agents', start: 'top 78%' } });
      wayTl.fromTo('.abx-agents-line i', { scaleX: 0 }, { scaleX: 1, duration: 1.1, ease: 'power2.inOut' });
      wayTl.from('.abx-agent', { opacity: 0, y: 30, stagger: 0.18, duration: 0.6, ease: 'power2.out' }, 0.2);

      // ── numbers + CTA: rise in ──
      gsap.from('.abx-num', {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.abx-nums', start: 'top 82%' },
      });
      gsap.from('.abx-cta-in > *', {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.abx-cta', start: 'top 75%' },
      });
    }, root);

    // fonts and photos shift layout after mount — recompute trigger positions once they settle
    const t = setTimeout(() => ScrollTrigger.refresh(), 700);
    return () => {
      clearTimeout(t);
      ctx.revert();
    };
  }, []);

  return (
<div id="svp"><main className="route ab abx" data-route="about" ref={rootRef}>

    <header className="sp-hero ab-hero">
      <div className="hero-orbit" aria-hidden="true"><span className="ho-glow"></span><svg className="ho-rings" viewBox="0 0 800 800"><g className="ho-spin s1"><circle className="ho-c" cx="400" cy="400" r="158"/></g><g className="ho-spin s2"><circle className="ho-c dash" cx="400" cy="400" r="238"/><circle className="ho-dot" cx="400" cy="162" r="4"/></g><g className="ho-spin s3"><circle className="ho-c thin dash" cx="400" cy="400" r="318"/></g><g className="ho-spin s4"><circle className="ho-c faint" cx="400" cy="400" r="392"/><circle className="ho-dot" cx="400" cy="8" r="3"/></g></svg></div>
      <div className="reveal d1"><span className="sp-eyebrow"><span className="dot"></span>About Inloop Media</span></div>
      <h1 className="reveal d2 pt-fade">We don't just market brands. We keep them <span className="grad">in the loop with what matters</span></h1>
      <p className="reveal d3 sub pt-fade">Inloop Media is a full-service brand growth company — where human creativity leads and AI accelerates, helping brands scale with clarity, consistency and measurable results.</p>
      <div className="reveal d4 pt-fade"><Link className="btn primary lg magnetic" data-mag="0.35" to="/#contact">Work With Us <span className="arr">↗</span></Link></div>
    </header>

    {/* belief — statement lights up word by word */}
    <section className="sec abx-belief" id="belief">
      <div className="kick2">What we believe</div>
      <p className="abx-belief-text">
        <Words text="Most brands don't have a marketing problem." />
        <Words text="They have a systems problem." accent />
      </p>
      <div className="abx-belief-prose">
        <p>From the outside, marketing looks like creatives, ads and campaigns. But sustainable growth doesn't come from isolated efforts — it comes from systems: how content, distribution, data and execution work together.</p>
        <p>That's the gap Inloop was built to close. We build the infrastructure brands need to grow predictably, not just occasionally — powered by AI, driven by people.</p>
      </div>
    </section>

    {/* story — pinned chapters on desktop, stacked on mobile */}
    <section className="abx-story" id="story">
      <div className="abx-story-pin">
        <div className="abx-story-side">
          <div className="kick2">Our story</div>
          <div className="abx-story-count"><b>01</b><span>/ {pad(STORY.length)}</span></div>
          <div className="abx-story-bar" aria-hidden="true"><i></i></div>
          <div className="abx-dots" aria-hidden="true">{STORY.map((_, i) => <span key={i} className={`abx-dot${i === 0 ? ' on' : ''}`}></span>)}</div>
        </div>
        <div className="abx-chapters">
          {STORY.map((c, i) => (
            <article className="abx-chapter" key={c.title}>
              <span className="abx-chapter-n">Chapter {pad(i + 1)}</span>
              <h2>{c.title}</h2>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="sec founders founders-ab" id="founders-ab"><div className="fwrap"><div className="fnd-head"><span className="fnd-kick">AMS Group Leadership</span><h2 className="fnd-title">Meet the founders</h2><p className="fnd-ams-note">Inloop Media is part of AMS Group.</p></div><div className="fnd-grid"><div className="fnd-text"><article className="fnd-block"><h3>Sarthak Garg</h3><p className="fbio">Sarthak leads AMS with a strong execution-first mindset. He focuses on building high-performing teams, driving measurable impact, and creating systems that scale. Known for his clarity and speed, he believes in turning ideas into outcomes — fast and right.</p><div className="fnd-q"><span className="ql">Quote</span><blockquote>“Strong teams and clear ownership build great companies.”</blockquote></div></article><article className="fnd-block"><h3>Mayank Aggarwal</h3><p className="fbio">Mayank brings a balance of strategy and creativity to AMS. He works closely on brand vision, partnerships, and culture, ensuring growth is thoughtful and sustainable. His approach keeps people and purpose at the center of everything AMS builds.</p><div className="fnd-q"><span className="ql">Quote</span><blockquote>“When people grow, businesses follow.”</blockquote></div></article></div><figure className="fnd-photo"><div className="fnd-card"><div className="pic fnd-pic" role="img" aria-label="Sarthak Garg and Mayank Aggarwal, founders of AMS"></div></div><figcaption>Sarthak Garg &amp; Mayank Aggarwal — Founders, AMS</figcaption></figure></div></div></section>

    <section className="sec team" id="team">
      <div className="sec-head reveal-up"><div className="kick2">Inloop Media Team</div><h2>People who <span className="grad">make it happen</span></h2></div>
      <div className="team-grid">
        <figure className="member tilt anim-rise"><div className="av-frame"><div className="av-lg avph ph-U" role="img" aria-label="Uditanshu Jayant"></div></div><b>Uditanshu Jayant</b><i>Co-Founder &amp; Growth Strategist</i></figure>
        <figure className="member tilt anim-rise" data-d="1"><div className="av-frame"><div className="av-lg avph ph-A" role="img" aria-label="Arushi Pant"></div></div><b>Arushi Pant</b><i>Head – Growth &amp; Partnerships</i></figure>
        <figure className="member tilt anim-rise" data-d="2"><div className="av-frame"><div className="av-lg avph ph-K" role="img" aria-label="Krrish Garg"></div></div><b>Krrish Garg</b><i>Co-Founder &amp; Operations Head</i></figure>
      </div>
    </section>

    {/* values — numbered rows that light up on scroll */}
    <section className="sec abx-values" id="values">
      <div className="abx-head">
        <div className="kick2">What we stand for</div>
        <h2>The principles that keep us <span className="grad">in the loop</span></h2>
      </div>
      <ol className="abx-value-list">
        {VALUES.map(([title, desc], i) => (
          <li className="abx-value" key={title}>
            <span className="abx-value-n">{pad(i + 1)}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
          </li>
        ))}
      </ol>
    </section>

    {/* how we work — three agents joined by a line that draws on scroll */}
    <section className="sec abx-way" id="way">
      <div className="abx-head">
        <div className="kick2">How we work · AI-powered, human-led</div>
        <h2>Human thinking. AI speed. <span className="grad">That's the Inloop advantage</span></h2>
        <p className="sec-sub">We don't replace human creativity with AI — we amplify it. Strategy, taste and judgement come from our team. Scale, speed and optimization come from AI working quietly in the background.</p>
      </div>
      <div className="abx-agents">
        <div className="abx-agents-line" aria-hidden="true"><i></i></div>
        {AGENTS.map(([name, desc], i) => (
          <div className="abx-agent" key={name}>
            <span className="abx-agent-step">{pad(i + 1)}</span>
            <b>{name}</b>
            <span>{desc}</span>
          </div>
        ))}
      </div>
    </section>

    {/* numbers — count up (data-count is animated by the site-wide counter) */}
    <section className="sec abx-numbers" id="numbers">
      <div className="abx-head"><div className="kick2">By the numbers</div>
        <h2>Proof, <span className="grad">not promises</span></h2></div>
      <div className="abx-nums">
        <div className="abx-num"><div className="gs-stat-n" data-count="25" data-pre="" data-suf="+">0+</div><div className="abx-num-l">Brands served</div></div>
        <div className="abx-num"><div className="gs-stat-n" data-count="2" data-pre="₹" data-suf="Cr+">₹0Cr+</div><div className="abx-num-l">Ad spend managed</div></div>
        <div className="abx-num"><div className="gs-stat-n" data-count="4" data-pre="" data-suf="x">0x</div><div className="abx-num-l">Average ROAS</div></div>
        <div className="abx-num"><div className="gs-stat-n abx-num-text">India &amp; global</div><div className="abx-num-l">Markets served</div></div>
      </div>
    </section>

    <section className="sec abx-cta" id="about-cta">
      <div className="gs-aurora" aria-hidden="true"></div>
      <div className="abx-cta-in">
        <span className="kick2">Your turn</span>
        <h2>Ready to build something <span className="grad">that lasts?</span></h2>
        <p>Tell us about your brand. We'll tell you exactly how we'd grow it.</p>
        <div className="ab-cta-row">
          <Link className="btn primary lg magnetic cta-lux" data-mag="0.4" to="/#contact">Book a Free Call <span className="arr">↗</span></Link>
        </div>
      </div>
    </section>
  </main></div>
  );
}
