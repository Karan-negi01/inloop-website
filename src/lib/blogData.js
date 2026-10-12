// Blog articles, rendered by src/routes/Blog.jsx (listing) and
// src/routes/BlogPost.jsx (/blog/:slug). Each section is a heading plus
// paragraphs, with an optional bullet list or pull quote. Reading time is
// worked out from the word count, so it stays right as the copy changes.

export const CATEGORIES = ['All', 'SEO', 'Performance', 'AI', 'E-commerce', 'Branding', 'Content', 'Influencer'];

export const POSTS = [
  {
    slug: 'seo-compounding-growth',
    cat: 'SEO',
    title: 'How organic search compounds into predictable growth',
    excerpt: 'Why SEO is the channel that keeps paying you back, and how to build a foundation that compounds month over month.',
    date: '2026-09-28',
    img: '/images/blog/seo-compounding.webp',
    featured: true,
    takeaways: [
      'Paid traffic stops the day the budget does; organic rankings keep working.',
      'Fix the technical foundation before you publish more content.',
      'Build topic clusters around buyer intent, not isolated keywords.',
    ],
    sections: [
      {
        h: 'The channel that keeps paying you back',
        p: [
          'Most marketing spend is rented attention. The moment a campaign stops, so does the traffic. Search is different: a page that earns a top position keeps bringing visitors every day, without paying for each click.',
          'That is why SEO feels slow at first and then suddenly very fast. Each useful page adds to the authority of the whole site, which makes the next page easier to rank.',
        ],
      },
      {
        h: 'Start with the foundation, not the blog',
        p: ['Publishing more articles on a site Google struggles to crawl is like pouring water into a leaking bucket. Before content, we check:'],
        list: [
          'Page speed and Core Web Vitals on mobile',
          'Clean site structure and internal linking',
          'Indexing issues, duplicate pages and broken links',
          'Titles, meta descriptions and headings on key pages',
        ],
      },
      {
        h: 'Think in topics, not keywords',
        p: [
          'Ranking for one keyword is fragile. Owning a topic is durable. We map the questions a buyer asks on the way to a purchase, then build one strong pillar page with supporting articles around it, all linked together.',
          'Search engines read that cluster as expertise, and visitors find the next answer without leaving your site.',
        ],
        quote: 'Rank for the questions your buyers ask right before they buy, not the ones that only bring traffic.',
      },
      {
        h: 'Measure what actually compounds',
        p: [
          'Traffic is a vanity number on its own. We track rankings for buying-intent keywords, organic leads and revenue, and how many pages bring in visits each month. When that last number grows steadily, the compounding has started.',
        ],
      },
    ],
  },
  {
    slug: 'roas-first-paid-media',
    cat: 'Performance',
    title: 'The ROAS-first approach to paid media',
    excerpt: 'How we build Meta and Google campaigns around real return, not vanity metrics that look good in a deck.',
    date: '2026-09-18',
    img: '/images/blog/roas-first.webp',
    takeaways: [
      'Decide your break-even ROAS before you spend a rupee.',
      'Creative is now the biggest targeting lever on Meta.',
      'Scale budgets gradually and only on proven winners.',
    ],
    sections: [
      {
        h: 'Know your numbers before you launch',
        p: [
          'Every account we take on starts with one question: what return do you need to make money? Product margin, average order value and repeat purchase rate decide your break-even ROAS. Without it, a "4x ROAS" report means nothing.',
        ],
      },
      {
        h: 'Let creative do the targeting',
        p: ['Platforms have become very good at finding buyers on their own. What they need from you is a steady supply of strong creative. We test:'],
        list: [
          'Three to five hooks for every winning angle',
          'Short UGC-style videos next to polished brand ads',
          'Offer framing: bundles, free shipping, limited drops',
          'Static ads for retargeting, where clarity beats motion',
        ],
      },
      {
        h: 'Structure campaigns for learning',
        p: [
          'Too many small ad sets starve the algorithm of data. We keep structures simple, give each test enough budget to reach a result, and cut losers quickly.',
        ],
        quote: 'A clean account with fewer, stronger campaigns almost always beats a busy one.',
      },
      {
        h: 'Scale with discipline',
        p: [
          'When an ad set beats target ROAS for several days, we raise budgets in steady steps rather than doubling overnight. Sudden jumps reset learning and often crash performance. Slow, consistent scaling keeps return stable while spend grows.',
        ],
      },
    ],
  },
  {
    slug: 'ai-in-marketing-workflows',
    cat: 'AI',
    title: 'Weaving AI through every marketing workflow',
    excerpt: 'A practical look at where AI actually speeds up creative and strategy, without losing the human touch.',
    date: '2026-09-09',
    img: '/images/blog/ai-workflows.webp',
    takeaways: [
      'Use AI for volume and speed; keep humans on taste and judgement.',
      'The biggest wins are in research, variations and repetitive ops.',
      'A clear brand voice guide makes AI output usable on day one.',
    ],
    sections: [
      {
        h: 'Speed is the real advantage',
        p: [
          'AI rarely produces the final idea. What it does brilliantly is remove the slow parts: first drafts, research summaries, ad variations and resizing. That frees the team to spend time where it matters most, on the concept and the craft.',
        ],
      },
      {
        h: 'Where AI earns its place',
        list: [
          'Audience and competitor research in hours, not days',
          'Dozens of hook and headline variations for ad testing',
          'Storyboards and visual concepts before a shoot',
          'Lead follow-ups and reporting on autopilot',
        ],
        p: ['Across our projects, AI pays off most in four places:'],
      },
      {
        h: 'Taste is still human',
        p: [
          'Left alone, AI produces average work, because it is trained on the average. Every asset we ship is chosen, edited and approved by a person who knows the brand.',
        ],
        quote: 'AI gives you more options. Taste decides which one deserves to ship.',
      },
      {
        h: 'Start small and systemise',
        p: [
          'Pick one workflow that eats your team’s week, such as ad variations or monthly reports. Write down your brand voice and rules, build a repeatable prompt process around them, and measure the hours saved. Then move to the next one.',
        ],
      },
    ],
  },
  {
    slug: 'storefronts-into-revenue-engines',
    cat: 'E-commerce',
    title: 'Turning storefronts into revenue engines',
    excerpt: 'The conversion, product-page and retention levers that separate stores that sell from stores that stall.',
    date: '2026-08-30',
    img: '/images/blog/storefront-revenue.webp',
    takeaways: [
      'Most stores lose sales on mobile product pages, not on the homepage.',
      'Trust signals and clear delivery info lift conversion fast.',
      'Retention is the cheapest growth channel you already own.',
    ],
    sections: [
      {
        h: 'Fix the page where buying happens',
        p: [
          'Brands often obsess over the homepage, yet most shoppers land straight on a product page from an ad or search. That page has to answer every question in seconds, on a phone.',
        ],
        list: [
          'Sharp photos and a short video of the product in use',
          'Price, offer and delivery date visible without scrolling',
          'Reviews with photos placed near the add-to-cart button',
          'Clear return and payment options, including COD where relevant',
        ],
      },
      {
        h: 'Make checkout feel effortless',
        p: [
          'Every extra field and surprise cost loses buyers. Guest checkout, saved addresses, UPI and wallet options and an honest total upfront remove the most common reasons people abandon a cart.',
        ],
      },
      {
        h: 'Turn first orders into repeat customers',
        p: [
          'Getting a customer to buy again costs far less than winning a new one. Post-purchase emails and WhatsApp flows, replenishment reminders and a simple loyalty offer turn one-time buyers into a base that grows revenue every month.',
        ],
        quote: 'Acquisition fills the store. Retention is what makes it profitable.',
      },
    ],
  },
  {
    slug: 'identity-systems-unmistakable',
    cat: 'Branding',
    title: 'Identity systems that make you unmistakable',
    excerpt: 'What goes into a brand identity that stays consistent, confident and recognisable across every platform.',
    date: '2026-08-21',
    img: '/images/blog/identity-systems.webp',
    takeaways: [
      'A logo is one piece; the system is what people recognise.',
      'Strategy comes first: positioning shapes every visual choice.',
      'Guidelines are what keep a brand consistent as the team grows.',
    ],
    sections: [
      {
        h: 'A logo is not a brand',
        p: [
          'People rarely remember a logo in isolation. They recognise a feeling built from colour, type, photography style, tone of voice and how the brand shows up again and again. That combination is the identity system.',
        ],
      },
      {
        h: 'Strategy before visuals',
        p: [
          'Before any design work we define who the brand is for, what it stands against and how it should feel. Those answers turn subjective debates like "I like blue" into clear decisions.',
        ],
        quote: 'When the strategy is clear, the design choices start making themselves.',
      },
      {
        h: 'The pieces of a complete system',
        list: [
          'Logo suite for every size and background',
          'Colour palette with primary and supporting tones',
          'Typography for headlines, body copy and UI',
          'Photography, iconography and graphic elements',
          'Tone of voice with real do and don’t examples',
        ],
        p: ['A working identity system usually includes:'],
      },
      {
        h: 'Consistency is the multiplier',
        p: [
          'Recognition comes from repetition. Clear guidelines and ready-to-use templates let every designer, agency and team member create on-brand work without starting from scratch.',
        ],
      },
    ],
  },
  {
    slug: 'always-on-content-engine',
    cat: 'Content',
    title: 'Building an always-on content engine',
    excerpt: 'How to plan social content that compounds attention and community instead of chasing one-off viral moments.',
    date: '2026-08-12',
    img: '/images/blog/content-engine.webp',
    takeaways: [
      'Consistency beats virality for long-term growth.',
      'Content pillars stop you starting from a blank page every week.',
      'One shoot day can feed a month of posts if you plan for it.',
    ],
    sections: [
      {
        h: 'Stop chasing viral',
        p: [
          'A viral post brings a spike and then silence. Brands that win on social show up with useful, recognisable content week after week until the audience starts to expect it.',
        ],
      },
      {
        h: 'Build on content pillars',
        p: ['We give every brand three to five pillars, so the calendar never starts from zero. A typical mix:'],
        list: [
          'Education: tips and answers to real customer questions',
          'Proof: reviews, results and behind-the-scenes',
          'Culture: the people, values and personality of the brand',
          'Offers: launches and promotions, used sparingly',
        ],
      },
      {
        h: 'Batch production, then repurpose',
        p: [
          'One well-planned shoot day can produce reels, carousels, stories and ad creatives for weeks. Long videos become short clips; a strong carousel becomes a reel script.',
        ],
        quote: 'Plan once, shoot once and publish all month.',
      },
      {
        h: 'Engagement is part of the content',
        p: [
          'Replies, comments and DMs are where followers turn into a community. Set time aside every day to respond, and feed the best questions back into next month’s calendar.',
        ],
      },
    ],
  },
  {
    slug: 'creators-who-convert',
    cat: 'Influencer',
    title: 'Choosing creators who actually convert',
    excerpt: 'Follower counts don’t sell products. Here is how we pick creators whose audiences trust them enough to buy.',
    date: '2026-08-03',
    img: '/images/blog/creators-convert.webp',
    takeaways: [
      'Audience fit and trust matter more than follower count.',
      'Micro creators often deliver better cost per sale.',
      'Give creators a brief, not a script.',
    ],
    sections: [
      {
        h: 'Reach is not the same as influence',
        p: [
          'A creator with a million followers and a disengaged audience will sell less than one with twenty thousand loyal fans. We look at comment quality, saves and shares, and whether the audience matches your buyer.',
        ],
      },
      {
        h: 'What we check before shortlisting',
        list: [
          'Audience location, age and interests against your customer profile',
          'Real engagement versus bought followers',
          'Past brand collaborations and how they performed',
          'Whether their content style fits your brand',
        ],
        p: ['Before a creator makes the list, we check:'],
      },
      {
        h: 'Brief, don’t script',
        p: [
          'Audiences can tell when a creator reads a script. Give them the key message, the must-say points and the offer, then let them tell it their way.',
        ],
        quote: 'The creator knows their audience better than any brand ever will.',
      },
      {
        h: 'Track sales, not likes',
        p: [
          'Unique codes, tracked links and whitelisted ads show which creators actually drive revenue. The winners become long-term partners, and their best content becomes your next round of paid ads.',
        ],
      },
    ],
  },
];

export function readMinutes(post) {
  const words = [post.title, post.excerpt, ...post.takeaways,
    ...post.sections.flatMap((s) => [s.h, ...(s.p || []), ...(s.list || []), s.quote || ''])]
    .join(' ').split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}

export function formatDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function postBySlug(slug) {
  return POSTS.find((p) => p.slug === slug);
}
