import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "17.0"  // Reactの特定バージョンを指定（例: 17.0）
      },
    },
    rules: {
      "id-length": ["error", { "min": 2, "max": 12, "exceptions": ["languageOptions"] }],
      "no-unused-vars": "error",
      "no-alert": "error"
    }
  }
];
