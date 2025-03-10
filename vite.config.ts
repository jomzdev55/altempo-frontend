import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Components": path.resolve(__dirname, "src/Components"),
      "@Assets": path.resolve(__dirname, "src/Assets"),
      "@Interfaces": path.resolve(__dirname, "src/Interfaces"),
    },
  },
});
