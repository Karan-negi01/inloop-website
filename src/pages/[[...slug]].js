import dynamic from 'next/dynamic';
import Head from 'next/head';
import { SEO, SITE_URL, seoForRoute } from '@/lib/seo';
import { postBySlug } from '@/lib/blogData';

// The whole site is a client-rendered SPA driven by react-router (canvas
// background, GSAP, custom cursor — all DOM/window dependent), so this
// catch-all page just mounts it with SSR disabled and lets react-router
// resolve whichever path the browser is actually on.
//
// getServerSideProps forces every path through the server on each request
// instead of Next's automatic static optimization, which otherwise only
// really understands the bare "/" match for an optional catch-all with no
// getStaticPaths and leaves deep-linked sub-paths (e.g. /branding loaded
// directly) unresolved client-side. It also works out each URL's title,
// description and share image, so crawlers and link previews (WhatsApp,
// LinkedIn…) see the right page before any JavaScript runs.
const App = dynamic(() => import('@/app/App'), { ssr: false });

export default function CatchAll({ meta }) {
  const { title, description, url, image, type } = meta;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content="Inloop Media" />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content="Inloop Media" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <App />
    </>
  );
}

export async function getServerSideProps({ params, res }) {
  const route = (params?.slug || []).join('/') || 'home';
  const post = route.startsWith('blog/') ? postBySlug(route.slice(5)) : null;
  const known = Boolean(SEO[route] || post);
  // unknown paths still render the app (react-router shows the homepage),
  // but answer 404 so search engines don't index them as real pages
  if (!known) res.statusCode = 404;

  const { title, description } = seoForRoute(known ? route : 'home');
  return {
    props: {
      meta: {
        title,
        description,
        url: `${SITE_URL}${route === 'home' ? '/' : `/${route}`}`,
        image: `${SITE_URL}${post ? post.img : '/og.jpg'}`,
        type: post ? 'article' : 'website',
      },
    },
  };
}
