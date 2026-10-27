import { defineConfig } from "vite";

// base "./" means this works on any GitHub Pages URL,
// whatever you name the repo, without hardcoding the repo name.
export default defineConfig({
  base: "./",
  build: { outDir: "dist", sourcemap: false },
  server: { port: 3000, strictPort: true, open: true },
  preview: { port: 3000, strictPort: true },
});