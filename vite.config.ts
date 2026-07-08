// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact, tailwindcss,
// tsConfigPaths, nitro (build-only), componentTagger (dev-only), VITE_* env injection,
// @ path alias, React/TanStack dedupe, error logger plugins, and sandbox detection.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When building inside the Lovable sandbox, the wrapper forces the Cloudflare
// preset (needed for the hosted preview). Outside the sandbox (e.g. WSL,
// CI, your laptop), we override to Nitro's `static` preset so `npm run build`
// prerenders every route to plain HTML/CSS/JS you can upload to Hostinger.
const isLovableSandbox =
  process.env.LOVABLE_SANDBOX === "1" || process.env.LOVABLE_BUILD === "1";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  ...(isLovableSandbox
    ? {}
    : {
        nitro: {
          preset: "static",
          output: {
            dir: "dist",
            publicDir: "dist",
          },
          prerender: {
            crawlLinks: true,
            failOnError: false,
            routes: ["/"],
          },
        },
      }),
});
