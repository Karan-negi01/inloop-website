/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  // Next 16's dev-mode "static indicator" HMR handler throws on a direct
  // (deep-link) load of any non-root path, which aborts client bootstrap
  // before our client-only router app ever mounts. Disabling it avoids
  // that crash; it has no effect on production builds.
  devIndicators: false,
  // URLs from the previous inloopmedia.com site, so old links and search
  // rankings land on the matching section of this one
  async redirects() {
    return [
      { source: '/case-studies', destination: '/#work', permanent: true },
      { source: '/case-studies/:slug*', destination: '/#work', permanent: true },
      { source: '/pro-suite', destination: '/#pricing', permanent: true },
    ];
  },
};

export default nextConfig;
