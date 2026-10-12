import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, POSTS, formatDate, readMinutes } from '@/lib/blogData';

function Meta({ post }) {
  return (
    <span className="jr-meta">
      <span className="jr-cat">{post.cat}</span>
      <span>{formatDate(post.date)}</span>
      <span>{readMinutes(post)} min read</span>
    </span>
  );
}

export default function Blog() {
  const [cat, setCat] = useState('All');
  const featured = POSTS.find((p) => p.featured) || POSTS[0];
  const list = cat === 'All' ? POSTS.filter((p) => p !== featured) : POSTS.filter((p) => p.cat === cat);

  return (
<div id="svp"><main className="route jr" data-route="blog">

  <header className="jr-hero">
    <div className="jr-hero-copy">
      <div className="reveal d1"><span className="sp-eyebrow"><span className="dot"></span>The Inloop Journal</span></div>
      <h1 className="reveal d2 pt-fade">Ideas that keep brands <span className="jr-silver">in the loop.</span></h1>
      <p className="reveal d3 pt-fade jr-lede">Playbooks on SEO, paid media, AI, branding and e-commerce, written by the team building growth for real brands.</p>
      <div className="reveal d4 pt-fade jr-count"><b>{POSTS.length}</b> articles · <b>{CATEGORIES.length - 1}</b> topics</div>
    </div>
    <Link className="jr-feat reveal d3" to={`/blog/${featured.slug}`} data-noview>
      <div className="jr-feat-img"><img src={featured.img} alt="" fetchPriority="high" /></div>
      <div className="jr-feat-body">
        <span className="jr-badge">Featured</span>
        <Meta post={featured} />
        <h2>{featured.title}</h2>
        <span className="jr-read">Read article <em>&#8599;</em></span>
      </div>
    </Link>
  </header>

  <section className="sec jr-list">
    <div className="jr-bar reveal-up">
      <div className="jr-chips" role="tablist" aria-label="Filter articles by topic">
        {CATEGORIES.map((c) => (
          <button type="button" role="tab" aria-selected={c === cat} key={c}
            className={`jr-chip${c === cat ? ' on' : ''}`} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <span className="jr-bar-n">{list.length} {list.length === 1 ? 'article' : 'articles'}</span>
    </div>
    <div className="jr-grid" key={cat}>
      {list.map((p) => (
        <Link className="jr-card" to={`/blog/${p.slug}`} key={p.slug} data-noview>
          <div className="jr-card-img"><img src={p.img} alt="" loading="lazy" decoding="async" /></div>
          <Meta post={p} />
          <h3>{p.title}</h3>
          <p>{p.excerpt}</p>
          <span className="jr-read">Read <em>&#8599;</em></span>
        </Link>
      ))}
    </div>
  </section>

  <section className="sec cta-band">
    <div className="cta-band-inner reveal-up">
      <div className="cta-portal"></div>
      <h2>Want these results for your brand?</h2>
      <p>Book a free strategy call and we’ll show you which of these playbooks fits your business first.</p>
      <Link className="btn primary lg magnetic cta-lux" data-mag="0.35" to="/#contact">Book a Free Call <span className="arr">&#8599;</span></Link>
    </div>
  </section>

  </main></div>  );
}
