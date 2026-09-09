import dynamic from 'next/dynamic';

// The whole site is a client-rendered SPA driven by react-router (canvas
// background, GSAP, custom cursor — all DOM/window dependent), so this
// catch-all page just mounts it with SSR disabled and lets react-router
// resolve whichever path the browser is actually on.
//
// getServerSideProps forces every path through the server on each request
// instead of Next's automatic static optimization, which otherwise only
// really understands the bare "/" match for an optional catch-all with no
// getStaticPaths and leaves deep-linked sub-paths (e.g. /branding loaded
// directly) unresolved client-side.
const App = dynamic(() => import('@/app/App'), { ssr: false });

export default function CatchAll() {
  return <App />;
}

export async function getServerSideProps() {
  return { props: {} };
}
