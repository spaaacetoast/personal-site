import Lenis from "@studio-freight/lenis";
import "@styles/lenis.css";
import { onMount } from "solid-js";
import { lenis } from "src/constants/lenis";

// initializing lenis in astro + bun makes the server crash. so lets initialize it in solidjs

export const SmoothScroll = () => {
  onMount(() => {
    function raf(time: DOMHighResTimeStamp) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return null;
};
