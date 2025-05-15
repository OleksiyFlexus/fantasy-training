import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import vueJsx from "@vitejs/plugin-vue-jsx";
import svgLoader from "vite-svg-loader";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    svgLoader(),
    vueDevTools(),
    Components({
      dirs: ["./src/components", "./src/pages", "./src/layouts"],
      extensions: ["vue"],
      deep: true,
      dts: true,
    }),
    AutoImport({
      imports: [
        "vue",
        {
          "firebase/database": ["getDatabase", "set", "get", "update", "child"],
          "firebase/firestore": ["getFirestore", "doc", "getDoc", "setDoc"],
          "vue-router": ["createRouter", "createWebHistory", "useRoute"],
        },
        { "@/firebase": ["database"] },
      ],
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
