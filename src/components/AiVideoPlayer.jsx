import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Full-screen player for an AI video concept: plays the ad's three scenes
// (hook → demo → CTA) as a timed 9:16 motion piece with real playback
// controls — play/pause, scrubbing progress, replay — instead of a static card.
const STAGES = ['Hook', 'Demo', 'CTA'];

function toSeconds(len) {
  const [m, s] = len.split(':').map(Number);
  return m * 60 + s;
}

function fmt(t) {
  const s = Math.max(0, Math.floor(t));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

export default function AiVideoPlayer({ concept, icon, index, onClose }) {
  const duration = toSeconds(concept.len);
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(true);
  const closeRef = useRef(null);
  const last = useRef(null);

  const ended = time >= duration;
  const scene = Math.min(2, Math.floor((time / duration) * 3));

  // playback clock
  useEffect(() => {
    if (!playing || ended) return undefined;
    let raf;
    const tick = (now) => {
      if (last.current != null) {
        const dt = (now - last.current) / 1000;
        setTime((t) => Math.min(duration, t + dt));
      }
      last.current = now;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      last.current = null;
    };
  }, [playing, ended, duration]);

  const toggle = useCallback(() => {
    if (ended) {
      setTime(0);
      setPlaying(true);
    } else {
      setPlaying((p) => !p);
    }
  }, [ended]);

  // keyboard, scroll lock and focus
  useEffect(() => {
    const prevFocus = document.activeElement;
    closeRef.current?.focus();
    document.body.classList.add('cmodal-lock');
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ' || e.key === 'k') {
        e.preventDefault();
        toggle();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('cmodal-lock');
      prevFocus?.focus?.();
    };
  }, [onClose, toggle]);

  function seek(e) {
    const r = e.currentTarget.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    setTime(p * duration);
  }

  const sceneText = concept.scenes[scene];

  return (
    <div className="avp" role="dialog" aria-modal="true" aria-label={`${concept.title} — AI video concept`} data-lenis-prevent>
      <div className="avp-backdrop" onClick={onClose} />
      <div className={`avp-stage${playing && !ended ? ' is-playing' : ''}`} style={{ '--i': index }}>
        <button ref={closeRef} type="button" className="avp-x" onClick={onClose} aria-label="Close video">&times;</button>

        <div className="avp-frame" onClick={toggle}>
          <div className="avp-top">
            <div className="avp-segs">
              {STAGES.map((s, k) => (
                <i key={s}><b style={{ transform: `scaleX(${Math.min(1, Math.max(0, (time / duration) * 3 - k))})` }} /></i>
              ))}
            </div>
            <div className="avp-meta"><span className="aiv-badge">AI</span><span>Sponsored · {concept.title}</span></div>
          </div>

          {/* each scene remounts on change so its entrance animation replays */}
          <div className={`avp-scene s${scene}`} key={scene}>
            <span className="avp-ic">{icon}</span>
            <span className="avp-step">{STAGES[scene]}</span>
            <p className="avp-line">
              {sceneText.split(' ').map((w, k) => (
                <span key={k} style={{ '--w': k }}>{w}&nbsp;</span>
              ))}
            </p>
            {scene === 2 && (
              <Link to="/#contact" className="avp-cta" onClick={(e) => { e.stopPropagation(); onClose(); }}>
                Make one like this <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>

          {(!playing || ended) && (
            <span className="avp-big" aria-hidden="true">
              {ended
                ? <svg viewBox="0 0 24 24"><path d="M12 5V2L7 6l5 4V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z" /></svg>
                : <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>}
            </span>
          )}
        </div>

        <div className="avp-controls">
          <button type="button" className="avp-btn" onClick={toggle} aria-label={ended ? 'Replay' : playing ? 'Pause' : 'Play'}>
            {ended
              ? <svg viewBox="0 0 24 24"><path d="M12 5V2L7 6l5 4V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z" /></svg>
              : playing
                ? <svg viewBox="0 0 24 24"><path d="M7 5h4v14H7zM13 5h4v14h-4z" /></svg>
                : <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>}
          </button>
          <span className="avp-time">{fmt(time)} / {concept.len}</span>
          <div
            className="avp-track"
            role="slider"
            tabIndex={0}
            aria-label="Seek"
            aria-valuemin={0}
            aria-valuemax={duration}
            aria-valuenow={Math.round(time)}
            onClick={seek}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') setTime((t) => Math.min(duration, t + 1));
              if (e.key === 'ArrowLeft') setTime((t) => Math.max(0, t - 1));
            }}
          >
            <i style={{ transform: `scaleX(${time / duration})` }} />
          </div>
        </div>
        <p className="avp-note">Concept preview · generated &amp; edited with AI</p>
      </div>
    </div>
  );
}
