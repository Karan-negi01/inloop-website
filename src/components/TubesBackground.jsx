import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// WebGL "tubes" cursor effect (threejs-components@0.0.19, self-hosted at
// /vendor/tubes1.min.js — it only ships as a browser ES module, and loading it
// from the CDN at runtime broke the hero whenever jsdelivr was unreachable).
// Background-only visual: no children slot, sits behind real content.
export default function TubesBackground({ className = '', enableClickInteraction = true }) {
  const canvasRef = useRef(null);
  const tubesRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    window.THREE = THREE; // the vendored script expects a global THREE

    (async () => {
      if (!canvasRef.current) return;
      try {
        const mod = await import(/* webpackIgnore: true */ '/vendor/tubes1.min.js');
        if (!mounted) return;
        const TubesCursor = mod.default;
        tubesRef.current = TubesCursor(canvasRef.current, {
          tubes: {
            colors: ['#ffffff', '#c7c8ca', '#4a4a4a'],
            lights: { intensity: 300, colors: ['#ffffff', '#aab0b8', '#333333', '#000000'] },
          },
        });
      } catch (err) {
        // decorative only — if it can't load, the hero just renders without it
        console.warn('TubesCursor unavailable:', err);
      }
    })();

    return () => {
      mounted = false;
      if (tubesRef.current && typeof tubesRef.current.dispose === 'function') {
        tubesRef.current.dispose();
      }
    };
  }, []);

  function handleClick() {
    if (!enableClickInteraction || !tubesRef.current) return;
    const randomColors = (count) =>
      new Array(count).fill(0).map(() => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
    tubesRef.current.tubes.setColors(randomColors(3));
    tubesRef.current.tubes.setLightsColors(randomColors(4));
  }

  return <canvas ref={canvasRef} className={`tubes-canvas ${className}`} onClick={handleClick} />;
}
