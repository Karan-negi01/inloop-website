import ServicePage from '@/components/ServicePage';
import AiVideoGrid from '@/components/AiVideoGrid';
import { SERVICES } from '@/lib/serviceData';

export default function Ai() {
  return (
    <ServicePage data={SERVICES.ai}>
      <section className="sec aivid ai-work" id="ai-work">
        <div className="sec-head reveal-up">
          <div className="kick2">AI video work</div>
          <h2>Scroll-stopping ads, <span className="grad">made with AI</span></h2>
          <p className="sec-sub">Concept ads across six industries — press play to watch each one run from hook to call-to-action.</p>
        </div>
        <AiVideoGrid />
      </section>

      <section className="sec ai-pipe">
        <div className="sec-head reveal-up">
          <div className="kick2">The pipeline</div>
          <h2>From prompt to <span className="grad">premiere</span></h2>
          <p className="sec-sub">Every AI ad runs through the same five stages — humans on the craft, AI on the heavy lifting.</p>
        </div>
        <div className="pipe-track anim-rise" aria-hidden="true"><i></i><b></b></div>
        <ol className="pipe-grid">
          <li className="pipe-step anim-rise"><span className="pipe-n">01</span><h3>Brief &amp; script</h3><p>Hooks, angles and scripts written for the platform and the buyer.</p><span className="pipe-tag">Human + AI</span></li>
          <li className="pipe-step anim-rise" data-d="1"><span className="pipe-n">02</span><h3>Storyboard</h3><p>Scene-by-scene frames and prompts that lock the look before generation.</p><span className="pipe-tag">AI-assisted</span></li>
          <li className="pipe-step anim-rise" data-d="2"><span className="pipe-n">03</span><h3>Generate</h3><p>Footage, product shots and voice produced with best-in-class AI models.</p><span className="pipe-tag">AI</span></li>
          <li className="pipe-step anim-rise" data-d="3"><span className="pipe-n">04</span><h3>Edit &amp; sound</h3><p>Pacing, captions, music and brand polish by our editors.</p><span className="pipe-tag">Human</span></li>
          <li className="pipe-step anim-rise" data-d="4"><span className="pipe-n">05</span><h3>Launch &amp; test</h3><p>Variations shipped to every feed, then scaled on what performs.</p><span className="pipe-tag">Human + AI</span></li>
        </ol>
      </section>
    </ServicePage>
  );
}
