import Lenis from "@studio-freight/lenis";
import { isServer } from "solid-js/web";
import { easeInOutCubic } from "./easing";

export const lenis = isServer
  ? null
  : new Lenis({
      lerp: 0.1,
      easing: easeInOutCubic,
    });
