import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
<div id="svp"><main className="route pf2" data-route="portfolio">
  <header className="pf2-hero">
    <div className="pf2-wrap">
      <span className="pf2-kick reveal-up">Inloop Media &mdash; Portfolio</span>
      <h1 className="pf2-h1 reveal-up">Creative <span className="grad">Portfolio</span></h1>
      <p className="pf2-sub reveal-up">Ideas, design, content, technology and performance &mdash; built to help brands grow.</p>
      <div className="pf2-tags reveal-up">
        <span>Branding</span><span>Design</span><span>Social Media</span><span>Web</span><span>Content</span><span>Performance</span>
      </div>
      <div className="pf2-cta reveal-up">
        <Link className="btn primary magnetic" data-mag="0.3" to="/portfolio#branding">View Work</Link>
        <Link className="btn ghost magnetic" data-mag="0.3" to="/#contact">Start a Project</Link>
      </div>
    </div>
  </header>

  <nav className="pf2-tabs" id="pfTabs" aria-label="Portfolio categories">
    <Link to="/portfolio#branding" data-pfcat="branding" className="on">Branding</Link>
    <Link to="/portfolio#design" data-pfcat="design">Design</Link>
    <Link to="/portfolio#social-media" data-pfcat="social-media">Social Media</Link>
    <Link to="/portfolio#web-app" data-pfcat="web-app">Web &amp; App</Link>
    <Link to="/portfolio#influencer-marketing" data-pfcat="influencer-marketing">Influencer Marketing</Link>
    <Link to="/portfolio#content-production" data-pfcat="content-production">Content Production</Link>
    <Link to="/portfolio#performance-marketing" data-pfcat="performance-marketing">Performance Marketing</Link>
  </nav>

  <section className="pf2-sec" id="pfBranding">
    <div className="pf2-wrap">
      <div className="pf2-head reveal-up"><span className="pf2-kick">Branding</span><h2 className="pf2-h2">Brand systems built to be <span className="grad">remembered</span></h2></div>
      <div className="pf2-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Identity</span>
        <div className="pfc-meta"><b>Logo Design</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">System</span>
        <div className="pfc-meta"><b>Brand Identity</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Docs</span>
        <div className="pfc-meta"><b>Brand Guidelines</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Direction</span>
        <div className="pfc-meta"><b>Moodboards</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Craft</span>
        <div className="pfc-meta"><b>Color Palettes</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Retail</span>
        <div className="pfc-meta"><b>Packaging Direction</b></div>
      </div></article>
      </div>
    
      
      <div className="pf-indhead reveal-up">
        <span className="pf2-kick">Branding &mdash; by industry</span>
        <h3 className="pf-ind-title">Work across <span className="grad">every industry</span></h3>
      </div>
      <div className="pf-ind-chips reveal-up"><a href="#pfBranding-travel" data-pfjump>Travel Agency</a><a href="#pfBranding-trading" data-pfjump>Trading &amp; Finance</a><a href="#pfBranding-restaurant" data-pfjump>Restaurant</a><a href="#pfBranding-cafe" data-pfjump>Caf&eacute; &amp; Bakery</a><a href="#pfBranding-bar" data-pfjump>Bar &amp; Lounge</a><a href="#pfBranding-realestate" data-pfjump>Real Estate</a><a href="#pfBranding-fashion" data-pfjump>Fashion &amp; Apparel</a><a href="#pfBranding-healthcare" data-pfjump>Healthcare &amp; Clinics</a><a href="#pfBranding-fitness" data-pfjump>Fitness &amp; Gym</a><a href="#pfBranding-ecommerce" data-pfjump>E-commerce</a></div>
      <div className="pf-ind" id="pfBranding-travel">
        <div className="pf-ind-h anim-rise"><h3>Travel Agency</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Identity</span>
        <div className="pfc-meta"><b>Travel Logo Design</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">System</span>
        <div className="pfc-meta"><b>Travel Brand Identity</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Docs</span>
        <div className="pfc-meta"><b>Travel Brand Guidelines</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfBranding-trading">
        <div className="pf-ind-h anim-rise"><h3>Trading &amp; Finance</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Identity</span>
        <div className="pfc-meta"><b>Trading Logo Design</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">System</span>
        <div className="pfc-meta"><b>Trading Brand Identity</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Docs</span>
        <div className="pfc-meta"><b>Trading Brand Guidelines</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfBranding-restaurant">
        <div className="pf-ind-h anim-rise"><h3>Restaurant</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Identity</span>
        <div className="pfc-meta"><b>Restaurant Logo Design</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">System</span>
        <div className="pfc-meta"><b>Restaurant Brand Identity</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Docs</span>
        <div className="pfc-meta"><b>Restaurant Brand Guidelines</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfBranding-cafe">
        <div className="pf-ind-h anim-rise"><h3>Caf&eacute; &amp; Bakery</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Identity</span>
        <div className="pfc-meta"><b>Caf&eacute; Logo Design</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">System</span>
        <div className="pfc-meta"><b>Caf&eacute; Brand Identity</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Docs</span>
        <div className="pfc-meta"><b>Caf&eacute; Brand Guidelines</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfBranding-bar">
        <div className="pf-ind-h anim-rise"><h3>Bar &amp; Lounge</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Identity</span>
        <div className="pfc-meta"><b>Bar Logo Design</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">System</span>
        <div className="pfc-meta"><b>Bar Brand Identity</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Docs</span>
        <div className="pfc-meta"><b>Bar Brand Guidelines</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfBranding-realestate">
        <div className="pf-ind-h anim-rise"><h3>Real Estate</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Identity</span>
        <div className="pfc-meta"><b>Real Estate Logo Design</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">System</span>
        <div className="pfc-meta"><b>Real Estate Brand Identity</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Docs</span>
        <div className="pfc-meta"><b>Real Estate Brand Guidelines</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfBranding-fashion">
        <div className="pf-ind-h anim-rise"><h3>Fashion &amp; Apparel</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Identity</span>
        <div className="pfc-meta"><b>Fashion Logo Design</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">System</span>
        <div className="pfc-meta"><b>Fashion Brand Identity</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Docs</span>
        <div className="pfc-meta"><b>Fashion Brand Guidelines</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfBranding-healthcare">
        <div className="pf-ind-h anim-rise"><h3>Healthcare &amp; Clinics</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Identity</span>
        <div className="pfc-meta"><b>Clinic Logo Design</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">System</span>
        <div className="pfc-meta"><b>Clinic Brand Identity</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Docs</span>
        <div className="pfc-meta"><b>Clinic Brand Guidelines</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfBranding-fitness">
        <div className="pf-ind-h anim-rise"><h3>Fitness &amp; Gym</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Identity</span>
        <div className="pfc-meta"><b>Gym Logo Design</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">System</span>
        <div className="pfc-meta"><b>Gym Brand Identity</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Docs</span>
        <div className="pfc-meta"><b>Gym Brand Guidelines</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfBranding-ecommerce">
        <div className="pf-ind-h anim-rise"><h3>E-commerce</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Identity</span>
        <div className="pfc-meta"><b>E-commerce Logo Design</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">System</span>
        <div className="pfc-meta"><b>E-commerce Brand Identity</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Docs</span>
        <div className="pfc-meta"><b>E-commerce Brand Guidelines</b></div>
      </div></article>
        </div>
      </div>
    </div>
  </section>

  <section className="pf2-sec" id="pfDesign">
    <div className="pf2-wrap">
      <div className="pf2-head reveal-up"><span className="pf2-kick">Design</span><h2 className="pf2-h2">Design that captures attention <span className="grad">and converts</span></h2></div>
      <div className="pf2-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Print</span>
        <div className="pfc-meta"><b>Posters</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Paid</span>
        <div className="pfc-meta"><b>Ad Creatives</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Organic</span>
        <div className="pfc-meta"><b>Social Creatives</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Retail</span>
        <div className="pfc-meta"><b>Packaging</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Web</span>
        <div className="pfc-meta"><b>Website Banners</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">E-commerce</span>
        <div className="pfc-meta"><b>Amazon A+ Creatives</b></div>
      </div></article>
      </div>
    
      
      <div className="pf-indhead reveal-up">
        <span className="pf2-kick">Design &mdash; by industry</span>
        <h3 className="pf-ind-title">Work across <span className="grad">every industry</span></h3>
      </div>
      <div className="pf-ind-chips reveal-up"><a href="#pfDesign-travel" data-pfjump>Travel Agency</a><a href="#pfDesign-trading" data-pfjump>Trading &amp; Finance</a><a href="#pfDesign-restaurant" data-pfjump>Restaurant</a><a href="#pfDesign-cafe" data-pfjump>Caf&eacute; &amp; Bakery</a><a href="#pfDesign-bar" data-pfjump>Bar &amp; Lounge</a><a href="#pfDesign-realestate" data-pfjump>Real Estate</a><a href="#pfDesign-fashion" data-pfjump>Fashion &amp; Apparel</a><a href="#pfDesign-healthcare" data-pfjump>Healthcare &amp; Clinics</a><a href="#pfDesign-fitness" data-pfjump>Fitness &amp; Gym</a><a href="#pfDesign-ecommerce" data-pfjump>E-commerce</a></div>
      <div className="pf-ind" id="pfDesign-travel">
        <div className="pf-ind-h anim-rise"><h3>Travel Agency</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Print</span>
        <div className="pfc-meta"><b>Travel Posters &amp; Flyers</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Paid</span>
        <div className="pfc-meta"><b>Travel Ad Creatives</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Organic</span>
        <div className="pfc-meta"><b>Travel Social Creatives</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfDesign-trading">
        <div className="pf-ind-h anim-rise"><h3>Trading &amp; Finance</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Print</span>
        <div className="pfc-meta"><b>Trading Posters &amp; Flyers</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Paid</span>
        <div className="pfc-meta"><b>Trading Ad Creatives</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Organic</span>
        <div className="pfc-meta"><b>Trading Social Creatives</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfDesign-restaurant">
        <div className="pf-ind-h anim-rise"><h3>Restaurant</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Print</span>
        <div className="pfc-meta"><b>Restaurant Posters &amp; Flyers</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Paid</span>
        <div className="pfc-meta"><b>Restaurant Ad Creatives</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Organic</span>
        <div className="pfc-meta"><b>Restaurant Social Creatives</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfDesign-cafe">
        <div className="pf-ind-h anim-rise"><h3>Caf&eacute; &amp; Bakery</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Print</span>
        <div className="pfc-meta"><b>Caf&eacute; Posters &amp; Flyers</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Paid</span>
        <div className="pfc-meta"><b>Caf&eacute; Ad Creatives</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Organic</span>
        <div className="pfc-meta"><b>Caf&eacute; Social Creatives</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfDesign-bar">
        <div className="pf-ind-h anim-rise"><h3>Bar &amp; Lounge</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Print</span>
        <div className="pfc-meta"><b>Bar Posters &amp; Flyers</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Paid</span>
        <div className="pfc-meta"><b>Bar Ad Creatives</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Organic</span>
        <div className="pfc-meta"><b>Bar Social Creatives</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfDesign-realestate">
        <div className="pf-ind-h anim-rise"><h3>Real Estate</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Print</span>
        <div className="pfc-meta"><b>Real Estate Posters &amp; Flyers</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Paid</span>
        <div className="pfc-meta"><b>Real Estate Ad Creatives</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Organic</span>
        <div className="pfc-meta"><b>Real Estate Social Creatives</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfDesign-fashion">
        <div className="pf-ind-h anim-rise"><h3>Fashion &amp; Apparel</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Print</span>
        <div className="pfc-meta"><b>Fashion Posters &amp; Flyers</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Paid</span>
        <div className="pfc-meta"><b>Fashion Ad Creatives</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Organic</span>
        <div className="pfc-meta"><b>Fashion Social Creatives</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfDesign-healthcare">
        <div className="pf-ind-h anim-rise"><h3>Healthcare &amp; Clinics</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Print</span>
        <div className="pfc-meta"><b>Clinic Posters &amp; Flyers</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Paid</span>
        <div className="pfc-meta"><b>Clinic Ad Creatives</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Organic</span>
        <div className="pfc-meta"><b>Clinic Social Creatives</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfDesign-fitness">
        <div className="pf-ind-h anim-rise"><h3>Fitness &amp; Gym</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Print</span>
        <div className="pfc-meta"><b>Gym Posters &amp; Flyers</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Paid</span>
        <div className="pfc-meta"><b>Gym Ad Creatives</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Organic</span>
        <div className="pfc-meta"><b>Gym Social Creatives</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfDesign-ecommerce">
        <div className="pf-ind-h anim-rise"><h3>E-commerce</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Print</span>
        <div className="pfc-meta"><b>E-commerce Posters &amp; Flyers</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Paid</span>
        <div className="pfc-meta"><b>E-commerce Ad Creatives</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Organic</span>
        <div className="pfc-meta"><b>E-commerce Social Creatives</b></div>
      </div></article>
        </div>
      </div>
    </div>
  </section>

  <section className="pf2-sec" id="pfSocial">
    <div className="pf2-wrap">
      <div className="pf2-head reveal-up"><span className="pf2-kick">Social media</span><h2 className="pf2-h2">Social media that builds <span className="grad">communities</span></h2></div>
      <div className="pf2-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Feed</span>
        <div className="pfc-meta"><b>Instagram Grid</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Swipe</span>
        <div className="pfc-meta"><b>Carousel Previews</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">In-situ</span>
        <div className="pfc-meta"><b>Phone Mockups</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Daily</span>
        <div className="pfc-meta"><b>Post Cards</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Video</span>
        <div className="pfc-meta"><b>Reels Covers</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Insights</span>
        <div className="pfc-meta"><b>Analytics Cards</b></div>
      </div></article>
      </div>
    
      
      <div className="pf-indhead reveal-up">
        <span className="pf2-kick">Social media &mdash; by industry</span>
        <h3 className="pf-ind-title">Work across <span className="grad">every industry</span></h3>
      </div>
      <div className="pf-ind-chips reveal-up"><a href="#pfSocial-travel" data-pfjump>Travel Agency</a><a href="#pfSocial-trading" data-pfjump>Trading &amp; Finance</a><a href="#pfSocial-restaurant" data-pfjump>Restaurant</a><a href="#pfSocial-cafe" data-pfjump>Caf&eacute; &amp; Bakery</a><a href="#pfSocial-bar" data-pfjump>Bar &amp; Lounge</a><a href="#pfSocial-realestate" data-pfjump>Real Estate</a><a href="#pfSocial-fashion" data-pfjump>Fashion &amp; Apparel</a><a href="#pfSocial-healthcare" data-pfjump>Healthcare &amp; Clinics</a><a href="#pfSocial-fitness" data-pfjump>Fitness &amp; Gym</a><a href="#pfSocial-ecommerce" data-pfjump>E-commerce</a></div>
      <div className="pf-ind" id="pfSocial-travel">
        <div className="pf-ind-h anim-rise"><h3>Travel Agency</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Feed</span>
        <div className="pfc-meta"><b>Travel Instagram Grid</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Video</span>
        <div className="pfc-meta"><b>Travel Reels Covers</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Swipe</span>
        <div className="pfc-meta"><b>Travel Carousel Posts</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfSocial-trading">
        <div className="pf-ind-h anim-rise"><h3>Trading &amp; Finance</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Feed</span>
        <div className="pfc-meta"><b>Trading Instagram Grid</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Video</span>
        <div className="pfc-meta"><b>Trading Reels Covers</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Swipe</span>
        <div className="pfc-meta"><b>Trading Carousel Posts</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfSocial-restaurant">
        <div className="pf-ind-h anim-rise"><h3>Restaurant</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Feed</span>
        <div className="pfc-meta"><b>Restaurant Instagram Grid</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Video</span>
        <div className="pfc-meta"><b>Restaurant Reels Covers</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Swipe</span>
        <div className="pfc-meta"><b>Restaurant Carousel Posts</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfSocial-cafe">
        <div className="pf-ind-h anim-rise"><h3>Caf&eacute; &amp; Bakery</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Feed</span>
        <div className="pfc-meta"><b>Caf&eacute; Instagram Grid</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Video</span>
        <div className="pfc-meta"><b>Caf&eacute; Reels Covers</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Swipe</span>
        <div className="pfc-meta"><b>Caf&eacute; Carousel Posts</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfSocial-bar">
        <div className="pf-ind-h anim-rise"><h3>Bar &amp; Lounge</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Feed</span>
        <div className="pfc-meta"><b>Bar Instagram Grid</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Video</span>
        <div className="pfc-meta"><b>Bar Reels Covers</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Swipe</span>
        <div className="pfc-meta"><b>Bar Carousel Posts</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfSocial-realestate">
        <div className="pf-ind-h anim-rise"><h3>Real Estate</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Feed</span>
        <div className="pfc-meta"><b>Real Estate Instagram Grid</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Video</span>
        <div className="pfc-meta"><b>Real Estate Reels Covers</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Swipe</span>
        <div className="pfc-meta"><b>Real Estate Carousel Posts</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfSocial-fashion">
        <div className="pf-ind-h anim-rise"><h3>Fashion &amp; Apparel</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Feed</span>
        <div className="pfc-meta"><b>Fashion Instagram Grid</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Video</span>
        <div className="pfc-meta"><b>Fashion Reels Covers</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Swipe</span>
        <div className="pfc-meta"><b>Fashion Carousel Posts</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfSocial-healthcare">
        <div className="pf-ind-h anim-rise"><h3>Healthcare &amp; Clinics</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Feed</span>
        <div className="pfc-meta"><b>Clinic Instagram Grid</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Video</span>
        <div className="pfc-meta"><b>Clinic Reels Covers</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Swipe</span>
        <div className="pfc-meta"><b>Clinic Carousel Posts</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfSocial-fitness">
        <div className="pf-ind-h anim-rise"><h3>Fitness &amp; Gym</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Feed</span>
        <div className="pfc-meta"><b>Gym Instagram Grid</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Video</span>
        <div className="pfc-meta"><b>Gym Reels Covers</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Swipe</span>
        <div className="pfc-meta"><b>Gym Carousel Posts</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfSocial-ecommerce">
        <div className="pf-ind-h anim-rise"><h3>E-commerce</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Feed</span>
        <div className="pfc-meta"><b>E-commerce Instagram Grid</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Video</span>
        <div className="pfc-meta"><b>E-commerce Reels Covers</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Swipe</span>
        <div className="pfc-meta"><b>E-commerce Carousel Posts</b></div>
      </div></article>
        </div>
      </div>
    </div>
  </section>

  <section className="pf2-sec" id="pfWeb">
    <div className="pf2-wrap">
      <div className="pf2-head reveal-up"><span className="pf2-kick">Web &amp; app</span><h2 className="pf2-h2">Websites and apps built for <span className="grad">business growth</span></h2></div>
      <div className="pf2-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Web</span>
        <div className="pfc-meta"><b>Website Screenshots</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Commerce</span>
        <div className="pfc-meta"><b>Shopify Stores</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Funnels</span>
        <div className="pfc-meta"><b>Landing Pages</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Product</span>
        <div className="pfc-meta"><b>App UI/UX</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Desktop</span>
        <div className="pfc-meta"><b>Browser Mockups</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Handheld</span>
        <div className="pfc-meta"><b>Mobile Mockups</b></div>
      </div></article>
      </div>
    
      
      <div className="pf-indhead reveal-up">
        <span className="pf2-kick">Web &amp; app &mdash; by industry</span>
        <h3 className="pf-ind-title">Work across <span className="grad">every industry</span></h3>
      </div>
      <div className="pf-ind-chips reveal-up"><a href="#pfWeb-travel" data-pfjump>Travel Agency</a><a href="#pfWeb-trading" data-pfjump>Trading &amp; Finance</a><a href="#pfWeb-restaurant" data-pfjump>Restaurant</a><a href="#pfWeb-cafe" data-pfjump>Caf&eacute; &amp; Bakery</a><a href="#pfWeb-bar" data-pfjump>Bar &amp; Lounge</a><a href="#pfWeb-realestate" data-pfjump>Real Estate</a><a href="#pfWeb-fashion" data-pfjump>Fashion &amp; Apparel</a><a href="#pfWeb-healthcare" data-pfjump>Healthcare &amp; Clinics</a><a href="#pfWeb-fitness" data-pfjump>Fitness &amp; Gym</a><a href="#pfWeb-ecommerce" data-pfjump>E-commerce</a></div>
      <div className="pf-ind" id="pfWeb-travel">
        <div className="pf-ind-h anim-rise"><h3>Travel Agency</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Web</span>
        <div className="pfc-meta"><b>Travel Website Design</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Funnel</span>
        <div className="pfc-meta"><b>Travel Landing Page</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">App</span>
        <div className="pfc-meta"><b>Travel App UI/UX</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfWeb-trading">
        <div className="pf-ind-h anim-rise"><h3>Trading &amp; Finance</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Web</span>
        <div className="pfc-meta"><b>Trading Website Design</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Funnel</span>
        <div className="pfc-meta"><b>Trading Landing Page</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">App</span>
        <div className="pfc-meta"><b>Trading App UI/UX</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfWeb-restaurant">
        <div className="pf-ind-h anim-rise"><h3>Restaurant</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Web</span>
        <div className="pfc-meta"><b>Restaurant Website Design</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Funnel</span>
        <div className="pfc-meta"><b>Restaurant Landing Page</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">App</span>
        <div className="pfc-meta"><b>Restaurant App UI/UX</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfWeb-cafe">
        <div className="pf-ind-h anim-rise"><h3>Caf&eacute; &amp; Bakery</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Web</span>
        <div className="pfc-meta"><b>Caf&eacute; Website Design</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Funnel</span>
        <div className="pfc-meta"><b>Caf&eacute; Landing Page</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">App</span>
        <div className="pfc-meta"><b>Caf&eacute; App UI/UX</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfWeb-bar">
        <div className="pf-ind-h anim-rise"><h3>Bar &amp; Lounge</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Web</span>
        <div className="pfc-meta"><b>Bar Website Design</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Funnel</span>
        <div className="pfc-meta"><b>Bar Landing Page</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">App</span>
        <div className="pfc-meta"><b>Bar App UI/UX</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfWeb-realestate">
        <div className="pf-ind-h anim-rise"><h3>Real Estate</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Web</span>
        <div className="pfc-meta"><b>Real Estate Website Design</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Funnel</span>
        <div className="pfc-meta"><b>Real Estate Landing Page</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">App</span>
        <div className="pfc-meta"><b>Real Estate App UI/UX</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfWeb-fashion">
        <div className="pf-ind-h anim-rise"><h3>Fashion &amp; Apparel</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Web</span>
        <div className="pfc-meta"><b>Fashion Website Design</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Funnel</span>
        <div className="pfc-meta"><b>Fashion Landing Page</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">App</span>
        <div className="pfc-meta"><b>Fashion App UI/UX</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfWeb-healthcare">
        <div className="pf-ind-h anim-rise"><h3>Healthcare &amp; Clinics</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Web</span>
        <div className="pfc-meta"><b>Clinic Website Design</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Funnel</span>
        <div className="pfc-meta"><b>Clinic Landing Page</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">App</span>
        <div className="pfc-meta"><b>Clinic App UI/UX</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfWeb-fitness">
        <div className="pf-ind-h anim-rise"><h3>Fitness &amp; Gym</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Web</span>
        <div className="pfc-meta"><b>Gym Website Design</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Funnel</span>
        <div className="pfc-meta"><b>Gym Landing Page</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">App</span>
        <div className="pfc-meta"><b>Gym App UI/UX</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfWeb-ecommerce">
        <div className="pf-ind-h anim-rise"><h3>E-commerce</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Web</span>
        <div className="pfc-meta"><b>E-commerce Website Design</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Funnel</span>
        <div className="pfc-meta"><b>E-commerce Landing Page</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">App</span>
        <div className="pfc-meta"><b>E-commerce App UI/UX</b></div>
      </div></article>
        </div>
      </div>
    </div>
  </section>

  <section className="pf2-sec" id="pfInf">
    <div className="pf2-wrap">
      <div className="pf2-head reveal-up"><span className="pf2-kick">Influencer marketing</span><h2 className="pf2-h2">Influencer marketing <span className="grad">at scale</span></h2></div>
      <div className="pf2-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Creators</span>
        <div className="pfc-meta"><b>Creator Campaigns</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Partners</span>
        <div className="pfc-meta"><b>Brand Collaborations</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Impact</span>
        <div className="pfc-meta"><b>Campaign Results</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Talent</span>
        <div className="pfc-meta"><b>Creator Previews</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Network</span>
        <div className="pfc-meta"><b>Snack Media</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Scale</span>
        <div className="pfc-meta"><b>UGC Programs</b></div>
      </div></article>
      </div>
    
      
      <div className="pf-indhead reveal-up">
        <span className="pf2-kick">Influencer marketing &mdash; by industry</span>
        <h3 className="pf-ind-title">Work across <span className="grad">every industry</span></h3>
      </div>
      <div className="pf-ind-chips reveal-up"><a href="#pfInf-travel" data-pfjump>Travel Agency</a><a href="#pfInf-trading" data-pfjump>Trading &amp; Finance</a><a href="#pfInf-restaurant" data-pfjump>Restaurant</a><a href="#pfInf-cafe" data-pfjump>Caf&eacute; &amp; Bakery</a><a href="#pfInf-bar" data-pfjump>Bar &amp; Lounge</a><a href="#pfInf-realestate" data-pfjump>Real Estate</a><a href="#pfInf-fashion" data-pfjump>Fashion &amp; Apparel</a><a href="#pfInf-healthcare" data-pfjump>Healthcare &amp; Clinics</a><a href="#pfInf-fitness" data-pfjump>Fitness &amp; Gym</a><a href="#pfInf-ecommerce" data-pfjump>E-commerce</a></div>
      <div className="pf-ind" id="pfInf-travel">
        <div className="pf-ind-h anim-rise"><h3>Travel Agency</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Creators</span>
        <div className="pfc-meta"><b>Travel Creator Campaign</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Partners</span>
        <div className="pfc-meta"><b>Travel Brand Collaboration</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Impact</span>
        <div className="pfc-meta"><b>Travel Campaign Results</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfInf-trading">
        <div className="pf-ind-h anim-rise"><h3>Trading &amp; Finance</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Creators</span>
        <div className="pfc-meta"><b>Trading Creator Campaign</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Partners</span>
        <div className="pfc-meta"><b>Trading Brand Collaboration</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Impact</span>
        <div className="pfc-meta"><b>Trading Campaign Results</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfInf-restaurant">
        <div className="pf-ind-h anim-rise"><h3>Restaurant</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Creators</span>
        <div className="pfc-meta"><b>Restaurant Creator Campaign</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Partners</span>
        <div className="pfc-meta"><b>Restaurant Brand Collaboration</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Impact</span>
        <div className="pfc-meta"><b>Restaurant Campaign Results</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfInf-cafe">
        <div className="pf-ind-h anim-rise"><h3>Caf&eacute; &amp; Bakery</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Creators</span>
        <div className="pfc-meta"><b>Caf&eacute; Creator Campaign</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Partners</span>
        <div className="pfc-meta"><b>Caf&eacute; Brand Collaboration</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Impact</span>
        <div className="pfc-meta"><b>Caf&eacute; Campaign Results</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfInf-bar">
        <div className="pf-ind-h anim-rise"><h3>Bar &amp; Lounge</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Creators</span>
        <div className="pfc-meta"><b>Bar Creator Campaign</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Partners</span>
        <div className="pfc-meta"><b>Bar Brand Collaboration</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Impact</span>
        <div className="pfc-meta"><b>Bar Campaign Results</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfInf-realestate">
        <div className="pf-ind-h anim-rise"><h3>Real Estate</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Creators</span>
        <div className="pfc-meta"><b>Real Estate Creator Campaign</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Partners</span>
        <div className="pfc-meta"><b>Real Estate Brand Collaboration</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Impact</span>
        <div className="pfc-meta"><b>Real Estate Campaign Results</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfInf-fashion">
        <div className="pf-ind-h anim-rise"><h3>Fashion &amp; Apparel</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Creators</span>
        <div className="pfc-meta"><b>Fashion Creator Campaign</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Partners</span>
        <div className="pfc-meta"><b>Fashion Brand Collaboration</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Impact</span>
        <div className="pfc-meta"><b>Fashion Campaign Results</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfInf-healthcare">
        <div className="pf-ind-h anim-rise"><h3>Healthcare &amp; Clinics</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Creators</span>
        <div className="pfc-meta"><b>Clinic Creator Campaign</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Partners</span>
        <div className="pfc-meta"><b>Clinic Brand Collaboration</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Impact</span>
        <div className="pfc-meta"><b>Clinic Campaign Results</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfInf-fitness">
        <div className="pf-ind-h anim-rise"><h3>Fitness &amp; Gym</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Creators</span>
        <div className="pfc-meta"><b>Gym Creator Campaign</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Partners</span>
        <div className="pfc-meta"><b>Gym Brand Collaboration</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Impact</span>
        <div className="pfc-meta"><b>Gym Campaign Results</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfInf-ecommerce">
        <div className="pf-ind-h anim-rise"><h3>E-commerce</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Creators</span>
        <div className="pfc-meta"><b>E-commerce Creator Campaign</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Partners</span>
        <div className="pfc-meta"><b>E-commerce Brand Collaboration</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Impact</span>
        <div className="pfc-meta"><b>E-commerce Campaign Results</b></div>
      </div></article>
        </div>
      </div>
    </div>
  </section>

  <section className="pf2-sec pf2-dark" id="pfContent">
    <div className="pf2-wrap">
      <div className="pf2-head reveal-up"><span className="pf2-kick">Content production</span><h2 className="pf2-h2">Ideas to scripts. Shoots to <span className="grad">stories</span></h2></div>
      <div className="pf2-grid pf2-video">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Authentic</span>
        <div className="pfc-meta"><b>UGC Content</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Studio</span>
        <div className="pfc-meta"><b>Product Shoots</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Short-form</span>
        <div className="pfc-meta"><b>Reels</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Audio</span>
        <div className="pfc-meta"><b>Podcast Production</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Live</span>
        <div className="pfc-meta"><b>Event Coverage</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Cinema</span>
        <div className="pfc-meta"><b>Ad Films</b></div>
      </div></article>
      </div>
    
      
      <div className="pf-indhead reveal-up">
        <span className="pf2-kick">Content production &mdash; by industry</span>
        <h3 className="pf-ind-title">Work across <span className="grad">every industry</span></h3>
      </div>
      <div className="pf-ind-chips reveal-up"><a href="#pfContent-travel" data-pfjump>Travel Agency</a><a href="#pfContent-trading" data-pfjump>Trading &amp; Finance</a><a href="#pfContent-restaurant" data-pfjump>Restaurant</a><a href="#pfContent-cafe" data-pfjump>Caf&eacute; &amp; Bakery</a><a href="#pfContent-bar" data-pfjump>Bar &amp; Lounge</a><a href="#pfContent-realestate" data-pfjump>Real Estate</a><a href="#pfContent-fashion" data-pfjump>Fashion &amp; Apparel</a><a href="#pfContent-healthcare" data-pfjump>Healthcare &amp; Clinics</a><a href="#pfContent-fitness" data-pfjump>Fitness &amp; Gym</a><a href="#pfContent-ecommerce" data-pfjump>E-commerce</a></div>
      <div className="pf-ind" id="pfContent-travel">
        <div className="pf-ind-h anim-rise"><h3>Travel Agency</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Photo</span>
        <div className="pfc-meta"><b>Travel Photoshoot</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Film</span>
        <div className="pfc-meta"><b>Travel Video Shoot</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Reels</span>
        <div className="pfc-meta"><b>Travel Reels Production</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfContent-trading">
        <div className="pf-ind-h anim-rise"><h3>Trading &amp; Finance</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Photo</span>
        <div className="pfc-meta"><b>Trading Photoshoot</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Film</span>
        <div className="pfc-meta"><b>Trading Video Shoot</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Reels</span>
        <div className="pfc-meta"><b>Trading Reels Production</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfContent-restaurant">
        <div className="pf-ind-h anim-rise"><h3>Restaurant</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Photo</span>
        <div className="pfc-meta"><b>Restaurant Photoshoot</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Film</span>
        <div className="pfc-meta"><b>Restaurant Video Shoot</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Reels</span>
        <div className="pfc-meta"><b>Restaurant Reels Production</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfContent-cafe">
        <div className="pf-ind-h anim-rise"><h3>Caf&eacute; &amp; Bakery</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Photo</span>
        <div className="pfc-meta"><b>Caf&eacute; Photoshoot</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Film</span>
        <div className="pfc-meta"><b>Caf&eacute; Video Shoot</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Reels</span>
        <div className="pfc-meta"><b>Caf&eacute; Reels Production</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfContent-bar">
        <div className="pf-ind-h anim-rise"><h3>Bar &amp; Lounge</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Photo</span>
        <div className="pfc-meta"><b>Bar Photoshoot</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Film</span>
        <div className="pfc-meta"><b>Bar Video Shoot</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Reels</span>
        <div className="pfc-meta"><b>Bar Reels Production</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfContent-realestate">
        <div className="pf-ind-h anim-rise"><h3>Real Estate</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Photo</span>
        <div className="pfc-meta"><b>Real Estate Photoshoot</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Film</span>
        <div className="pfc-meta"><b>Real Estate Video Shoot</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Reels</span>
        <div className="pfc-meta"><b>Real Estate Reels Production</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfContent-fashion">
        <div className="pf-ind-h anim-rise"><h3>Fashion &amp; Apparel</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Photo</span>
        <div className="pfc-meta"><b>Fashion Photoshoot</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Film</span>
        <div className="pfc-meta"><b>Fashion Video Shoot</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Reels</span>
        <div className="pfc-meta"><b>Fashion Reels Production</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfContent-healthcare">
        <div className="pf-ind-h anim-rise"><h3>Healthcare &amp; Clinics</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Photo</span>
        <div className="pfc-meta"><b>Clinic Photoshoot</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Film</span>
        <div className="pfc-meta"><b>Clinic Video Shoot</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Reels</span>
        <div className="pfc-meta"><b>Clinic Reels Production</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfContent-fitness">
        <div className="pf-ind-h anim-rise"><h3>Fitness &amp; Gym</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Photo</span>
        <div className="pfc-meta"><b>Gym Photoshoot</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Film</span>
        <div className="pfc-meta"><b>Gym Video Shoot</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Reels</span>
        <div className="pfc-meta"><b>Gym Reels Production</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfContent-ecommerce">
        <div className="pf-ind-h anim-rise"><h3>E-commerce</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Photo</span>
        <div className="pfc-meta"><b>E-commerce Photoshoot</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Film</span>
        <div className="pfc-meta"><b>E-commerce Video Shoot</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Reels</span>
        <div className="pfc-meta"><b>E-commerce Reels Production</b></div>
      </div></article>
        </div>
      </div>
    </div>
  </section>

  <section className="pf2-sec" id="pfPerf">
    <div className="pf2-wrap">
      <div className="pf2-head reveal-up"><span className="pf2-kick">Performance marketing</span><h2 className="pf2-h2">Performance that drives <span className="grad">revenue</span></h2></div>
      <div className="pf2-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Paid Social</span>
        <div className="pfc-meta"><b>Meta Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Search</span>
        <div className="pfc-meta"><b>Google Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">B2B</span>
        <div className="pfc-meta"><b>LinkedIn Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Revenue</span>
        <div className="pfc-meta"><b>E-commerce Campaigns</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Pipeline</span>
        <div className="pfc-meta"><b>Lead Generation</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Clarity</span>
        <div className="pfc-meta"><b>Reporting Dashboards</b></div>
      </div></article>
      </div>
      <p className="pf2-note anim-rise">Real campaign metrics are shared privately during a call &mdash; every account is different, and we don&rsquo;t publish placeholder numbers.</p>
    
      
      <div className="pf-indhead reveal-up">
        <span className="pf2-kick">Performance marketing &mdash; by industry</span>
        <h3 className="pf-ind-title">Work across <span className="grad">every industry</span></h3>
      </div>
      <div className="pf-ind-chips reveal-up"><a href="#pfPerf-travel" data-pfjump>Travel Agency</a><a href="#pfPerf-trading" data-pfjump>Trading &amp; Finance</a><a href="#pfPerf-restaurant" data-pfjump>Restaurant</a><a href="#pfPerf-cafe" data-pfjump>Caf&eacute; &amp; Bakery</a><a href="#pfPerf-bar" data-pfjump>Bar &amp; Lounge</a><a href="#pfPerf-realestate" data-pfjump>Real Estate</a><a href="#pfPerf-fashion" data-pfjump>Fashion &amp; Apparel</a><a href="#pfPerf-healthcare" data-pfjump>Healthcare &amp; Clinics</a><a href="#pfPerf-fitness" data-pfjump>Fitness &amp; Gym</a><a href="#pfPerf-ecommerce" data-pfjump>E-commerce</a></div>
      <div className="pf-ind" id="pfPerf-travel">
        <div className="pf-ind-h anim-rise"><h3>Travel Agency</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Meta</span>
        <div className="pfc-meta"><b>Travel Meta Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Google</span>
        <div className="pfc-meta"><b>Travel Google Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Funnel</span>
        <div className="pfc-meta"><b>Travel Lead Funnel</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfPerf-trading">
        <div className="pf-ind-h anim-rise"><h3>Trading &amp; Finance</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Meta</span>
        <div className="pfc-meta"><b>Trading Meta Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Google</span>
        <div className="pfc-meta"><b>Trading Google Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Funnel</span>
        <div className="pfc-meta"><b>Trading Lead Funnel</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfPerf-restaurant">
        <div className="pf-ind-h anim-rise"><h3>Restaurant</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Meta</span>
        <div className="pfc-meta"><b>Restaurant Meta Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Google</span>
        <div className="pfc-meta"><b>Restaurant Google Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Funnel</span>
        <div className="pfc-meta"><b>Restaurant Lead Funnel</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfPerf-cafe">
        <div className="pf-ind-h anim-rise"><h3>Caf&eacute; &amp; Bakery</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Meta</span>
        <div className="pfc-meta"><b>Caf&eacute; Meta Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Google</span>
        <div className="pfc-meta"><b>Caf&eacute; Google Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Funnel</span>
        <div className="pfc-meta"><b>Caf&eacute; Lead Funnel</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfPerf-bar">
        <div className="pf-ind-h anim-rise"><h3>Bar &amp; Lounge</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Meta</span>
        <div className="pfc-meta"><b>Bar Meta Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Google</span>
        <div className="pfc-meta"><b>Bar Google Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Funnel</span>
        <div className="pfc-meta"><b>Bar Lead Funnel</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfPerf-realestate">
        <div className="pf-ind-h anim-rise"><h3>Real Estate</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Meta</span>
        <div className="pfc-meta"><b>Real Estate Meta Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Google</span>
        <div className="pfc-meta"><b>Real Estate Google Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Funnel</span>
        <div className="pfc-meta"><b>Real Estate Lead Funnel</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfPerf-fashion">
        <div className="pf-ind-h anim-rise"><h3>Fashion &amp; Apparel</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Meta</span>
        <div className="pfc-meta"><b>Fashion Meta Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Google</span>
        <div className="pfc-meta"><b>Fashion Google Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Funnel</span>
        <div className="pfc-meta"><b>Fashion Lead Funnel</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfPerf-healthcare">
        <div className="pf-ind-h anim-rise"><h3>Healthcare &amp; Clinics</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Meta</span>
        <div className="pfc-meta"><b>Clinic Meta Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Google</span>
        <div className="pfc-meta"><b>Clinic Google Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Funnel</span>
        <div className="pfc-meta"><b>Clinic Lead Funnel</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfPerf-fitness">
        <div className="pf-ind-h anim-rise"><h3>Fitness &amp; Gym</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Meta</span>
        <div className="pfc-meta"><b>Gym Meta Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Google</span>
        <div className="pfc-meta"><b>Gym Google Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Funnel</span>
        <div className="pfc-meta"><b>Gym Lead Funnel</b></div>
      </div></article>
        </div>
      </div>
      <div className="pf-ind" id="pfPerf-ecommerce">
        <div className="pf-ind-h anim-rise"><h3>E-commerce</h3><span className="line"></span><span className="cnt">3 Projects</span></div>
        <div className="pf2-grid pf-ind-grid">
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Meta</span>
        <div className="pfc-meta"><b>E-commerce Meta Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Google</span>
        <div className="pfc-meta"><b>E-commerce Google Ads</b></div>
      </div></article>
      <article className="pfc pfc-sq anim-rise"><div className="pfc-frame">
        <span className="cm cm1"></span><span className="cm cm2"></span><span className="cm cm3"></span><span className="cm cm4"></span>
        <span className="pfc-wm">&#8734;</span><span className="pfc-tag">Funnel</span>
        <div className="pfc-meta"><b>E-commerce Lead Funnel</b></div>
      </div></article>
        </div>
      </div>
    </div>
  </section>

  <section className="pf2-sec" id="pfApproach">
    <div className="pf2-wrap">
      <div className="pf2-head reveal-up"><span className="pf2-kick">Our approach</span><h2 className="pf2-h2">Four steps. One <span className="grad">loop</span></h2></div>
      <ol className="pf2-steps">
        <li className="anim-rise"><span className="pf2-stepnum">01</span><b>Strategy</b><p>Positioning, audience and the plan before any pixel moves.</p></li>
        <li className="anim-rise"><span className="pf2-stepnum">02</span><b>Creativity</b><p>Identity, content and campaigns designed to be remembered.</p></li>
        <li className="anim-rise"><span className="pf2-stepnum">03</span><b>Execution</b><p>Production, launch and distribution &mdash; shipped on schedule.</p></li>
        <li className="anim-rise"><span className="pf2-stepnum">04</span><b>Growth</b><p>Measure, learn, reinvest &mdash; the loop that compounds.</p></li>
      </ol>
    </div>
  </section>

  <section className="pf2-sec pf2-final">
    <div className="pf2-wrap">
      <div className="pf2-head reveal-up" style={{textAlign:'center', maxWidth:'720px', marginLeft:'auto', marginRight:'auto'}}>
        <h2 className="pf2-h2">Let&rsquo;s build your <span className="grad">brand</span></h2>
        <p className="pf2-sub">If you are ready to grow, we are ready to build with you.</p>
      </div>
      <div className="pf2-cta anim-rise" style={{justifyContent:'center'}}>
        <Link className="btn primary lg magnetic cta-lux" data-mag="0.3" to="/#contact">Start a Project <span className="arr">↗</span></Link>
      </div>
      <div className="pf2-contact anim-rise">
        <a href="mailto:hello@inloopmedia.com">hello@inloopmedia.com</a><span>&middot;</span>
        <a href="https://inloopmedia.com" target="_blank" rel="noopener">inloopmedia.com</a><span>&middot;</span>
        <a href="tel:+919211225929">+91 92112 25929</a>
      </div>
    </div>
  </section>
  </main></div>  );
}
