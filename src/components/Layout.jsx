import { useEffect, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { initSiteEffects } from '@/lib/siteEffects';
import { SITE_URL, routeFromPath, seoForRoute } from '@/lib/seo';
import CountryCodeSelect from './CountryCodeSelect';

function setMetaTag(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function applySeo(route) {
  const { title, description } = seoForRoute(route);
  const url = `${SITE_URL}${route === 'home' ? '/' : `/${route}`}`;

  document.title = title;
  setMetaTag('name', 'description', description);
  setCanonical(url);

  setMetaTag('property', 'og:title', title);
  setMetaTag('property', 'og:description', description);
  setMetaTag('property', 'og:url', url);
  setMetaTag('property', 'og:type', 'website');
  setMetaTag('property', 'og:site_name', 'Inloop Media');
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', title);
  setMetaTag('name', 'twitter:description', description);
}

export default function Layout() {
  const location = useLocation();
  const isFirst = useRef(true);

  // run the ported vanilla-JS behavior layer once, on client mount
  useEffect(() => {
    initSiteEffects();
  }, []);

  // instant pre-paint cover so a route swap never flashes the new page
  // underneath the wipe (mirrors the original spa-router's wipe()).
  useEffect(() => {
    if (isFirst.current) return; // no cover on first paint
    const overlay = document.querySelector('.pt-overlay');
    if (overlay && window.gsap) {
      window.gsap.set(overlay, { display: 'block', clipPath: 'inset(0 0 0% 0)' });
    }
  }, [location.pathname]);

  // reveal / rebind / title / data-fx — runs on every real route change
  useEffect(() => {
    const route = routeFromPath(location.pathname);
    const scope = document.querySelector(`main[data-route="${route}"]`) || document.body;

    applySeo(route);
    document.body.setAttribute('data-fx', route === 'home' || route === 'about' ? route : 'service');
    window.scrollTo(0, 0);

    scope.querySelectorAll('.reveal-up').forEach((el) => el.classList.add('in'));
    scope.classList.remove('live');
    void scope.offsetWidth;
    scope.classList.add('live');

    document.querySelectorAll('.mega-link').forEach((a) => {
      const isActive = a.getAttribute('href') === `/${route}`;
      a.classList.toggle('active', isActive);
      if (isActive) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });

    if (window.__animBind) window.__animBind();
    if (window.__buildVisuals) window.__buildVisuals();
    if (window.__countBind) window.__countBind();
    if (window.__baInit) window.__baInit();
    if (window.ScrollTrigger) {
      try {
        window.ScrollTrigger.refresh();
      } catch (e) {
        /* noop */
      }
    }

    const overlay = document.querySelector('.pt-overlay');
    if (!isFirst.current && overlay && window.gsap) {
      const tl = window.gsap.timeline();
      tl.to(overlay, { clipPath: 'inset(100% 0 0 0)', duration: 0.42, ease: 'power3.inOut' });
      tl.set(overlay, { display: 'none', clipPath: 'inset(0 0 100% 0)' });
    }

    const safety = setTimeout(() => {
      scope.classList.add('live');
      scope.querySelectorAll('.reveal, .pt-fade').forEach((el) => {
        if (parseFloat(getComputedStyle(el).opacity) < 0.05) {
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.style.filter = 'none';
        }
      });
      scope.querySelectorAll('.anim-rise:not(.is-in)').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 1.05) el.classList.add('is-in');
      });
    }, 1300);

    isFirst.current = false;
    return () => clearTimeout(safety);
  }, [location.pathname]);

  // portfolio category tabs + generic in-page anchor scrolling, driven by the hash
  useEffect(() => {
    const route = routeFromPath(location.pathname);
    const anchor = (location.hash || '').replace(/^#/, '');
    if (route === 'portfolio') {
      if (window.__pfShow) window.__pfShow(anchor);
      return;
    }
    if (anchor) {
      const target = document.getElementById(anchor);
      if (target) {
        const t = setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
        return () => clearTimeout(t);
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <div className="scroll-prog"></div>
      <div className="pt-overlay" aria-hidden="true">
        <div className="pt-mark"><span className="pt-dot"></span><b>inloop <span>media</span></b></div>
        <div className="pt-bar"></div>
      </div>

      <canvas id="c"></canvas>
      <div className="page-fx" aria-hidden="true">
        <div className="pf pf-aurora"></div>
        <div className="pf pf-grid"></div>
        <div className="pf pf-stars"></div>
        <div className="pf pf-meteors"></div>
      </div>
      <button className="skip-intro" id="skipIntro">Skip intro <span className="sk-arr">→</span></button>

      <div className="cmodal" id="contactModal" aria-hidden="true">
        <div className="cmodal-backdrop" data-cmodal-close></div>
        <div className="cmodal-panel" role="dialog" aria-modal="true" aria-labelledby="cmodalTitle">
          <button type="button" className="cmodal-x" aria-label="Close" data-cmodal-close>&times;</button>
          <div className="sec-head cmodal-head">
            <div className="kick2">Let's talk</div>
            <h2 id="cmodalTitle">Tell us about your <span className="grad">brand</span></h2>
            <p className="sec-sub">Share a few details and we'll come back with exactly how we'd grow it. No fluff, just a clear plan.</p>
          </div>
          <form className="cform" id="leadForm" noValidate>
            <div className="cform-row">
              <label className="cfield"><span>Name</span><input type="text" name="name" required placeholder="Your name" /></label>
              <label className="cfield"><span>Email</span><input type="email" name="email" required placeholder="you@brand.com" /></label>
            </div>
            <div className="cform-row">
              <label className="cfield"><span>Brand / Website</span><input type="text" name="brand" placeholder="Brand name or URL" /></label>
              <label className="cfield">
                <span>Mobile number</span>
                <div className="cphone">
                  <CountryCodeSelect />
                  <input type="tel" name="mobile" inputMode="numeric" autoComplete="tel-national" maxLength="10" required placeholder="98765 43210" />
                </div>
              </label>
            </div>
            <label className="cfield"><span>What do you need?</span><textarea name="message" rows="4" required placeholder="A line or two about your goals…"></textarea></label>
            <div className="cform-foot">
              <button type="submit" className="btn primary lg magnetic" data-mag="0.3">Send</button>
              <span className="cform-note" id="cformNote"></span>
            </div>
          </form>
        </div>
      </div>

      <nav className="nav">
        <Link className="brand" to="/">
          <img className="navlogo" alt="Inloop" />
          <span className="wm"><b>inloop</b> <span>media</span></span>
        </Link>
        <div className="links">
          <div className="nav-item">
            <Link to="/#services" className="has">Services</Link>
            <div className="mega" role="menu" aria-label="Services">
              <div className="mega-head">
                <span className="mh-k">What we do</span>
                <Link className="mh-all" to="/#services">All services <span>→</span></Link>
              </div>
              <div className="mega-grid">
                <Link className="mega-link magnetic" data-mag="0.18" to="/branding" role="menuitem">
                  <span className="mega-ic">✦</span><span className="mega-tx"><b>Brand Strategy &amp; Identity</b><span>Identity systems that make you unmistakable.</span></span><span className="mega-arr">↗</span></Link>
                <Link className="mega-link magnetic" data-mag="0.18" to="/social-media" role="menuitem">
                  <span className="mega-ic">◎</span><span className="mega-tx"><b>Social Media Management</b><span>Always-on content &amp; community that compounds.</span></span><span className="mega-arr">↗</span></Link>
                <Link className="mega-link magnetic" data-mag="0.18" to="/website" role="menuitem">
                  <span className="mega-ic">⬡</span><span className="mega-tx"><b>Website Design &amp; Development</b><span>Sites &amp; funnels engineered to convert.</span></span><span className="mega-arr">↗</span></Link>
                <Link className="mega-link magnetic" data-mag="0.18" to="/influencer" role="menuitem">
                  <span className="mega-ic">◈</span><span className="mega-tx"><b>Influencer Marketing</b><span>Creator partnerships matched to real intent.</span></span><span className="mega-arr">↗</span></Link>
                <Link className="mega-link magnetic" data-mag="0.18" to="/performance" role="menuitem">
                  <span className="mega-ic">▲</span><span className="mega-tx"><b>Performance &amp; Paid Media</b><span>Campaigns engineered around ROAS, not vanity.</span></span><span className="mega-arr">↗</span></Link>
                <Link className="mega-link magnetic" data-mag="0.18" to="/ai" role="menuitem">
                  <span className="mega-ic">∞</span><span className="mega-tx"><b>AI-Powered Creative</b><span>Automation &amp; models woven through every play.</span></span><span className="mega-arr">↗</span></Link>

                <Link className="mega-link magnetic" data-mag="0.18" to="/production" role="menuitem">
                  <span className="mega-ic">●</span><span className="mega-tx"><b>Creative Production</b><span>Shoots &amp; post that move at AI speed.</span></span><span className="mega-arr">↗</span></Link>
                <Link className="mega-link magnetic" data-mag="0.18" to="/pr" role="menuitem">
                  <span className="mega-ic">◐</span><span className="mega-tx"><b>Strategic PR &amp; Comms</b><span>Narratives that earn attention &amp; trust.</span></span><span className="mega-arr">↗</span></Link>
                <Link className="mega-link magnetic" data-mag="0.18" to="/creator-management" role="menuitem">
                  <span className="mega-ic">◇</span><span className="mega-tx"><b>Creator Management</b><span>End-to-end management for talent &amp; brands.</span></span><span className="mega-arr">↗</span></Link>
                <Link className="mega-link magnetic" data-mag="0.18" to="/content" role="menuitem">
                  <span className="mega-ic">✧</span><span className="mega-tx"><b>Content Creation</b><span>Story-first assets across every format.</span></span><span className="mega-arr">↗</span></Link>
                <Link className="mega-link magnetic" data-mag="0.18" to="/seo" role="menuitem">
                  <span className="mega-ic">⌖</span><span className="mega-tx"><b>SEO &amp; Search</b><span>Search visibility that compounds organically.</span></span><span className="mega-arr">↗</span></Link>
                <Link className="mega-link magnetic" data-mag="0.18" to="/ecommerce" role="menuitem">
                  <span className="mega-ic">▣</span><span className="mega-tx"><b>E-commerce Growth &amp; Optimization</b><span>Turn your store into a sales engine.</span></span><span className="mega-arr">↗</span></Link>
              </div>
            </div>
          </div>

          <Link to="/careers">Careers</Link>
          <Link to="/about">About</Link>
        </div>
        <Link to="/#contact" className="nav-cta magnetic" data-mag="0.3">Book a Free Call</Link>
        <button className="menu-btn" aria-label="Menu"><span></span></button>
      </nav>

      <Outlet />

      <footer className="footer">
        <div className="footer-grid">
          <div className="foot-brand">
            <div className="foot-logos"><img className="footlogo" alt="Inloop" /><span className="wm"><b>inloop</b> <span>media</span></span></div>
            <p className="foot-ams-note">An AMS Group company</p>
            <p className="foot-tag">AI-first marketing, built to fill your pipeline.</p>
          </div>
          <nav className="foot-col"><h4>Company</h4><Link to="/#services">Services</Link><Link to="/careers">Careers</Link><Link to="/about">About</Link><Link to="/#contact">Contact</Link></nav>
          <nav className="foot-col"><h4>Connect</h4><Link to="/#contact">Book a Free Call</Link><a href="https://www.instagram.com/inloop.media/" target="_blank" rel="noopener noreferrer">Instagram</a><a href="https://www.linkedin.com/company/inloop-media/posts/?feedView=all" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="#">hello@inloopmedia.com</a></nav>
        </div>
        <div className="foot-base"><span>© <span id="yr"></span> Inloop Media · An AMS Group company</span><span>Keeping brands in-loop with what matters.</span></div>
      </footer>
    </>
  );
}
