import { defineConfig } from "@pandacss/dev";
import { globalCss } from "./src/styles/global-styles";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: [
		"./src/**/*.{ts,tsx,js,jsx,astro}",
		"./pages/**/*.{ts,tsx,js,jsx,astro}",
	],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			tokens: {
				fonts: {
					nunito: { value: "'Nunito Sans Variable', sans-serif" },
					"noto-mono": { value: "'Noto Sans Mono Variable', monospace" },
				},
			},
		},
	},

	globalCss,

	// The output directory for your css system
	outdir: "styled-system",

	jsxFramework: "solid",
	jsxFactory: "panda",
});
