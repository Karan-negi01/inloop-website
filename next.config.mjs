/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  // Next 16's dev-mode "static indicator" HMR handler throws on a direct
  // (deep-link) load of any non-root path, which aborts client bootstrap
  // before our client-only router app ever mounts. Disabling it avoids
  // that crash; it has no effect on production builds.
  devIndicators: false,
};

export default nextConfig;
