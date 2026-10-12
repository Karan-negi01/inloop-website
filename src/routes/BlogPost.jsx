import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { POSTS, formatDate, postBySlug, readMinutes } from '@/lib/blogData';

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

function useReadProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const body = document.querySelector('.jp-body');
      if (!body) return;
      const r = body.getBoundingClientRect();
      const total = r.height - window.innerHeight * 0.6;
      setPct(Math.min(100, Math.max(0, (-r.top + window.innerHeight * 0.2) / total * 100)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return pct;
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-30% 0px -60% 0px' });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [ids]);
  return active;
}

function Share({ title }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const enc = encodeURIComponent;
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* clipboard blocked: nothing to do */ }
  };
  return (
    <div className="jp-share">
      <span className="jp-aside-lab">Share</span>
      <div>
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
          <svg viewBox="0 0 24 24" className="fill"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" /></svg>
        </a>
        <a href={`https://wa.me/?text=${enc(`${title} ${url}`)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp">
          <svg viewBox="0 0 24 24"><path d="M3.5 20.5l1.3-4.1A8.5 8.5 0 1 1 8 19.4z" /><path d="M9 8.5c0 3.3 2.2 6 5.6 6.6l1.3-1.4-1.9-1-1 .9c-1.1-.5-2-1.4-2.5-2.5l.9-1-1-1.9z" /></svg>
        </a>
        <a href={`https://x.com/intent/post?text=${enc(title)}&url=${enc(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X">
          <svg viewBox="0 0 24 24"><path d="M4 4l16 16M20 4L4 20" /></svg>
        </a>
        <button type="button" onClick={copy} aria-label={copied ? 'Link copied' : 'Copy link'}>
          {copied
            ? <svg viewBox="0 0 24 24"><path d="M5 12.5l4.2 4.2L19 7" /></svg>
            : <svg viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" /></svg>}
        </button>
      </div>
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = postBySlug(slug);
  // stable across scroll re-renders, so the section observer isn't rebuilt each time
  const ids = useMemo(() => (post ? post.sections.map((s) => slugify(s.h)) : []), [post]);
  const pct = useReadProgress();
  const active = useActiveSection(ids);

  if (!post) {
    return (
      <div id="svp"><main className="route jr" data-route={`blog/${slug}`}>
        <section className="sec jp-missing">
          <div className="kick2">404</div>
          <h1>This article doesn’t exist</h1>
          <p>It may have moved. Head back to the journal for the latest articles.</p>
          <Link className="btn primary lg" to="/blog">All articles</Link>
        </section>
      </main></div>
    );
  }

  const related = [...POSTS.filter((p) => p !== post && p.cat === post.cat), ...POSTS.filter((p) => p !== post && p.cat !== post.cat)].slice(0, 3);

  return (
<div id="svp"><main className="route jr jp" data-route={`blog/${slug}`}>
  <div className="jp-progress" aria-hidden="true"><i style={{ transform: `scaleX(${pct / 100})` }} /></div>

  <header className="jp-head">
    <Link className="jp-back reveal d1" to="/blog"><span>&larr;</span> All articles</Link>
    <div className="jp-meta reveal d1">
      <span className="jr-cat">{post.cat}</span>
      <span>{formatDate(post.date)}</span>
      <span>{readMinutes(post)} min read</span>
    </div>
    <h1 className="reveal d2 pt-fade">{post.title}</h1>
    <p className="reveal d3 pt-fade jp-dek">{post.excerpt}</p>
  </header>

  <figure className="jp-cover reveal d3" data-noview><img src={post.img} alt="" fetchPriority="high" /></figure>

  <div className="jp-layout">
    <aside className="jp-aside">
      <nav className="jp-toc" aria-label="On this page">
        <span className="jp-aside-lab">On this page</span>
        <ol>
          {post.sections.map((s, i) => {
            const id = ids[i];
            return (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? 'on' : ''}
                  onClick={(e) => { e.preventDefault(); document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
                  <span>{String(i + 1).padStart(2, '0')}</span>{s.h}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
      <Share title={post.title} />
    </aside>

    <article className="jp-body">
      <div className="jp-take">
        <span className="jp-aside-lab">Key takeaways</span>
        <ul>{post.takeaways.map((t) => <li key={t}>{t}</li>)}</ul>
      </div>

      {post.sections.map((s, i) => (
        <section key={ids[i]} id={ids[i]} className="jp-sec">
          <h2>{s.h}</h2>
          {(s.p || []).map((para) => <p key={para}>{para}</p>)}
          {s.list && <ul className="jp-list">{s.list.map((li) => <li key={li}>{li}</li>)}</ul>}
          {s.quote && <blockquote>{s.quote}</blockquote>}
        </section>
      ))}

      <div className="jp-author">
        <span className="jp-author-mark" aria-hidden="true">∞</span>
        <div>
          <b>Written by the Inloop Media team</b>
          <p>An AI-first marketing agency in Noida, building brands, content and performance systems that grow.</p>
        </div>
        <Link className="btn ghost magnetic" data-mag="0.3" to="/#contact">Talk to us <span className="arr">&#8599;</span></Link>
      </div>
    </article>
  </div>

  <section className="sec jp-related">
    <div className="sv-head">
      <div>
        <div className="kick2">Keep reading</div>
        <h2>More from the journal</h2>
      </div>
      <Link className="jp-all" to="/blog">All articles <span>&#8599;</span></Link>
    </div>
    <div className="jr-grid">
      {related.map((p) => (
        <Link className="jr-card" to={`/blog/${p.slug}`} key={p.slug} data-noview>
          <div className="jr-card-img"><img src={p.img} alt="" loading="lazy" decoding="async" /></div>
          <span className="jr-meta"><span className="jr-cat">{p.cat}</span><span>{readMinutes(p)} min read</span></span>
          <h3>{p.title}</h3>
          <p>{p.excerpt}</p>
          <span className="jr-read">Read <em>&#8599;</em></span>
        </Link>
      ))}
    </div>
  </section>
</main></div>
  );
}
