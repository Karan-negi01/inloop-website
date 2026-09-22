import { Link } from 'react-router-dom';

export default function Home() {
  return (
<main id="view-home" className="route" data-route="home">
  <header className="hero">
    <div id="grain"></div>
    <div className="hero-orbit" aria-hidden="true"><span className="ho-glow"></span>
      <svg className="ho-rings" viewBox="0 0 800 800"><g className="ho-spin s1"><circle className="ho-c" cx="400" cy="400" r="158"/></g><g className="ho-spin s2"><circle className="ho-c dash" cx="400" cy="400" r="238"/><circle className="ho-dot" cx="400" cy="162" r="4"/></g><g className="ho-spin s3"><circle className="ho-c thin dash" cx="400" cy="400" r="318"/></g><g className="ho-spin s4"><circle className="ho-c faint" cx="400" cy="400" r="392"/><circle className="ho-dot" cx="400" cy="8" r="3"/></g></svg>
    </div>

    <div className="hero-content">
      <div className="reveal d1 eyebrow"><span className="dot"></span>Creative · Performance · AI Automation</div>
      <h1 className="reveal d2">We don't just market your brand. We <span className="chrome">engineer its growth</span></h1>
      <p className="reveal d3 sub">Creative, performance, and AI automation under one roof — turning brand identity into qualified leads. <b>Inloop builds brands that scale.</b></p>
      <div className="reveal d4 cta-row">
        <Link className="btn primary magnetic" data-mag="0.3" to="/#contact">Book a Free Call</Link>

      </div>
    </div>

    <div className="scroll-cue"><span>Scroll</span><span className="bar"></span></div>
  </header>

<section className="sec trusted" id="trusted">
    <p className="band-label reveal-up">Trusted by growing brands</p>
    <div className="marquee reveal-up">
      <div className="marquee-track" id="clientTrack"><span className="client-logo cl-garnier" role="img" aria-label="Garnier"></span><span className="client-logo cl-vivel" role="img" aria-label="Vivel"></span><span className="client-logo cl-fiama" role="img" aria-label="Fiama"></span><span className="client-logo cl-smc" role="img" aria-label="SMC"></span><span className="client-logo cl-savlon" role="img" aria-label="Savlon"></span><span className="client-logo cl-daluxera" role="img" aria-label="Da Luxera"></span><span className="client-logo cl-dencity" role="img" aria-label="Dencity AI Science Lab"></span><span className="client-logo cl-twohiigh" role="img" aria-label="Two Hiigh"></span><span className="client-logo cl-engage" role="img" aria-label="Engage"></span><span className="client-logo cl-taazathindi" role="img" aria-label="Taaza Thindi"></span><span className="client-logo cl-badoota" role="img" aria-label="Badoota"></span><span className="client-logo cl-adwin" role="img" aria-label="Adwin Media"></span><span className="client-logo cl-brizzio" role="img" aria-label="Brizzio"></span><span className="client-logo cl-luxedrop" role="img" aria-label="The Luxe Drop"></span><span className="client-logo cl-snackshack" role="img" aria-label="Snack Shack"></span><span className="client-logo cl-skinlattice" role="img" aria-label="Skin Lattice Clinic"></span><span className="client-logo cl-flyball" role="img" aria-label="Flyball"></span><span className="client-logo cl-garnier" role="img" aria-label="Garnier"></span><span className="client-logo cl-vivel" role="img" aria-label="Vivel"></span><span className="client-logo cl-fiama" role="img" aria-label="Fiama"></span><span className="client-logo cl-smc" role="img" aria-label="SMC"></span><span className="client-logo cl-savlon" role="img" aria-label="Savlon"></span><span className="client-logo cl-daluxera" role="img" aria-label="Da Luxera"></span><span className="client-logo cl-dencity" role="img" aria-label="Dencity AI Science Lab"></span><span className="client-logo cl-twohiigh" role="img" aria-label="Two Hiigh"></span><span className="client-logo cl-engage" role="img" aria-label="Engage"></span><span className="client-logo cl-taazathindi" role="img" aria-label="Taaza Thindi"></span><span className="client-logo cl-badoota" role="img" aria-label="Badoota"></span><span className="client-logo cl-adwin" role="img" aria-label="Adwin Media"></span><span className="client-logo cl-brizzio" role="img" aria-label="Brizzio"></span><span className="client-logo cl-luxedrop" role="img" aria-label="The Luxe Drop"></span><span className="client-logo cl-snackshack" role="img" aria-label="Snack Shack"></span><span className="client-logo cl-skinlattice" role="img" aria-label="Skin Lattice Clinic"></span><span className="client-logo cl-flyball" role="img" aria-label="Flyball"></span></div>
    </div>
  </section>

<section className="sec aivid" id="ai-video">
    <div className="sec-head reveal-up">
      <div className="kick2">AI Video</div>
      <h2>Scroll-stopping <span className="grad">AI video creative</span></h2>
      <p className="sec-sub">UGC hooks, product demos and story ads — generated and edited with AI, then tuned for performance on every feed.</p>
    </div>
    <div className="aiv-grid"><article className="aiv-card anim-rise" style={{'--i': 0}}><div className="aiv-thumb"><span className="aiv-pp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span></div><div className="aiv-label"><b>Beauty, Health &amp; Wellness</b><span>UGC unboxings &amp; routines</span></div></article><article className="aiv-card anim-rise" style={{'--i': 1}}><div className="aiv-thumb"><span className="aiv-pp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span></div><div className="aiv-label"><b>Fashion &amp; Apparel</b><span>Lookbooks &amp; try-on hooks</span></div></article><article className="aiv-card anim-rise" style={{'--i': 2}}><div className="aiv-thumb"><span className="aiv-pp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span></div><div className="aiv-label"><b>High-Tech &amp; SaaS</b><span>Explainer &amp; demo ads</span></div></article><article className="aiv-card anim-rise" style={{'--i': 3}}><div className="aiv-thumb"><span className="aiv-pp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span></div><div className="aiv-label"><b>Professional Services</b><span>Talking-head authority</span></div></article><article className="aiv-card anim-rise" style={{'--i': 4}}><div className="aiv-thumb"><span className="aiv-pp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span></div><div className="aiv-label"><b>D2C &amp; E-commerce</b><span>Product spotlights</span></div></article><article className="aiv-card anim-rise" style={{'--i': 5}}><div className="aiv-thumb"><span className="aiv-pp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span></div><div className="aiv-label"><b>Real Estate</b><span>Walkthrough reels</span></div></article></div>
  </section>

<section className="sec services" id="services">
    <div className="sec-head reveal-up">
      <div className="kick2">What we do</div>
      <h2>One roof. <span className="grad">Every lever of growth</span></h2>
      <p className="sec-sub">From the first pixel of your identity to the last touch of a qualified lead — we build, run, and scale all of it.</p>
    </div>
    <div className="svc-grid">
      <article className="svc tilt anim-rise"><Link className="svc-link" to="/branding" aria-label="Brand Strategy &amp; Identity"></Link><span className="svc-ic">✦</span><h3>Branding</h3><p>Identity systems that make you unmistakable.</p><span className="svc-go">↗</span></article>
      <article className="svc tilt anim-rise" data-d="1"><Link className="svc-link" to="/social-media" aria-label="Social Media Management"></Link><span className="svc-ic">◎</span><h3>Social Media</h3><p>Always-on content and community that compounds.</p><span className="svc-go">↗</span></article>
      <article className="svc tilt anim-rise" data-d="2"><Link className="svc-link" to="/website" aria-label="Website Design &amp; Development"></Link><span className="svc-ic">⬡</span><h3>Tech</h3><p>Sites, funnels and tracking built to convert.</p><span className="svc-go">↗</span></article>
      <article className="svc tilt anim-rise" data-d="3"><Link className="svc-link" to="/influencer" aria-label="Influencer Marketing"></Link><span className="svc-ic">◈</span><h3>Influencer</h3><p>Creator partnerships matched to real intent.</p><span className="svc-go">↗</span></article>
      <article className="svc tilt anim-rise" data-d="1"><Link className="svc-link" to="/performance" aria-label="Performance Marketing"></Link><span className="svc-ic">▲</span><h3>Performance</h3><p>Paid media engineered around ROAS, not vanity.</p><span className="svc-go">↗</span></article>
      <article className="svc tilt anim-rise" data-d="2"><Link className="svc-link" to="/ai" aria-label="AI-Powered Creative"></Link><span className="svc-ic">∞</span><h3>AI Powered</h3><p>Automation and models woven through every play.</p><span className="svc-go">↗</span></article>
      <article className="svc tilt anim-rise" data-d="3"><span className="svc-ic">◇</span><h3>Creator Management</h3><p>End-to-end management for talent and brands.</p><span className="svc-go">↗</span></article>
      <article className="svc tilt anim-rise" data-d="1"><Link className="svc-link" to="/production" aria-label="Creative Production"></Link><span className="svc-ic">●</span><h3>Production</h3><p>Shoots and post that move at AI speed.</p><span className="svc-go">↗</span></article>
      <article className="svc tilt anim-rise" data-d="2"><Link className="svc-link" to="/pr" aria-label="Strategic PR &amp; Communication"></Link><span className="svc-ic">◐</span><h3>PR &amp; Communication</h3><p>Narratives that earn attention and trust.</p><span className="svc-go">↗</span></article>
      <article className="svc tilt anim-rise" data-d="3"><span className="svc-ic">✧</span><h3>Content Creation</h3><p>Story-first assets across every format.</p><span className="svc-go">↗</span></article>
      <article className="svc tilt anim-rise" data-d="1"><Link className="svc-link" to="/seo" aria-label="SEO &amp; Search"></Link><span className="svc-ic">⌖</span><h3>SEO &amp; Search</h3><p>Search visibility that compounds organically.</p><span className="svc-go">↗</span></article>
      <article className="svc tilt anim-rise" data-d="2"><Link className="svc-link" to="/ecommerce" aria-label="E-commerce Growth"></Link><span className="svc-ic">▣</span><h3>E-commerce Growth</h3><p>Storefronts, funnels and retention that sell.</p><span className="svc-go">↗</span></article>
    </div>
    
  </section>

<section className="sec stats" id="stats">
    <div className="stats-row">
      <div className="stat reveal-up"><div className="stat-num"><span data-count="25">0</span>+</div><div className="stat-lbl">Brands served</div></div>
      <div className="stat reveal-up" data-d="1"><div className="stat-num">₹<span data-count="2">0</span>Cr+</div><div className="stat-lbl">Ad spend managed</div></div>
      <div className="stat reveal-up" data-d="2"><div className="stat-num"><span data-count="50">0</span>M+</div><div className="stat-lbl">Impressions generated</div></div>
      <div className="stat reveal-up" data-d="3"><div className="stat-num"><span data-count="4">0</span>x</div><div className="stat-lbl">Avg ROAS delivered</div></div>
      <div className="stat reveal-up" data-d="4"><div className="stat-num"><span data-count="48">0</span>hrs</div><div className="stat-lbl">Onboarding time</div></div>
    </div>
  </section>

<section className="sec ai-core" id="ai-core">
    <div className="ai-core-grid">
      <div className="ai-core-visual reveal-up"><canvas id="neural"></canvas></div>
      <div className="ai-core-copy">
        <div className="kick2 reveal-up">AI Solution &amp; Automation</div>
        <div className="badge-pill reveal-up" data-d="1"><span className="bp-dot"></span>AI-POWERED · HUMAN-LED</div>
        <h2 className="reveal-up" data-d="2">Every campaign built with <span className="grad">AI at its core</span></h2>
        <p className="reveal-up" data-d="3">We use AI to move faster, produce more, and optimize smarter — so your brand gets better results at a fraction of the cost. The thinking stays human. The speed is everything else.</p>
        <div className="reveal-up" data-d="4" style={{marginTop:'22px'}}><Link className="btn ghost magnetic" data-mag="0.25" to="/#tools">See AI Capabilities <span className="arr">↗</span></Link></div>
      </div>
    </div>

    <div className="reveal-up">
      <p className="agents-cap">Your always-on AI agents</p>
      <div className="agents">
        <div className="agent-wrap">
          <div className="ai-orb">
            <div className="orb-glow"></div><div className="orb-ring"></div><div className="orb-ring r2"></div>
            <div className="orb-body"><div className="orb-scan"></div><div className="orb-eye"><span className="orb-iris"></span></div></div>
          </div>
          <b>Strategist</b><i>plans &amp; targets</i>
        </div>
        <div className="agent-wrap">
          <div className="ai-orb d1">
            <div className="orb-glow"></div><div className="orb-ring"></div><div className="orb-ring r2"></div>
            <div className="orb-body"><div className="orb-scan"></div><div className="orb-eye"><span className="orb-iris"></span></div></div>
          </div>
          <b>Creator</b><i>makes the assets</i>
        </div>
        <div className="agent-wrap">
          <div className="ai-orb d2">
            <div className="orb-glow"></div><div className="orb-ring"></div><div className="orb-ring r2"></div>
            <div className="orb-body"><div className="orb-scan"></div><div className="orb-eye"><span className="orb-iris"></span></div></div>
          </div>
          <b>Optimizer</b><i>learns &amp; scales</i>
        </div>
      </div>
    </div>
  </section>

<section className="sec tools" id="tools">
    <div className="sec-head reveal-up">
      <div className="kick2">Our AI stack</div>
      <h2>Powered by the <span className="grad">best AI in the world</span></h2>
      <p className="sec-sub">The tools behind faster, sharper, more affordable output.</p>
    </div>
    <div className="tool-grid">
      <span className="tool anim-rise">ChatGPT</span>
      <span className="tool anim-rise" data-d="1">Claude</span>
      <span className="tool anim-rise" data-d="2">Meta AI</span>
      <span className="tool anim-rise" data-d="3">Magnific</span>
      <span className="tool anim-rise" data-d="4">Gemini</span>
      <span className="tool anim-rise">ElevenLabs</span>
      <span className="tool anim-rise" data-d="1">Kalakaar</span>
      <span className="tool anim-rise" data-d="2">Adobe Firefly</span>
      <span className="tool anim-rise" data-d="3">Higgsfield</span>
      <span className="tool anim-rise" data-d="4">Midjourney</span>
      <span className="tool more reveal-up">+ more</span>
    </div>
  </section>

<section className="sec adsx" id="ads">
    <div className="sec-head reveal-up">
      <div className="kick2">Paid media</div>
      <h2>Every major ad platform, <span className="grad">one growth engine</span></h2>
      <p className="sec-sub">We plan, launch and optimize campaigns across the platforms your customers actually use — and we have the dashboards to prove it.</p>
    </div>
    <div className="adx-chips reveal-up"><button className="adx-chip active" data-f="all">All</button><button className="adx-chip" data-f="google">Google Ads</button><button className="adx-chip" data-f="meta">Meta Ads</button><button className="adx-chip" data-f="microsoft">Microsoft Ads</button><button className="adx-chip" data-f="taboola">Taboola</button><button className="adx-chip" data-f="tiktok">TikTok Ads</button><button className="adx-chip" data-f="jio">Jio Ads</button></div>
    <div className="adx-grid"><figure className="adx-card anim-rise" data-p="google"><div className="adx-frame"><span className="adx-bar"><i></i><i></i><i></i><b>Google Ads</b></span><div className="adx-shot ad-1" role="img" aria-label="Google Ads Campaign overview"></div></div><figcaption><span className="adx-plat">Google Ads</span> · Campaign overview</figcaption></figure><figure className="adx-card anim-rise" data-p="google"><div className="adx-frame"><span className="adx-bar"><i></i><i></i><i></i><b>Google Ads</b></span><div className="adx-shot ad-2" role="img" aria-label="Google Ads Search performance"></div></div><figcaption><span className="adx-plat">Google Ads</span> · Search performance</figcaption></figure><figure className="adx-card anim-rise" data-p="google"><div className="adx-frame"><span className="adx-bar"><i></i><i></i><i></i><b>Google Ads</b></span><div className="adx-shot ad-3" role="img" aria-label="Google Ads Audience & device"></div></div><figcaption><span className="adx-plat">Google Ads</span> · Audience & device</figcaption></figure><figure className="adx-card anim-rise" data-p="meta"><div className="adx-frame"><span className="adx-bar"><i></i><i></i><i></i><b>Meta Ads</b></span><div className="adx-shot ad-4" role="img" aria-label="Meta Ads Campaigns manager"></div></div><figcaption><span className="adx-plat">Meta Ads</span> · Campaigns manager</figcaption></figure><figure className="adx-card anim-rise" data-p="meta"><div className="adx-frame"><span className="adx-bar"><i></i><i></i><i></i><b>Meta Ads</b></span><div className="adx-shot ad-5" role="img" aria-label="Meta Ads Audience insights"></div></div><figcaption><span className="adx-plat">Meta Ads</span> · Audience insights</figcaption></figure><figure className="adx-card anim-rise" data-p="meta"><div className="adx-frame"><span className="adx-bar"><i></i><i></i><i></i><b>Meta Ads</b></span><div className="adx-shot ad-6" role="img" aria-label="Meta Ads Ad sets & delivery"></div></div><figcaption><span className="adx-plat">Meta Ads</span> · Ad sets & delivery</figcaption></figure><figure className="adx-card anim-rise" data-p="microsoft"><div className="adx-frame"><span className="adx-bar"><i></i><i></i><i></i><b>Microsoft Ads</b></span><div className="adx-shot ad-7" role="img" aria-label="Microsoft Ads Campaign dashboard"></div></div><figcaption><span className="adx-plat">Microsoft Ads</span> · Campaign dashboard</figcaption></figure><figure className="adx-card anim-rise" data-p="taboola"><div className="adx-frame"><span className="adx-bar"><i></i><i></i><i></i><b>Taboola</b></span><div className="adx-shot ad-8" role="img" aria-label="Taboola Native discovery"></div></div><figcaption><span className="adx-plat">Taboola</span> · Native discovery</figcaption></figure><figure className="adx-card anim-rise" data-p="tiktok"><div className="adx-frame"><span className="adx-bar"><i></i><i></i><i></i><b>TikTok Ads</b></span><div className="adx-shot ad-9" role="img" aria-label="TikTok Ads Campaign performance"></div></div><figcaption><span className="adx-plat">TikTok Ads</span> · Campaign performance</figcaption></figure><figure className="adx-card anim-rise" data-p="jio"><div className="adx-frame"><span className="adx-bar"><i></i><i></i><i></i><b>Jio Ads</b></span><div className="adx-shot ad-10" role="img" aria-label="Jio Ads Reach & awareness"></div></div><figcaption><span className="adx-plat">Jio Ads</span> · Reach & awareness</figcaption></figure></div>
  </section>

<section className="sec impacts" id="impacts">
    <div className="sec-head reveal-up"><div className="kick2">The impact</div><h2>What AI changes <span className="grad">for your brand</span></h2></div>
    <div className="impact-row">
      <div className="impact anim-rise"><div className="impact-num"><span data-count="10">0</span>x</div><div className="impact-lbl">faster content output</div></div>
      <div className="impact anim-rise" data-d="1"><div className="impact-num"><span data-count="60">0</span>%</div><div className="impact-lbl">lower creative production cost</div></div>
      <div className="impact anim-rise" data-d="2"><div className="impact-num">24/7</div><div className="impact-lbl">automated reports &amp; insights</div></div>
    </div>
  </section>

<section className="sec packages" id="pricing">
    <div className="sec-head reveal-up">
      <div className="kick2">Packages</div>
      <h2>Pick a kit, <span className="grad">start the loop</span></h2>
      <p className="sec-sub">Three clear ways to work with us — from first launch to full-scale growth. Every kit is tailored to your stage.</p>
    </div>
    <div className="pkg-wrap">
    <article className="pkg pkg-lime anim-rise tilt">
      
      <span className="pkg-badge">Essential Kit</span>
      <h3 className="pkg-tag">For New Businesses</h3>
      <span className="pkg-rule"></span>
      <ul className="pkg-list">
        <li><span className="pkg-tick" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Social Media Posting with Creatives</li>
        <li><span className="pkg-tick" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Starter Brand Identity Design Pack</li>
        <li><span className="pkg-tick" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Simple Website or Portfolio Setup</li>
        <li><span className="pkg-tick" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Short-form Videos for Engagement</li>
      </ul>
      <Link to="/#contact" className="btn ghost lg magnetic pkg-cta" data-mag="0.25">Kickstart your digital presence <span className="arr">→</span></Link>
    </article>
    <article className="pkg feat pkg-ember anim-rise tilt">
      <span className="pkg-pop">Most popular</span>
      <span className="pkg-badge">Growth Kit</span>
      <h3 className="pkg-tag">For Growing Brands</h3>
      <span className="pkg-rule"></span>
      <ul className="pkg-list">
        <li><span className="pkg-tick" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Strategic Social Media Campaigns</li>
        <li><span className="pkg-tick" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Targeted Paid Ads for Growth</li>
        <li><span className="pkg-tick" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Micro-Influencer Brand Collaborations</li>
        <li><span className="pkg-tick" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Landing Pages for Conversions</li>
        <li><span className="pkg-tick" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Creative Video Content Production</li>
        <li><span className="pkg-tick" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Monthly Campaign Analytics Reports</li>
      </ul>
      <Link to="/#contact" className="btn primary lg magnetic pkg-cta" data-mag="0.25">Scale your reach <span className="arr">→</span></Link>
    </article>
    <article className="pkg pkg-lime anim-rise tilt">
      
      <span className="pkg-badge">Leader Kit</span>
      <h3 className="pkg-tag">For Established Enterprises</h3>
      <span className="pkg-rule"></span>
      <ul className="pkg-list">
        <li><span className="pkg-tick" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>360° Multi-Platform Social Media</li>
        <li><span className="pkg-tick" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Celebrity and Macro Influencer Campaigns</li>
        <li><span className="pkg-tick" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Advanced Performance Marketing Strategies</li>
        <li><span className="pkg-tick" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Full Website and E-commerce Development</li>
        <li><span className="pkg-tick" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Complete Visual Brand Identity Ecosystem</li>
        <li><span className="pkg-tick" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Premium Commercial Video Productions</li>
        <li><span className="pkg-tick" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>ROI Dashboards with Growth Insight</li>
      </ul>
      <Link to="/#contact" className="btn ghost lg magnetic pkg-cta" data-mag="0.25">Maximize impact &amp; scale big <span className="arr">→</span></Link>
    </article>
    </div>
  </section>

<section className="sec cases" id="work">
    <div className="sec-head reveal-up">
      <div className="kick2">Case studies</div>
      <h2>Results that speak, <span className="grad">real brands, real numbers</span></h2>
    </div>
    <div className="quad reveal-up">
      <div className="quad-cross" aria-hidden="true"></div>
      <article className="case tilt anim-rise"><div className="case-cat">App · Social + Paid Ads</div><div className="case-metric">3.2x <small>installs in 60 days</small></div><p>Apploft — scaled installs with a social-first paid engine.</p></article>
      <article className="case tilt anim-rise"><div className="case-cat">Fashion · Web + UI/UX + Social</div><div className="case-metric">+40% <small>conversion rate lift</small></div><p>Luxe Apparel — a redesign and social system built to convert.</p></article>
      <article className="case tilt anim-rise"><div className="case-cat">FMCG Health · Influencer + Meta Ads</div><div className="case-metric">4.3x <small>ROAS in month one</small></div><p>FMCG health brand — creator-led demand at profitable ROAS.</p></article>
      <article className="case tilt anim-rise"><div className="case-cat">Across accounts</div><div className="case-metric">25+ <small>brands and counting</small></div><p>Real systems, real numbers — explore the full portfolio.</p></article>
    </div>
    <div className="reveal-up" style={{textAlign:'center', marginTop:'34px'}}>
      
    </div>
  </section>

<section className="sec testi" id="testimonials">
    <div className="sec-head reveal-up"><div className="kick2">Client testimonials</div><h2>Brands that <span className="grad">stayed in the loop</span></h2></div>
    <div className="testi-grid">
      <figure className="quote reveal-up"><div className="q-mark">“</div><blockquote>Inloop thinks in systems, not posts. The pipeline finally feels predictable instead of lucky.</blockquote><figcaption><span className="av">D</span><span><b>Founder</b><i>D2C Skincare Brand</i></span></figcaption></figure>
      <figure className="quote reveal-up" data-d="1"><div className="q-mark">“</div><blockquote>AI speed with human taste — we ship more, test faster, and the ROAS shows it.</blockquote><figcaption><span className="av">F</span><span><b>Marketing Lead</b><i>FMCG Health Brand</i></span></figcaption></figure>
      <figure className="quote reveal-up" data-d="2"><div className="q-mark">“</div><blockquote>From a scattered presence to a brand that looks and performs premium. Real growth.</blockquote><figcaption><span className="av">L</span><span><b>Director</b><i>Fashion &amp; Lifestyle</i></span></figcaption></figure>
      <figure className="quote reveal-up" data-d="3"><div className="q-mark">“</div><blockquote>Onboarded in days, not weeks. They run the whole loop so we can run the business.</blockquote><figcaption><span className="av">S</span><span><b>Founder</b><i>SaaS Startup</i></span></figcaption></figure>
    </div>
  </section>

<section className="sec cta-band reveal-up" id="cta">
    <div className="cta-band-inner">
      <div className="cta-portal" aria-hidden="true"></div>
      <h2>Want results like these?</h2>
      <Link to="/#contact" className="btn primary lg">Book a Free Call</Link>
    </div>
  </section>

<section className="sec aiad-band" id="aiad">
  <div className="aiad-glow" aria-hidden="true"></div>
  <div className="aiad-wrap reveal-up">
    <span className="aiad-kick">AI-powered advertising</span>
    <h2 className="aiad-title">Make your first <span className="grad">AI ad</span> with us</h2>
    <p className="aiad-sub">From script to screen in days &mdash; cinematic AI video ads, built around your brand and tuned to convert. No crews, no wasted spend, just output that performs.</p>
    <div className="aiad-cta">
      <Link className="aiad-btn magnetic" to="/#contact">Start your AI ad <span>&#8599;</span></Link>
      <Link className="aiad-ghost" to="/ai" data-link>See AI video work</Link>
    </div>
  </div>
</section>


  <section className="sec ai-score" id="ai-score">
    <div className="ags-shell reveal-up">
      <span className="ags-shell-glow" aria-hidden="true"></span>
      <span className="ags-shell-grid" aria-hidden="true"></span>
      <div className="ags-shell-top">
        <span className="ags-live"><span className="ags-live-dot"></span>AI-powered · Live estimate</span>
        <span className="ags-shell-badge">5 growth signals analyzed</span>
      </div>
      <div className="ags-wrap">
      
      <div className="ags-left reveal-up">
        <div className="kick2">Free AI Growth Audit</div>
        <h2>Get Your Brand&#x27;s <span className="grad">AI Growth Score</span></h2>
        <p className="ags-desc">Answer a few quick questions and get an instant snapshot of how ready your brand is for AI-led growth across content, ads, automation and conversion systems.</p>
        <ul className="ags-benefits">
          <li><span className="ags-bi">&#10003;</span>Identify where your brand is losing growth opportunities</li>
          <li><span className="ags-bi">&#10003;</span>Understand how AI can improve your marketing workflow</li>
          <li><span className="ags-bi">&#10003;</span>Get a quick roadmap for better content, ads and automation</li>
        </ul>
      </div>

      
      <div className="ags-right reveal-up" data-d="1">
        
        <form className="ags-card ags-form" id="agsForm" noValidate>
          <div className="ags-field">
            <label htmlFor="ags-brand">Brand Name <b>*</b></label>
            <input id="ags-brand" name="brandName" type="text" placeholder="Enter your brand name" autoComplete="organization" />
            <span className="ags-err" data-for="brandName"></span>
          </div>
          <div className="ags-row2">
            <div className="ags-field">
              <label htmlFor="ags-web">Website URL</label>
              <input id="ags-web" name="website" type="url" placeholder="https://yourbrand.com" autoComplete="url" />
            </div>
            <div className="ags-field">
              <label htmlFor="ags-ig">Instagram Handle</label>
              <input id="ags-ig" name="instagram" type="text" placeholder="@yourbrand" />
            </div>
          </div>
          <span className="ags-err ags-err-block" data-for="channel"></span>

          <div className="ags-row2">
            <div className="ags-field">
              <label htmlFor="ags-industry">Industry / Category</label>
              <select id="ags-industry" name="industry">
                <option value="">Select category</option>
                <option>Fashion &amp; Lifestyle</option>
                <option>Beauty &amp; Personal Care</option>
                <option>Food &amp; Beverage</option>
                <option>Real Estate</option>
                <option>Healthcare &amp; Wellness</option>
                <option>Technology / SaaS</option>
                <option>E-commerce / D2C</option>
                <option>Creator / Personal Brand</option>
                <option>Other</option>
              </select>
            </div>
            <div className="ags-field">
              <label htmlFor="ags-focus">Current Marketing Focus</label>
              <select id="ags-focus" name="focus">
                <option value="">Select focus</option>
                <option>Building brand awareness</option>
                <option>Getting more leads</option>
                <option>Improving sales</option>
                <option>Scaling content</option>
                <option>Running paid ads</option>
                <option>Automating workflows</option>
                <option>Not sure yet</option>
              </select>
            </div>
          </div>

          <div className="ags-row2">
            <div className="ags-field">
              <label htmlFor="ags-freq">Posting Frequency</label>
              <select id="ags-freq" name="postingFrequency">
                <option value="">Select frequency</option>
                <option>Rarely</option>
                <option>1-2 times a week</option>
                <option>3-4 times a week</option>
                <option>Daily</option>
                <option>Multiple times a day</option>
              </select>
            </div>
            <div className="ags-field">
              <label htmlFor="ags-ads">Paid Ads Status</label>
              <select id="ags-ads" name="paidAdsStatus">
                <option value="">Select status</option>
                <option>Not running ads</option>
                <option>Tried ads but no strong results</option>
                <option>Running ads currently</option>
                <option>Scaling paid campaigns</option>
              </select>
            </div>
          </div>

          <div className="ags-row2">
            <div className="ags-field">
              <label htmlFor="ags-auto">Automation Usage</label>
              <select id="ags-auto" name="automationUsage">
                <option value="">Select usage</option>
                <option>No automation</option>
                <option>Basic WhatsApp / email replies</option>
                <option>CRM or lead tracking</option>
                <option>Advanced automation workflows</option>
              </select>
            </div>
            <div className="ags-field">
              <label htmlFor="ags-chal">Biggest Challenge</label>
              <select id="ags-chal" name="biggestChallenge">
                <option value="">Select challenge</option>
                <option>Weak content consistency</option>
                <option>Poor ad performance</option>
                <option>Low website conversions</option>
                <option>No clear marketing strategy</option>
                <option>Manual repetitive work</option>
                <option>Not getting quality leads</option>
                <option>Scaling is difficult</option>
              </select>
            </div>
          </div>

          <div className="ags-field">
            <label htmlFor="ags-email">Email Address <b>*</b></label>
            <input id="ags-email" name="email" type="email" placeholder="Enter your email to receive detailed audit" autoComplete="email" />
            <span className="ags-err" data-for="email"></span>
          </div>

          <button type="submit" className="btn primary lg ags-submit" id="agsSubmit">Generate My AI Growth Score</button>
        </form>

        
        <div className="ags-card ags-result" id="agsResult" hidden aria-live="polite">
          <div className="ags-overall">
            <div className="ags-gauge">
              <svg viewBox="0 0 120 120" className="ags-gauge-svg" aria-hidden="true">
                <circle className="ags-gt" cx="60" cy="60" r="52"></circle>
                <circle className="ags-gp" cx="60" cy="60" r="52" id="agsGaugeArc"></circle>
              </svg>
              <div className="ags-gauge-num"><b id="agsScoreNum">0</b><span>/100</span></div>
            </div>
            <div className="ags-overall-tx">
              <div className="kick2">Your AI Growth Score</div>
              <h3 id="agsLabel">&mdash;</h3>
              <p id="agsInsight" className="ags-insight"></p>
            </div>
          </div>

          <div className="ags-bars-block">
            <div className="ags-bars-h">Score breakdown</div>
            <div className="ags-bars" id="agsBars"></div>
          </div>

          <div className="ags-recos">
            <div className="ags-recos-h">Recommended next steps</div>
            <ol id="agsRecos"></ol>
          </div>

          <div className="ags-result-cta">
            <a className="btn primary lg magnetic cta-lux" data-mag="0.3" id="agsBook">Book a Detailed Growth Audit <span className="arr">&#8599;</span></a>
            <button type="button" className="btn ghost magnetic" data-mag="0.25" id="agsRestart">Restart Audit</button>
          </div>

          <p className="ags-disclaimer">This is a quick AI-powered estimate. For a detailed audit, our team will review your brand, content, ads and automation opportunities manually.</p>
        </div>
      </div>
      </div>
    </div>
  </section>


<section className="sec contact" id="contact">
    <div className="sec-head reveal-up">
      <div className="kick2">Let's talk</div>
      <h2>Tell us about your <span className="grad">brand</span></h2>
      <p className="sec-sub">Share a few details and we'll come back with exactly how we'd grow it. No fluff, just a clear plan.</p>
    </div>
    <form className="cform reveal-up" id="leadForm" noValidate>
      <div className="cform-row">
        <label className="cfield"><span>Name</span><input type="text" name="name" required placeholder="Your name" /></label>
        <label className="cfield"><span>Email</span><input type="email" name="email" required placeholder="you@brand.com" /></label>
      </div>
      <div className="cform-row">
        <label className="cfield"><span>Brand / Website</span><input type="text" name="brand" placeholder="Brand name or URL" /></label>
        <label className="cfield"><span>Mobile number</span><input type="tel" name="mobile" required placeholder="+91 98765 43210" /></label>
      </div>
      <label className="cfield"><span>What do you need?</span><textarea name="message" rows="4" required placeholder="A line or two about your goals…"></textarea></label>
      <div className="cform-foot">
        <button type="submit" className="btn primary lg magnetic" data-mag="0.3">Send</button>
        <span className="cform-note" id="cformNote"></span>
      </div>
    </form>
  </section>


  
  </main>  );
}
