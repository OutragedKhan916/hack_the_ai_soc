import { defineConfig } from "vite";

// base "./" + hash routing means this works on any GitHub Pages URL,
// whatever you name the repo.
export default defineConfig({
  base: "./",
  build: { outDir: "dist", sourcemap: false },
  server: { port: 3000, strictPort: true, open: true },
  preview: { port: 3000, strictPort: true },
});
