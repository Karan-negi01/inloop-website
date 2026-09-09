import { Html, Head, Main, NextScript } from "next/document";
import { SEO, SITE_URL } from "@/lib/seo";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Static fallback meta — the app overwrites these per-route once it
            mounts (see Layout.jsx applySeo). This keeps non-JS crawlers and
            link-preview scrapers seeing sensible defaults either way. */}
        <meta name="description" content={SEO.home.description} />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:title" content={SEO.home.title} />
        <meta property="og:description" content={SEO.home.description} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Inloop Media" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.home.title} />
        <meta name="twitter:description" content={SEO.home.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="intro">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
