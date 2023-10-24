import type { Easing } from "motion";

export const easeOutExpo = [0.16, 1, 0.3, 1] as Easing;

export const easeInOutExpo = [0.87, 0, 0.13, 1] as Easing;

// https://easings.net/#easeInOutCirc
export const easeInOutCubic = (x: number): number =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
