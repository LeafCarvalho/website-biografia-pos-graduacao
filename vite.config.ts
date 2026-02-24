import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    port: 4321,
    open: true,
  },

  build: {
    sourcemap: false,
    outDir: "dist",
    emptyOutDir: true,
  },

  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
});
