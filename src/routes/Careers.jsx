import { useState } from 'react';
import { Link } from 'react-router-dom';

const CRAFTS = ['Strategists', 'Designers', 'Editors', 'Copywriters', 'Performance marketers', 'Developers', 'Creator managers', 'AI tinkerers'];

const PRINCIPLES = [
  ['Momentum over marketing', 'We don’t ship campaigns for the sake of it. Every piece of work has to keep a brand moving forward.'],
  ['Taste over tools', 'AI runs through everything we do, but it never replaces judgement. The final call is always a human with taste.'],
  ['Own it, end to end', 'No hand-off chains. You hold the brief, the decisions and the result, with seniors beside you, not above you.'],
  ['Full-loop thinking', 'From first impression to final conversion, we think about the whole journey, not just our slice of it.'],
  ['Ship, learn, repeat', 'We put work out, read the numbers honestly and make the next version better. Fast, but never careless.'],
];

const TEAMS = [
  { name: 'Strategy', img: '/images/careers/team-strategy.webp', line: 'Find the angle that makes a brand impossible to ignore.', does: ['Brand positioning', 'Market research', 'Growth roadmaps'] },
  { name: 'Design & Brand', img: '/images/careers/team-design.webp', line: 'Build identities and creatives that look as good as they perform.', does: ['Visual identity', 'Campaign creatives', 'UI design'] },
  { name: 'Content & Production', img: '/images/careers/team-production.webp', line: 'Write, shoot and edit the stories that stop the scroll.', does: ['Short-form video', 'Copywriting', 'Shoots & editing'] },
  { name: 'Performance', img: '/images/careers/team-performance.webp', line: 'Turn ad spend into measurable, compounding growth.', does: ['Meta & Google Ads', 'Funnels', 'Analytics'] },
  { name: 'Tech & AI', img: '/images/careers/team-tech.webp', line: 'Ship fast websites, automations and AI workflows.', does: ['Next.js & Shopify', 'Automation', 'AI pipelines'] },
  { name: 'Influencer & Creators', img: '/images/careers/team-creators.webp', line: 'Match brands with creators their audience already trusts.', does: ['Creator discovery', 'Campaign management', 'UGC'] },
];

// Placeholder openings until the real ones are confirmed.
const JOBS = [
  { title: 'Performance Marketing Executive', team: 'Performance', type: 'Full-time', loc: 'Delhi · Hybrid', line: 'Plan, launch and scale Meta and Google campaigns for fast-growing D2C brands.', tags: ['Meta Ads', 'Google Ads', '1–3 yrs'] },
  { title: 'Graphic Designer', team: 'Design & Brand', type: 'Full-time', loc: 'Delhi · On-site', line: 'Craft social creatives, ad assets and brand systems that hold a premium bar.', tags: ['Figma', 'Adobe CC', '1–3 yrs'] },
  { title: 'Video Editor', team: 'Content & Production', type: 'Full-time', loc: 'Delhi · On-site', line: 'Cut short-form reels and ad films that stop the scroll and drive action.', tags: ['Premiere Pro', 'After Effects', 'Reels'] },
  { title: 'Social Media Manager', team: 'Strategy', type: 'Full-time', loc: 'Delhi · Hybrid', line: 'Own content calendars, community and growth across multiple brand accounts.', tags: ['Content strategy', 'Analytics', '2–4 yrs'] },
];

