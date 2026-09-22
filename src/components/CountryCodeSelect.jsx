import { useEffect, useRef, useState } from 'react';
import { COUNTRY_CODES, DEFAULT_COUNTRY } from '@/lib/countryCodes';

export default function CountryCodeSelect() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(DEFAULT_COUNTRY);
  const rootRef = useRef(null);
  const searchRef = useRef(null);

  const current = COUNTRY_CODES.find(([iso]) => iso === selected) || COUNTRY_CODES[0];
  const [, currentLabel, currentDial] = current;

  useEffect(() => {
    if (!open) return;
    function onDocClick(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    }
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    const t = setTimeout(() => searchRef.current && searchRef.current.focus(), 30);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
      clearTimeout(t);
    };
  }, [open]);

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  const q = query.trim().toLowerCase();
  const filtered = q
    ? COUNTRY_CODES.filter(([, label, dial]) => label.toLowerCase().includes(q) || dial.includes(q))
    : COUNTRY_CODES;

  return (
    <div className="ccode" ref={rootRef}>
      <button
        type="button"
        className="ccode-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{currentDial}</span>
        <svg className="ccode-chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <input type="hidden" name="countryCode" value={selected} />
      <input type="hidden" name="countryDial" value={currentDial} />
      {open && (
        <div className="ccode-list" role="listbox">
          <input
            ref={searchRef}
            type="text"
            className="ccode-search"
            placeholder="Search country or code…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="ccode-opts">
            {filtered.length === 0 && <div className="ccode-empty">No match</div>}
            {filtered.map(([iso, label, dial]) => (
              <button
                type="button"
                key={iso}
                role="option"
                aria-selected={iso === selected}
                className={'ccode-opt' + (iso === selected ? ' active' : '')}
                onClick={() => { setSelected(iso); setOpen(false); }}
              >
                <span className="ccode-opt-dial">{dial}</span>
                <span className="ccode-opt-label">{label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
