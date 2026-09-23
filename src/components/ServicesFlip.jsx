import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import ServiceCard, { SERVICE_CARD_DATA } from './ServiceCard';

export default function ServicesFlip() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const mobileCardRefs = useRef([]);

  // Smooth (inertia) scroll on desktop, synced to GSAP's ticker so the
  // pinned fan/flip ScrollTrigger below tracks it exactly instead of
  // feeling stepped against raw wheel/trackpad deltas.
  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouch) return;
    const lenis = new Lenis();
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
    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;

      // ── MOBILE: stacked column, each card flips as it scrolls into view ──
      if (isMobile) {
        mobileCardRefs.current.forEach((card) => {
          if (!card) return;
          const front = card.querySelector('.flip-card-front');
          const back = card.querySelector('.flip-card-back');

          gsap.set(front, { rotateY: 0 });
          gsap.set(back, { rotateY: 180 });

          gsap.timeline({
            scrollTrigger: { trigger: card, start: 'top 88%', end: 'center 48%', scrub: 1.2, invalidateOnRefresh: true },
          })
            .to(front, { rotateY: -180, ease: 'power2.inOut', duration: 1 })
            .to(back, { rotateY: 0, ease: 'power2.inOut', duration: 1 }, '<');
        });
        return;
      }

      // ── DESKTOP: pin the section → fan the cards out → flip them ──
      const cards = cardRefs.current;
      const cardsSection = containerRef.current.querySelector('.svcflip-desktop');
      if (!cardsSection) return;
      const totalScrollHeight = window.innerHeight * 3;
      const positions = [14, 38, 62, 86];
      const rotations = [-18, -7, 7, 18];

      ScrollTrigger.create({ trigger: cardsSection, start: 'top top', end: `+=${totalScrollHeight}`, pin: true, pinSpacing: true });

      cards.forEach((card, i) => {
        if (!card) return;
        const frontEl = card.querySelector('.flip-card-front');
        const backEl = card.querySelector('.flip-card-back');
        gsap.set(backEl, { rotateY: 180 });
        gsap.set(frontEl, { rotateY: 0 });

        const tl = gsap.timeline({
          scrollTrigger: { trigger: cardsSection, start: 'top top', end: `+=${totalScrollHeight}`, scrub: 2.0 },
        });

        tl.to(card, { x: `${positions[i] - 50}vw`, rotation: rotations[i], ease: 'power2.out', duration: 1 }, 0);

        const flipStart = 1 + i * 0.25;
        tl.to(frontEl, { rotateY: -180, ease: 'power3.inOut', duration: 1.2 }, flipStart);
        tl.to(backEl, { rotateY: 0, ease: 'power3.inOut', duration: 1.2 }, flipStart);
        tl.to(card, { rotation: 0, ease: 'power3.inOut', duration: 1.2 }, flipStart);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* ═══ MOBILE ═══ */}
      <section className="svcflip svcflip-mobile">
        <div className="sec-head reveal-up">
          <div className="kick2">What we do</div>
          <h2>We don&apos;t just consult. <span className="grad">We build.</span></h2>
          <p className="sec-sub">Scroll to reveal each service.</p>
        </div>
        <div className="svcflip-mobile-stack">
          {SERVICE_CARD_DATA.map((_, i) => (
            <ServiceCard key={`mob-${i}`} index={i} ref={(el) => (mobileCardRefs.current[i] = el)} />
          ))}
        </div>
      </section>

      {/* ═══ DESKTOP ═══ */}
      <section className="svcflip svcflip-desktop">
        <div className="svcflip-glow" aria-hidden="true"></div>
        <div className="svcflip-head">
          <div className="kick2">What we do</div>
          <h2>We don&apos;t just consult. <span className="grad">We build.</span></h2>
        </div>
        {SERVICE_CARD_DATA.map((_, i) => (
          <ServiceCard key={`desk-${i}`} index={i} ref={(el) => (cardRefs.current[i] = el)} />
        ))}
        <div className="svcflip-cue">↓ Scroll to fan &amp; flip</div>
      </section>
    </div>
  );
}
