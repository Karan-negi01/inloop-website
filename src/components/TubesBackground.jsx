import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// WebGL "tubes" cursor effect (threejs-components@0.0.19, self-hosted at
// /vendor/tubes1.min.js — it only ships as a browser ES module, and loading it
// from the CDN at runtime broke the hero whenever jsdelivr was unreachable).
// Background-only visual: no children slot, sits behind real content.
//
// The effect is created once per page load and its canvas is re-parented into
// whichever hero is mounted. Disposing and re-creating it on every visit to
// Home left the hero blank in some browsers (the second renderer never drew),
// so leaving Home just detaches the canvas — the library's own
// IntersectionObserver pauses rendering while it is off-screen.
const COLORS = {
  tubes: {
    colors: ['#ffffff', '#c7c8ca', '#4a4a4a'],
    lights: { intensity: 300, colors: ['#ffffff', '#aab0b8', '#333333', '#000000'] },
  },
};

let shared = null; // { canvas, ready: Promise<instance|null> }

function getShared() {
  if (shared) return shared;
  const canvas = document.createElement('canvas');
  canvas.className = 'tubes-canvas';
  window.THREE = THREE; // the vendored script expects a global THREE
  shared = {
    canvas,
    ready: import(/* webpackIgnore: true */ '/vendor/tubes1.min.js')
      .then((mod) => mod.default(canvas, COLORS))
      .catch((err) => {
        // decorative only — if it can't load, the hero just renders without it
        console.warn('TubesCursor unavailable:', err);
        return null;
      }),
  };
  return shared;
}

export default function TubesBackground({ className = '', enableClickInteraction = true }) {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const { canvas, ready } = getShared();
    host.appendChild(canvas);
    // it sizes itself from its parent, which just changed
    ready.then((tubes) => {
      if (tubes && canvas.parentNode === host) tubes.three.resize();
    });

    function handleClick() {
      if (!enableClickInteraction) return;
      ready.then((tubes) => {
        if (!tubes) return;
        const randomColors = (count) =>
          new Array(count).fill(0).map(() => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
        tubes.tubes.setColors(randomColors(3));
        tubes.tubes.setLightsColors(randomColors(4));
      });
    }
    canvas.addEventListener('click', handleClick);

    return () => {
      canvas.removeEventListener('click', handleClick);
      if (canvas.parentNode === host) host.removeChild(canvas);
    };
  }, [enableClickInteraction]);

  return <div ref={hostRef} className={className} aria-hidden="true" />;
}
