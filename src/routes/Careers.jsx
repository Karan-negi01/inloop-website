import { Link } from 'react-router-dom';

export default function Careers() {
  return (
<div id="svp"><main className="route" data-route="careers">
<header className="sp-hero">
    <div className="hero-orbit" aria-hidden="true"><span className="ho-glow"></span><svg className="ho-rings" viewBox="0 0 800 800"><g className="ho-spin s1"><circle className="ho-c" cx="400" cy="400" r="158"/></g><g className="ho-spin s2"><circle className="ho-c dash" cx="400" cy="400" r="238"/><circle className="ho-dot" cx="400" cy="162" r="4"/></g><g className="ho-spin s3"><circle className="ho-c thin dash" cx="400" cy="400" r="318"/></g><g className="ho-spin s4"><circle className="ho-c faint" cx="400" cy="400" r="392"/><circle className="ho-dot" cx="400" cy="8" r="3"/></g></svg></div>
    <div className="reveal d1"><span className="sp-eyebrow"><span className="dot"></span>Careers &middot; Inloop Media</span></div>
    <h1 className="reveal d2 pt-fade">Build the Future of AI-First Marketing With Us</h1>
    <p className="reveal d3 sub pt-fade">We&#x27;re a senior-led, design-obsessed team building growth systems for ambitious brands. If you love craft, ownership and AI-accelerated work, you&#x27;ll feel at home here.</p>
    <div className="reveal d4 cta-row pt-fade">
      <a className="btn primary lg magnetic" data-mag="0.3" href="#openings">See Open Roles</a>
      <Link className="btn ghost magnetic" data-mag="0.3" to="/#contact">Pitch Yourself <span className="arr">&#8599;</span></Link>
    </div>
    <div className="sp-badges reveal d4">
        <span className="sp-badge">Remote-friendly</span>
        <span className="sp-badge">Senior-led</span>
        <span className="sp-badge">AI-first</span>
    </div>
  </header>

  
  <section className="sec">
    <div className="sp-two">
      <div className="sp-two-col reveal-up">
        <div className="kick2">Our culture</div>
        <h2>Small team. Serious craft. Real ownership</h2>
        <p>We keep the team lean and senior on purpose. That means less hand-off, more ownership, and work you&#x27;re genuinely proud to put your name on.</p>
        <p>We move fast with AI, but we never let it replace taste. Every asset, strategy and campaign is held to a premium standard.</p>
      </div>
      <div className="sp-two-col reveal-up" data-d="1">
        <div className="kick2">Who thrives here</div>
        <p>People who care about the details, take initiative without waiting to be asked, and want their work to actually move numbers for the brands they touch.</p>
        <p>If you&#x27;re curious, accountable and obsessed with quality, you&#x27;ll fit right in.</p>
      </div>
    </div>
  </section>

  
  <section className="sec" id="openings">
    <div className="sec-head reveal-up">
      <div className="kick2">Open roles</div>
      <h2>Find your <span className="grad">seat</span></h2>
      <p className="sec-sub">Don&#x27;t see a perfect match? Pitch yourself anyway &mdash; we always want to meet great people.</p>
    </div>
    <div className="job-grid job-grid-single">
      <article className="job anim-rise">
        <div className="job-top"><span className="job-tag">All roles</span><span className="job-type">Full-time</span></div>
        <h3>Open Positions at Inloop Media</h3>
        <p>We post and manage every open role on LinkedIn &mdash; check there for current openings and apply directly.</p>
        <div className="job-foot">
          <span className="job-loc">&#9678; Remote / Delhi</span>
          <a className="job-apply" href="https://www.linkedin.com/company/inloop-media/jobs/" target="_blank" rel="noopener noreferrer">View on LinkedIn <span>&#8599;</span></a>
        </div>
      </article>
    </div>
  </section>

  
  <section className="sec">
    <div className="sec-head reveal-up">
      <div className="kick2">Why Inloop</div>
      <h2>What you get <span className="grad">working here</span></h2>
    </div>
    <div className="sp-why-grid">
      <div className="sp-why anim-rise"><span className="wi">∞</span><h3>AI-first workflow</h3><p>Work with the best AI tools woven through every project, not bolted on.</p></div>
      <div className="sp-why anim-rise" data-d="1"><span className="wi">◆</span><h3>Senior-led culture</h3><p>Learn beside experienced operators who own outcomes, not just tasks.</p></div>
      <div className="sp-why anim-rise" data-d="2"><span className="wi">✧</span><h3>Design-obsessed</h3><p>Everything ships at a premium bar &mdash; your work looks the part.</p></div>
      <div className="sp-why anim-rise" data-d="3"><span className="wi">●</span><h3>Remote-friendly</h3><p>Work from where you do your best thinking, with flexible hours.</p></div>
      <div className="sp-why anim-rise"><span className="wi">▲</span><h3>Real ownership</h3><p>Own accounts, decisions and impact from day one.</p></div>
      <div className="sp-why anim-rise" data-d="1"><span className="wi">◐</span><h3>Growth &amp; learning</h3><p>Budgets and time for courses, tools and skill-building.</p></div>
    </div>
  </section>

  
  <section className="sec cta-band">
    <div className="cta-band-inner reveal-up">
      <div className="cta-portal"></div>
      <h2>Don&#x27;t see your role? Reach out anyway</h2>
      <p>Tell us what you&#x27;re great at and how you&#x27;d make brands grow. We read every message.</p>
      <Link className="btn primary lg magnetic cta-lux" data-mag="0.35" to="/#contact">Pitch Yourself <span className="arr">&#8599;</span></Link>
    </div>
  </section>

  </main></div>  );
}
