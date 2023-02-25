import { defineConfig } from "astro/config"
import image from "@astrojs/image"
import mdx from "@astrojs/mdx"

// https://astro.build/config
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    tailwind({ config: { applyBaseStyles: false } }),
  ],
})
