import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import prettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    plugins: { js },
    languageOptions: { globals: globals.browser },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
  pluginVue.configs["flat/essential"],
  prettier,
]);
