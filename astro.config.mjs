import { defineConfig } from "astro/config";
import pandacss from "@pandacss/astro";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://obscure.software",
  integrations: [pandacss(), solid()],
});
