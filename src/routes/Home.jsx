import { Link } from 'react-router-dom';
import TubesBackground from '@/components/TubesBackground';
import ServicesFlip from '@/components/ServicesFlip';
import ToolsMarquee from '@/components/ToolsMarquee';

export default function Home() {
  return (
<main id="view-home" className="route" data-route="home">
  <header className="hero">
    <div id="grain"></div>
    <TubesBackground className="hero-tubes" />

    <div className="hero-content">
      <h1 className="reveal d2">We don't just market your brand. We <span className="chrome">engineer its growth</span></h1>
      <p className="reveal d3 sub">Creative, performance, and AI automation under one roof — turning brand identity into qualified leads. <b>Inloop builds brands that scale.</b></p>
      <div className="reveal d4 cta-row">
        <Link className="btn primary magnetic" data-mag="0.3" to="/#contact">Book a Free Call</Link>
      </div>
      <div className="reveal d5 hero-stats" id="stats">
        <div className="hs"><div className="hs-n"><span data-count="25">0</span>+</div><div className="hs-l">Brands served</div></div>
        <div className="hs"><div className="hs-n">₹<span data-count="2">0</span>Cr+</div><div className="hs-l">Ad spend managed</div></div>
        <div className="hs"><div className="hs-n"><span data-count="50">0</span>M+</div><div className="hs-l">Impressions</div></div>
        <div className="hs"><div className="hs-n"><span data-count="4">0</span>x</div><div className="hs-l">Avg ROAS</div></div>
        <div className="hs"><div className="hs-n"><span data-count="48">0</span>hrs</div><div className="hs-l">Onboarding</div></div>
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

  <ServicesFlip />

<section className="sec services" id="services">
    <div className="sec-head reveal-up">
      <div className="kick2">All services</div>
      <h2>One roof. <span className="grad">Every lever of growth</span></h2>
      <p className="sec-sub">From the first pixel of your identity to the last touch of a qualified lead — we build, run, and scale all of it.</p>
    </div>
    <div className="svc-bento">
      <article className="svc anim-rise bx-a bx-lg"><Link className="svc-link" to="/branding" aria-label="Brand Strategy &amp; Identity"></Link><span className="svc-glyph" aria-hidden="true">✦</span><span className="svc-ic">✦</span><div className="svc-tx"><h3>Branding</h3><p>Identity systems that make you unmistakable — naming, visual language and guidelines your whole team can run with.</p><span className="svc-more">Explore service <span>→</span></span></div><span className="svc-go">↗</span></article>
      <article className="svc anim-rise bx-b" data-d="1"><Link className="svc-link" to="/social-media" aria-label="Social Media Management"></Link><span className="svc-ic">◎</span><div className="svc-tx"><h3>Social Media</h3><p>Always-on content and community that compounds.</p></div><span className="svc-go">↗</span></article>
      <article className="svc anim-rise bx-c" data-d="2"><Link className="svc-link" to="/website" aria-label="Website Design &amp; Development"></Link><span className="svc-ic">⬡</span><div className="svc-tx"><h3>Tech</h3><p>Sites, funnels and tracking built to convert.</p></div><span className="svc-go">↗</span></article>
      <article className="svc anim-rise bx-d" data-d="3"><Link className="svc-link" to="/influencer" aria-label="Influencer Marketing"></Link><span className="svc-ic">◈</span><div className="svc-tx"><h3>Influencer</h3><p>Creator partnerships matched to real intent.</p></div><span className="svc-go">↗</span></article>
      <article className="svc anim-rise bx-e"><Link className="svc-link" to="/creator-management" aria-label="Creator Management"></Link><span className="svc-ic">◇</span><div className="svc-tx"><h3>Creator Management</h3><p>End-to-end management for talent and brands.</p></div><span className="svc-go">↗</span></article>
      <article className="svc anim-rise bx-f" data-d="1"><Link className="svc-link" to="/production" aria-label="Creative Production"></Link><span className="svc-ic">●</span><div className="svc-tx"><h3>Production</h3><p>Shoots and post that move at AI speed.</p></div><span className="svc-go">↗</span></article>
      <article className="svc anim-rise bx-g bx-lg" data-d="2"><Link className="svc-link" to="/performance" aria-label="Performance Marketing"></Link><span className="svc-glyph" aria-hidden="true">▲</span><span className="svc-ic">▲</span><div className="svc-tx"><h3>Performance</h3><p>Paid media engineered around ROAS, not vanity — tested, measured and scaled on what actually converts.</p><span className="svc-more">Explore service <span>→</span></span></div><span className="svc-go">↗</span></article>
      <article className="svc anim-rise bx-h" data-d="3"><Link className="svc-link" to="/pr" aria-label="Strategic PR &amp; Communication"></Link><span className="svc-ic">◐</span><div className="svc-tx"><h3>PR &amp; Communication</h3><p>Narratives that earn attention and trust.</p></div><span className="svc-go">↗</span></article>
      <article className="svc anim-rise bx-i"><Link className="svc-link" to="/content" aria-label="Content Creation"></Link><span className="svc-ic">✧</span><div className="svc-tx"><h3>Content Creation</h3><p>Story-first assets across every format.</p></div><span className="svc-go">↗</span></article>
      <article className="svc anim-rise bx-j" data-d="1"><Link className="svc-link" to="/seo" aria-label="SEO &amp; Search"></Link><span className="svc-ic">⌖</span><div className="svc-tx"><h3>SEO &amp; Search</h3><p>Search visibility that compounds organically.</p></div><span className="svc-go">↗</span></article>
      <article className="svc anim-rise bx-k bx-wide" data-d="2"><Link className="svc-link" to="/ai" aria-label="AI-Powered Creative"></Link><span className="svc-ic">∞</span><div className="svc-tx"><h3>AI Powered</h3><p>Automation and models woven through every play.</p></div><span className="svc-go">↗</span></article>
      <article className="svc anim-rise bx-l bx-wide" data-d="3"><Link className="svc-link" to="/ecommerce" aria-label="E-commerce Growth"></Link><span className="svc-ic">▣</span><div className="svc-tx"><h3>E-commerce Growth</h3><p>Storefronts, funnels and retention that sell.</p></div><span className="svc-go">↗</span></article>
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

  <ToolsMarquee />

<section className="sec adsx" id="ads">
    <div className="sec-head reveal-up">
      <div className="kick2">Paid media</div>
      <h2>Every major ad platform, <span className="grad">one growth engine</span></h2>
      <p className="sec-sub">We plan, launch and optimize campaigns across the platforms your customers actually use — and we have the dashboards to prove it.</p>
    </div>
    <div className="adx-chips reveal-up"><button className="adx-chip active" data-f="all">All</button><button className="adx-chip" data-f="google">Google Ads</button><button className="adx-chip" data-f="meta">Meta Ads</button><button className="adx-chip" data-f="microsoft">Microsoft Ads</button><button className="adx-chip" data-f="taboola">Taboola</button><button className="adx-chip" data-f="tiktok">TikTok Ads</button><button className="adx-chip" data-f="jio">Jio Ads</button></div>
    <div className="adx-carousel">
      <div className="adx-track" id="adxTrack"><figure className="adx-card anim-rise" data-p="google"><div className="adx-frame"><span className="adx-bar"><i></i><i></i><i></i><b>Google Ads</b></span><div className="adx-shot ad-1" role="img" aria-label="Google Ads Campaign overview"></div></div><figcaption><span className="adx-plat">Google Ads</span> · Campaign overview</figcaption></figure><figure className="adx-card anim-rise" data-p="google"><div className="adx-frame"><span className="adx-bar"><i></i><i></i><i></i><b>Google Ads</b></span><div className="adx-shot ad-2" role="img" aria-label="Google Ads Search performance"></div></div><figcaption><span className="adx-plat">Google Ads</span> · Search performance</figcaption></figure><figure className="adx-card anim-rise" data-p="google"><div className="adx-frame"><span className="adx-bar"><i></i><i></i><i></i><b>Google Ads</b></span><div className="adx-shot ad-3" role="img" aria-label="Google Ads Audience & device"></div></div><figcaption><span className="adx-plat">Google Ads</span> · Audience & device</figcaption></figure><figure className="adx-card anim-rise" data-p="meta"><div className="adx-frame"><span className="adx-bar"><i></i><i></i><i></i><b>Meta Ads</b></span><div className="adx-shot ad-4" role="img" aria-label="Meta Ads Campaigns manager"></div></div><figcaption><span className="adx-plat">Meta Ads</span> · Campaigns manager</figcaption></figure><figure className="adx-card anim-rise" data-p="meta"><div className="adx-frame"><span className="adx-bar"><i></i><i></i><i></i><b>Meta Ads</b></span><div className="adx-shot ad-5" role="img" aria-label="Meta Ads Audience insights"></div></div><figcaption><span className="adx-plat">Meta Ads</span> · Audience insights</figcaption></figure><figure className="adx-card anim-rise" data-p="meta"><div className="adx-frame"><span className="adx-bar"><i></i><i></i><i></i><b>Meta Ads</b></span><div className="adx-shot ad-6" role="img" aria-label="Meta Ads Ad sets & delivery"></div></div><figcaption><span className="adx-plat">Meta Ads</span> · Ad sets & delivery</figcaption></figure><figure className="adx-card anim-rise" data-p="microsoft"><div className="adx-frame"><span className="adx-bar"><i></i><i></i><i></i><b>Microsoft Ads</b></span><div className="adx-shot ad-7" role="img" aria-label="Microsoft Ads Campaign dashboard"></div></div><figcaption><span className="adx-plat">Microsoft Ads</span> · Campaign dashboard</figcaption></figure><figure className="adx-card anim-rise" data-p="taboola"><div className="adx-frame"><span className="adx-bar"><i></i><i></i><i></i><b>Taboola</b></span><div className="adx-shot ad-8" role="img" aria-label="Taboola Native discovery"></div></div><figcaption><span className="adx-plat">Taboola</span> · Native discovery</figcaption></figure><figure className="adx-card anim-rise" data-p="tiktok"><div className="adx-frame"><span className="adx-bar"><i></i><i></i><i></i><b>TikTok Ads</b></span><div className="adx-shot ad-9" role="img" aria-label="TikTok Ads Campaign performance"></div></div><figcaption><span className="adx-plat">TikTok Ads</span> · Campaign performance</figcaption></figure><figure className="adx-card anim-rise" data-p="jio"><div className="adx-frame"><span className="adx-bar"><i></i><i></i><i></i><b>Jio Ads</b></span><div className="adx-shot ad-10" role="img" aria-label="Jio Ads Reach & awareness"></div></div><figcaption><span className="adx-plat">Jio Ads</span> · Reach & awareness</figcaption></figure></div>
      <div className="adx-controls">
        <div className="adx-progress" aria-hidden="true"><span id="adxBar"></span></div>
        <span className="adx-count" id="adxCount">01 / 10</span>
        <button type="button" className="adx-nav" id="adxPrev" aria-label="Previous dashboard">←</button>
        <button type="button" className="adx-nav" id="adxNext" aria-label="Next dashboard">→</button>
      </div>
    </div>
  </section>

<section className="sec packages" id="pricing">
    <div className="sec-head reveal-up">
      <div className="kick2">Packages</div>
      <h2>Pick a kit, <span className="grad">start the loop</span></h2>
    </div>
    <div className="pkq-wrap">
    <article className="pkq anim-rise">
      <div className="pkq-head">
        <h3 className="pkq-name">Essential</h3>
        <span className="pkq-for">For New Businesses</span>
      </div>
      <div className="pkq-body">
        <p className="pkq-blurb">Get discovered and look the part from day one.</p>
        <ul className="pkq-list">
          <li>Social Media Posting with Creatives</li>
          <li>Starter Brand Identity Design Pack</li>
          <li>Simple Website or Portfolio Setup</li>
          <li>Short-form Videos for Engagement</li>
        </ul>
        <Link to="/#contact" className="pkq-cta">Kickstart your digital presence <span className="arr" aria-hidden="true">→</span></Link>
      </div>
    </article>
    <article className="pkq feat anim-rise">
      <div className="pkq-head">
        <span className="pkq-pop">Most popular</span>
        <h3 className="pkq-name">Growth</h3>
        <span className="pkq-for">For Growing Brands</span>
      </div>
      <div className="pkq-body">
        <p className="pkq-blurb">Turn attention into a steady pipeline of customers.</p>
        <ul className="pkq-list">
          <li>Strategic Social Media Campaigns</li>
          <li>Targeted Paid Ads for Growth</li>
          <li>Micro-Influencer Brand Collaborations</li>
          <li>Landing Pages for Conversions</li>
          <li>Creative Video Content Production</li>
          <li>Monthly Campaign Analytics Reports</li>
        </ul>
        <Link to="/#contact" className="pkq-cta">Scale your reach <span className="arr" aria-hidden="true">→</span></Link>
      </div>
    </article>
    <article className="pkq anim-rise">
      <div className="pkq-head">
        <h3 className="pkq-name">Leader</h3>
        <span className="pkq-for">For Established Enterprises</span>
      </div>
      <div className="pkq-body">
        <p className="pkq-blurb">Own your category across every channel.</p>
        <ul className="pkq-list">
          <li>360° Multi-Platform Social Media</li>
          <li>Celebrity and Macro Influencer Campaigns</li>
          <li>Advanced Performance Marketing Strategies</li>
          <li>Full Website and E-commerce Development</li>
          <li>Complete Visual Brand Identity Ecosystem</li>
          <li>Premium Commercial Video Productions</li>
          <li>ROI Dashboards with Growth Insight</li>
        </ul>
        <Link to="/#contact" className="pkq-cta">Maximize impact &amp; scale big <span className="arr" aria-hidden="true">→</span></Link>
      </div>
    </article>
    </div>
  </section>

<section className="sec cases" id="work">
    <div className="sec-head reveal-up">
      <div className="kick2">Case studies</div>
      <h2>Results that speak, <span className="grad">real brands, real numbers</span></h2>
    </div>
    <div className="cs-grid">
      <article className="cs-card anim-rise">
        <span className="cs-cat">App · Social + Paid Ads</span>
        <div className="cs-metric">3.2x</div>
        <div className="cs-metric-l">installs in 60 days</div>
        <div className="cs-foot"><b>Apploft</b><p>Scaled installs with a social-first paid engine.</p></div>
      </article>
      <article className="cs-card anim-rise" data-d="1">
        <span className="cs-cat">Fashion · Web + UI/UX + Social</span>
        <div className="cs-metric">+40%</div>
        <div className="cs-metric-l">conversion rate lift</div>
        <div className="cs-foot"><b>Luxe Apparel</b><p>A redesign and social system built to convert.</p></div>
      </article>
      <article className="cs-card anim-rise" data-d="2">
        <span className="cs-cat">FMCG Health · Influencer + Meta Ads</span>
        <div className="cs-metric">4.3x</div>
        <div className="cs-metric-l">ROAS in month one</div>
        <div className="cs-foot"><b>FMCG health brand</b><p>Creator-led demand at profitable ROAS.</p></div>
      </article>
    </div>
    <div className="cs-strip reveal-up"><span className="cs-strip-n">25+</span><span>brands and counting across accounts</span><span className="cs-strip-sep" aria-hidden="true"></span><span>Real systems, real numbers.</span></div>
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


  </main>  );
}
