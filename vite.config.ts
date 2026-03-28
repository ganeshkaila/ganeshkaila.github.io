import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Set by GitHub Actions: "/" for user/org site (repo *.github.io), else "/<repo>/"
const base = process.env.VITE_BASE_PATH ?? "/";

export default defineConfig({
  base,
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        blogIndex: resolve(__dirname, "blog/index.html"),
        blogPost: resolve(__dirname, "blog/post.html"),
      },
    },
  },
});
