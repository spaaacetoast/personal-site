import { defineConfig } from "astro/config";
import pandacss from "@pandacss/astro";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://spaaacetoast.github.io",
  base: "/personal-site",
  integrations: [pandacss(), solid()],
});
