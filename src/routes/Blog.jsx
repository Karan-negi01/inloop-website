import { Link } from 'react-router-dom';

export default function Blog() {
  return (
<div id="svp"><main className="route" data-route="blog">
<header className="sp-hero blog-hero">
    <div className="hero-orbit" aria-hidden="true"><span className="ho-glow"></span><svg className="ho-rings" viewBox="0 0 800 800"><g className="ho-spin s1"><circle className="ho-c" cx="400" cy="400" r="158"/></g><g className="ho-spin s2"><circle className="ho-c dash" cx="400" cy="400" r="238"/><circle className="ho-dot" cx="400" cy="162" r="4"/></g><g className="ho-spin s3"><circle className="ho-c thin dash" cx="400" cy="400" r="318"/></g><g className="ho-spin s4"><circle className="ho-c faint" cx="400" cy="400" r="392"/><circle className="ho-dot" cx="400" cy="8" r="3"/></g></svg></div>
    <div className="reveal d1"><span className="sp-eyebrow"><span className="dot"></span>Blog &middot; Inloop Media</span></div>
    <h1 className="reveal d2 pt-fade">Ideas, Playbooks &amp; Growth Insights</h1>
    <p className="reveal d3 sub pt-fade">Practical thinking on SEO, paid media, AI, branding and e-commerce &mdash; written by the team building growth systems for real brands.</p>
    <div className="reveal d4 blog-chips pt-fade">
        <button className="blog-chip on">All</button>
        <button className="blog-chip">SEO</button>
        <button className="blog-chip">Performance</button>
        <button className="blog-chip">AI</button>
        <button className="blog-chip">E-commerce</button>
        <button className="blog-chip">Branding</button>
        <button className="blog-chip">Content</button>
    </div>
  </header>

  
  <section className="sec blog-featured-sec">
    <Link className="blog-feat anim-rise" to="/#contact">
      <div className="blog-feat-media"><span className="blog-feat-glow"></span><span className="bf-badge">Featured</span></div>
      <div className="blog-feat-body">
        <span className="blog-cat">SEO</span>
        <h2>How Organic Search Compounds Into Predictable Growth</h2>
        <p>Why SEO is the channel that keeps paying you back &mdash; and how to build a foundation that compounds month over month.</p>
        <div className="blog-meta"><span>8 min read</span><span className="blog-read">Read article <em>&#8599;</em></span></div>
      </div>
    </Link>
  </section>

  
  <section className="sec">
    <div className="sec-head reveal-up">
      <div className="kick2">Latest articles</div>
      <h2>From the <span className="grad">Inloop desk</span></h2>
    </div>
    <div className="blog-grid">
      <Link className="blog-card anim-rise" to="/#contact">
        <div className="blog-card-media"><span className="blog-card-cat">Performance</span></div>
        <div className="blog-card-body">
          <h3>The ROAS-First Approach to Paid Media</h3>
          <p>How we engineer Meta and Google campaigns around real return, not vanity metrics that look good in a deck.</p>
          <div className="blog-meta"><span>6 min read</span><span className="blog-read">Read <em>&#8599;</em></span></div>
        </div>
      </Link>
      <Link className="blog-card anim-rise" data-d="1" to="/#contact">
        <div className="blog-card-media"><span className="blog-card-cat">AI</span></div>
        <div className="blog-card-body">
          <h3>Weaving AI Through Every Marketing Workflow</h3>
          <p>A practical look at where AI actually speeds up creative and strategy &mdash; without losing the human touch.</p>
          <div className="blog-meta"><span>7 min read</span><span className="blog-read">Read <em>&#8599;</em></span></div>
        </div>
      </Link>
      <Link className="blog-card anim-rise" data-d="2" to="/#contact">
        <div className="blog-card-media"><span className="blog-card-cat">E-commerce</span></div>
        <div className="blog-card-body">
          <h3>Turning Storefronts Into Revenue Engines</h3>
          <p>The conversion, product-page and retention levers that separate stores that sell from stores that stall.</p>
          <div className="blog-meta"><span>5 min read</span><span className="blog-read">Read <em>&#8599;</em></span></div>
        </div>
      </Link>
      <Link className="blog-card anim-rise" to="/#contact">
        <div className="blog-card-media"><span className="blog-card-cat">Branding</span></div>
        <div className="blog-card-body">
          <h3>Identity Systems That Make You Unmistakable</h3>
          <p>What goes into a brand identity that stays consistent, confident and recognizable across every platform.</p>
          <div className="blog-meta"><span>6 min read</span><span className="blog-read">Read <em>&#8599;</em></span></div>
        </div>
      </Link>
      <Link className="blog-card anim-rise" data-d="1" to="/#contact">
        <div className="blog-card-media"><span className="blog-card-cat">Content</span></div>
        <div className="blog-card-body">
          <h3>Building an Always-On Content Engine</h3>
          <p>How to plan social content that compounds attention and community instead of chasing one-off viral moments.</p>
          <div className="blog-meta"><span>5 min read</span><span className="blog-read">Read <em>&#8599;</em></span></div>
        </div>
      </Link>
    </div>
  </section>

  
  <section className="sec cta-band">
    <div className="cta-band-inner reveal-up">
      <div className="cta-portal"></div>
      <h2>Get growth insights in your inbox</h2>
      <p>Occasional, high-signal notes on marketing, AI and building brands that grow. No spam &mdash; ever.</p>
      <Link className="btn primary lg magnetic cta-lux" data-mag="0.35" to="/#contact">Subscribe <span className="arr">&#8599;</span></Link>
    </div>
  </section>

  </main></div>  );
}
