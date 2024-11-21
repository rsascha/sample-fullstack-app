import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
// https://github.com/axe-me/vite-plugin-node/blob/main/README.md

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [tsconfigPaths()],
});
