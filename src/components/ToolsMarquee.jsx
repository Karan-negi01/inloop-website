// Icons come live from the Simple Icons CDN (cdn.simpleicons.org/<slug>/<hex>),
// their official hosted delivery service — nothing drawn/fabricated here.
// A handful of newer/smaller tools (Stability AI, Runway, Midjourney, HeyGen,
// xAI, Ahrefs, Slack) aren't in that set yet; the broken-image fallback below
// just hides the icon and keeps the text label for those.

const ROW_1 = [
  { name: 'Next.js', slug: 'nextdotjs' },
  { name: 'React', slug: 'react' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'Tailwind CSS', slug: 'tailwindcss' },
  { name: 'Three.js', slug: 'threedotjs' },
  { name: 'Vercel', slug: 'vercel' },
  { name: 'Framer', slug: 'framer' },
  { name: 'Figma', slug: 'figma' },
  { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'MongoDB', slug: 'mongodb' },
  { name: 'Supabase', slug: 'supabase' },
  { name: 'Webflow', slug: 'webflow' },
  { name: 'WordPress', slug: 'wordpress' },
  { name: 'Shopify', slug: 'shopify' },
];

const ROW_2 = [
  { name: 'OpenAI', slug: 'openai' },
  { name: 'Anthropic', slug: 'anthropic' },
  { name: 'Google Gemini', slug: 'googlegemini' },
  { name: 'Perplexity', slug: 'perplexity' },
  { name: 'Hugging Face', slug: 'huggingface' },
  { name: 'Stability AI', slug: 'stabilityai' },
  { name: 'ElevenLabs', slug: 'elevenlabs' },
  { name: 'Mistral AI', slug: 'mistralai' },
  { name: 'xAI (Grok)', slug: 'xai' },
  { name: 'Meta AI', slug: 'meta' },
  { name: 'Runway', slug: 'runway' },
  { name: 'Midjourney', slug: 'midjourney' },
  { name: 'HeyGen', slug: 'heygen' },
  { name: 'Suno', slug: 'suno' },
  { name: 'Replicate', slug: 'replicate' },
];

const ROW_3 = [
  { name: 'Make', slug: 'make' },
  { name: 'Zapier', slug: 'zapier' },
  { name: 'n8n', slug: 'n8n' },
  { name: 'HubSpot', slug: 'hubspot' },
  { name: 'Mailchimp', slug: 'mailchimp' },
  { name: 'Stripe', slug: 'stripe' },
  { name: 'Google Analytics', slug: 'googleanalytics' },
  { name: 'Meta Ads', slug: 'meta' },
  { name: 'Ahrefs', slug: 'ahrefs' },
  { name: 'Semrush', slug: 'semrush' },
  { name: 'Notion', slug: 'notion' },
  { name: 'Slack', slug: 'slack' },
];

function ToolItem({ name, slug }) {
  return (
    <div className="tm-item">
      <span className="tm-item-icon">
        <img
          src={`https://cdn.simpleicons.org/${slug}/ffffff`}
          alt=""
          aria-hidden="true"
          width={30}
          height={30}
          loading="lazy"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </span>
      <span className="tm-item-name">{name}</span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false, speed = 35 }) {
  const duplicated = [...items, ...items];
  return (
    <div className="tm-row">
      <div className={`tm-row-track${reverse ? ' rev' : ''}`} style={{ animationDuration: `${speed}s` }}>
        {duplicated.map((tool, i) => (
          <ToolItem key={`${tool.slug}-${i}`} {...tool} />
        ))}
      </div>
    </div>
  );
}

export default function ToolsMarquee() {
  return (
    <section className="sec tm" id="tools">
      <span className="tm-glow" aria-hidden="true"></span>
      <div className="sec-head reveal-up">
        <div className="kick2">The stack</div>
        <h2>Tools we <span className="grad">work with</span></h2>
        <p className="sec-sub">Powered by the industry&apos;s most trusted platforms — built for speed, scale and results.</p>
      </div>

      <div className="tm-rows">
        <span className="tm-fade left" aria-hidden="true"></span>
        <span className="tm-fade right" aria-hidden="true"></span>
        <MarqueeRow items={ROW_1} speed={40} />
        <MarqueeRow items={ROW_2} reverse speed={45} />
        <MarqueeRow items={ROW_3} speed={38} />
      </div>
    </section>
  );
}
