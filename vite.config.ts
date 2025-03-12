import react from "@vitejs/plugin-react-swc";
import { config } from "dotenv";
import path from "path";
import { defineConfig } from "vite";

config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"),
    },
  },
});
