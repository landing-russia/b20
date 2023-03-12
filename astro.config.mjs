import { defineConfig } from "astro/config"
import image from "@astrojs/image"
import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"

export default defineConfig({
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
})
