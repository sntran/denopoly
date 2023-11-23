import { defineConfig } from "$fresh/server.ts";
import tailwindPlugin from "https://deno.land/x/fresh_tailwind@v0.5.3/mod.ts";
import autoprefixer from "https://esm.sh/autoprefixer@10.4.16";

export default defineConfig({
  plugins: [
    tailwindPlugin({
      plugins: [
        autoprefixer(),
      ]
    }),
  ],
});
