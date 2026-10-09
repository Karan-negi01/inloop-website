// Cursor-following spotlight on cards (home + service pages): one delegated pointermove
// listener writes the pointer position into --mx / --my on the hovered card,
// and the card's ::after paints a soft radial light there (see globals.css).
const SELECTOR = [
  '.svc-bento .svc', '.cs-card', '.pkq', '.aiv-card', '.proc-step',
  // service pages (About is left untouched)
  '#svp main:not([data-route="about"]) :is(.svc, .sp-step, .sp-why, .pipe-step)',
  '.svx-panel', '.svx-step', '.svx-tile',
].join(', ');

let started = false;

export function initSpotlight() {
  if (started || typeof window === 'undefined') return;
  if (!window.matchMedia('(hover: hover)').matches) return;
  started = true;

  let card = null;
  let x = 0;
  let y = 0;
  let queued = false;

  function paint() {
    queued = false;
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${x - r.left}px`);
    card.style.setProperty('--my', `${y - r.top}px`);
  }

  document.addEventListener('pointermove', (e) => {
    card = e.target.closest ? e.target.closest(SELECTOR) : null;
    if (!card) return;
    x = e.clientX;
    y = e.clientY;
    if (!queued) {
      queued = true;
      requestAnimationFrame(paint);
    }
  }, { passive: true });
}
