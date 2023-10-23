import Lenis from "@studio-freight/lenis";
import "@styles/lenis.css";
import { onMount } from "solid-js";

// silly hack to get lenis to work with astro

export const SmoothScroll = () => {
  onMount(() => {
    const lenis = new Lenis();

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return null;
};
