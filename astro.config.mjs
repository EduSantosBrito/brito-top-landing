import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import image from "@astrojs/image";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
