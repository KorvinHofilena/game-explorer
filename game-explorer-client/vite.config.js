import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/game-explorer/",
  plugins: [react()],
});