const PERKS = [
  ['AI-first workflow', 'The best tools, woven into every project.', <path key="p" d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />],
  ['Senior-led', 'Learn beside operators who own outcomes.', <path key="p" d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4l-5.2 2.7 1-5.8L3.5 9.2l5.9-.9z" />],
  ['Real ownership', 'Accounts, decisions and impact from day one.', <path key="p" d="M4 20V10l8-6 8 6v10h-5v-6H9v6z" />],
  ['Remote-friendly', 'Work from where you do your best thinking.', <path key="p" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />],
  ['Growth budget', 'Time and money for courses, tools and craft.', <path key="p" d="M4 19l6-6 4 4 6-8M15 9h5v5" />],
  ['Work that’s seen', 'Real brands, real launches, your name on it.', <path key="p" d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />],
];

const STEPS = [
  ['Apply', 'Send your profile and the work you’re proudest of.'],
  ['Intro call', 'A short, honest chat about you and the role.'],
  ['Craft task', 'A short brief, close to the real job.'],
  ['Meet the founders', 'Talk ambition, culture and what’s next.'],
];

export default function Careers() {
  const [team, setTeam] = useState(0);
  const active = TEAMS[team];

  return (
<div id="svp"><main className="route cr" data-route="careers">

  <header className="cr-hero">
    <div className="cr-hero-copy">
      <div className="reveal d1"><span className="sp-eyebrow"><span className="dot"></span>Careers &middot; Inloop Media</span></div>
      <h1 className="reveal d2 pt-fade">Do the best work<br />of your career.<br /><span className="cr-silver">In the loop.</span></h1>
      <p className="reveal d3 pt-fade cr-lede">A lean, senior-led team building growth for ambitious brands, with AI in every workflow and taste in every decision.</p>
      <div className="reveal d4 pt-fade cr-cta">
        <a className="btn primary lg magnetic" data-mag="0.3" href="#openings">See open roles</a>
        <Link className="btn ghost magnetic" data-mag="0.3" to="/#contact">Pitch yourself <span className="arr">&#8599;</span></Link>
      </div>
      <dl className="reveal d4 pt-fade cr-meta">
        <div><dt>Base</dt><dd>Delhi &amp; remote</dd></div>
        <div><dt>Team</dt><dd>Senior-led</dd></div>
        <div><dt>Workflow</dt><dd>AI-first</dd></div>
      </dl>
    </div>
    <div className="cr-hero-art reveal d3" aria-hidden="true">
      <figure className="cr-ph cr-ph-a" data-noview><img src="/images/careers/hero-studio.webp" alt="" /></figure>
      <figure className="cr-ph cr-ph-b" data-noview><img src="/images/careers/hero-night.webp" alt="" /></figure>
      <svg className="cr-ring" viewBox="0 0 200 200"><circle cx="100" cy="100" r="96" /></svg>
    </div>
  </header>

  <div className="cr-marquee" aria-label="Crafts we hire for">
    <div className="cr-marquee-track">
      {[0, 1].map((k) => (
        <span className="cr-marquee-set" key={k} aria-hidden={k === 1 ? 'true' : undefined}>
          {CRAFTS.map((c) => <span key={c}>{c}<i>✦</i></span>)}
        </span>
      ))}
    </div>
  </div>

  <section className="sec cr-principles">
    <div className="cr-head reveal-up">
      <div className="kick2">How we work</div>
      <h2>Five things we <span className="grad">won’t compromise on</span></h2>
    </div>
    <ol className="cr-plist">
      {PRINCIPLES.map(([h, p], i) => (
        <li className="cr-prow anim-rise" key={h} tabIndex={0}>
          <span className="cr-pn">0{i + 1}</span>
          <h3>{h}</h3>
          <p>{p}</p>
          <span className="cr-parr" aria-hidden="true">&#8599;</span>
        </li>
      ))}
    </ol>
  </section>

  <section className="sec cr-teams">
    <div className="cr-head reveal-up">
      <div className="kick2">Find your team</div>
      <h2>Where you could <span className="grad">fit in</span></h2>
    </div>
    <div className="cr-teams-grid">
      <ul className="cr-tlist" role="tablist" aria-label="Teams">
        {TEAMS.map((t, i) => (
          <li key={t.name}>
            <button type="button" role="tab" aria-selected={i === team} className={i === team ? 'on' : ''}
              onMouseEnter={() => setTeam(i)} onFocus={() => setTeam(i)} onClick={() => setTeam(i)}>
              <span className="cr-tn">0{i + 1}</span>{t.name}<span className="cr-tarr" aria-hidden="true">&rarr;</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="cr-tpanel" role="tabpanel" data-noview>
        <div className="cr-tphoto">
          {TEAMS.map((t, i) => <img key={t.name} src={t.img} alt="" className={i === team ? 'on' : ''} loading="lazy" />)}
        </div>
        <div className="cr-tbody" key={active.name}>
          <h3>{active.name}</h3>
          <p>{active.line}</p>
          <ul className="cr-tags">{active.does.map((d) => <li key={d}>{d}</li>)}</ul>
        </div>
      </div>
    </div>
  </section>

  <section className="sec cr-open" id="openings">
    <div className="cr-open-head">
      <div className="reveal-up">
        <div className="kick2">Open roles</div>
        <h2>Find your <span className="grad">seat</span></h2>
      </div>
      <div className="reveal-up" data-d="1">
        <p>{JOBS.length} roles open right now. Apply directly, or follow us on LinkedIn for new openings as they go live.</p>
        <a className="cr-inline" href="https://www.linkedin.com/company/inloop-media/jobs/" target="_blank" rel="noopener noreferrer">All openings on LinkedIn <span>&#8599;</span></a>
      </div>
    </div>
    <div className="cr-jobs">
      {JOBS.map((j) => (
        <article className="cr-job anim-rise" key={j.title}>
          <div className="cr-job-top"><span className="cr-job-team">{j.team}</span><span className="cr-job-type">{j.type}</span></div>
          <h3>{j.title}</h3>
          <p>{j.line}</p>
          <ul className="cr-job-tags">{j.tags.map((t) => <li key={t}>{t}</li>)}</ul>
          <div className="cr-job-foot">
            <span className="cr-job-loc"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>{j.loc}</span>
            <a className="cr-job-apply" href={`mailto:hello@inloopmedia.com?subject=${encodeURIComponent(`Application: ${j.title}`)}`}>Apply now <span>&#8599;</span></a>
          </div>
        </article>
      ))}
    </div>
  </section>

  <section className="sec cr-perks">
    <div className="cr-head reveal-up">
      <div className="kick2">Why Inloop</div>
      <h2>What you get <span className="grad">working here</span></h2>
    </div>
    <div className="cr-bento">
      {PERKS.map(([h, p, icon]) => (
        <div className="cr-perk anim-rise" key={h}>
          <svg viewBox="0 0 24 24" aria-hidden="true">{icon}</svg>
          <h3>{h}</h3>
          <p>{p}</p>
        </div>
      ))}
    </div>
  </section>

  <section className="sec cr-process">
    <div className="cr-head reveal-up">
      <div className="kick2">Hiring process</div>
      <h2>Four steps. <span className="grad">No black holes.</span></h2>
    </div>
    <ol className="cr-steps">
      {STEPS.map(([h, p], i) => (
        <li className="cr-step anim-rise" key={h}>
          <span className="cr-sn">{i + 1}</span>
          <h3>{h}</h3>
          <p>{p}</p>
        </li>
      ))}
    </ol>
  </section>

  <section className="sec cr-pitch">
    <div className="cr-pitch-card reveal-up">
      <span className="cr-pitch-glow" aria-hidden="true"></span>
      <div className="kick2">Don’t see your role?</div>
      <h2>Pitch yourself <span className="cr-silver">anyway.</span></h2>
      <p>Tell us what you’re great at and how you’d help brands grow. We read every message.</p>
      <div className="cr-pitch-cta">
        <Link className="btn primary lg magnetic cta-lux" data-mag="0.3" to="/#contact">Pitch yourself <span className="arr">&#8599;</span></Link>
        <a className="btn ghost magnetic" data-mag="0.3" href="mailto:hello@inloopmedia.com?subject=Careers%20at%20Inloop">hello@inloopmedia.com</a>
      </div>
    </div>
  </section>

  </main></div>  );
}
