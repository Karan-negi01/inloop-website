import "@/styles/globals.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  window.gsap = gsap;
  window.ScrollTrigger = ScrollTrigger;
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
