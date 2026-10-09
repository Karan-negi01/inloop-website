// AI video concepts — each card is a short-form video player: real footage
// (stock clips in public/videos, from Mixkit) loops underneath while the ad's
// storyboard (hook → demo → CTA) runs as captions over it.
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import AiVideoPlayer from './AiVideoPlayer';

const CONCEPTS = [
  {
    video: '/videos/ai-beauty.mp4', title: 'Beauty, Health & Wellness', sub: 'UGC unboxings & routines', len: '0:15',
    scenes: ['“I almost skipped this step…”', 'Texture close-up, day 1 → day 7', 'Glow kit — 20% off today'],
  },
  {
    video: '/videos/ai-fashion.mp4', title: 'Fashion & Apparel', sub: 'Lookbooks & try-on hooks', len: '0:12',
    scenes: ['One jacket, five outfits', 'AI try-on across body types', 'New drop — sizes XS to 3XL'],
  },
  {
    video: '/videos/ai-saas.mp4', title: 'High-Tech & SaaS', sub: 'Explainer & demo ads', len: '0:20',
    scenes: ['Still exporting reports by hand?', '3-click dashboard walkthrough', 'Live in 10 minutes'],
  },
  {
    video: '/videos/ai-services.mp4', title: 'Professional Services', sub: 'Talking-head authority', len: '0:18',
    scenes: ['3 mistakes that cost you clients', 'Expert breakdown, captioned', 'Free 15-min audit'],
  },
  {
    video: '/videos/ai-d2c.mp4', title: 'D2C & E-commerce', sub: 'Product spotlights', len: '0:15',
    scenes: ['Why 10,000 people switched', '360° product spin + reviews', 'Free shipping this week'],
  },
  {
    video: '/videos/ai-realestate.mp4', title: 'Real Estate', sub: 'Walkthrough reels', len: '0:22',
    scenes: ['Sunrise from the 14th floor', 'AI-staged room walkthrough', '2 & 3 BHK — site visits open'],
  },
];

const STAGES = ['Hook', 'Demo', 'CTA'];

export default function AiVideoGrid() {
  const [open, setOpen] = useState(null);
  const gridRef = useRef(null);

  // only play the footage of cards that are on screen (and not for reduced motion)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const vids = gridRef.current.querySelectorAll('video');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.play().catch(() => {});
        else e.target.pause();
      });
    }, { threshold: 0.25 });
    vids.forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <div className="aiv-grid" ref={gridRef}>
      {CONCEPTS.map((c, i) => (
        <article className="aiv-card anim-rise" style={{ '--i': i }} key={c.title} onClick={() => setOpen(i)}>
          <div className="aiv-thumb">
            <video className="aiv-video" src={c.video} muted loop playsInline preload="metadata" aria-hidden="true" />
            <div className="aiv-top" aria-hidden="true">
              <div className="aiv-segs"><i /><i /><i /></div>
              <div className="aiv-meta"><span className="aiv-badge">AI</span><span>Sponsored</span><span className="aiv-len">{c.len}</span></div>
            </div>
            <button type="button" className="aiv-pp" aria-label={`Play ${c.title} video`} onClick={(e) => { e.stopPropagation(); setOpen(i); }}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg></button>
            <ol className="aiv-scenes" aria-label={`${c.title} ad storyboard`}>
              {c.scenes.map((s, k) => (
                <li className="aiv-scene" key={STAGES[k]}>
                  <span className="aiv-step">{STAGES[k]}</span>
                  <span className="aiv-line">{s}</span>
                </li>
              ))}
            </ol>
            <div className="aiv-bar" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              <span className="aiv-track"><i /></span>
              <svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4z" /><path d="M16 9a4 4 0 0 1 0 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            </div>
          </div>
          <div className="aiv-label"><b>{c.title}</b><span>{c.sub}</span></div>
        </article>
      ))}
      {/* portal to <body>: the cards are transformed, which would trap a fixed overlay */}
      {open != null && createPortal(
        <AiVideoPlayer concept={CONCEPTS[open]} index={open} onClose={() => setOpen(null)} />,
        document.body,
      )}
    </div>
  );
}
