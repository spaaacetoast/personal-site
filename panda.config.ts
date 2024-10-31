import { defineConfig } from "@pandacss/dev";
import { globalCss } from "./src/styles/global-styles";
import { createPreset } from "@park-ui/panda-preset";

export default defineConfig({
	preflight: true,
	presets: [
		"@pandacss/preset-base",
		createPreset({
			accentColor: "indigo",
			grayColor: "sand",
			borderRadius: "xl",
			additionalColors: ["*"],
		}),
	],

	include: ["./src/**/*.{ts,tsx,js,jsx,astro}"],

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

	outdir: "styled-system",

	jsxFramework: "solid",
	jsxFactory: "panda",
});
