import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    // Target modern browsers — smaller output
    target: "es2020",

    // Increase chunk warning limit
    chunkSizeWarningLimit: 1000,

    // Minify with esbuild (faster than terser, good enough)
    minify: "esbuild",

    // CSS code splitting
    cssCodeSplit: true,

    // Rollup options for manual chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Grouping all core vendors into one chunk to reduce request overhead on HTTP/1.1
          "vendor": [
            "react",
            "react-dom",
            "react-router-dom",
            "framer-motion",
            "lucide-react",
            "react-helmet-async",
            "clsx",
            "tailwind-merge",
            "class-variance-authority"
          ],
        },

        // Asset file naming
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name ?? "";
          if (/\.(png|jpe?g|gif|svg|webp|avif)$/i.test(name)) {
            return "assets/images/[name]-[hash][extname]";
          }
          if (/\.css$/i.test(name)) {
            return "assets/css/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },

        // Chunk file naming
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },

  // Optimize deps pre-bundling
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "lucide-react",
    ],
  },
});
