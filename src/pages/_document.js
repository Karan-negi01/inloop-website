import { Html, Head, Main, NextScript } from "next/document";
import { SITE_URL } from "@/lib/seo";

// Organization details for search engines (knowledge panel, logo, contact).
const ORG = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Inloop Media",
  url: SITE_URL,
  logo: `${SITE_URL}/images/hero-logo.webp`,
  image: `${SITE_URL}/og.jpg`,
  email: "hello@inloopmedia.com",
  telephone: "+91-92112-25929",
  address: { "@type": "PostalAddress", addressLocality: "Noida", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  sameAs: ["https://www.instagram.com/inloop.media/", "https://www.linkedin.com/company/inloop-media/"],
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Per-page title, description and share tags are set in
            src/pages/[[...slug]].js, and kept in sync on client-side
            navigation by Layout.jsx applySeo. */}
        <meta name="theme-color" content="#080808" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG) }} />
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
